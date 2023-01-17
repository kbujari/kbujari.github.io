<script>
	import Title from '$lib/components/Title.svelte';

	//const allPhotoFiles = import.meta.glob('/static/gallery/*.webp');
	//const iterablePhotos = Object.entries(allPhotoFiles);

	//const staticLength = '/static'.length;
</script>

<svelte:head>
	<title>Gallery - KB</title>
</svelte:head>

<Title text="Gallery" isBig={true} />
<p>Coming soon.</p>
<!--
<p>Collection of not very professional photos I've taken. Current pictures are just placeholders until I have enough to fill the page :)</p>
<div class="columns-1 md:columns-2 xl:columns-3 gap-4 mt-4">
  {#each iterablePhotos as photo}
    <ImageLoader src={photo[0].substring(staticLength)} alt="Image taken by myself" />
    <div class="mb-4" />
  {/each}
</div>
-->
