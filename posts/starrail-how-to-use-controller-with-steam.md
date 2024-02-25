---
title: "【崩スタ】Steamを使ってコントローラーで遊ぶ方法"
date: "20230502"
excerpt: "スターレイルではコントローラーのサポートが狭く、コントローラーを接続してもスターレイル側で認識しないことがありますが、SteamPadは認識するため、SteamPadを使ってスターレイルをコントローラーで遊びたいと思います。"
cover_image: "/images/posts/img13.png"
category: "Starrail"
author: "ひでまる"
author_image: "/images/authors/hidemaru.png"
---

スターレイルではコントローラーのサポートが狭く、コントローラーを接続してもスターレイル側で認識しないことがありますが、SteamPad は認識するため、SteamPad を使ってスターレイルをコントローラーで遊びたいと思います。

https://twitter.com/potenagehonmono/status/1761303503727948123

https://zenn.dev/januswel/articles/44801708e8c7fdd358e6

https://www.youtube.com/watch?v=pQj7GIyKrqQ

## Steam

### なんだこれは

ChatGPT くんいわく

> Steam は、Valve Corporation によって開発されたゲームデジタル配信プラットフォームです。
> ユーザーは Steam を通じて PC ゲームを購入、ダウンロード、プレイすることができます。
> Steam には、豊富なゲームライブラリ、ゲームコミュニティ、友達リスト、チャット機能、等があります。

らしいです。
今回はその Steam の機能である SteamPad を使ってスターレイルをコントローラーで遊びたいと思います。

### Steam のインストール

:::message
Steam を予めインストールしている方はこの章を読み飛ばしてください
:::

https://store.steampowered.com/about/

こちらのサイトにアクセスしていただき「Steam をインストール」をクリックしてください
そうすると`SteamSetup.exe`がダウンロードされるため実行してください

次へをどんどん押していきログインしてください

![Steam Installer](/images/posts/include/img23.png)

### Steam にスターレイルを追加

Steam を起動して左下にあるゲームを追加を押してください
そうしたら「非 Steam ゲームを追加」を押してください

![Steam Add Game](/images/posts/include/img24.png)

この画面が出たら参照を押していただき「ファイル名」の項目に`C:\Program Files\Star Rail\Games\StarRail.exe`とコピペしてください

:::message
スターレイルのインストール先が違う場合はパスに随時変更を加えてください
:::

![Steam Add Game Window](/images/posts/include/img25.png)
![Steam Add Game Window Explorer](/images/posts/include/img26.png)

そうしたらこのようにスターレイルがランチャーに追加されたことが分かります

![Steam Starrail](/images/posts/include/img27.png)

### Steam を管理者権限で実行

スターレイルは管理者権限が必要なゲームなため、Steam 入力するには Steam にも管理者権限を要します
では Steam を開いて、左上にある「Steam」を押して「終了」を押してください

![Steam Stop](/images/posts/include/img28.png)

そうしたら Windows キーを押して、`Steam`と検索し、「管理者権限で実行を押して Steam を起動してください」

![Steam Run Admin](/images/posts/include/img29.png)

Steam が起動したらスターレイルの画面まで移動してプレイを選択してください
これで Pad 操作でスターレイルが遊べるようになります

![Starrail](/images/posts/include/img30.png)

## 最後に

ここまで記事をご愛読していただきありがとうございました！！
スターレイルは原神と違ってガチャの排出率が良い気がしますよね。
ではさようなら。
