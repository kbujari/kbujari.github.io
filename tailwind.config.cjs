/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px'
    },
    container: {
      center: true,
      padding: '1rem'
    },
    fontFamily: {
      body: ['ibm-plex-sans', 'sans-serif'],
      title: ['ibm-plex-mono', 'monospace']
    },
    extend: {
      colors: {
        'app-bg': '#0d0d0d',
        'app-fg': '#a5a2a2'
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
