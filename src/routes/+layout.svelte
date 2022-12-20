<script>
  import { aside } from '$lib/stores/ui-states.js';
  import { fade } from 'svelte/transition';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import '../app.css';

  export let data;
</script>

{#key data.currentRoute}
  {#if data.currentRoute != '/'}
    <Header />
    <Sidebar />
  {/if}
  <main class="container z-0 my-24 font-body" in:fade={{ duration: 150, delay: 150 }} class:blurify={$aside}>
    <slot />
    {#if data.currentRoute != '/'}
      <Footer />
    {/if}
  </main>
{/key}
