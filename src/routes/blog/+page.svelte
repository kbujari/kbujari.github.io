<script>
  import Header from '$lib/components/text/Header.svelte'
  export let data
</script>

<div class="max-w-4xl mx-auto mt-12 p-6">
  <Header text="Blog" size="4" />
  {#each data.posts as post}
    <a sveltekit:prefetch href={post.path}>
      <div
        class="flex items-center justify-between border border-slate-600 hover:border-slate-400 duration-300 rounded p-3 mb-2">
        <p class="w-full font-bold">{post.meta.title}</p>
        <div class="flex flex-col items-center whitespace-nowrap ml-4">
          <p>{post.meta.date}</p>
        </div>
      </div>
    </a>
  {/each}
</div>
