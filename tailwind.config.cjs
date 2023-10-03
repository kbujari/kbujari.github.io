/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Jetbrains Mono Variable"],
      },
      colors: {
        accent: "#404040",
        bg: "#0a0a0a",
        fg: "#a3a3a3",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
};
