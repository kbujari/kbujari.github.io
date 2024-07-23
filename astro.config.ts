import {
  type AstroUserConfig,
  defineConfig,
} from "astro/config";

import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";

const config = {
  site: "https://4kb.net",
  markdown: {
    shikiConfig: { theme: "vitesse-dark" },
  },
  integrations: [
    sitemap(),
    robotsTxt(),
    compress({
      Image: false,
      Logger: 1,
    }),
  ],
} satisfies AstroUserConfig;

export default defineConfig(config);
