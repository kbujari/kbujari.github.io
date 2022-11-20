/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'app-bg': '#171717',
        'app-fg': '#d4d4d4'
      }
    },
    container: {
      center: true,
      padding: '1rem'
    },
    fontFamily: {
      body: ['Fira-Sans', 'sans-serif'],
      title: ['monospace']
    }
  },
}
