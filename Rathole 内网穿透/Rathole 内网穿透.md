# Rathole 安装流程与常用命令

本文记录 2026-11-02 实际完成的 IPTV 转发部署：阿里云运行 rathole 服务端，白嫖服务器运行客户端，替代原 autossh 反向隧道。两端使用 rathole **0.5.0**、Linux x86_64 和 systemd，不需要安装 Rust，也不使用 Docker 部署 rathole。

## 一、架构与部署信息

```text
播放器 → 阿里云 120.26.94.49:1905
                  ↓ rathole 隧道
         白嫖服务器 127.0.0.1:1905 → IPTV 容器

白嫖服务器主动连接阿里云 TCP 2333，建立隧道。
```

| 项目 | 阿里云服务端 | 白嫖服务器客户端 |
| --- | --- | --- |
| 程序 | `/usr/local/bin/rathole` | `/usr/local/bin/rathole` |
| 配置 | `/home/codepencil/rathole/server.toml` | `/etc/rathole/client.toml` |
| systemd 服务 | `rathole-server` | `rathole-client` |
| 运行用户 | `codepencil` | `root` |
| 接口 | 监听 TCP 2333、1905 | 主动连接阿里云 2333，访问本机 1905 |

服务端端口均大于 1024，使用普通用户即可。客户端沿用此次部署的 root 配置，也可以另行配置普通用户运行。

阿里云安全组和已启用的系统防火墙需允许：

- TCP `2333`：供客户端连接，可将来源限制为白嫖服务器的公网出口 IP。
- TCP `1905`：供播放器访问。
- TCP `11905`：仅迁移测试阶段使用，测试结束后删除对应放行规则。

白嫖服务器不需要为此新增公网入站端口，但必须允许出站访问阿里云 TCP 2333。以下流程假设 IPTV 已经在宿主机 `127.0.0.1:1905` 可访问。

## 二、两端安装 rathole

### 1. 检查架构与环境

两台服务器分别执行：

```bash
uname -m
free -h
df -h /
command -v curl
command -v unzip
```

下面的安装包适用于输出为 `x86_64` 的 Linux。其他架构应在官方 Releases 中选择对应文件。本文固定使用本次验证的 0.5.0，不代表最新版本。

Debian / Ubuntu 缺少工具时安装：

```bash
sudo apt update
sudo apt install curl unzip ca-certificates
```

白嫖服务器以 root 登录时，可以省略命令中的 `sudo`。

### 2. 下载和安装

两端都安装相同版本。优先从官方地址下载：

```bash
curl -fL --connect-timeout 10 --max-time 120 \
  'https://github.com/rathole-org/rathole/releases/download/v0.5.0/rathole-x86_64-unknown-linux-gnu.zip' \
  -o /tmp/rathole.zip
```

如果直连下载失败，可以使用本次部署用过的第三方代理：

```bash
curl -fL --connect-timeout 10 --max-time 120 \
  'https://gh-proxy.com/https://github.com/rathole-org/rathole/releases/download/v0.5.0/rathole-x86_64-unknown-linux-gnu.zip' \
  -o /tmp/rathole.zip
```

代理可用性可能变化；如果官方发布了校验值，应据此校验下载文件。下载成功后再执行：

```bash
mkdir -p /tmp/rathole-install
unzip -o /tmp/rathole.zip -d /tmp/rathole-install
sudo install -m 755 /tmp/rathole-install/rathole /usr/local/bin/rathole
/usr/local/bin/rathole --version
```

确认两端的 `Build Version` 都是 `0.5.0`。

## 三、配置阿里云服务端

以下在阿里云以 `codepencil` 用户执行。

### 1. 创建配置文件

```bash
mkdir -p /home/codepencil/rathole
nano /home/codepencil/rathole/server.toml
```

填入最终配置：

```toml
[server]
bind_addr = "0.0.0.0:2333"

[server.services.iptv]
token = "替换为两端一致的随机Token"
bind_addr = "0.0.0.0:1905"
```

可在任意一端用下面的命令生成一次 Token，再将同一个值填入两端配置：

```bash
openssl rand -hex 32
```

Token 是隧道认证凭据，与 IPTV 应用自己的认证信息不同。不要把真实 Token 写进笔记或提交到代码仓库。

**如果正在替换仍运行的 SSH 隧道，先将上面的服务端 IPTV 监听端口设为 `11905`，按照第六节验证后再切换到 `1905`。**

保存后设置权限：

```bash
chmod 600 /home/codepencil/rathole/server.toml
```

### 2. 创建 systemd 服务

```bash
sudo nano /etc/systemd/system/rathole-server.service
```

填入：

