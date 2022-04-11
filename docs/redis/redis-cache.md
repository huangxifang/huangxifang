# Redis缓存穿透、缓存击穿、缓存雪崩的原理和解决办法

## 1.前言

在大数据时代，由于网络请求的并发，导致的数据库I/O开销巨大，所以为了缓解数据库的压力，缓存技术必不可少，而这其中redis基本是服务器的缓存服务之一，虽然缓存技术很好用，但是也会出现各种各样的问题，这里就最常见的三种问题进行原理分析和解决，希望给大家带来帮助

- **缓存穿透**：key中对应的缓存数据不存在，导致去请求数据库，造成数据库的压力倍增的情况

- **缓存击穿**：redis过期后的一瞬间，有大量用户请求同一个缓存数据，导致这些请求都去请求数据库，造成数据库压力倍增的情，针对一个key而言

- **缓存雪崩**：缓存服务器宕机或者大量缓存集中某个时间段失效，导致请求全部去到数据库，造成数据库压力倍增的情况，这个是针对多个key而言

## 2.缓存穿透的解决办法

常用方法可以采用布隆过滤器方法进行数据拦截，其次可以还有一种解决思路，就是如果请求的数据为空，将空值也进行缓存，就不会发生穿透情况

```php
<?php
class getPrizeList {
    /**
     * redis实例
     * @var \Redis
     */
    private $redis;
 
    /**
     * @var string
     */
    private $redis_key = '|prize_list';
 
    /**
     * 过期时间
     * @var int
     */
    private $expire = 30;
 
    /**
     * getPrizeList constructor.
     * @param $redis
     */
    public function __construct($redis)
    {
        $this->redis = $redis;
    }
 
    /**
     * @return array|bool|string
     */
    public function fetch()
    {
        $result = $this->redis->get($this->redis_key);
        if(!isset($result)) {
            //此处应该进行数据库查询...
            //如果查询结果不存在，给其默认空数组进行缓存
            $result = [];
            $this->redis->set($this->redis_key, $result, $this->expire);
        }
 
        return $result;
    }
}
```

## 3.缓存击穿解决办法

使用互斥锁(mutex key),就是一个key过期时，多个请求过来允许其中一个请求去操作数据库，其他请求等待第一个请求成功返回结果后再请求。

```php

<?php
class getPrizeList {
    /**
     * redis实例
     * @var \Redis
     */
    private $redis;
 
    /**
     * @var string
     */
    private $redis_key = '|prize_list';
 
    /**
     * @var string
     */
    private $setnx_key = '|prize_list_setnx';
 
    /**
     * 过期时间
     * @var int
     */
    private $expire = 30;
 
    /**
     * getPrizeList constructor.
     * @param $redis
     */
    public function __construct($redis)
    {
        $this->redis = $redis;
    }
 
    /**
     * @return array|bool|string
     */
    public function fetch()
    {
        $result = $this->redis->get($this->redis_key);
        if(!isset($result)) {
            if($this->redis->setnx($this->setnx_key, 1, $this->expire)) {
                //此处应该进行数据库查询...
                //$result = 数据库查询结果;
                $this->redis->set($this->redis_key, $result, $this->expire);
                $this->redis->del($this->setnx_key); //删除互斥锁
            } else {
                //其他请求每等待10毫秒重新请求一次
                sleep(10);
                self::fetch();
            }
        }
 
        return $result;
    }
}
```

## 4.缓存雪崩的解决办法

- 这种情况是因为多个key同时过期导致的数据库压力，一种方法可以在key过期时间基础上增加时间随机数，让过期时间分散开，减少缓存时间过期的重复率

- 另一种方法就是加锁排队，这种有点像上面缓存击穿的解决方式，但是这种请求量太大，比如5000个请求过来，4999个都需要等待，这必然是指标不治本，不仅用户体验性差，分布式环境下就更加复杂，因此在高并发场景下很少使用

- 最好的解决方法，是使用`缓存标记`，判断该标记是否过期，过期则去请求数据库，而缓存数据的过期时间要设置的比缓存标记的长，这样当一个请求去操作数据库的时候，其他请求拿的是上一次缓存数据

```php
<?php
class getPrizeList {
    /**
     * redis实例
     * @var \Redis
     */
    private $redis;
 
    /**
     * @var string
     */
    private $redis_key = '|prize_list';
 
    /**
     * 缓存标记key
     * @var string
     */
    private $cash_key = '|prize_list_cash';
 
    /**
     * 过期时间
     * @var int
     */
    private $expire = 30;
 
    /**
     * getPrizeList constructor.
     * @param $redis
     */
    public function __construct($redis)
    {
        $this->redis = $redis;
    }
 
    /**
     * @return array|bool|string
     */
    public function fetch()
    {
        $cash_result = $this->redis->get($this->cash_key);
        $result = $this->redis->get($this->redis_key);
        if(!$cash_result) {
            $this->redis->set($this->cash_key, 1, $this->expire);
            //此处应该进行数据库查询...
            //$result = 数据库查询结果, 并且设置的时间要比cash_key长，这里设置为2倍;
            $this->redis->set($this->redis_key, $result, $this->expire * 2);
        }
 
        return $result;
    }
}
```
