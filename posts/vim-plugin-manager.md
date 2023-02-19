---
title: "【Vim】シンプルで高速なプラグインマネージャー vim-jetpackのインストール方法と設定について"
date: "20220916"
excerpt: "Vimにはプラグインマネージャーが無数にあるので、シンプルで高速なおすすめのプラグインマネージャーを一つ書き残そうと思います"
cover_image: "/images/posts/img4.jpeg"
category: "Vim"
author: "ひでまる"
author_image: "/images/authors/hidemaru.png"
---

Jetpack というシンプルで高速なおすすめのプラグインマネージャーを一つ書き残そうと思います

## プラグインマネージャー

プラグインマネージャーとは数ある Vim プラグインを管理するためにあります  
`dein.vim`や`vim-plug`など多くのプラグインマネージャーがありますが、筆者がおすすめするプラグインマネージャーは`vim-jetpack`です

## vim-jetpack

[![tani/vim-jetpack - GitHub](https://gh-card.dev/repos/tani/vim-jetpack.svg?fullname=)](https://github.com/tani/vim-jetpack)

### なんだこれは

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

### プラグインの追加

ここではインストールするプラグインを定義してます  
Jetpack は複数の DSL に対応しているので、様々な書き方でプラグインをインストールすることができます  
筆者はシンプルな`vim-plug`方式で使ってます

#### vim-plug style

この方式の場合は`Jetpack 'repo名'`

```vim
call jetpack#begin()
  " bootstrap
  Jetpack 'tani/vim-jetpack', { 'opt': 1 }
  Jetpack 'junegunn/fzf.vim'
  Jetpack 'junegunn/fzf', { 'do': {-> fzf#install()} }
  Jetpack 'neoclide/coc.nvim', { 'branch': 'release' }
  Jetpack 'neoclide/coc.nvim', { 'branch': 'master', 'do': 'yarn install --frozen-lockfile' }
  Jetpack 'vlime/vlime', { 'rtp': 'vim' }
  Jetpack 'dracula/vim', { 'as': 'dracula' }
  Jetpack 'tpope/vim-fireplace', { 'for': 'clojure' }
call jetpack#end()
```

#### dein/ minpac style

```vim
call jetpack#begin()
  " bootstrap
  call jetpack#add('tani/vim-jetpack', { 'opt': 1 })
  call jetpack#add('junegunn/fzf.vim')
  call jetpack#add('junegunn/fzf', { 'do': {-> fzf#install()} })
  call jetpack#add('neoclide/coc.nvim', { 'branch': 'release' })
  call jetpack#add('neoclide/coc.nvim', { 'branch': 'master', 'do': 'yarn install --frozen-lockfile' })
  call jetpack#add('vlime/vlime', { 'rtp': 'vim' })
  call jetpack#add('dracula/vim', { 'as': 'dracula' })
  call jetpack#add('tpope/vim-fireplace', { 'for': 'clojure' })
call jetpack#end()
```

#### packer style

```lua
require('jetpack').startup(function(use)
  -- bootstrap
  use {'tani/vim-jetpack', opt = 1}
  use 'junegunn/fzf.vim'
  use {'junegunn/fzf', do = 'call fzf#install()' }
  use {'neoclide/coc.nvim', branch = 'release'}
  use {'neoclide/coc.nvim', branch = 'master', do = 'yarn install --frozen-lockfile'}
  use {'vlime/vlime', rtp = 'vim' }
  use {'dracula/vim', as = 'dracula' }
  use {'tpope/vim-fireplace', for = 'clojure' }
end)
```

#### paq style

```lua
require('jetpack').setup {
  -- bootstrap
  {'tani/vim-jetpack', opt = 1},
  'junegunn/fzf.vim',
  {'junegunn/fzf', do = 'call fzf#install()' },
  {'neoclide/coc.nvim', branch = 'release'},
  {'neoclide/coc.nvim', branch = 'master', do = 'yarn install --frozen-lockfile'},
  {'vlime/vlime', rtp = 'vim' },
  {'dracula/vim', as = 'dracula' },
  {'tpope/vim-fireplace', for = 'clojure' },
}
```

### 移行

前述した通り Jetpack は複数の DSL に対応しているので、他のプラグインマネージャーからの移行がとても容易です  
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

`vim-jetpack`で使用するコマンドはただ二つ

#### JetpackSync

```vim
:JetpackSync
```

このコマンド一本で、プラグインのインストール及び更新と最適化まで全て行います

#### Jetpack repo

```vim
:Jetpack repo ['user/repo',option]
```

このコマンドは`jetpack#add()`をコマンドにしたもので、GitHub リポジトリと option を指定するとプラグインを追加します  
dotfiles などで、複数の環境で共有して使っている場合は推奨しません

### 設定

#### g:jetpack_ignore_patterns

```vim
call add(g:jetpack_ignore_patterns, '/*.yaml')
call add(g:jetpack_ignore_patterns, '/*.json')
```

このリストはファイルのバッティングを無視するようにします

#### g:jetpack_copy_method

```vim
let g:jetpack_copy_method='system' " Default
let g:jetpack_copy_method='copy' " Neovimのみ使用可能 高速
let g:jetpack_copy_method='hardlink' " ハードリンクを作成
let g:jetpack_copy_method="symlink" " シンポリックリンクを作成
```

これは`:JetpackSync` した際ファイルをコピーする速度に関する設定です  
Neovim を使ってる場合は`let g:jetpack_copy_method='copy'`に設定しましょう  
安定していて高速です

#### g:jetpack_download_method

```vim
let g:jetpack_download_method='git' " プラグインのダウンロードにgitを使用
let g:jetpack_download_method='curl' " プラグインのダウンロードにcurlを使用
let g:jetpack_download_method='wget' " プラグインのダウンロードにwgetを使用
```

これは`:JetpackSync`した際ファイルをダウンロードする時に使うコマンドを設定できます  
`git`が入っていない開発環境なんて聞いたことがないので、デフォルト値の`git`で問題ありません

#### g:jetpack#optimization

**※`g:jetpack#optimization`はアップデートによって機能しなくなりました**

```vim
let g:jetpack#optimization=0 " 最適化しない
let g:jetpack#optimization=1 " 安全な場合最適化
let g:jetpack#optimization=2 " 全てのプラグインを最適化
```

~~とりあえず`let g:jetpack#optimization=2`で設定しましょう~~  
~~もし環境が壊れた場合は`let g:jetpack#optimization=1`に設定しましょう~~
