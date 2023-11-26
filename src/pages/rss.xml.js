import rss from "@astrojs/rss";

export const get = () =>
  rss({
    language: "ja",
    title: "ブログサイト",
    description: "ブログサイトの説明",
    site: import.meta.env.SITE,
    items: import.meta.glob("./**/*.md"),
    customData: `<language>en-us</language>`,
  });
