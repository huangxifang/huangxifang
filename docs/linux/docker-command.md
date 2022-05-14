# docker常用命令

## 查看所有容器

```bash
docker ps -a
```

## 进入容器命令行

```bash
docker exec -it 容器名称 bash
```

## 删除指定容器

```bash
docker rm  容器名称/ID
```

## 删除指定镜像

```bash
docker rmi [OPTIONS] 镜像ID
```

OPTIONS:

  `-f`： 删除所有指定镜像ID
