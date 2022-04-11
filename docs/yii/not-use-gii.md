# yii2在linux下面无法启用gii

原因：linux下面默认的Gii只能通过127.0.0.1来访问，也就是本机访问，安全；

解决：在conf/main-local.php添加自己的ip

```php
$config['modules']['gii'] = [
    'class'      => 'yii\gii\Module',
    'allowedIPs' => ['127.0.0.1', '::1', '192.168.44.*']
];
```
