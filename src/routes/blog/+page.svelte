<script>
  import Title from '$lib/components/Title.svelte';
  import Tags from '$lib/components/blog/Tags.svelte';

  export let data;
  console.log(data.posts[0].meta)
</script>

<svelte:head>
  <title>Blog - KB</title>
</svelte:head>

<Title text="Blog" isBig={true} />

<div class="flex flex-col gap-3 mt-4">
  {#each data.posts as post}
    <a href={post.path} class="hover:text-white transition">
      <div class="flex justify-between border-b-2 border-dotted border-neutral-700 rounded p-2">
        <span class="text-xl"> {post.meta.title} </span>
        <span class="text-neutral-500"> {post.meta.date} </span>
      </div>
    </a>
  {/each}
</div>
