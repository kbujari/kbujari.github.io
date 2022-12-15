/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      colors: {
        'app-bg': '#000',
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
  }
};
