export const fetchPosts = async () => {
  const allFiles = import.meta.glob('/src/routes/blog/posts/*.md');
  const iterables = Object.entries(allFiles);

  const allPosts = await Promise.all(
    iterables.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath =
        '/blog/' + path.slice('/src/routes/blog/posts/'.length, -3);

      return {
        meta: metadata,
        path: postPath
      };
    })
  );
  return allPosts;
};
