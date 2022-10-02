---
title: "【Mac】M1/M2 MacでNeoVimをソースコードからビルドする"
date: "20221002"
excerpt: "昨今SSDの容量が圧迫し始めたので、Macを初期化したのでNeoVimのビルドの忘備録を書き残したいと思います"
cover_image: "/images/posts/img5.png"
category: "Mac"
author: "Hidemaru"
author_image: "/images/authors/hidemaru.png"
---

昨今 SSD の容量が圧迫し始めたので、Mac を初期化したので NeoVim のビルドの忘備録を書き残したいと思います

## 実行環境

![neofetch result](/images/posts/inside/img5.png)

## NeoVim

[![neovim/neovim - GitHub](https://gh-card.dev/repos/neovim/neovim.svg)](https://github.com/neovim/neovim)

### なんだこれは

`NeoVim`とは端的にまとめると、ただでさえ拡張性のある`Vim`をさらに拡張性を広げたものです

### ビルド

#### 依存関係の構築

NeoVim の公式のビルドの必要要件を見てみると、

> Clang or GCC version 4.4+  
> CMake version 3.10+, built with TLS/SSL support  
> 引用: [Build prerequisites](https://github.com/neovim/neovim/wiki/Building-Neovim#build-prerequisites)

このようになっております  
`Clang`のバージョンを確認してみると、14.0.0 なので特に変更することはありません

```bash
$ gcc --version

Apple clang version 14.0.0 (clang-1400.0.29.102)
Target: arm64-apple-darwin21.6.0
Thread model: posix
InstalledDir: /Library/Developer/CommandLineTools/usr/bin
```

同時に`CMake`のバージョンを確認してみたところ`CMake`事態インストールされてませんでした

```bash
cmake --version
```

そのため CMake をインストールします

```bash
pip3 install cmake
```

**もし Python と pip3 がインストールされていない場合は Homebrew でインストールしましょう**

```bash
brew install python@3.10
```

あとは他の依存関係も Homebrew でインストールします

```bash
brew install ninja libtool automake pkg-config gettext curl
```

これで依存関係の構築が終わったので、ビルドしようと思います

#### ビルド

こちらをコピペしてください

```bash
git clone https://github.com/neovim/neovim
cd neovim
# 安定版のNeoVimをビルドする場合は追加でこちらをコメントアウトされたコマンドを実行してください
# git checkout stable
make CMAKE_BUILD_TYPE=RelWithDebInfo
```

これでビルドは終わったので、インストールしようと思います

```bash
sudo make install
```

インストールが終わったら`nvim`を実行してください
![Neovim Run](/images/posts/inside/img6.png)
良い Vim ライフを！！
