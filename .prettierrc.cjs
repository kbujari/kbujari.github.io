module.export = {
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "none",
  printWidth: 80,
  pluginSearchDirs: false,
  proseWrap: "always",
  bracketSpacing: true,
  bracketSameLine: true,
};
