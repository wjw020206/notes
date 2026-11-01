# SSH 反向隧道部署总结

**目标**：把白嫖服务器（仅开放 22 端口出站）上的服务，通过阿里云公网服务器对外暴露。

**架构**：白嫖机主动向阿里云发起 SSH 连接，请求阿里云在指定端口监听，流量经隧道回传到白嫖机的本地服务。

```
外部用户 → 阿里云:18080 → (SSH 隧道) → 白嫖机:8080 → 白嫖机上的服务
```

**环境**：
- 阿里云：`47.97.215.97`，Ubuntu，登录用户 `codepencil`
- 白嫖机：Ubuntu（OpenSSH 9.6p1），root 操作
- 映射：阿里云 `18080` → 白嫖机 `8080`

---

## 一、阿里云侧配置（一次性）

### 1. 开启 GatewayPorts，允许绑定非回环地址

默认 sshd 只把转发端口绑在 `127.0.0.1`，外网不可达。编辑 `/etc/ssh/sshd_config`：

```bash
sudo sed -i 's/^#\?GatewayPorts.*/GatewayPorts yes/' /etc/ssh/sshd_config
```

确认配置已写入并生效：

```bash
grep -i GatewayPorts /etc/ssh/sshd_config    # 应输出 GatewayPorts yes
sudo sshd -T | grep gatewayports             # 应输出 gatewayports yes
```

### 2. 重启 SSH 服务

**Ubuntu/Debian 服务名是 `ssh`，不是 `sshd`**（这是踩过的坑）：

```bash
sudo systemctl restart ssh
```

> CentOS/RHEL/Fedora 才用 `sudo systemctl restart sshd`。

### 3. 安全组放行端口

阿里云控制台 → 安全组 → 入方向 → 添加规则：**TCP 18080**，源 `0.0.0.0/0`（测试阶段）。

---

## 二、白嫖服务器侧配置

### 1. 启动被转发的本地服务

用 Python 起一个能显示主机名的测试页（确认流量落点用）：

```bash
mkdir -p ~/webtest && cd ~/webtest
cat > server.py <<'EOF'
import http.server, socketserver, socket, datetime, html

class H(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        body = f"<h1>白嫖机 {socket.gethostname()}</h1><p>{datetime.datetime.now()}</p>".encode()
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)
    def log_message(self, *a): pass

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("0.0.0.0", 8080), H) as s:
    s.serve_forever()
EOF
python3 ~/webtest/server.py &
curl -I http://127.0.0.1:8080   # 本地自检
```

### 2. 安装 autossh 和 sshpass

**这一步是踩坑点**：systemd 报 `Failed to run command: No such file or directory` 就是因为 autossh 没装。

```bash
apt update && apt install -y autossh sshpass
which autossh sshpass   # 确认路径为 /usr/bin/autossh、/usr/bin/sshpass
```

### 3. 手动确认阿里云主机指纹

`sshpass` 在无 TTY 环境下遇到未知主机密钥会直接失败，必须先手动登录一次写入 `known_hosts`：

```bash
ssh codepencil@47.97.215.97 "echo ok"
```

输密码、输 `yes` 确认指纹，看到 `ok` 即可。

### 4. 写密码文件

```bash
cat > /etc/ssh-tunnel.env <<'EOF'
SSHPASS='你的密码'
EOF
chmod 600 /etc/ssh-tunnel.env
```

> 密码用**单引号**包住，防止 `$`、`!` 被展开。改完记得 `chmod 600`。

### 5. 写 systemd Unit 文件

```bash
cat > /etc/systemd/system/ssh-tunnel.service <<'EOF'
[Unit]
Description=SSH reverse tunnel to aliyun
After=network-online.target
Wants=network-online.target

[Service]
User=root
EnvironmentFile=/etc/ssh-tunnel.env
ExecStart=/usr/bin/sshpass -e /usr/bin/autossh -M 0 -N -T \
  -o "ServerAliveInterval 30" \
  -o "ServerAliveCountMax 3" \
  -o "ExitOnForwardFailure=yes" \
  -R 18080:localhost:8080 codepencil@47.97.215.97
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF
```

