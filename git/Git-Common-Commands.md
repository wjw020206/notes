### 将本地的head~1分支强制推送到远程仓库origin branch_name分支上
```bash
git push --force origin head~1:branch_name
```

### 将一周前的git提交记录导出成txt格式文件
```bash
git log --since="1 week ago" --format="%h %an %s" > commits.txt
```

### 更新windows系统中的git版本至最新版
```bash
git update-git-for-windows
```