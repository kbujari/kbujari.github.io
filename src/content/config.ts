import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
});

const resources = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    links: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        href: z.string(),
      }),
    ),
  }),
});

export const collections = { posts, resources };
