# 虚拟机设置固定IP地址

## 配置网络文件内容

```bash
vi /etc/sysconfig/network-scripts/ifcfg-ens33
```

> 复制以下代码到文件内

```bash
BOOTPROTO="static"
ONBOOT="yes"
IPADDR="192.168.44.128"
GATEWAY="192.168.44.2"
NETMASK=255.255.255.0
DNS1=192.168.44.2
```

- `ONBOOT` 设置"yes" ，开机启动
- `BOOTPROTO`   "static"设为静态IP模式
- `IPADDR` IP地址
- `GATEWAY` 网关

> 退出保存 "wq"

## 重启网络配置

```bash
service network restart
```
