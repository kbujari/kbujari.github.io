<script>
  import { aside } from '$lib/utils/stores.js';
  import { fade } from 'svelte/transition';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import '../app.css';

  export let data;

  const _in = { duration: 150, delay: 150 };
  const _out = { duration: 100 };
</script>

{#key data.path}
  {#if data.path != '/'}
    <Header />
    <Sidebar />
  {/if}
  <main class="container z-0 my-20 font-body" in:fade={_in} out:fade={_out} class:blurify={$aside}>
    <slot />
    {#if data.path != '/'}
      <Footer />
    {/if}
  </main>
{/key}
