import {
  type AstroUserConfig,
  defineConfig,
  squooshImageService,
} from "astro/config";

import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";

import remarkToc from "remark-toc";

const config = {
  site: "https://4kb.net",
  markdown: {
    shikiConfig: { theme: "vitesse-dark" },
    remarkPlugins: [remarkToc],
  },
  image: { service: squooshImageService() },
  integrations: [
    svelte(),
    sitemap(),
    robotsTxt(),
    compress({
      Image: false,
      Logger: 1,
    }),
  ],
} satisfies AstroUserConfig;

export default defineConfig(config);
