<script>
  import Title from '$lib/components/Title.svelte'
  import ImageLoader from '$lib/components/image/ImageLoader.svelte'

  const allPhotoFiles = import.meta.glob('/static/gallery/*.webp')
  const iterablePhotos = Object.entries(allPhotoFiles)

  const staticLength = '/static'.length
  const gapSize = "4"
</script>

<svelte:head>
  <title>Gallery - KB</title>
</svelte:head>

<Title text="Gallery" isBig={true} />
<div class="columns-1 md:columns-2 xl:columns-3 gap-{gapSize} mt-{gapSize}">
  {#each iterablePhotos as photo}
    <ImageLoader src={photo[0].substring(staticLength)} alt="Image taken by myself" />
    <div class="mb-{gapSize}" />
  {/each}
</div>
