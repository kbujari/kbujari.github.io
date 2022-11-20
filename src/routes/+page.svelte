<script>
  import IconLinks from '$lib/components/IconLinks.svelte'
</script>

<svelte:head>
  <title>Kleidi Bujari</title>
</svelte:head>

<div class="h-screen absolute inset-0 flex flex-col gap-8 justify-center items-center">
  <p class="text-5xl text-slate-300 font-bold pointer-events-none">kleidi bujari</p>
  <IconLinks isSmall={false} />
  <div class="flex items-center gap-4">
    {#each ['Info', 'Blog', 'Projects'] as link}
      <a href="/{link.toLowerCase()}" class="route">{link}</a>
    {/each}
  </div>
</div>
