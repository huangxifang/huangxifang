# Git常用命令

## 查看远程仓库地址

```shell
git remote -v
```

## 切换远程仓库地址

1. 切换远程仓库地址

   【git remote set-url origin URL】 更换远程仓库地址，URL为新地址。

   ```shell
   git remote set-url origin URL
   ```

2. 先删除远程仓库地址，然后再添加

   【git remote rm origin】 删除现有远程仓库
   【git remote add origin url】添加新远程仓库
