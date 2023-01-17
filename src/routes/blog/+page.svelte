<script>
	import Title from '$lib/components/Title.svelte';
	import Post from '$lib/components/blog/Post.svelte';

	export let data;
</script>

<svelte:head>
	<title>Blog - KB</title>
</svelte:head>

<Title text="Blog" isBig={true} />
<div class="flex flex-col gap-4">
	{#each data.posts as post}
		<Post title={post.meta.title} date={post.meta.date} img={post.meta.imgurl} path={post.path} tags={post.meta.topics} />
	{/each}
</div>