关键点：
- `sshpass -e` 从环境变量 `SSHPASS` 读密码（比 `-p` 安全，不进 `ps`）
- `EnvironmentFile` 注入密码文件
- `-M 0` 让 autossh 依赖 SSH 心跳，不用额外监控端口
- `ExitOnForwardFailure=yes` 端口绑定失败时立即退出，配合 `Restart` 重试
- `ServerAliveInterval 30` + `CountMax 3`：90 秒内发现死连接

### 6. 启动并设开机自启

```bash
systemctl daemon-reload
systemctl enable --now ssh-tunnel
systemctl status ssh-tunnel --no-pager
```

看到 `Active: active (running)` 只是第一步，**必须继续验证**（见第三节）。

---

## 三、验证（三重确认）

### 第 1 重：白嫖机上，ssh 子进程是否存在

```bash
ps aux | grep "[s]sh -N -T"
```

有输出说明 autossh 已拉起真正的 ssh 连接。**只看 `systemctl status` 不够**——autossh 在密码错误时会不断重启 ssh 但主进程不退，状态照样显示 `running`。

### 第 2 重：阿里云上，端口是否被监听、转发是否生效

```bash
ss -tlnp | grep 18080        # 应看到 sshd 监听 0.0.0.0:18080
curl -I http://127.0.0.1:18080   # 应返回白嫖机 8080 服务的响应
```

### 第 3 重：外网，安全组是否放行

在本地电脑：

```bash
curl -I http://47.97.215.97:18080
```

返回内容里应包含**白嫖机的主机名**，证明流量确实穿过了隧道。

---

## 四、日常运维命令

```bash
systemctl status ssh-tunnel --no-pager      # 看状态
systemctl start/stop/restart ssh-tunnel     # 启停重启
journalctl -u ssh-tunnel -n 50 --no-pager   # 看最近日志
journalctl -u ssh-tunnel -f                 # 实时跟踪日志
systemctl is-enabled ssh-tunnel             # 确认开机自启（应输出 enabled）
```

- 改 `/etc/ssh-tunnel.env` 里的密码 → `systemctl restart ssh-tunnel`
- 改 Unit 文件 → 先 `systemctl daemon-reload`，再 `restart`

---

## 五、踩过的坑与对应解法

| 现象 | 原因 | 解法 |
|---|---|---|
| `Failed to restart sshd.service: Unit sshd.service not found` | Ubuntu 服务名是 `ssh` | `systemctl restart ssh` |
| 日志 `remote forward success` 但外网访问不到 | sshd 把端口绑在 `127.0.0.1` | 阿里云 `sshd_config` 设 `GatewayPorts yes` 并重启 `ssh` |
| 日志反复刷 `SSHPASS: Failed to run command: No such file or directory` | autossh 未安装 | `apt install -y autossh` |
| `systemctl status` 显示 `active (running)` 但隧道不通 | autossh 在密码错时反复重启 ssh，主进程不退 | 用 `ps aux \| grep "[s]sh -N -T"` 和 `curl 127.0.0.1:18080` 双重确认 |
| `sshpass` 卡住或报主机密钥错误 | root 的 `known_hosts` 无阿里云指纹 | 手动 `ssh codepencil@47.97.215.97 "echo ok"` 一次 |

---

## 六、后续切 80 端口需注意

把 Unit 里 `-R 18080:localhost:8080` 改成 `-R 80:localhost:8080`，`daemon-reload && restart`。但切之前要处理三个新变量：

1. **阿里云 80 是否被占**：`ss -tlnp | grep ':80 '`，被 nginx/apache 占就先停
2. **`codepencil` 绑不了 80**：sshd 对非 root 用户降权，`-R 80:...` 绑定直接失败，需改用 `root@47.97.215.97` 登录
3. **备案拦截**：阿里云大陆机房 IP 直接访问 HTTP 80 可能被重置，外网 `curl` 异常时先排除这个

---

## 七、安全建议（不急，但建议做）

1. `/etc/ssh-tunnel.env` 权限保持 `600`
2. 阿里云上新建一个**只用于隧道、无 sudo 权限**的专用账号，替代 `codepencil`，把它的密码写进 env 文件
3. 安全组 18080 测试期可 `0.0.0.0/0`，正式用限制来源 IP 或套 nginx + basic auth
4. 长期看，密钥认证比密码文件更稳、更安全，哪天想换随时可以切