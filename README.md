[![build](https://github.com/kbzt/kleidi.ca/actions/workflows/build.yml/badge.svg)](https://github.com/kbzt/kleidi.ca/actions/workflows/build.yml) [![license](https://img.shields.io/github/license/kbzt/kleidi.ca)](https://opensource.org/licenses/MIT)

# [kleidi.ca](https://kleidi.ca)

All in one personal website, portfolio, blog, and more built with SvelteKit and TailwindCSS. Prerendered as a static site to be lightweight and speedy.

## Building

The site is built with `npm` and `node >= 18.x`, but can also be done with `yarn` or `pnpm`. Make sure to make the necessary adjustments. To convert all images to the webp format at build, make sure to have `libcwebp` installed, or at least the `cwebp` binary in your system path.

To run locally:

```bash
npm install
npm run dev
```

To output a production build to the `build` directory:

```bash
npm install
npm run build
```
