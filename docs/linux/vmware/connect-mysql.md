
# 虚拟机宝塔面板mysql外连

## 通过ssh面板链接数据库

```bash
mysql -uroot -p
```

输入密码

## 生成一个root账户

```bash
grant all on *.* to root@'%' identified by 'mysql root密码' with grant option;
flush privileges;
```

然后ctrl+d退出mysql

## 重启mysql

```bash
service mysql restart
```

注意: 数据库权限设为`所有人`
