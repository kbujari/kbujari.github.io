/** @type {import("prettier").Config} */
const config = {
  plugins: [
    "prettier-plugin-astro",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "none",
  printWidth: 80,
  proseWrap: "always",
  bracketSpacing: true,
  bracketSameLine: true,
};

export default config;
