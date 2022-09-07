import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import hljs from "highlightjs";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import CategoryLabel from "../../components/CategoryLabel";
import SnsButtons from "../../components/SnsButtons";
import { convDate } from "../../utils/index";

export default function PostPage({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
}) {
  marked.setOptions({
    langPrefix: "",
    highlight: function (code, lang) {
      return hljs.highlightAuto(code, [lang]).value;
    },
  });

  return (
    <Layout title={title}>
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
        <Image
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

        <div className="blog-text mt-2">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
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
