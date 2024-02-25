---
title: "【Go】関数の引数にオプションを実装する"
date: "20221218"
excerpt: "Goの関数の引数にオプションを実装する方法が気になったので、忘備録としてここに記録します。"
cover_image: "/images/posts/img8.jpeg"
category: "Go"
author: "ひでまる"
author_image: "/images/authors/hidemaru.png"
---

Go の関数の引数にオプションを実装する方法が気になったので、忘備録としてここに記録します。
この記事はメモとして書いてるので、比較的短く読み終わります。

## 構造体とポインタを活用

言語の使用上、構造体とポインタをうまく組み合わせば実装可能です。
前提知識としてポインタに関する知識が必要なため、ポインタについて詳しくない方は予め[こちらの記事](https://v-sli.me/blog/go-pointer)を読んでからこの記事をお読みください。

```go
package main

import "fmt"

type unkoOptions struct {
  Text *string
}

func unko(message string, options *unkoOptions) {
  // Optionのハンドル
  text := "Ubuntu"
  // 構造体unkoOptionsのTextに値が入っているか。入っていないか。
  if options.Text != nil {
    text = *options.Text
  }
  fmt.Printf("I'm %s %s\n", message, text)
}
```

### 実行結果

先の例のコードを実行すると、このような結果になります。

```go
func main() {
  text := "Arch Linux"

  //オプションが空
  unko("using", &unkoOptions{})
  // Stdout: I'm using Ubuntu

  //オプションの値が存在
  unko("using", &unkoOptions{Text: &text})
  // Stdout: I'm using Arch Linux
}
```

### 引数用の構造体を用意

引数に任意で値を入力をするとなると、言語の使用上、渡された中身の値が`nil`でも問題ない構造体を用意するのが手っ取り早いです。

```go
//構造体を定義
type unkoOptions struct {
  Text *string
}

func unko(message string, options *unkoOptions) {
```

### 構造体の値を使う

これでオプション自体の実装は終了したので、次にオプションの中の値を使ってあげます。
こちらのコードは、`options.Text`が`nil`ではない即ち、値が存在しているか確かめて、存在していた場合は`text`に代入してあげてます。
なお`options.Text`はポインタであるため先頭に`*`を付けて値を参照してあげてます。

```go
text := "Ubuntu"
//値があるかチェック
if options.Text != nil {
  //あったらtextに代入
  text = *options.Text
}
```

### 出力

あとは出力されるだけです。
`&unkoOptions`に値があるか,ないか,で出力が変わります。

```go
fmt.Printf("I'm %s %s\n", message, text)
```

これで関数の引数にオプションを実装する方法について解説は終わりです。
地味に増長なので、どうにかして減らしたいところですが、実装部分が Option だと分かりやすいためこのままでも良いのかもしれません。
ここまでご愛読いただきありがとうございました。
