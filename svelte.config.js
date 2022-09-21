import adapter from '@sveltejs/adapter-static'
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import autoprefixer from 'autoprefixer'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      out: 'build',
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    prerender: {
      default: true
    }
  },
  extensions: ['.svelte', '.md'],
  preprocess: [
    sveltePreprocess({
      postcss: {
        plugins: autoprefixer
      }
    }),
    mdsvex({
      extensions: ['.md']
    })
  ]
}

export default config
