/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'app-bg': '#000',
        'app-fg': '#cbd5e1'
      },
      fontFamily: {
        'app-font': ['Fira Sans', 'serif']
      }
    }
  },
  plugins: []
}
