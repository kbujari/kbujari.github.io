<script>
  import IconLinks from '$lib/components/IconLinks.svelte'
  import { MenuIcon } from 'svelte-feather-icons'
  import { fade } from 'svelte/transition'

  export let sidebar = false
</script>

<header class="fixed z-10 top-0 bg-black px-4 w-full h-16 flex items-center border-b border-neutral-700" class:blurify={sidebar} out:fade={{ duration: 150 }}>
  <div class="container w-full flex justify-between items-center gap-8">
    <button class="link md:hidden" on:click={() => (sidebar = !sidebar)}>
      <MenuIcon strokeWidth="1.5" size="32" />
    </button>
    <a class="link text-2xl font-title border-2 rounded-full p-2" href="/">KB</a>
    <div class="hidden md:flex grow justify-start gap-12 items-center">
      {#each ['Info', 'Blog', 'Photos'] as route}
        <a href={'/' + route.toLowerCase()} class="link text-xl font-title">{route}</a>
      {/each}
    </div>
    <div class="hidden md:block">
      <IconLinks />
    </div>
  </div>
</header>
