import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@consts";

export const get = async () => {
  const posts = await getCollection("blog");
  return rss({
    title: "RSS Feed | Kleidi Bujari",
    description: SITE.description,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.slug}/`,
    })),
  });
};
