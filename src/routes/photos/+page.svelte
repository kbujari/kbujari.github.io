<script>
  import Title from '$lib/components/Title.svelte';

  export let data;
</script>

<svelte:head>
  <title>Gallery - KB</title>
</svelte:head>

<Title text="Gallery" isBig={true} />
<p>Coming soon.</p>
<div class="xl:columns-3 mt-4 columns-1 gap-4 md:columns-2">
  {#each data.photos as photo}
    <img src={photo.path} alt="wow" class="mb-4" decoding="async" loading="lazy" />
  {/each}
</div>
