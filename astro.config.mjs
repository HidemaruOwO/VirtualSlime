import { defineConfig } from "astro/config";
// import { squooshImageService, defineConfig } from "astro/config";
import { URL } from "./src/consts";
// import commonjs from "@rollup/plugin-commonjs";
// astro integrations
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
// remark plugins
import { remarkRender } from "./src/lib/markdown";

// https://astro.build/config
export default defineConfig({
  site: URL,
  integrations: [
    sitemap(),
    tailwind(),
    react(),
    mdx({ remarkPlugins: [remarkRender] }),
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
