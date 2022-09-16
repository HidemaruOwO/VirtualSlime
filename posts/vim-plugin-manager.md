---
title: "【Vim】シンプルで高速なプラグインマネージャー vim-jetpack"
date: "20220916"
excerpt: "Vimにはプラグインマネージャーが無数にあるので、シンプルで高速なおすすめのプラグインマネージャーを一つ書き残そうと思います"
cover_image: "/images/posts/img4.jpg"
category: "Vim"
author: "Hidemaru"
author_image: "/images/authors/hidemaru.png"
---

Vim にはプラグインマネージャーが無数にあるので、シンプルで高速なおすすめのプラグインマネージャーを一つ書き残そうと思います

## プラグインマネージャー

プラグインマネージャーとは数ある Vim プラグインを管理するためにあります  
`dein.vim`や`vim-plug`など多くのプラグインマネージャーがありますが、筆者がおすすめするプラグインマネージャーは`vim-jetpack`です

## vim-jetpack

[![tani/vim-jetpack - GitHub](https://gh-card.dev/repos/tani/vim-jetpack.svg?fullname=)](https://github.com/tani/vim-jetpack)

### なんだそれは

`vim-jetpack`開発者の方の Zenn の記事によると、

> vim-jetpack は vim-plug の実装を vim8/neovim 向けにモダン化させ dein.vim で用いられている最適化手法を取り入れた，Packer.nvim 風のコマンド郡を備えたとても高速なプラグインマネージャです  
> 引用: [とても速い Vim プラグインマネージャ vim-jetpack](https://zenn.dev/dog/articles/jetpack_intro)

とにかくプラグインマネージャーをカスタマイズをしていない状態で、高速で Vim を起動できるプラグインマネージャーです  
詳しく`vim-jetpack`を知りたい場合は引用元の記事をお読みください

### インストール

以下のコマンドを実行してください

#### Vim

```bash
curl -fLo ~/.vim/autoload/jetpack.vim --create-dirs https://raw.githubusercontent.com/tani/vim-jetpack/master/autoload/jetpack.vim
```

#### NeoVim

```bash
curl -fLo ~/.config/nvim/autoload/jetpack.vim --create-dirs https://raw.githubusercontent.com/tani/vim-jetpack/master/autoload/jetpack.vim
```

### 移行

Jetpack は複数の DSL に対応しているので、他のプラグインマネージャーからの移行がとても容易です  
Vim で`.vimrc`を開いて以下のコマンを実行してください  
**移行元のプラグインマネージャーの設定はコメントアウトして消してください**

#### vim-plug

```vim
:%s/Plug/Jetpack/
```

#### dein.vim

```vim
:%s/dein/jetpack
```

#### packer.nvim

```vim
:%s/packer/jetpack
```

### コマンド

`vim-jetpack`で使用するコマンドはただ一つ

```vim
:JetpackSync
```

このコマンドは、プラグインのインストール及び更新と最適化まで全て行います

### 設定

設定も同じくシンプルです
最適化の度合いを設定するだけです

```vim
let g:jetpack#optimization=0 " 最適化しない
let g:jetpack#optimization=1 " 安全な場合最適化
let g:jetpack#optimization=2 " 全てのプラグインを最適化
```

とりあえず`let g:jetpack#optimization=2`で設定しましょう  
もし環境が壊れた場合は`let g:jetpack#optimization=1`に設定しましょう
