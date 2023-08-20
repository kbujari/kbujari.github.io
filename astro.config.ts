import { AstroUserConfig, defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";

import remarkToc from "remark-toc";

const config: AstroUserConfig = {
  site: "https://kleidi.ca",
  markdown: {
    shikiConfig: {
      theme: "vitesse-dark",
      wrap: false,
    },
    remarkPlugins: [remarkToc],
  },
  experimental: { assets: true },
  integrations: [sitemap(), tailwind(), robotsTxt(), compress({ img: false })],
};

export default defineConfig(config);
