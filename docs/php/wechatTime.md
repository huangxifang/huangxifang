# 时间处理

## 判断上午还是下午

> php判断上午还是下午的实现方法：首先设置中国时区；然后定义一个GetDateTime方法；然后通过if else语句判断当前时间是上午还是下午；最后输出判断结果即可。

根据当前时间判断上午好、下午好

```php
header("Content-type:text/html;charset=utf-8");

date_default_timezone_set('PRC'); //设置中国时区

echo str_replace(array('AM','PM'),array('上午','下午'),date("Y-m-d A H:i:s"));
```

```php
function GetDateTime(){
    $Datetime = date('H');
    $text = "";
    if($Datetime >= 0 && $Datetime < 7){
        $text = "天还没亮，夜猫子，要注意身体哦！ ";
    }else if($Datetime>=7 && $Datetime<12){
        $text = "上午好！今天天气真不错……哈哈哈，不去玩吗？";
    }else if($Datetime >= 12 && $Datetime < 14){
        $text = "中午好！午休时间哦，朋友一定是不习惯午睡的吧？！";
    }else if($Datetime >= 14 && $Datetime < 18){
        $text = "下午茶的时间到了，休息一下吧！ ";
    }else if($Datetime >= 18 && $Datetime < 22){
        $text = "下午茶的时间到了，休息一下吧！ ";
    }else if($Datetime >= 22 && $Datetime < 24){
        $text = "很晚了哦，注意休息呀！";
    }
    return $text;
}
```

## **计算时间差**

```php

$startdate=date('Y-m-d H:i:s');    //当前时间
$enddate="2020-12-12 12:12:12";     //结束时间
$date=floor((strtotime($enddate)-strtotime($startdate))/86400);
echo "相差天数：".$date."天<br><br>";
$hour=floor((strtotime($enddate)-strtotime($startdate))%86400/3600);
echo "相差小时数：".$hour."小时<br><br>";
$minute=floor((strtotime($enddate)-strtotime($startdate))%86400/60);
echo"相差分钟数：".$minute."分钟<br><br>";
$second=floor((strtotime($enddate)-strtotime($startdate))%86400%60);
echo"相差秒数：".$second."秒";
```

## 基于微信朋友圈实现时间显示样式

```php
public function timer(array $array)
{
        //获取当前时间 & 时 & 分
        $today = date('Y-m-d H:i:s');
        $D = date('d');
        $H = date('H');
        $M = date('i');
        foreach ($array as $key => $value) {
            $d = substr($value['create_time'], 8, 2);      //获取创建日期：单位：日
            $h = substr($value['create_time'], 11, 2);     //获取发布创建日期：单位：时
            $m = substr($value['create_time'], 14, 2);     //获取发布创建日期：单位：时
            //获取当前时间与发布时间的相差的天数
            $date = (strtotime($today) - strtotime($value['create_time'])) / 86400;
            switch ($date) {
                // date<1 表示时间差在24小时内
                case $date < 1:
                    if ($D != $d) {  //判断当前日期是否相同，不相同则（24-发布日期+当前时间）
                        $hour = 24 - $h + $H;
                    } else {
                        $hour = abs($H - $h);    //发布如期与当前时间相同则取两数相减的绝对值
                    }
                    if ($hour < 1) {
                        if ($m == $M) {
                            $array[$key]['create_time'] = "刚刚";
                            break;
                        } else if ($m < $M) {
                            $minute = $M - $m;
                            $array[$key]['create_time'] = $minute . "分钟前";
                            break;
                        } else {
                            $minute = 60 - $m + $M;
                            $array[$key]['create_time'] = $minute . "分钟前";
                            break;
                        }
                    } else {
                        $array[$key]['create_time'] = $hour . "小时前";
                        break;
                    }
                    break;
                case $date < 2:
                    $array[$key]['create_time'] = "昨天";
                    break;
                case $date < 3:
                    $array[$key]['create_time'] = "两天前";
                    break;
                default:
                    $array[$key]['create_time'] = $array[$key]['create_time'];
                    break;
            }
        }
        return $array;
    }
```
