/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'app-bg': '#1f1f28',
        'app-fg': '#dcd7ba'
      }
    },
    container: {
      center: true,
      padding: '0.5rem'
    },
    fontFamily: {
      body: ['Fira-Sans', 'sans-serif'],
      title: ['Fira-Code', 'monospace']
    }
  },
  plugins: []
}
