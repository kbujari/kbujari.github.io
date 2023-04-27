import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from '@zerodevx/svelte-img/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), imagetools()]
};

export default config;
