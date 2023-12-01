import rss from "@astrojs/rss";
import path from "path";
import { convDateToHyphen } from "../lib/date";
import { mdToHtml } from "../lib/markdown";

export const get = async () => {
  const postImportResult = import.meta.glob("../../posts/*.md", {
    eager: true,
  });
  const posts = Object.values(postImportResult);

  const items = await Promise.all(
    posts.map(async (post) => ({
      title: post.frontmatter.title,
      pubDate: convDateToHyphen(post.frontmatter.date),
      description: post.frontmatter.excerpt,
      content: await mdToHtml(post.rawContent()),
      link: `/blog/${path.basename(post.file, ".md")}`,
    }))
  );

  return rss({
    language: "ja",
    title: "Virtual Slime Blog",
    description: "ひでまるのブログサイトです",
    site: import.meta.env.SITE,
    items: items,
    customData: `<language>ja-jp</language>`,
  });
};
