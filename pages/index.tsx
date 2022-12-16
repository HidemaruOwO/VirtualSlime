import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import Post from "../components/Post";
import Document from "../components/Document";
import { getPosts } from "../lib/posts";
import React from "react";

export default function HomePage({ posts }) {
  return (
    <Layout>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3960648628437030"
          crossOrigin="anonymous"
        />
      </Head>
      <h1 className="text-5xl border-b-4 p-5 font-bold">📮 Latest Articles</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post: any, index: number) => (
          <Post key={index} post={post} />
        ))}
      </div>

      <Link
        href="/blog"
        className="block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full"
      >
        More
      </Link>
      <h1 className="text-5xl border-b-4 p-5 font-bold">📚 Latest Documents</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Document
          title="Discord hCaptcha"
          description="Discord hCaptcha"
          image="/images/docs/discord-hcaptcha.png"
          url="https://discord-hcaptcha.doc.v-sli.me/"
        />
      </div>
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
