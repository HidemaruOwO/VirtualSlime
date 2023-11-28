import rss from "@astrojs/rss";
import path from "path";
import { convDateToHyphen } from "../lib/date";

export const get = () => {
  const postImportResult = import.meta.glob("../../posts/*.md", {
    eager: true,
  });
  const posts = Object.values(postImportResult);
  return rss({
    language: "ja",
    title: "Virtual Slime Blog",
    description: "ひでまるのブログサイトです",
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      title: post.frontmatter.title,
      pubDate: convDateToHyphen(post.frontmatter.date),
      description: post.frontmatter.excerpt,
      // content: "aa",
      link: `/blog/${path.basename(post.file, ".md")}`,
    })),
    customData: `<language>ja-jp</language>`,
  });
};
