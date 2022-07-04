import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

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
    preprocess({
      postcss: true
    }),
    mdsvex({
      extensions: ['.md'],
      layout: {
        blog: 'src/routes/blog/_post.svelte'
      }
    })
  ]
}

export default config
