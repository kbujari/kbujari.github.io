/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        'app-font': ['Fira Sans']
      }
    }
  },
  plugins: []
}
