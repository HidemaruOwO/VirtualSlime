import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://v-sli.me",
  integrations: [sitemap(), tailwind(), react()],
  tailwindConfig: "./tailwind.config.js",
  server: {
    port: 3000,
  },
});
