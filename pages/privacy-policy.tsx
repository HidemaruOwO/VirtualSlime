import Layout from "../components/Layout";

export default function PrivacyPolicyPage() {
  return (
    <Layout title="About DevSpace">
      <h1 className="text-5xl border-b-4 pb-5 font-bold">
        プライバシーポリシー
      </h1>

      <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
        <h3 className="text-2xl mb-4 font-semibold">
          プライバシーポリシー(個人情報保護方針)
        </h3>

        <p className="mb-3">
          v-sli.me(以下「本サイト」という)は、ユーザーの個人情報について以下のとおりプライバシーポリシー(以下「本ポリシー」という)を定めます。
          <br />
          本ポリシーは、本サイトがどのような個人情報を取得し、どのように利用・共有するか、ユーザーがどのようにご自身の個人情報を管理できるかをご説明するものです。
          <br />
          <h3 className="text-2xl my-2 font-medium text-slate-700">
            1.事業者情報
          </h3>
          本サイトはひでまる個人が運営するサイトです。 Email: support@hide0.net
          Discord: ひでまる#0743
          <h3 className="text-2xl my-2 font-medium text-slate-700">
            2.個人情報の取得方法
          </h3>
          本サイトのサービスでユーザーが利用登録をするとき、メールアドレスなど個人を特定できる情報を取得させていただきます。
          <h3 className="text-2xl my-2 font-medium text-slate-700">
            3.個人情報の利用目的
          </h3>
          取得した情報は、利用登録の際や重要なお知らせなどがある際に使用されます。
          そして、取得した情報は第三者へ提供致しません。
          <h3 className="text-2xl my-2 font-medium text-slate-700">
            4.個人データの第三者提供について
          </h3>
          本サイトは、個人データを第三者に提供することは致しません。
          <h3 className="text-2xl my-2 font-medium text-slate-700">
            5.保有個人データの開示、訂正
          </h3>
          本サイトは本人から個人情報の開示を求められたときには、遅滞なく本人に対しこれを開示します。個人情報の利用目的の通知や訂正、追加、削除、利用の停止を希望される方は以下の手順でご請求ください。
          Email: support@hide0.net Discord: ひでまる#0743
          <h3 className="text-2xl my-2 font-medium text-slate-700">
            6.個人情報取り扱いに関する相談や苦情の連絡先
          </h3>
          本サイトの個人情報の取り扱いに関するご質問やご不明点、苦情、その他のお問い合わせは以下の連絡先よりご連絡ください。
          Email: support@hide0.net Discord: ひでまる#0743
          <h3 className="text-2xl my-2 font-medium text-slate-700">
            7.SSL(Secure Socket Layer)について
          </h3>
          本サイトはSSLに対応しており、WebブラウザとWebサーバーとの通信を暗号化しています。
          ユーザーが入力するメールアドレスなどの個人情報は自動的に暗号化されます。
          <h3 className="text-2xl my-2 font-medium text-slate-700">
            8.cookieについて
          </h3>
          cookieとは、WebサーバーからWebブラウザに送信されるデータのことです。
          Webサーバーがcookieを参照することでユーザーのパソコンを識別でき、効率的に本サイトを利用することができます。
          本サイトがcookieとして送るファイルは、個人を特定するような情報は含んでおりません。
          お使いのWebブラウザの設定により、cookieを無効にすることも可能です。
          <h3 className="text-2xl my-2 font-medium text-slate-700">
            9.プライバシーポリシーの制定日及び改定日 制定: 2022年12月07日
          </h3>
        </p>
      </div>
    </Layout>
  );
}
