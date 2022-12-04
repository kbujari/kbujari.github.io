<script>
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import Sidebar from '$lib/components/Sidebar.svelte'
  import { fade } from 'svelte/transition'
  import '../app.css'

  export let data
  let menuActive = false
</script>

<svelte:head>
  <link rel="shortcut icon" href="/key.svg" type="image/x-icon" />
  <meta name="author" content="Kleidi Bujari" />
  <meta name="description" content="Blog, portfolio, and personal website for Kleidi Bujari" />
  <meta name="keywords" content="blog portfolio resume software engineer computer" />
  <meta property="og:site_name" content="Kleidi Bujari - Personal Website" />
  <meta property="locale" content="en_US" />
  <meta name="theme-color" content="#000" />
  <meta name="color-scheme" content="normal" />
</svelte:head>

{#key data.currentRoute}
  {#if data.currentRoute != '/'}
    <Header bind:sidebar={menuActive} />
    <Sidebar bind:menuActive />
  {/if}
  <main class="container z-0 my-24 font-body" in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 50 }} class:blurify={menuActive}>
    <slot />
    {#if data.currentRoute != '/'}
      <Footer />
    {/if}
  </main>
{/key}
