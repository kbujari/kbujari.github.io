import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      cover: z
        .object({
          url: image(),
          alt: z.string(),
        })
        .optional(),
      tags: z.array(z.string()),
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
