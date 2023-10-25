import Layout from "../components/Layout";
import React from "react";

import { Section, ExternalUrl } from "../components/Pagetools";

export default function PrivacyPolicyPage() {
  return (
    <Layout
      title="プライバシーポリシー"
      description="Virtual Slimeのプライバシーポリシー"
    >
      <h1 className="mx-4 text-5xl border-b-4 pb-5 font-bold">
        プライバシーポリシー
      </h1>

      <Section
        title="プライバシーポリシー(個人情報保護方針)"
        content={
          <>
            Virtual Slime
            (以下「本サイト」と言います)は、ユーザーの個人情報について以下のとおりプライバシーポリシー(以下「本ポリシー」という)を定めます。
            <br />
            また、
            <ExternalUrl content={"ぷよすきー"} url="https://mi.v-sli.me" />
            は本サイトのサービスです。
            <br />
            本ポリシーは、本サイトがどのような個人情報を取得し、どのように利用・共有するか、ユーザーがどのようにご自身の個人情報を管理できるかをご説明するものです。
          </>
        }
      />

      <Section
        title="1.管理者情報"
        content={
          <>
            本サイトはひでまる個人が運営するサイトです。 <br />
            Email:{" "}
            <ExternalUrl
              content={"support@hide0.net"}
              url="mailto:support@hide0.net"
            />
          </>
        }
      />

      <Section
        title="2.個人情報の取得方法"
        content={
          <>
            本サイトでは以下の情報を収集します。
            <br />
            <br />
            ・Eメールアドレス
            <br />
            ・外部サービスアカウント連携時に取得するトークン・キー（連携を設定した場合）
            <br />
            ・APIキー（ログインの際にブラウザごとに発行されるもの）とIPアドレスの組み合わせ
          </>
        }
      />

      <Section
        title="3.個人情報の利用目的"
        content={
          <>
            取得した情報は以下の目的に限って利用し、この目的以外では、利用しません。
            <br />
            <br />
            ・利用登録の際や重要なお知らせがある際に使用されます。
            <br />
            ・規約違反ユーザーへの制裁
          </>
        }
      />

      <Section
        title="4.個人データの第三者提供について"
        content={
          <>
            法令に基づく要請がある場合を除いて、これらの情報を第三者（本サービス提供のためのサーバー資源を提供する者は第三者ではありません。以下同様。）に開示することはありません。
            <br />
            また、外部に取り扱いを委託することもありません。
          </>
        }
      />
      <Section
        title="5.保有個人データの開示、訂正"
        content={
          <>
            本サイトは本人から個人情報の開示を求められたときには、遅滞なく本人に対しこれを開示します。
            <br />
            個人情報の利用目的の通知や訂正、追加、削除、利用の停止を希望される方は以下の手順でご請求ください。
          </>
        }
      />
      <Section
        title="6.個人情報取り扱いに関する相談や苦情の連絡先"
        content="本サイトの個人情報の取り扱いに関するご質問やご不明点、苦情、その他のお問い合わせは以下の連絡先よりご連絡ください。"
      />
      <Section
        title="7.ユーザー作成コンテンツについて"
        content={
          <>
            公開範囲の制限を設けたユーザー作成コンテンツ（ノート、チャット等）については、法令に基づく要請がある場合を除いて、第三者に開示することはありません。
            <br />
            また、外部に取り扱いを委託することもありません。
          </>
        }
      />
      <Section
        title="8.SSL(Secure Socket Layer)について"
        content={
          <>
            本サイトはSSLに対応しており、WebブラウザとWebサーバーとの通信を暗号化しています。
            <br />
            ユーザーが入力するメールアドレスなどの個人情報は自動的に暗号化されます。
          </>
        }
      />
      <Section
        title="9.cookieについて"
        content={
          <>
            cookieとは、WebサーバーからWebブラウザに送信されるデータのことです。
            <br />
            Webサーバーがcookieを参照することでユーザーのパソコンを識別でき、効率的に本サイトを利用することができます。
            <br />
            本サイトがcookieとして送るファイルは、個人を特定するような情報は含んでおりません。
            <br />
            お使いのWebブラウザの設定により、cookieを無効にすることも可能です。
          </>
        }
      />
      <Section
        title="10.本ページについて"
        content={
          <>
            本プライバシーポリシーは
            <ExternalUrl content={"りんごぱい"} url={"https://misskey.04.si"} />
            の
            <ExternalUrl
              content={"プライバシーポリシー"}
              url="https://misskey.04.si/@grapeapple/pages/privacy"
            />
            を参考・複製・改変して作られています。
            <br />
            よって、あなたは、本利用規約・プライバシーポリシーを複製・改変し、自身のサービスに適用することができますが、あなたないしはプライバシーポリシーが適用されたサービスの利用者に発生した損害等について管理人(
            <ExternalUrl
              content={"support@hide0.net"}
              url="mailto:support@hide0.net"
            />
            )及び
            <ExternalUrl
              content={"GrapeApple氏"}
              url="https://misskey.04.si/@grapeapple"
            />
            は一切の責任を負いかねます。
          </>
        }
      />
      <Section
        title="11.プライバシーポリシーの制定日及び改定日"
        content={
          <>
            制定: 2022年12月07日 <br />
            改定: 2023年8月19日
          </>
        }
      />
    </Layout>
  );
}
