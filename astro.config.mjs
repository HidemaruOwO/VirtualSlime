import { defineConfig } from "astro/config";
// import { squooshImageService, defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { URL } from "./src/consts";
// import commonjs from "@rollup/plugin-commonjs";

// https://astro.build/config
export default defineConfig({
  site: URL,
  integrations: [sitemap(), tailwind(), react()],
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
