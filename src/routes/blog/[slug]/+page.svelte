<script>
  import { fade } from 'svelte/transition'
  import { ArrowUpIcon } from 'svelte-feather-icons'
  import Footer from '$lib/components/footer/Footer.svelte'
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

<div class="cont">
  <p class="text-3xl text-center font-bold m-4">{data.title}</p>
  <p class="text-center m-4">Published: {data.date}</p>
  <div class="post-data">
    {#if y > 1000}
      <div class="bg-black rounded-full p-2 border-2 fixed hover:cursor-pointer" on:click={toTop} in:fade out:fade={{ duration: 150 }}>
        <ArrowUpIcon size="36" strokeWidth="1.5" />
      </div>
    {/if}
    <svelte:component this={data.content} />
  </div>
</div>
<Footer />
