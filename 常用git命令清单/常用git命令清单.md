# 常用 git 命令清单

<img src="images/Snipaste_2024-04-22_11-45-54.png" alt="Snipaste_2024-04-22_11-45-54" style="zoom: 67%;" />

- Workspace: 工作区
- Index/Stage: 暂存区
- Repository: 本地仓库
- Remote: 远程仓库



## 新建 git 仓库

```bash
# 在当前目录下新建一个Git仓库
git init

# 新建一个目录并将其初始化为Git仓库
git init [catalogue-name]

# 下载远程仓库代码和历史记录到本地
git clone [url]
```



## 配置

Git 的配置文件为 `.gitconfig`，该文件在用户目录下(全局配置)，也可以在项目目录下(项目配置)

```bash
# 显示当前的Git配置
git config --list

# 编辑Git配置文件
git config -e [--global]

# 设置提交代码时的用户信息
git config [--global] user.name "[name]"
git config [--global] user.email "[email address]"
```



## 增加文件/删除文件

```bash
# 添加指定文件到暂存区
git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
git add [catalogue-name]

# 添加当前目录的所有文件到暂存区
git add .

# 删除工作区的文件，并将删除操作放入暂存区
git rm [file1] [file2] ...

# 停止追踪指定文件，但文件会保留在工作区
git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
git mv [file-original] [file-renamed]
```



## 代码提交

```bash
# 提交代码到本地仓库
git commit -m [message]

# 提交暂存区的指定文件到本地仓库
git commit [file1] [file2] ... -m [message]

# 将工作区中所有的已经修改过或删除的文件提交到本地仓库
git commit -a

# 提交时显示所有diff信息
git commit -v

# 使用一次commit,替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次的commit的提交信息
git commit --amend -m [message]

# 重做上一次的提交，并包括指定文件的变化
git commit --amend [file1] [file2] ...
```



## 分支

```bash
# 列出本地所有分支
git branch

# 列出远程所有分支
git branch -r

# 列出所有本地分支和远程分支
git branch -a

# 新建一个分支，但仍然留在当前分支
git checkout [branch-name]

# 新建一个分支，并切换到该分支
git checkout -b [branch-name]

# 新建一个分支，指向指定的commit
git branch [branch-name] [commit]

# 新建一个分支，与指定的远程分支建立追踪关系
git branch --track [branch-name] [remote-branch-name]

# 切换到指定分支，并更新工作区
git checkout [branch-name]

# 切换到上一个分支
git checkout -

# 建立追踪关系，在现有分支与指定的远程分支之间
git branch --set-upstream [branch-name] [remote-branch]

# 合并指定分支到当前分支
git merge [branch-name]

# 选择一个提交合并进当前分支
git cherry-pick [commit]

# 删除分支
git branch -d [branch-name]

# 删除远程分支
git push origin --delete [branch-name]
git branch -dr [remote/branch]
```



## 标签

```bash
# 列出所有标签
git tag

# 新建一个标签在当前提交
git tag [tag-name]

# 新建一个标签在指定提交
git tag [tag-name] [commit]

# 删除本地的标签
git tag -d [tag-name]

# 删除远程的标签
git push origin :refs/tags/[tag-name]

# 查看标签信息
git show [tag-name]

# 提交指定的标签到远程分支
git push [remote] [tag]

# 提交所有标签到远程分支
git push [remote] --tags

# 新建一个分支，指向某个标签
git checkout -b [branch] [tag-name]
```



## 查看信息

```bash
# 显示当前工作目录的状态
git status

# 显示当前分支的版本历史
git log

# 显示提交历史，以及每次提交发生变更的文件
git log --stat

# 搜索提交历史，根据关键词
git search -S [keyword]

# 显示某个提交之后所有的变动，每个提交占一行
git log [tag-name] HEAD --pretty=format:%s

# 显示某个提交之后所有的变动，其"提交说明"必须符合搜索条件
git log [tag-name] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改动
git log --follow [file]
git whatchanged [file]

# 显示指定文件相关的每一次diff
git log -p [file]

# 显示过去5次提交
git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
git blame [file]

# 显示暂存区和工作区的差异
git diff

# 显示暂存区和工作区的差异
git diff --cached [file]

# 显示暂存区和上一个提交之间的差异
git diff HEAD

# 显示两次提交之间的差异
git diff [first-branch]...[second-branch]

# 显示你今天写了多少行代码
git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
git show [commit]

# 显示某次提交发生变化的文件
git show --name-only [commit]

# 显示某次提交时，某个文件的内容
git show [commit]:[filename]

# 显示当前分支的最近几次提交
git reflog
```



## 远程同步

```bash
# 下载远程仓库的所有变动
git fetch [remote-name]

# 显示所有远程仓库
git remote -v

# 显示某个远程仓库的信息
git remote show [remote]

# 增加一个新的远程仓库并命名
git remote add [shortname] [url]

# 拉取远程仓库的变化，并于本地分支合并
git pull [remote] [branch-name]

# 上传本地指定分支到远程仓库
git push [remote] [branch-name]

# 强行推送当前分支到远程仓库，即使有冲突
git push [remote] --force

# 推送所有分支到远程仓库
git push [remote] --all
```



## 撤销

```bash
# 恢复暂存区的指定文件到工作区
git checkout [file]

# 恢复某个提交的指定文件到暂存区和工作区
git checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
git checkout .

# 重置暂存区的指定文件，与上一次提交保持一致，但工作区不变
git reset [file]

# 重置暂存区与工作区，与上一次提交保持一致
git reset --hard

# 重置当前分支的指针为指定提交，同时重置暂存区，但工作区不变
git reset [commit]

# 重置当前分支的HEAD为指定提交，同时重置暂存区和工作区，与指定提交一致
git reset --hard [commit]

# 重置当前分支的HEAD为指定提交，但保持暂存区和工作区不变，保留提交历史
git reset --keep [commit]

# 重置当前分支的HEAD为指定提交，但保持暂存区和工作区不变，不保留提交历史
git reset --soft [commit]

# 新建一个提交，用来撤销指定的提交
# 后者的所有变化都将被前者抵消，并且应用到当前分支
git revert [commit]

# 暂时将未提交的变化移除并存储
git stash

# 将暂存存储的变化弹出移入
git stash pop
```



## 其他

```bash
# 用前一个提交覆盖远程的新提交(撤销远程提交)
git push --force [remote] head~1:[branch-name]

# 生成一个可供发布的压缩包
git archive
```

