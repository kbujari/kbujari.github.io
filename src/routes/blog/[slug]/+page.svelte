<script>
  import { fade } from 'svelte/transition'
  import { ArrowUpIcon } from 'svelte-feather-icons'

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

<div class="bg-cover bg-center bg-no-repeat h-64 md:h-96 p-8 flex justify-center items-center" style="background-image: linear-gradient(0deg, #00000090 60%, #ffffff01 100%), url({data.imgurl});">
  <p class="text-4xl text-center font-title font-bold">{data.title}</p>
</div>
<div class="border rounded border-neutral-700 my-8 p-4 flex items-center justify-center md:justify-between">
  <p>Published: {data.date}</p>
  <div class="hidden md:flex flex-wrap gap-2 my-2">
    {#each data.topics.split(' ') as tag}
      <p class="rounded p-2 border border-neutral-700 pointer-events-none">{tag}</p>
    {/each}
  </div>
</div>
<div class="post-data">
  {#if y > 800}
    <div class="bg-black rounded-full p-2 border-2 bottom-6 right-6 fixed hover:cursor-pointer" on:keydown={toTop} on:click={toTop} in:fade out:fade={{ duration: 150 }}>
      <ArrowUpIcon size="36" strokeWidth="1.5" />
    </div>
  {/if}
  <div class="flex flex-col">
    <svelte:component this={data.content} />
  </div>
</div>
