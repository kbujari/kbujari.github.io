import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@consts";

export const GET = async () => {
  const posts = await getCollection("posts", ({ data }) => {
    return import.meta.env.DEV || !data.title.startsWith("[draft]");
  });

  return rss({
    title: "RSS Feed | Kleidi Bujari",
    description: SITE.description,
    site: import.meta.env.SITE,
    items: posts.map(({ slug, data }) => ({
      link: `/posts/${slug}/`,
      pubDate: data.date,
      ...data,
    })),
  });
};
