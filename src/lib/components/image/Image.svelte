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
  <div class="relative">
    <img {src} {alt} class:loaded bind:this={thisImage} loading="lazy" class="w-full aspect-auto" />
    {#if active}
      <div class="absolute top-4 left-4" in:fade={{ duration: 150 }} out:fade={{ duration: 100 }}>
        <button class:loaded on:click={() => window.open(src.substring(0, src.length - 5), '_blank')} class="icon bg-black p-3 rounded-full border-2 border-white">
          <DownloadIcon strokeWidth="1.5" size="26" />
        </button>
      </div>
    {/if}
  </div>
</Hoverable>

<style>
  img,
  button {
    opacity: 0;
    transition: opacity 1.5s ease-out;
  }

  img.loaded,
  button.loaded {
    opacity: 1;
  }
</style>
