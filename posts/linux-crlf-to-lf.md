---
title: "【Linux】LinuxでCRLFとLFを一括で相互変換する"
date: "20220907"
excerpt: "コーディングしてるとCRLFとLFが混在してストレスが溜まる機会があります。\nその時にコマンド一つでどちらかに変換できると便利なので、その方法を書き残します。"
cover_image: "/images/posts/img2.jpeg"
category: "Linux"
author: "ひでまる"
author_image: "/images/authors/hidemaru.png"
---

コーディングしてると CRLF と LF が混在してストレスが溜まる機会があります  
その時にコマンド一つでどちらかに変換できると便利なので、その方法を書き残します

## nkf コマンド

nkf コマンドとは Linux や Windows で異なる改行コードを変換するためのコマンドです

### インストール

Ubuntu

```bash
$ sudo apt install nkf
```

Arch

```bash
$ sudo pacman -S nkf
```

Mac

```bash
$ brew install nkf
```

### 使い方

使い方は以下の通りです  
引数に -u と -w がありますが、それはそれぞれ `Unix`(LF) と `Windows`(CR+LF) の訳です

#### CRLF to LF

```bash
$ nkf -Lu --overwrite <変換するファイル>
```

#### LF to CRLF

```bash
$ nkf -Lw --overwrite <変換するファイル>
```

#### --overwrite とは

–overwrite オプションとは既存のファイルを直接上書きするオプションです  
このオプションを入力しなかった場合はターミナルに改行コードが変換された文章が出力されるだけで、変換元のファイルの改行コードは変換されてません  
変換する場合は–overwrite をつければ良いでしょう

## カレントディレクトリ内のファイルを全て変換

### CRLF to LF

```bash
$ grep -Ilrs `printf "\r\n"` . | xargs nkf -Lu --overwrite
```

こちらは find コマンドでファイルを検索して範囲に入れて、grep で改行コードが CRLF のファイルを検索して範囲を狭めて、その結果を nkf で LF に変換するコマンドです

### LF to CRLF

```bash
$ grep -Ilrs `printf "\n"` . | xargs nkf -Lw --overwrite
```

こちらも同様に CRLF に変換しております

## alias に登録すると便利

よく使うコマンドなので、alias に登録しましょう

```bash
alias crlf2lf="grep -Ilrs `printf "\r\n"` . | xargs nkf -Lu --overwrite"
alias lf2crlf="grep -Ilrs `printf "\n"` . | xargs nkf -Lw --overwrite"
```

これを実行することで楽に改行コードの相互変換が可能です。
