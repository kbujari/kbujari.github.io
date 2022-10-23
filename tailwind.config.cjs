/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
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
