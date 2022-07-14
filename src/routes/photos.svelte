<script>
  import Header from '$lib/components/text/Header.svelte'
  import ImageLoader from '$lib/components/image/ImageLoader.svelte'

  const allPhotoFiles = import.meta.glob('/static/gallery/*.webp')
  const iterablePhotos = Object.entries(allPhotoFiles)

  const staticLength = '/static'.length
</script>

<div class="max-w-4xl mx-auto mt-12 p-6">
  <Header text="Gallery" size="4" />
  <div class="w-full grid grid-cols-2 items-start">
    <div class="grid gap-4 pr-2">
      {#each iterablePhotos.slice(0, iterablePhotos.length / 2) as x}
        <ImageLoader src={x[0].substring(staticLength)} alt="Left Column, One of my photos" />
      {/each}
    </div>
    <div class="grid gap-4 pl-2">
      {#each iterablePhotos.slice(iterablePhotos.length / 2) as x}
        <ImageLoader src={x[0].substring(staticLength)} alt="Right Column, One of my photos" />
      {/each}
    </div>
  </div>
</div>
