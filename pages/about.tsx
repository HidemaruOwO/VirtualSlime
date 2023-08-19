import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Post from "../components/Post";
import PageCard from "../components/PageCard";
import { ExternalUrl, Section } from "../components/Pagetools";
import { getPosts } from "../lib/posts";

export default function AboutPage({ posts }) {
  return (
    <Layout title="About" description={"Virtual Slimeについてまとめたページ"}>
      <h1 className="mx-4 text-5xl border-b-4 pb-5 font-bold">About</h1>
      <Section
        title={"Virtual Slime"}
        content={
          <>
            このサイトはNext.jsを使用して作成されています。
            <br />
            Email:{" "}
            <ExternalUrl
              content={"support@hide0.net"}
              url="mailto:support@hide0.net"
            />
          </>
        }
      />
      <Section
        title={"サイトマップ"}
        content={
          <>
            <ul className="ml-8 list-disc">
              <li>
                <Link className="text-blue-400" href="/">
                  / (Home)
                </Link>
              </li>
              <li>
                <Link className="text-blue-400" href="/blog">
                  /blog (Blog)
                </Link>
              </li>
              <li>
                <Link className="text-blue-400" href="/privacy-policy">
                  /privacy-policy (プライバシーポリシー)
                </Link>
              </li>
              <li>
                <Link className="text-blue-400" href="/mi-tos">
                  /mi-tos (ぷよすきー利用規約)
                </Link>
              </li>
            </ul>
          </>
        }
      />
      <Section
        title={"その他のページ"}
        content={
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <PageCard url={"https://mi.v-sli.me"} />
            <PageCard url={"https://hide0.net"} />
            <PageCard url={"https://discord-hcaptcha.doc.v-sli.me"} />
            <PageCard url={"https://old.hide0.net"} />
            <PageCard url={"https://status.hide0.net"} />
            <PageCard url={"https://mc-status.v-sli.me"} />
          </div>
        }
      />

      <Section
        title={"ソースコード"}
        content={
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <PageCard url={"https://github.com/HidemaruOwO/VirtualSlime"} />
            <PageCard url={"https://github.com/HidemaruOwO/VirtualSlime-API"} />
            <PageCard url={"https://github.com/HidemaruOwO/misskey"} />
          </div>
        }
      />
      <Section
        title={"ブログ"}
        content={
          <>
            最新の記事です。気になる記事はありましたか？
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post: any, index: number) => (
                <Post key={index} post={post} />
              ))}
            </div>
          </>
        }
      />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  };
}
