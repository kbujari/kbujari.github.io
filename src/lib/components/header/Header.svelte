<script>
  import { MenuIcon } from 'svelte-feather-icons'
  import { fade } from 'svelte/transition'

  export let sidebar = false
</script>

<header class="fixed z-10 top-0 bg-black px-4 w-full h-16 flex items-center justify-between border-b border-neutral-700" out:fade={{ duration: 150 }}>
  <button class="hover:cursor-pointer" on:click={() => (sidebar = !sidebar)}>
    <MenuIcon strokeWidth="1.5" size="32" />
  </button>
  <p>KB</p>
</header>
