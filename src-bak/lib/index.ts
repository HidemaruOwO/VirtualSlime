import type { BasePost } from "../interface";

export const sortByDate = (a: BasePost, b: BasePost) => {
  return parseInt(b.frontmatter.date) - parseInt(a.frontmatter.date);
};

export const convDate = (date: string) => {
  if (date.length === 8) {
    const year: string = date.slice(0, 4);
    const month: string = date.slice(4, 6);
    const day: string = date.slice(6, 8);
    return `${month}月${day}日, ${year}`;
  }
};
