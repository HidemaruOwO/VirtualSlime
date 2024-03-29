---
title: "【Linux】chsh: PAM: Authentication failureの対処法"
date: "20220907"
excerpt: "chshを実行した際にPAM: Authentication failureと返された時の対処法"
cover_image: "/images/posts/img1.jpeg"
category: "Linux"
author: "ひでまる"
author_image: "/images/authors/hidemaru.png"
---

本番環境用に VPS を新たに契約したので、セットアップをしていた時の話です

## 実行環境

![neofetch result](/images/posts/inside/img1.jpeg)

## エラー発生手順

デフォルトシェルの確認をすると bash でした

```bash
$ echo $SHELL
/bin/bash
```

実行環境は本番環境のため、自分の dotfiles を使いたくないので、デフォルトのプロンプト等が優秀な fish を使うことにしました

`これから変更する shell は fish なので、fish の部分を読者様が変更したいシェルに変更してください`

```bash
$ chsh -s $(which fish)
chsh: PAM: Authentication failure
```

今回のタイトルである`chsh: PAM: Authentication failure` が出ました
これをどうやって解決したか書きます

## 解決方法

このようにコマンドを書き直してください

```bash
$ sudo chsh $USER -s $(which fish)
```

これで再ログインしてあげればシェルが fish に変わります  
他の解決方法だと **/etc/passwd** を書き換えてあげるのも良さそうです
