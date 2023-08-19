import Layout from "../components/Layout";
import React from "react";

function PrivacySection({ title, content }) {
  return (
    <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
      <h3 className="text-2xl mb-4 font-semibold">{title}</h3>
      <p className="mb-3">{content}</p>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <Layout
      title="Privacy Policy"
      description="Virtual Slimeのプライバシーポリシー"
    >
      <h1 className="mx-4 text-5xl border-b-4 pb-5 font-bold">
        プライバシーポリシー
      </h1>

      <PrivacySection
        title="プライバシーポリシー(個人情報保護方針)"
        content={
          <>
            Virtual Slime
            (以下「本サイト」という)は、ユーザーの個人情報について以下のとおりプライバシーポリシー(以下「本ポリシー」という)を定めます。
            <br />
            本ポリシーは、本サイトがどのような個人情報を取得し、どのように利用・共有するか、ユーザーがどのようにご自身の個人情報を管理できるかをご説明するものです。
          </>
        }
      />

      <PrivacySection
        title="1.管理者情報"
        content={
          <>
            本サイトはひでまる個人が運営するサイトです。 <br />
            Email: support@hide0.net
          </>
        }
      />

      <PrivacySection
        title="2.個人情報の取得方法"
        content="本サイトのサービスでユーザーが利用登録をするとき、メールアドレスなど個人を特定できる情報を取得させていただきます。"
      />

      <PrivacySection
        title="3.個人情報の利用目的"
        content={
          <>
            取得した情報は、利用登録の際や重要なお知らせなどがある際に使用されます。
            <br />
            そして、取得した情報は第三者へ提供致しません。
          </>
        }
      />

      <PrivacySection
        title="4.個人データの第三者提供について"
        content="本サイトは、個人データを第三者に提供することは致しません。"
      />
      <PrivacySection
        title="5.保有個人データの開示、訂正"
        content={
          <>
            本サイトは本人から個人情報の開示を求められたときには、遅滞なく本人に対しこれを開示します。
            <br />
            個人情報の利用目的の通知や訂正、追加、削除、利用の停止を希望される方は以下の手順でご請求ください。
          </>
        }
      />
      <PrivacySection
        title="6.個人情報取り扱いに関する相談や苦情の連絡先"
        content="本サイトの個人情報の取り扱いに関するご質問やご不明点、苦情、その他のお問い合わせは以下の連絡先よりご連絡ください。"
      />
      <PrivacySection
        title="7.SSL(Secure Socket Layer)について"
        content={
          <>
            本サイトはSSLに対応しており、WebブラウザとWebサーバーとの通信を暗号化しています。
            <br />
            ユーザーが入力するメールアドレスなどの個人情報は自動的に暗号化されます。
          </>
        }
      />
      <PrivacySection
        title="8.cookieについて"
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
      <PrivacySection
        title="9.プライバシーポリシーの制定日及び改定日"
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
