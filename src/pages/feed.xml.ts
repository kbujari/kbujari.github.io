import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@consts";

export const GET = async () => {
  const posts = await getCollection("posts");
  return rss({
    title: "RSS Feed | Kleidi Bujari",
    description: SITE.description,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      pubDate: post.data.date,
      ...post.data,
      link: `/posts/${post.slug}/`,
    })),
  });
};
