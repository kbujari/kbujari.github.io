<script>
  import { fade } from 'svelte/transition';
  import IconLinks from '$lib/components/IconLinks.svelte';
  import { Menu } from 'lucide-svelte';
  import { aside, routes } from '$lib/utils/stores.js';
</script>

<header class="fixed z-10 top-0 bg-app-bg w-full h-16 flex items-center border-b border-neutral-700" class:blurify={$aside} out:fade={{ duration: 100 }}>
  <div class="container w-full flex justify-between items-center gap-8">
    <button class="hover:text-white transition md:hidden" on:click={aside.toggle}>
      <Menu strokeWidth="1.5" size="36" />
    </button>
    <a class="route" href="/">kleidi.ca</a>
    <div class="hidden md:flex grow justify-start gap-12 items-center">
      {#each $routes.slice(1) as route}
        <a href={route.src} class="route">{route.name}</a>
      {/each}
    </div>
    <div class="hidden md:block">
      <IconLinks />
    </div>
  </div>
</header>
