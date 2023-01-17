export const fetchPosts = async () => {
	const allFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterables = Object.entries(allFiles);

	const allPosts = await Promise.all(
		iterables.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);
	return allPosts;
};
