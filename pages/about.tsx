import Layout from "../components/Layout";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Layout
      title="About Virtual Slime"
    >
      <h1 className="text-5xl border-b-4 pb-5 font-bold">About</h1>

      <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
        <h3 className="text-2xl mb-3">Virtual Slime Blog</h3>

        <p className="mb-3">このサイトはNextjsを使用しています</p>
        <h3 className="text-2xl my-2 font-medium text-slate-700">
          サイトマップ
        </h3>
        <ul className="ml-8 list-disc">
          <li>
            <Link className="text-blue-400" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-blue-400" href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="text-blue-400" href="/privacy-policy">
              プライバシーポリシー
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
