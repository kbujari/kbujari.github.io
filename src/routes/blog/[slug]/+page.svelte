<script>
  import { fade } from 'svelte/transition'
  import { ArrowUpIcon } from 'svelte-feather-icons'
  import Footer from '$lib/components/Footer.svelte'

  export let data
  let y

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
</script>

<svelte:head>
  <title>{data.title} - KB</title>
</svelte:head>

<svelte:window bind:scrollY={y} />

<p class="text-3xl text-center font-title m-4">{data.title}</p>
<p class="text-center m-4">Published: {data.date}</p>
<div class="post-data">
  {#if y > 800}
    <div class="bg-black rounded-full p-2 border-2 bottom-6 right-6 fixed hover:cursor-pointer" on:keydown={toTop} on:click={toTop} in:fade out:fade={{ duration: 150 }}>
      <ArrowUpIcon size="36" strokeWidth="1.5" />
    </div>
  {/if}
  <svelte:component this={data.content} />
</div>
