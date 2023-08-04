/** @type {import('tailwindcss').Config} */

const def = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      md: "720px",
    },
    fontFamily: {
      mono: [def.fontFamily.mono],
      sans: ["Fira Sans", ...def.fontFamily.sans],
    },
  },
};
