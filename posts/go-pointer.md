---
title: "【Go】Goのポインタについて"
date: "20221217"
excerpt: "Go でポインタを触る際予め整理したいので、まとめたことを忘備録としてここに記録します"
cover_image: "/images/posts/img9.jpeg"
category: "Go"
author: "Hidemaru"
author_image: "/images/authors/hidemaru.png"
---

Go でポインタを触る際予め整理したいので、まとめたことを忘備録としてここに記録します<br/>
この記事はメモとして書いてるので、比較的短く読み終わります。

## ポインタについて

このコードは Go のポインタについての全てが書かれたコードです。<br/>
このコードをもとにポインタについて解説するので、大まかに目を通してください。

```go
func main() {
  //通常の変数の宣言
	num := 8

  //ポインタ型の変数の宣言して、numのポインタを取得
  var numPointer *int = &num
	fmt.Println(numPointer)
  // Stdout: 0x14000016080

  //ポインタの参照先の値を取得
  //num = *numPointer
  fmt.Println(*numPointer)
  // Stdout: 8
}
```

### アスタリスク(\*)

#### 型の場合

型の場合はポインタ型を宣言する際に使われます。

```go
var numPointer *int = &num
```

#### 変数の場合

ポインタを参照して、中身の値を取得する際に使われます。

```go
fmt.Println(*numPointer)
// Stdout: 8
```

### アンドパサンド(&)

アンドパサンドは変数にのみ使用可能です。<br/>
変数からポインタを取得する際に使われます。

```go
 var numPointer *int = &num
fmt.Println(numPointer)
// Stdout: 0x14000016080
```

これでポインタについて解説は終わりです。<br/>
ここまでご愛読いただきありがとうございました。
