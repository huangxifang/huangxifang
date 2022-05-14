# composer镜像

## Composer阿里云镜像

<https://developer.aliyun.com/composer>

## 取消配置镜像

```bash
composer config -g --unset repos.packagist
```

## 解决composer install遇到：Your requirements could not be resolved to an installable set of packages

解决办法<https://www.cnblogs.com/lovebing/p/15684815.html>：直接忽略版本就是了

composer install --ignore-platform-reqs 或者 composer update --ignore-platform-reqs

```bash
composer install --ignore-platform-reqs -vvv
```

## composer更新指定版本

+ 更新composer2

```bash
composer self-update --2
```

+ 更新新版

```bash
composer self-update --stable
```

## 清除缓存

```bash
composer clear-cache
```

## 更新指定扩展

```bash
composer update yiisoft/yii2-composer --no-plugins
```
