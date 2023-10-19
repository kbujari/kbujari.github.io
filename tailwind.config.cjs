/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["FreePixel"],
      },
    },
    screens: {
      sm: "640px",
      md: "1024px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
};
