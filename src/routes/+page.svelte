<script>
  import IconLinks from '$lib/components/IconLinks.svelte';
  import { ArrowRightCircleIcon } from 'svelte-feather-icons';
</script>

<svelte:head>
  <title>Kleidi Bujari</title>
</svelte:head>

<div class="bg-cover h-screen absolute inset-0 flex items-center justify-center backdrop-blur-2xl" style="background-image: url(/stars.jpg);">
  <div class="flex flex-col gap-6 justify-center items-center">
    <p class="text-5xl text-slate-300 font-title font-bold pointer-events-none">Kleidi Bujari</p>
    <IconLinks isSmall={false} />
    <a href="/info" class="route">
      <div class="flex items-center gap-4">
        <p>Enter Site</p>
        <ArrowRightCircleIcon strokeWidth="2" size="48" />
      </div>
    </a>
  </div>
</div>
