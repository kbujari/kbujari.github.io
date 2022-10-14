<script>
  import { XIcon } from 'svelte-feather-icons'
  import { fly, fade } from 'svelte/transition'
  import { clickOutside } from '$lib/utils/click_outside.js'

  export let menuActive = false
</script>

{#if menuActive}
  <aside class="fixed w-80 h-full bg-blue-900 text-white" use:clickOutside on:outclick={() => (menuActive = false)} in:fly={{ x: -200, duration: 350 }} out:fade={{ duration: 150 }}>
    <div class="flex flex-col w-full h-full p-4" transition:fly={{ y: 15, duration: 350, delay: 300 }}>
      <div>
        <button class="float-right" on:click={() => (menuActive = false)}>
          <XIcon strokeWidth="2" size="32" />
        </button>
      </div>
    </div>
  </aside>
{/if}
