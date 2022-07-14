<script>
  export let src
  export let alt

  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { DownloadIcon } from 'svelte-feather-icons'
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
  <div class="relative cont">
    <img {src} {alt} class:loaded class="" bind:this={thisImage} loading="lazy" />
    {#if active}
      <div class="absolute top-4 left-4" in:fade={{ duration: 150 }} out:fade={{ duration: 100 }}>
        <button on:click={() => window.open(src.substring(0, src.length - 5), '_blank')} class="link bg-slate-700 p-2 rounded outline outline-2">
          <DownloadIcon strokeWidth="1.5" size="26" />
        </button>
      </div>
    {/if}
  </div>
</Hoverable>

<style>
  img {
    opacity: 0;
    transition: opacity 1.5s ease-out;
  }

  img.loaded {
    opacity: 1;
  }
</style>
