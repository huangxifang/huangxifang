# docker安装elasticsearch

1.设置max_map_count不能启动es会启动不起来

## 创建elastic网络

```bash
docker network create elastic
```

## 安装elasticsearch

```bash
docker run --name es --net elastic -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e ES_JAVA_OPTS="-Xms512m -Xmx512m" -t elasticsearch:8.0.0
```

-----------------------------
> Elasticsearch security features have been automatically configured!
-> Authentication is enabled and cluster connections are encrypted.

->  Password for the elastic user (reset with `bin/elasticsearch-reset-password -u elastic`):
  R+tTvVN5xhdlOrTh27kO

->  HTTP CA certificate SHA-256 fingerprint:
  3ec8813e61a532db3f2e4e718cf75c444e76ba5ce113860f05a6b87d53740d7f

->  Configure Kibana to use this cluster:

* Run Kibana and click the configuration link in the terminal when Kibana starts.
* Copy the following enrollment token and paste it into Kibana in your browser (valid for the next 30 minutes):
  eyJ2ZXIiOiI4LjAuMCIsImFkciI6WyIxNzIuMTguMC4zOjkyMDAiXSwiZmdyIjoiM2VjODgxM2U2MWE1MzJkYjNmMmU0ZTcxOGNmNzVjNDQ0ZTc2YmE1Y2UxMTM4NjBmMDVhNmI4N2Q1Mzc0MGQ3ZiIsImtleSI6Il8ySWFZSUFCWTNKLUxiNjY4eFJkOkJoZlcySkd3U3Nhcm1xRU9qVFFiMkEifQ==

-> Configure other nodes to join this cluster:

* Copy the following enrollment token and start new Elasticsearch nodes with `bin/elasticsearch --enrollment-token <token>` (valid for the next 30 minutes):
  eyJ2ZXIiOiI4LjAuMCIsImFkciI6WyIxNzIuMTguMC4zOjkyMDAiXSwiZmdyIjoiM2VjODgxM2U2MWE1MzJkYjNmMmU0ZTcxOGNmNzVjNDQ0ZTc2YmE1Y2UxMTM4NjBmMDVhNmI4N2Q1Mzc0MGQ3ZiIsImtleSI6IkFXSWFZSUFCWTNKLUxiNjY4eFdCOmVqcUFNUUh5UlBTWjQ2b3JSRFIyWEEifQ==

  If you're running in Docker, copy the enrollment token and run:
  `docker run -e "ENROLLMENT_TOKEN=<token>" docker.elastic.co/elasticsearch/elasticsearch:8.0.0`

---------------------------------

## 安装kibana

```bash
docker run --name kibana --net elastic -p 5601:5601 kibana:8.0.0
```

## 拷贝elastcisearch配置文件到es

```bash
docker cp /usr/local/docker/elasticsearch/config/elasticsearch.yml es:/usr/share/elasticsearch/config/elasticsearch.yml
```

docker cp /usr/local/docker/kibana/config/kibana.yml kibana:/usr/share/kibana/config/kibana.yml

elasticsearch.username: "wufeng"
elasticsearch.password: "wufeng"
i18n.locale: "zh-CN"
