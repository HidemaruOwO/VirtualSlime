---
title: "【GitHub】GitHubにSSH接続する方法"
date: "20221216"
excerpt: "GitHub では 2021年の8月13日 にパスワード認証が廃止されたので、重い腰をあげて SSH で GitHub にアクセスするように設定します。"
cover_image: "/images/posts/img7.jpeg"
category: "Git"
author: "ひでまる"
author_image: "/images/authors/hidemaru.png"
---

GitHub では 2021 年の 8 月 13 日 にパスワード認証が廃止されたので、重い腰をあげて SSH で GitHub にアクセスするように設定します。
https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/

## ローカルの設定

`~/.ssh`で作業する前提で執筆します。
そのため予めそちらに移動してください。

```bash
$ cd ~/.ssh
```

もし`~/.ssh`ディレクトリが存在しない場合は作成しましょう。

```bash
$ mkdir .ssh
```

### SSH 用の鍵を作る

まず認証で必要な公開鍵と秘密鍵を作成します。
既に`~/.ssh/`に`id_rsa*`が存在してる場合は名前を変更したりして消されないようにしましょう。

```bash
$ ssh-keygen -t rsa
```

`ssh-keygen`コマンドを実行すると色々聞かれますがこの項目は任意ですので、セキュリティに細心の注意を払っている方以外は気にせずエンター連打しましょう。

```bash
$ ssh-keygen -t rsa

Generating public/private rsa key pair.
Enter file in which to save the key (/Users/hidemaru/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /Users/hidemaru/.ssh/id_rsa
Your public key has been saved in /Users/hidemaru/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:eI0Zh4BhNVfnFF9WFquUo4O82WE07SFE/K3LKqD/o58 hidemaru@ひでまるnoMacBook-Air.local
The key's randomart image is:
+---[RSA 3072]----+
|    o++ ..+o+. .B|
|   ..  + ..=...+.|
|        o .+o*o. |
|       ..*o *.+. |
|      . So.= o.  |
|       o  = o.   |
|      . .o .. .  |
|     .   o.  o   |
|      .o+Eo..    |
------------------------
+----[SHA256]-----+
```

こうすることで`~/.ssh`に`id_rsa`(秘密鍵)と`id_rsa.pub`(公開鍵)のペアが作成されます。

### SSH 鍵の名前を変更する

自分は SSH 鍵を細かく管理しているので、名前を分けて保存しております。
「鍵は共有でいいよ〜」という方はこの項目を飛ばしてください。

まずは公開鍵と秘密鍵を分けるディレクトリを作成します。

```bash
$ mkdir seacret public
```

その次に秘密鍵を`github.pem`という名前で`seacret`に配置します。

```bash
$ mv id_rsa seacret/github.pem
```

最後に公開鍵を`github.pub`という名前で`public`に配置します。

```bash
$ mv id_rsa.pub public/github.pub
```

### 秘密鍵に権限を設定する

SSH の秘密鍵に権限を設定しましょう。
予めこの設定をしないとこのように SSH クライアントに叱られてしまいます。

```bash
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions 0777 for '/Users/hidemaru/.ssh/seacret/github.pem' are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
Load key "/Users/hidemaru/.ssh/seacret/github.pem": bad permissions
git@github.com: Permission denied (publickey).
```

叱られないようにするには、秘密鍵を`.rw-------`権限に設定しましょう。

```bash
$ chmod 600 seacret/github.pem
```

### SSH の設定ファイルに書き込む

この後行う GitHub に公開鍵を設定した前提で話すのですが、今の段階でこのように GitHub にアクセス出来るのですが。

```bash
$ ssh git@github.com -i ~/.ssh/seacret/github.pem

PTY allocation request failed on channel 0
Hi ひでまるOwO! You've successfully authenticated, but GitHub does not provide shell access.
Connection to github.com closed.
```

これでは`git clone git@github.com:~`では自動で SSH で認証してくれないので、`.ssh/config`を作成して自動で SSH で認証してくれるように設定します。
まず`ssh-config`を作成していないと思うので、それを作成します。

```bash
$ touch config
```

作成した`ssh-config`を Vim か何かで開いたら、これを貼り付けてください。

```ssh-config
Host github github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/seacret/github.pem
```

これを保存すると、この後行う GitHub の設定をしたのち、GitHub に SSH アクセスが容易に出来るようになります。

## GitHub の設定

### 公開鍵を GitHub に設定

[こちらのサイト](https://github.com/settings/ssh/new)にアクセスしてください。
そうしたら 2 つ空欄の項目があると思うので、そちらを埋めます。
![SSH Key Image](/images/posts/include/img7.jpeg)
Title には`GitHub Key`とでも入力し、
Key は`cat public/github.pub`などの手段で表示し、中身をコピーして項目に貼り付けましょう。
筆者はこのように空欄を埋めました。
![New SSH Key Image](/images/posts/include/img8.jpeg)
空欄を埋めたのち、`Add SSH Key`をクリックして、パスワードの入力が終わり次第公開鍵が追加され準備が完了になります。

## 実演

準備を終えたので、実際に GitHub に SSH アクセス及びリポジトリのクローンをしましょう。

### GitHub に SSH アクセス

`ssh-config`に設定したので、このコマンドで手軽に GitHub に SSH を飛ばせます。

```bash
$ ssh github
```

### SSH 経由で GitHub のリポジトリをクローン

上同様`ssh-config`に設定したので、`git clone git@github.com:~`でも簡単にリポジトリをクローンできるようになりました。
試しに筆者が一番推してるエディターの Neovim をクローンしましょう。
適当なディレクトリに移動して以下のコマンドを実行してください。

```bash
$ git clone git@github.com:neovim/neovim.git
```

実行したら`neovim`というフォルダーが生成されていたら、SSH の設定が正常に動作していることを確認できます。
ここまでご愛読いただきありがとうございました。
