import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "./date";

const files = fs.readdirSync(path.join("posts"));

export function getPosts() {
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
      slug,
      content,
      frontmatter,
    };
  });

  return posts.sort(sortByDate);
}
