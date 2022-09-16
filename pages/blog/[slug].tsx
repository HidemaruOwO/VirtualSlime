import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import hljs from "highlightjs";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import CategoryLabel from "../../components/CategoryLabel";
import SnsButtons from "../../components/SnsButtons";
import TableContents from "../../components/TableConetnts";
import { convDate } from "../../utils/index";

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
  content,
  slug,
}) {
  marked.setOptions({
    langPrefix: "",
    highlight: function (code, lang) {
      return hljs.highlightAuto(code, [lang]).value;
    },
  });

  const [tableContents, setTableContents] = useState();
  const contentRef = useRef();
  const router = useRouter();
  const domain: string = "https://v-sli.me";
  const url = domain + router.asPath;

  useEffect(() => {
    const headings = contentRef.current.querySelectorAll("h2, h3, h4, h5, h6");
    console.log(headings);
    setTableContents(<TableContents headings={headings} />);
  }, [contentRef]);

  return (
    <Layout title={title} keywords={category} description={excerpt}>
      <Head>
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3960648628437030"
          crossOrigin="anonymous"
        />
      </Head>
      <Link href="/blog">
        <div className="blog-back">
          <a className="shadow-button shadow-button-border-shadow shadow-button-border-shadow--color2">
            Go Back
          </a>
        </div>
      </Link>
      <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6 article-main">
        <CategoryLabel>{category}</CategoryLabel>
        <div className="flex justify-between items-center mt-4">
          <h1 className="mx-auto mb-6 text-center">{title}</h1>
        </div>
        <img
          width={"768"}
          height={"511"}
          src={cover_image}
          alt=""
          className="w-full rounded mx-auto"
        />
        <SnsButtons />

        <div className="flex justify-between items-center bg-gray-100 p-2 my-8">
          <div className="flex items-center">
            <img
              src={author_image}
              alt=""
              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
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
            ref={contentRef}
            dangerouslySetInnerHTML={{
              __html: marked(content),
            }}
          ></div>
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
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
