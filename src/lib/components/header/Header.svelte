<script>
  import { MenuIcon } from 'svelte-feather-icons'

  export let sidebar = false
</script>

<header class="absolute top-0 bg-black px-4 w-full h-16 flex items-center justify-between border-b border-b-white">
  <button class="hover:cursor-pointer" on:click={() => (sidebar = !sidebar)}>
    <MenuIcon strokeWidth="1.5" size="32" />
  </button>
</header>
