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
  <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
</svelte:head>

{#key data.currentRoute}
  {#if data.currentRoute != '/'}
    <Header bind:sidebar={menuActive} />
    <Sidebar bind:menuActive />
  {/if}
  <main class="container z-0 my-24 font-body" in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }} class:blurify={menuActive}>
    <slot />
    {#if data.currentRoute != '/'}
      <Footer />
    {/if}
  </main>
{/key}

<style>
  :global(h2) {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 6px;
    margin-bottom: 4px;
    color: rgb(148 163 184);
    font-weight: 700;
  }
</style>
