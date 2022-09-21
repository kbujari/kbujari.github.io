<script>
  import '../app.css'
  import { fade } from 'svelte/transition'

  export const prerender = true
  export let data
</script>

<svelte:head>
  <title>Kleidi Bujari</title>
  <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
</svelte:head>

{#key data.currentRoute}
  <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot />
  </main>
{/key}

<style>
  :global(body) {
    background-color: #000;
    font-family: 'Fira Sans';
    color: rgb(203 213 225);
  }

  :global(.link) {
    color: rgb(203, 213, 225);
    transition: color 150ms;
    text-decoration: underline;
    font-weight: bold;
  }

  :global(.link:hover) {
    color: rgb(248 250 252);
  }

  :global(p, li) {
    font-size: 1.125rem;
    line-height: 1.625;
  }

  :global(ol) {
    list-style-type: decimal;
    padding-left: 30px;
  }

  :global(h2) {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 6px;
    margin-bottom: 4px;
    color: rgb(148 163 184);
    font-weight: 700;
  }

  :global(.post-data a) {
    color: rgb(203, 213, 225);
    transition: color 150ms;
    text-decoration: underline;
    font-weight: bold;
  }

  :global(.post-data a:hover) {
    color: rgb(248 250 252);
  }

  :global(.post-data img) {
    text-align: center;
  }
</style>
