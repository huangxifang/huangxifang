# 虚拟机设置固定IP地址

## 配置网络文件内容

```bash
vi /etc/sysconfig/network-scripts/ifcfg-ens33
```

> 复制以下代码到文件内

```bash
TYPE="Ethernet"
PROXY_METHOD="none"
BROWSER_ONLY="no"
BOOTPROTO="static"
DEFROUTE="yes"
IPV4_FAILURE_FATAL="no"
IPV6INIT="yes"
IPV6_AUTOCONF="yes"
IPV6_DEFROUTE="yes"
IPV6_FAILURE_FATAL="no"
IPV6_ADDR_GEN_MODE="stable-privacy"
NAME="ens33"
UUID="9e85aabc-b111-4585-b3fb-4fa7af7d84f3"
DEVICE="ens33"
ONBOOT="yes"
ETHTOOL_OPTS="autoneg on"
IPADDR="192.168.44.128"
PREFIX="24"
GATEWAY="192.168.44.2"
NETMASK=255.255.255.0
DNS1=192.168.44.2
IPV6_PRIVACY="no"
```

> 退出保存 "wq"

## 重启网络配置

```bash
service network restart
```
