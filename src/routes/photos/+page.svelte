<script>
  import Title from '$lib/components/Title.svelte';

  export let data;
</script>

<svelte:head>
  <title>Gallery - KB</title>
</svelte:head>

<Title text="Gallery" isBig={true} />
<p>Coming soon.</p>
<div class="columns-1 md:columns-2 xl:columns-3 gap-4 mt-4">
  {#each data.photos as photo}
    <img src={photo.path} alt="wow" class="mb-4" decoding="async" loading="lazy" />
  {/each}
</div>
