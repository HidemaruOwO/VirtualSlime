import { defineConfig } from "astro/config";
// import { squooshImageService, defineConfig } from "astro/config";
import { URL } from "./src/consts";
// import commonjs from "@rollup/plugin-commonjs";
import remarkToc from "remark-toc";
import remarkBreaks from "remark-breaks";
import remarkParse from "remark-parse";
import rehypeStringify from "rehype-stringify";
// astro integrations
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: URL,
  integrations: [
    sitemap(),
    tailwind(),
    react(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "slack-dark" },
      remarkPlugins: [remarkToc, remarkBreaks, remarkParse],
      rehypePlugins: [rehypeStringify],
      remarkRehype: { footnoteLabel: "Footnotes" },
      gfm: false,
    }),
  ],
  tailwindConfig: "./tailwind.config.js",
  server: {
    port: 3000,
  },
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});

