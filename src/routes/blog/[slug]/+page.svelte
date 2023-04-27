<script>
  import { fade } from 'svelte/transition';
  import { ArrowUp } from 'lucide-svelte';
  import Tags from '$lib/components/blog/Tags.svelte';
  import Img from '@zerodevx/svelte-img';
  import './code-highlight.css';

  let y;
  export let data;

  const cover = Object.entries(
    import.meta.glob('$lib/assets/blog/*/title.{jpg,jpeg,png}', {
      query: { run: '', lqip: '1' },
      import: 'default',
      eager: true
    })
  ).find((p) => `/src/lib/assets${data.path}/title.jpg` === p[0])[1];

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
  <meta property="og:image" content={cover} />
</svelte:head>

<svelte:window bind:scrollY={y} />

<div class="relative h-64 bg-white md:h-96">
  <Img src={cover} alt="" class="h-full w-full object-cover brightness-50" />
  <p class="absolute top-1/2 left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 text-center font-title text-4xl font-bold">{data.title}</p>
</div>

<Tags tags={data.topics.split(' ')} date={data.date} />

<article class="prose-a:link prose max-w-none md:prose-lg prose-img:rounded">
  <svelte:component this={data.content} />
  {#if y > 800}
    <div class="icon fixed bottom-6 right-6 rounded-full border-2 bg-app-bg p-2 hover:cursor-pointer" on:keydown={toTop} on:click={toTop} in:fade out:fade={{ duration: 150 }}>
      <ArrowUp size="36" strokeWidth="1.5" />
    </div>
  {/if}
</article>
