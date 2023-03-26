<script>
  import IconLinks from '$lib/components/IconLinks.svelte';
  import { ArrowRightCircleIcon } from 'lucide-svelte';
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Kleidi Bujari</title>
</svelte:head>

<div class="absolute inset-0 flex h-screen items-center justify-center bg-cover backdrop-blur-2xl" style="background-image: url(/stars.jpg.webp);">
  <div class="flex flex-col items-center justify-center gap-6" in:fade={{ duration: 800, delay: 650 }}>
    <p class="pointer-events-none font-title text-5xl font-bold text-slate-300">Kleidi Bujari</p>
    <IconLinks isSmall={false} />
    <a href="/info" class="route">
      <div class="flex items-center gap-4">
        <p>Enter Site</p>
        <ArrowRightCircleIcon strokeWidth="2" size="48" />
      </div>
    </a>
  </div>
</div>
