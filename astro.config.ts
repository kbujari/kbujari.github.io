import { AstroUserConfig, defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';

const config: AstroUserConfig = {
  site: 'https://kleidi.ca',
  outDir: 'build',
  markdown: {
    shikiConfig: { theme: 'vitesse-dark', wrap: false }
  },
  experimental: {
    assets: true,
    viewTransitions: true
  },
  redirects: {
    '/gh': 'https://github.com/kbujari',
  },
  integrations: [mdx(), sitemap(), tailwind(), robotsTxt(), compress({ img: false })]
};

export default defineConfig(config);
