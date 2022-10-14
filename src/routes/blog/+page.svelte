<script>
  import Header from '$lib/components/text/Header.svelte'
  export let data

  let years = []
  data.posts.forEach((post) => {
    const year = post.meta.date.substring(0, post.meta.date.indexOf('-'))
    if (years.indexOf(year) == -1) {
      years.push(year)
    }
  })
</script>

<svelte:head>
  <title>Blog - KB</title>
</svelte:head>

<div class="cont">
  <Header text="Blog" size="4" />
  {#each years as year}
    <Header text={year} />
    {#each data.posts as post}
      <a sveltekit:prefetch href={post.path}>
        <div class="flex items-center justify-between border border-slate-600 hover:border-slate-400 duration-300 rounded p-3 mb-2">
          <p class="w-full font-bold">{post.meta.title}</p>
          <div class="flex flex-col items-center whitespace-nowrap ml-4">
            <p>{post.meta.date}</p>
          </div>
        </div>
      </a>
    {/each}
  {/each}
</div>
