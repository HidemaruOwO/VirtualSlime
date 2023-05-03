import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import CategoryLabel from "../../components/CategoryLabel";
import SnsButtons from "../../components/SnsButtons";
import TableContents from "../../components/TableConetnts";
import { convDate } from "../../utils/index";
import Post from "../../components/Post";
import { getPosts } from "../../lib/posts";
import markdownToHtml from "../../oreore-zenn-markdown-html";
import Script from "next/script";

export default function PostPage({
  frontmatter: {
    title,
    excerpt,
    category,
    date,
    cover_image,
    author,
    author_image,
  },
  html,
  slug,
  posts,
}) {
  const [tableContents, setTableContents] = useState();
  const contentRef = useRef();
  const router = useRouter();
  const domain: string = "https://v-sli.me";
  const url = domain + router.asPath;

  const H2 = ({ node, ...props }) => {
    return <h2 id={node.position?.start.line.toString()}>{props.children}</h2>;
  };
  const H3 = ({ node, ...props }) => {
    return <h3 id={node.position?.start.line.toString()}>{props.children}</h3>;
  };
  const H4 = ({ node, ...props }) => {
    return <h4 id={node.position?.start.line.toString()}>{props.children}</h4>;
  };
  const H5 = ({ node, ...props }) => {
    return <h5 id={node.position?.start.line.toString()}>{props.children}</h5>;
  };
  const H6 = ({ node, ...props }) => {
    return <h6 id={node.position?.start.line.toString()}>{props.children}</h6>;
  };

  useEffect(() => {
    const headings = contentRef.current.querySelectorAll("h2, h3, h4, h5, h6");
    setTableContents(<TableContents headings={headings} />);
  }, [contentRef]);

  return (
    <Layout title={title} keywords={category} description={excerpt}>
      <Head>
        <Script src="https://embed.zenn.studio/js/listen-embed-event.js" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3960648628437030"
          crossOrigin="anonymous"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={domain + cover_image} />
        <meta property="og:site_name" content="v-sli.me" />
        <meta property="og:local" content="ja_JP" />
        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Hidemaru_OwO" />
        <meta name="twitter:creator" content="@Hidemaru_OwO" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:image" content={domain + cover_image} />
      </Head>
      <div className="blog-back">
        <Link href="/blog" legacyBehavior>
          <a className="shadow-button shadow-button-border-shadow shadow-button-border-shadow--color2">
            Go Back
          </a>
        </Link>
      </div>
      <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6 article-main">
        <CategoryLabel>{category}</CategoryLabel>
        <div className="flex justify-between items-center mt-4">
          <h1 className="mx-auto mb-6 text-center">{title}</h1>
        </div>
        <Image
          width={"768"}
          height={"511"}
          src={cover_image}
          alt=""
          className="w-full rounded mx-auto"
        />
        <SnsButtons title={title} />

        <div className="flex justify-between items-center bg-gray-100 p-2 my-8">
          <div className="flex items-center">
            <Image
              src={author_image}
              alt="Author Image"
              width={40}
              height={40}
              className="mx-4 object-cover rounded-full hidden sm:block"
            />
            <h4>{author}</h4>
          </div>
          <div className="mr-4">{convDate(date)}</div>
        </div>
        {/* table of content */}
        <div className="tablecontent-box">
          <details>
            <summary className="tablecontent-head">
              <i className="zmdi zmdi-edit" /> 目次
            </summary>
            {tableContents}
          </details>
        </div>
        <div className="blog-text mt-2">
          <div
            className="znc"
            ref={contentRef}
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          ></div>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3960648628437030"
            crossOrigin="anonymous"
          ></script>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-3960648628437030"
            data-ad-slot="8178524991"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
      </div>
      <div className="mx-10 mt-4 other-articles">
        <h3 className="my-4 text-3xl font-bold">Other articles</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {posts.map((post: any, index: number) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const html = await markdownToHtml(content || "");

  return {
    props: {
      posts: getPosts()
        .sort((_a, _b) => Math.random() - 0.5)
        .slice(0, 6),
      frontmatter,
      html,
      slug,
    },
  };
}
