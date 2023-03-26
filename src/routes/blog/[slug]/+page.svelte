<script>
  import { fade } from 'svelte/transition';
  import { ArrowUp } from 'lucide-svelte';
  import Tags from '$lib/components/blog/Tags.svelte';
  import './code-highlight.css';

  export let data;
  let y;

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
</script>

<svelte:head>
  <title>{data.title} - KB</title>
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content={data.title} />
  <meta property="og:image" content={data.imgurl} />
</svelte:head>

<svelte:window bind:scrollY={y} />

<div class="flex h-64 items-center justify-center bg-cover bg-center bg-no-repeat p-8 md:h-96" style="background-image: linear-gradient(0deg, #00000090 60%, #ffffff01 100%), url({data.imgurl});">
  <p class="text-center font-title text-4xl font-bold">{data.title}</p>
</div>

<Tags tags={data.topics.split(' ')} date={data.date} />

<article class="prose-a:link prose max-w-none md:prose-lg">
  <svelte:component this={data.content} />
  {#if y > 800}
    <div class="icon fixed bottom-6 right-6 rounded-full border-2 bg-app-bg p-2 hover:cursor-pointer" on:keydown={toTop} on:click={toTop} in:fade out:fade={{ duration: 150 }}>
      <ArrowUp size="36" strokeWidth="1.5" />
    </div>
  {/if}
</article>
