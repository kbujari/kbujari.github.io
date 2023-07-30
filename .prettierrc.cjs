module.export = {
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: "none",
  printWidth: 80,
  pluginSearchDirs: false,
  jsxSingleQuote: true,
  bracketSpacing: true,
};
