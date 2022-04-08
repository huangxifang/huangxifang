# Git常用命令

## Git 全局设置

```bash
git config --global user.name "无风"
git config --global user.email "2906568991@qq.com"
```

## 创建 git 仓库

```bash
mkdir an_dan_si_sure
cd an_dan_si_sure
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/wufengH/an_dan_si_sure.git
git push -u origin master
```

## 已有仓库?

```bash
cd existing_git_repo
git remote add origin https://gitee.com/wufengH/an_dan_si_sure.git
git push -u origin master
```

## 返回上一次commit 提交

```bash
git reset --hard HEAD
```

## 强制覆盖本地仓库

```bash
git reset --hard origin/master
```

## 切换仓库

```bash
git checkout 分支名
```

## 放弃本地修改

- 1. 放弃所有修改

```bash
git checkout .
```

- 2. 放弃某个文件修改 (比如： git checkout -- readme.md  ，不要忘记中间的 “--” ，不写就成了检出分支了！！)
  
```bash
git checkout -- filename
```
