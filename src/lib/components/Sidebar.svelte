<script>
  import { clickOutside } from '$lib/utils/click_outside.js';
  import { fly } from 'svelte/transition';
  import { aside, routes } from '$lib/utils/stores.js';
  import IconLinks from '$lib/components/IconLinks.svelte';
  import { X } from 'lucide-svelte';
</script>

{#if $aside}
  <aside class="fixed top-0 z-20 h-full w-72 border-r border-neutral-700 bg-app-bg" use:clickOutside on:outclick={aside.toggle} in:fly={{ x: -200, duration: 350 }}>
    <div class="flex h-full w-full flex-col p-4" transition:fly={{ y: 15, duration: 350, delay: 300 }}>
      <button class="icon self-end" on:click={aside.toggle}>
        <X strokeWidth="2" size="32" />
      </button>
      {#each $routes as route}
        <a class="route w-full border-b border-neutral-700 p-2 font-title text-xl" href={route.src} on:click={aside.toggle}>
          <div>
            {route.name}
          </div>
        </a>
      {/each}
      <div class="mb-2" />
      <IconLinks />
    </div>
  </aside>
{/if}
