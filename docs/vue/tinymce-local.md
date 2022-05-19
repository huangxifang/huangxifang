# tinymce富文本编辑器本地化

## 通过引入CDN处找到引用版本及github库

```js
// why use this cdn, detail see https://github.com/PanJiaChen/tinymce-all-in-one
const tinymceCDN = 'https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js'
```

## 下载文件到本地，放到`public`目录下

## 引用路径改成以下路径

```js
const tinymceCDN = window.location.origin + '/tinymce-all-in-one@4.9.4/tinymce.min.js'
```
