---
title: "【マイクラ】Dockerを使ってMinecraft JavaのServerを構築する"
date: "20230506"
excerpt: "先日Dockerでマイクラサーバーを立てたのでメモとしてここに書き残します"
cover_image: "/images/posts/img14.png"
category: "Minecraft"
author: "ひでまる"
author_image: "/images/authors/hidemaru.png"
---

先日 Docker でマイクラサーバーを立てたのでメモとしてここに書き残します。

## 使うもの

- Docker
- Minecraft Server

### Docker とはなんぞや

ChatGPT 先生に聞いてみました。

> Docker は、コンテナ仮想化技術を用いたアプリケーション実行環境を提供するオープンソースのプラットフォームです。
> Docker を使うことで、アプリケーションやサービスを実行するための環境を、軽量で簡単に作成・管理できます。
> コンテナとは、アプリケーションを実行するために必要なすべてのライブラリや依存関係、設定ファイルなどを含めた環境を、独立した単位でパッケージ化したものです。
> このコンテナ技術を使うことで、アプリケーションが異なる環境で実行される際に発生する互換性の問題を解決することができます。

らしいです。
要するにコンテナ技術で動作が保証される環境を動かすことができます・

### Minecraft Server について

Minecraft Server は複数の種類があります。
例を挙げると`bukkit`や`spigot`や`paperMC`などが挙げられます。
Mod サーバーでは`forge`や`fabric`などが挙げられます。
今回はこの例に挙げた PaperMC というサーバーを使って Docker で実行する記事を書きます。

:::message
こちらの記事で使っているのは PaperMC ですが、他のサーバーにしても構築方法は変わらないので、`Bukkit`や`Fabirc`を使うにしてもやり方は同じです。
:::

## サーバーを立てる

今回は Docker Compose を使ってサーバーを立てようと思います。
Docker Image は`itzg/docker-minecraft-server`を使おうと思います。

https://github.com/itzg/docker-minecraft-server

### Docker Compose

Docker Compose は`docker-compose.yml`という構造ファイルを作成して`docker-compose up -d`を実行して、ファイルに定義したサービスを起動することができます。

#### ファイルを作成する

ファイルを作成します。

```bash
touch docker-compose.yml
```

作成したファイルをエディターで開いてください

```bash
vim docker-compose.yml
```

##### 環境変数について

`MEMORY`: メモリサイズです。お好み合わせて変更してください

環境変数について、詳しく知りたい場合はこちらをご覧ください

https://github.com/itzg/docker-minecraft-server/blob/master/README.md#server-configuration

- PaperMC Example

```yaml
version: "3.8"
services:
  mc:
    image: itzg/minecraft-server
    container_name: paper
    environment:
      EULA: "true"
      TYPE: PAPER
      VIEW_DISTANCE: 10
      MEMORY: 2G
    ports:
      - "25565:25565"
    volumes:
      - ./data:/data
    restart: unless-stopped
```

#### サーバーを実行する

`docker-compose.yml`が存在するディレクトリで、サーバーを実行します

```bash
sudo docker-compose up -d
```

:::message
Compose の構成を変更した場合は毎回`up -d`してください。
:::

:::message
この構成の Compose ではサーバーが自動起動するため、`start`コマンドを毎回実行しなくても大丈夫です
:::

- サーバーを止めたい場合は

`docker-compose.yml`が存在するディレクトリで、サーバーを停止します

```bash
sudo docker-compose stop
```

- サーバーを起動したい場合は

`docker-compose.yml`が存在するディレクトリで、サーバーを起動します

```bash
sudo docker-compose start
```

- サーバーを再起動したい場合は

`docker-compose.yml`が存在するディレクトリで、サーバーを再起動します

```bash
sudo docker-compose restart
```

#### サーバーに入る

マイクラを起動して、サーバーに入ってください

ローカルで立ち上げたなら、127.0.0.1:25565に繋げればサーバーに入れます
