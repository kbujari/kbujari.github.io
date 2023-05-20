<script>
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import '../app.css';

  $: is_root = data.path != '/';

  export let data;
</script>

{#key data.path}
  {#if is_root}
    <Header />
    <Sidebar />
  {/if}
  <main
    class="container z-0 my-20 font-body"
    in:fly={{
      duration: is_root ? 750 : 0,
      delay: 150,
      y: 25,
      easing: cubicOut
    }}
  >
    <slot />
    {#if is_root}
      <Footer />
    {/if}
  </main>
{/key}
