<script>
  import Title from '$lib/components/Title.svelte';
  import Img from '@zerodevx/svelte-img';

  const pictures = import.meta.glob('$lib/assets/gallery/*.{jpg,jpeg,png}', {
    query: { run: '', lqip: '1' },
    import: 'default',
    eager: true
  });
</script>

<svelte:head>
  <title>Gallery - KB</title>
</svelte:head>

<Title text="Gallery" isBig={true} />
<p>Coming soon.</p>
<div class="xl:columns-3 mt-4 columns-1 gap-4 md:columns-2">
  {#each Object.values(pictures) as p}
    <Img src={p} alt="" class="mb-4" />
  {/each}
</div>
