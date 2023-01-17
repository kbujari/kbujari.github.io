export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date, imgurl, topics } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		imgurl,
		topics
	};
}
