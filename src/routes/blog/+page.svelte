<script>
  import Title from '$lib/components/Title.svelte';
  import Tags from '$lib/components/blog/Tags.svelte';

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
          <img src={post.meta.imgurl} alt="blog post descriptor" class="h-64 w-full rounded object-cover" />
        </div>
        <div class="basis-3/5">
          <p class="mb-2 font-title text-2xl font-bold transition">{post.meta.title}</p>
          <Tags tags={post.meta.topics.split(' ')} date={post.meta.date} />
        </div>
      </div>
    </a>
  {/each}
</div>
