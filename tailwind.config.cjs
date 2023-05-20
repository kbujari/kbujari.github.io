/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
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
      body: ['Fira-Sans', 'sans-serif'],
      title: ['monospace']
    },
    extend: {
      colors: {
        'app-bg': '#16161d',
        'app-fg': colors.neutral
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.300'),
            h1: {
              fontFamily: 'monospace',
              fontWeight: '800',
              color: theme('colors.red.400')
            },
            h2: {
              fontFamily: 'monospace',
              fontWeight: '700',
              color: theme('colors.neutral.200')
            },
            'ol li::marker': {
              color: theme('colors.neutral.100')
            },
            blockquote: {
              color: theme('colors.neutral.300'),
              backgroundColor: theme('colors.neutral.900'),
              borderRadius: '0.25rem',
              padding: '2px'
            },
            img: {
              borderRadius: '0.25rem',
              margin: 'auto'
            },
            strong: { color: theme('colors.neutral.100') }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
