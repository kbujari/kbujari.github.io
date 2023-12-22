import { type AstroUserConfig, defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";

import remarkToc from "remark-toc";

const config = {
  site: "https://kleidi.ca",
  markdown: {
    shikiConfig: { theme: "vitesse-dark" },
    remarkPlugins: [remarkToc],
  },
  integrations: [
    svelte(),
    tailwind(),
    sitemap(),
    robotsTxt(),
    compress({
      Image: false,
      Logger: 1,
    }),
  ],
} satisfies AstroUserConfig;

export default defineConfig(config);
