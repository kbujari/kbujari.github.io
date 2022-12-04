<script>
  import IconLinks from '$lib/components/IconLinks.svelte'
  import { MenuIcon } from 'svelte-feather-icons'
  import { fade } from 'svelte/transition'

  export let sidebar = false
</script>

<header class="fixed z-10 top-0 bg-app-bg px-2 w-full h-16 flex items-center border-b border-neutral-700" class:blurify={sidebar} out:fade={{ duration: 150 }}>
  <div class="container w-full flex justify-between items-center gap-8">
    <button class="hover:text-white transition md:hidden" on:click={() => (sidebar = !sidebar)}>
      <MenuIcon strokeWidth="1.5" size="36" />
    </button>
    <a class="route" href="/">kleidi.ca</a>
    <div class="hidden md:flex grow justify-start gap-12 items-center">
      {#each ['Info', 'Blog', 'Projects', 'Photos'] as route}
        <a href={'/' + route.toLowerCase()} class="route">{route}</a>
      {/each}
    </div>
    <div class="hidden md:block">
      <IconLinks />
    </div>
  </div>
</header>
