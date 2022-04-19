# centos7安装青龙面板（JD签到）

青龙面板仓库：<https://github.com/whyour/qinglong>

JD签到仓库：<https://github.com/yuannian1112/jd_scripts>

教程论坛： <https://www.kejiwanjia.com/newsflashes>

环境变量：<https://www.likecs.com/show-301298.html>

## 安装docker

```bash
sudo curl -sSL get.docker.com | sh
```

## 安装青龙镜像

```bash
docker run -dit \
  -v $PWD/ql:/ql/data \
  -p 5700:5700 \
  --name qinglong \
  --hostname qinglong \
  --restart unless-stopped \
  whyour/qinglong:latest
```

## 拉库

```bash
docker exec -it qinglong bash
ql repo https://github.com/yuannian1112/jd_scripts.git "jd_|jx_|getJDCookie" "activity|backUp" "^jd[^_]|USER|utils|jdCookie.js|sendNotify.js"
```

## 配置环境变量

> 复制JD登录cookie

京东cookie,多个账号的cookie使用&隔开，例：pt_key=XXX;pt_pin=XXX;&pt_key=XXX;pt_pin=XXX;&pt_key=XXX;pt_pin=XXX;。具体获取参考浏览器获取[京东cookie教程](https://github.com/chinnkarahoi/jd_scripts/blob/master/backUp/GetJdCookie.md) 或者 [获取京东cookie教程](https://github.com/chinnkarahoi/jd_scripts/blob/master/backUp/GetJdCookie.md)插件

```javascript
var CV = 'JD cookie值';
var CookieValue = CV.match(/pt_key=.+?;/) + CV.match(/pt_pin=.+?;/);
copy(CookieValue);
```