```ini
[Unit]
Description=Rathole Server
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=codepencil
ExecStart=/usr/local/bin/rathole --server /home/codepencil/rathole/server.toml
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

启用并启动：

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now rathole-server
sudo systemctl status rathole-server --no-pager -l
```

此时应看到 `active (running)` 和监听 `0.0.0.0:2333` 的日志。客户端连接成功后，IPTV 转发端口才会开始监听。

## 四、配置白嫖服务器客户端

以下在白嫖服务器以 root 执行。

### 1. 检查 IPTV 服务

```bash
docker ps
curl --connect-timeout 5 --max-time 10 -i http://127.0.0.1:1905
```

此次 IPTV 未携带认证信息时会返回 `403 Forbidden`，正文为“身份认证失败”，这是应用响应。Docker 端口映射存在本身不能证明应用正常，需要结合实际 HTTP 响应判断。

### 2. 创建配置文件

```bash
mkdir -p /etc/rathole
nano /etc/rathole/client.toml
```

填入：

```toml
[client]
remote_addr = "120.26.94.49:2333"

[client.services.iptv]
token = "替换为两端一致的随机Token"
local_addr = "127.0.0.1:1905"
```

两端的服务名 `iptv` 和 Token 必须一致。即使服务端临时使用 `11905`，客户端 `local_addr` 仍然是 IPTV 的 `127.0.0.1:1905`。

```bash
chmod 600 /etc/rathole/client.toml
```

### 3. 创建 systemd 服务

```bash
nano /etc/systemd/system/rathole-client.service
```

填入：

```ini
[Unit]
Description=Rathole Client
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=root
ExecStart=/usr/local/bin/rathole --client /etc/rathole/client.toml
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

启用并启动：

```bash
systemctl daemon-reload
systemctl enable --now rathole-client
systemctl status rathole-client --no-pager -l
journalctl -u rathole-client -n 30 --no-pager
```

日志出现 `Control channel established`，表示客户端已建立控制通道。端到端转发还需按下一节验证。

如果之前在终端前台运行过 rathole，先在对应终端按 `Ctrl+C` 停止，再交给 systemd 管理，避免重复运行和端口冲突。

## 五、验证转发与播放

阿里云执行：

```bash
sudo journalctl -u rathole-server -n 30 --no-pager
sudo ss -lntp | grep -E ':(2333|1905)\b'
curl --connect-timeout 5 --max-time 10 -i http://127.0.0.1:1905
```

正常日志包含：

```text
Control channel established service=iptv
Listening at 0.0.0.0:1905
```

此次部署的 HTTP 测试结果：

```text
HTTP/1.1 403 Forbidden
身份认证失败
```

与客户端本机的响应一致，说明请求已到达 IPTV 应用。这个结果不表示已经通过 IPTV 认证，也不能单独证明公网可访问。

最后在外部设备的播放器中，使用原来的 IPTV URL（包括原有路径和认证信息）测试播放。公网入口仍是 `120.26.94.49:1905`。本次已实际验证播放成功。

## 六、从 autossh 迁移到 rathole

已有 SSH 隧道时，按以下顺序操作；全新部署可以跳过本节。

1. 保留原 SSH 隧道，先让 rathole 服务端监听 `11905`。
2. 配置两端 systemd 服务并启动，在阿里云访问 `http://127.0.0.1:11905`，对照 IPTV 本机响应验证。
3. 在白嫖服务器停止旧隧道并取消开机自启：

   ```bash
   systemctl disable --now ssh-tunnel
   ```

4. 在阿里云将 `server.toml` 中 `[server.services.iptv]` 的 `bind_addr` 改为 `0.0.0.0:1905`，然后执行：

   ```bash
   sudo systemctl restart rathole-server
   sudo systemctl status rathole-server --no-pager -l
   curl --connect-timeout 5 --max-time 10 -i http://127.0.0.1:1905
   ```

5. 在播放器中验证原地址能正常播放，再清理旧隧道。

停止旧隧道到 rathole 接管 `1905` 之间会短暂中断访问，IPTV 容器无需停止。此时如果需要回退且尚未卸载 autossh，先让 rathole 服务端恢复 `11905` 并重启，再在白嫖服务器执行 `systemctl enable --now ssh-tunnel`。

确认播放成功后，在白嫖服务器执行清理（本次已经完成）：

```bash
rm -f /etc/systemd/system/ssh-tunnel.service
rm -f /etc/ssh-tunnel.env
systemctl daemon-reload
apt remove autossh
```

阿里云安全组和防火墙中若曾放行 TCP `11905`，此时也可以删除该临时规则。rathole 不依赖 SSH 的 `GatewayPorts` 或 `AllowTcpForwarding` 设置。

