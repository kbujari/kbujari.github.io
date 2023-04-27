<script>
  import Title from '$lib/components/Title.svelte';
  import Tags from '$lib/components/blog/Tags.svelte';
  import Img from '@zerodevx/svelte-img';

  const pictures = Object.entries(
    import.meta.glob('$lib/assets/blog/*/title.{jpg,jpeg,png}', {
      query: { run: '', lqip: '1' },
      import: 'default',
      eager: true
    })
  );

  const getCover = (path) => {
    const ret = pictures.find((p) => `/src/lib/assets${path}/title.jpg` === p[0])[1];
    return ret;
  };

  console.log(pictures)

  export let data;
</script>

<svelte:head>
  <title>Blog - KB</title>
</svelte:head>

<Title text="Blog" isBig={true} />
<div class="flex flex-col gap-4">
  {#each data.posts as post}
    <a href={post.path} class="w-full rounded border border-neutral-700 p-4 hover:text-white">
      <div class="flex flex-col gap-4 md:flex-row md:gap-8">
        <div class="basis-2/5">
          <Img src={getCover(post.path)} alt="" class="h-64 w-full rounded object-cover" />
        </div>
        <div class="basis-3/5">
          <p class="mb-2 font-title text-2xl font-bold transition">{post.meta.title}</p>
          <Tags tags={post.meta.topics.split(' ')} date={post.meta.date} />
        </div>
      </div>
    </a>
  {/each}
</div>
