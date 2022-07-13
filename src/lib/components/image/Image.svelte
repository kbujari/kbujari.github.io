<script>
  export let src
  export let alt

  import { onMount } from 'svelte'
  import Hoverable from './Hoverable.svelte'

  let loaded = false
  let thisImage

  onMount(() => {
    thisImage.onload = () => {
      loaded = true
    }
  })
</script>

<Hoverable let:hovering={active}>
  <img {src} {alt} class:loaded bind:this={thisImage} loading="lazy" />
  {#if active}
    <p>neato</p>
  {/if}
</Hoverable>

<style>
  img {
    opacity: 0;
    transition: opacity 1200ms ease-out;
    transition: filter 0.1s;
  }

  img.loaded {
    opacity: 1;
  }

  img:hover {
    filter: brightness(50%);
  }
</style>