## 七、常用命令

### 1. 服务管理

| 操作 | 阿里云执行 | 白嫖服务器执行 |
| --- | --- | --- |
| 查看状态 | `sudo systemctl status rathole-server --no-pager -l` | `systemctl status rathole-client --no-pager -l` |
| 启动 | `sudo systemctl start rathole-server` | `systemctl start rathole-client` |
| 停止 | `sudo systemctl stop rathole-server` | `systemctl stop rathole-client` |
| 重启 | `sudo systemctl restart rathole-server` | `systemctl restart rathole-client` |
| 设置开机自启并立即启动 | `sudo systemctl enable --now rathole-server` | `systemctl enable --now rathole-client` |
| 取消开机自启并立即停止 | `sudo systemctl disable --now rathole-server` | `systemctl disable --now rathole-client` |
| 检查是否开机自启 | `systemctl is-enabled rathole-server` | `systemctl is-enabled rathole-client` |

### 2. 查看日志

阿里云：

```bash
sudo journalctl -u rathole-server -n 50 --no-pager
sudo journalctl -u rathole-server -f
sudo journalctl -u rathole-server -b --no-pager
```

白嫖服务器：

```bash
journalctl -u rathole-client -n 50 --no-pager
journalctl -u rathole-client -f
journalctl -u rathole-client -b --no-pager
```

`-n 50` 查看最近 50 行，`-f` 实时跟踪，`-b` 查看本次开机后的日志。实时跟踪时按 `Ctrl+C` 仅退出日志查看，不停止服务。

### 3. 修改配置

阿里云：

```bash
nano /home/codepencil/rathole/server.toml
sudo systemctl restart rathole-server
sudo journalctl -u rathole-server -n 30 --no-pager
```

白嫖服务器：

```bash
nano /etc/rathole/client.toml
systemctl restart rathole-client
journalctl -u rathole-client -n 30 --no-pager
```

只修改 TOML 配置无需 `daemon-reload`。修改 `/etc/systemd/system/*.service` 后，需要先执行 `systemctl daemon-reload`，再重启对应服务。rathole 0.5.0 带配置监视功能，但手动修改后的操作流程统一采用重启并检查日志。

### 4. 检查运行用户、端口和连接

阿里云：

```bash
systemctl show rathole-server -p User -p MainPID -p ExecStart
sudo ss -lntp | grep -E ':(2333|1905)\b'
curl --connect-timeout 5 --max-time 10 -i http://127.0.0.1:1905
```

白嫖服务器：

```bash
ss -ntp | grep ':2333'
curl --connect-timeout 5 --max-time 10 -i http://127.0.0.1:1905
docker ps
```

### 5. 查看内存占用

任意一端：

```bash
free -h
ps -eo pid,comm,rss,%mem --sort=-rss | head -n 15
ps -C rathole -o pid,user,rss,%mem,args
```

阿里云查看整个服务的内存统计：

```bash
systemctl show rathole-server -p MemoryCurrent -p MemoryPeak
```

`RSS` 单位是 KiB，除以 1024 得到 MiB；systemd 的上述内存数值单位为字节，统计口径与进程 RSS 不同。整体内存主要看 `available`，不能只看 `free`。

本次阿里云测量：总内存约 407 MiB，可用约 192 MiB，Swap 未使用，rathole 进程 RSS 约 8.9 MiB。占用会随连接和流量变化。

## 八、常见问题

| 现象 | 检查方法 |
| --- | --- |
| 服务显示 running，但不能访问 | 查看两端日志，确认控制通道建立，再检查服务端转发端口和客户端 IPTV 本机响应 |
| 连接阿里云 2333 超时 | 检查公网 IP、安全组、系统防火墙和客户端出站连接 |
| Token 认证失败 | 检查两端 Token 及服务名 `iptv` 是否完全一致 |
| `Address already in use` | 用 `sudo ss -lntp` 找到占用进程；检查旧 SSH 隧道或前台 rathole 是否仍在运行 |
| `Permission denied` | 检查服务运行用户能否读取 TOML、访问上级目录，以及执行 `/usr/local/bin/rathole` |
| HTTP 403，正文为“身份认证失败” | 本次是 IPTV 应用返回，需要使用带正确认证信息的播放地址 |
| 阿里云本机正常，播放器无法访问 | 检查公网 1905 放行情况、监听是否为 `0.0.0.0`、播放 URL 和应用认证 |

## 参考

- [rathole 官方仓库](https://github.com/rathole-org/rathole)
- [rathole 0.5.0 下载页面](https://github.com/rathole-org/rathole/releases/tag/v0.5.0)
