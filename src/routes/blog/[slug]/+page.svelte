<script>
  import { fade } from 'svelte/transition';
  import { ArrowUp } from 'lucide-svelte';
  import Tags from '$lib/components/blog/Tags.svelte';
  import './code-highlight.css';

  let y;
  export let data;

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const date = new Date(Date.parse(data.date));
</script>

<svelte:head>
  <title>{data.title} - KB</title>
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content={data.title} />
</svelte:head>

<svelte:window bind:scrollY={y} />

<span>{date}</span>
{data.title}
<Tags tags={data.topics.split(' ')} date={data.date} />

<article class="prose-a:link prose max-w-none md:prose-lg prose-img:rounded">
  <svelte:component this={data.content} />
  {#if y > 800}
    <div
      class="icon fixed bottom-6 right-6 rounded-full border-2 bg-app-bg p-2 hover:cursor-pointer"
      on:keydown={toTop}
      on:click={toTop}
      in:fade
      out:fade={{ duration: 150 }}
    >
      <ArrowUp size="36" strokeWidth="1.5" />
    </div>
  {/if}
</article>
