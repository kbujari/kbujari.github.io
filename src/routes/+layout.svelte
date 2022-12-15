<script>
  import { aside } from '$lib/utils/stores.js';
  import { fade } from 'svelte/transition';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import '../app.css';

  export let data;
</script>

<svelte:head>
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="author" content="Kleidi Bujari" />
  <meta name="description" content="Blog, portfolio, and personal website for Kleidi Bujari" />
  <meta property="og:site_name" content="Kleidi Bujari - Personal Website" />
  <meta property="locale" content="en_US" />
  <meta name="theme-color" content="#000" />
  <meta name="color-scheme" content="normal" />
</svelte:head>

{#key data.currentRoute}
  {#if data.currentRoute != '/'}
    <Header />
    <Sidebar />
  {/if}
  <main class="container z-0 my-24 font-body" in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 50 }} class:blurify={$aside}>
    <slot />
    {#if data.currentRoute != '/'}
      <Footer />
    {/if}
  </main>
{/key}
