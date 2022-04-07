# TP6安装think-swoole

## composer 运行环境

环境要求：Linux环境或者MacOs下运行

## PHP版本

PHP要求版本至少PHP7.1+

## 安装命令

```bash
composer require topthink/think-swoole
```

## **注意**

如果报`Undefined index: process` 错误 ，有以下两种原因：

1. 翻译：进程依赖于proc_open 这个函数，在我安装的PHP中这个函数不可用。

   禁用函数去掉这个即可，在php.ini文件里面 使用/proc_open 找到去除这个单词即可！

2. 没有添加Swoole扩展 安装完swoole之后可以了

## 使用方法
