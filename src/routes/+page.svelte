<script>
  import IconLinks from '$lib/components/IconLinks.svelte';
  import { onMount } from 'svelte';
  import { ArrowRightCircleIcon } from 'lucide-svelte';
  import { fade } from 'svelte/transition';

  let t = false;
  onMount(() => (t = true));
</script>

<svelte:head>
  <title>Kleidi Bujari</title>
</svelte:head>

<div class="bg-cover h-screen absolute inset-0 flex items-center justify-center backdrop-blur-2xl" style="background-image: url(/stars.jpg.webp);">
  {#if t}
    <div class="flex flex-col gap-6 justify-center items-center" in:fade={{ duration: 800 }}>
      <p class="text-5xl text-slate-300 font-title font-bold pointer-events-none">Kleidi Bujari</p>
      <IconLinks isSmall={false} />
      <a href="/info" class="route">
        <div class="flex items-center gap-4">
          <p>Enter Site</p>
          <ArrowRightCircleIcon strokeWidth="2" size="48" />
        </div>
      </a>
    </div>
  {/if}
</div>
