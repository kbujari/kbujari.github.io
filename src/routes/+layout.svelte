<script>
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing'
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import '../app.css';

  $: time = (data.path != '/') ? 750 : 0;

  export let data;
</script>

{#key data.path}
  {#if data.path != '/'}
    <Header />
    <Sidebar />
  {/if}
  <main class="container z-0 my-20 font-body" in:fly={{ duration: time, delay: 150, y: 25, easing: cubicOut }}>
    <slot />
    {#if data.path != '/'}
      <Footer />
    {/if}
  </main>
{/key}
