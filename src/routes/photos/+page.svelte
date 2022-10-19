<script>
  import Title from '$lib/components/text/Title.svelte'
  import ImageLoader from '$lib/components/image/ImageLoader.svelte'

  const allPhotoFiles = import.meta.glob('/static/gallery/*.webp')
  const iterablePhotos = Object.entries(allPhotoFiles)

  const staticLength = '/static'.length
</script>

<svelte:head>
  <title>Gallery - KB</title>
</svelte:head>

<Title text="Gallery" size="4" />
<div>A collection of photos taken by me.</div>
<div class="md:columns-2 columns-1 gap-4">
  {#each iterablePhotos as photo}
    <ImageLoader src={photo[0].substring(staticLength)} alt="Image taken by myself"/>
    <div class="mb-4"/>
  {/each}
</div>
