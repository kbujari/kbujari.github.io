# [kleidi.ca](https://kleidi.ca)

Personal website built with SvelteKit and TailwindCSS, selfhosted and proxied through Cloudflare for caching and DDoS protection.

## Dependencies

- libwebp (optional) [>= 1.2.3-1]

## Building

To generate the static site to `build/`, clone the repo and run: 

```sh
npm run build
```
If libwebp is detected as installed, the webp images used will be created and compressed locally, otherwise falling back to existing copies. 

If you decide to add more images to your version, make sure to let cwebp (installed with libwebp) run so that the webp images are generated accordingly.

<br>

You can preview the production build with: 

```sh
npm run preview
```