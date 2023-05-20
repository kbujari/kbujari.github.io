<script>
  import IconLinks from '$lib/components/IconLinks.svelte';
  import { Menu } from 'lucide-svelte';
  import { aside, routes } from '$lib/utils/stores.js';
</script>

<header
  class="fixed top-0 z-10 flex h-16 w-full items-center border-b border-neutral-700 bg-app-bg"
>
  <div class="container flex w-full items-center justify-between gap-8">
    <button
      class="transition hover:text-white md:hidden"
      on:click={aside.toggle}
    >
      <Menu strokeWidth="1.5" size="36" />
    </button>
    <a class="route" href="/">kleidi.ca</a>
    <div class="hidden grow items-center justify-start gap-12 md:flex">
      {#each $routes.slice(1) as route}
        <a href={route.src} class="route">{route.name}</a>
      {/each}
    </div>
    <div class="hidden md:block">
      <IconLinks />
    </div>
  </div>
</header>
