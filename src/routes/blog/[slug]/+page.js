import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
  try {
    const post = await import(`../posts/${params.slug}.md`);
    const { title, date, imgurl, topics } = post.metadata;
    const content = post.default;

    return {
      content,
      title,
      date,
      imgurl,
      topics
    };
  } catch (err) {
    throw error(err, 404);
  }
};
