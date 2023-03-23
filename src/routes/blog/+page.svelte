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
    <a href={post.path} class="border border-neutral-700 rounded p-4 w-full hover:text-white">
      <div class="flex flex-col md:flex-row gap-4 md:gap-8">
        <div class="basis-2/5">
          <img src={post.meta.imgurl} alt="blog post descriptor" class="rounded object-cover h-64 w-full" />
        </div>
        <div class="basis-3/5">
          <p class="transition font-title font-bold text-2xl mb-2">{post.meta.title}</p>
          <Tags tags={post.meta.topics.split(' ')} date={post.meta.date} />
        </div>
      </div>
    </a>
  {/each}
</div>
