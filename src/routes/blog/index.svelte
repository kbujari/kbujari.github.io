<script context="module">
  export const load = async ({ fetch }) => {
    const posts = await fetch('/api/posts.json')
    const allPosts = await posts.json()

    return {
      props: {
        posts: allPosts
      }
    }
  }
</script>

<script>
  import Header from '$lib/components/text/Header.svelte'
  export let posts

  let years = []
  posts.forEach((post) => {
    let year = post.meta.date.substring(0, post.meta.date.indexOf('-'))
    if (years.indexOf(year) == -1) {
      years.push(year)
    }
  })
</script>

<div class="max-w-4xl mx-auto mt-12 p-6">
  <Header text="Blog" size="4" />
  {#each years as year}
    <Header text={year} />
    {#each posts as post}
      {#if post.meta.date.substring(0, post.meta.date.indexOf('-')) === year}
        <a href={post.path}>
          <div class="flex items-center justify-between border border-slate-300 rounded p-3 mb-2">
            <p class="w-full font-bold">{post.meta.title}</p>
            <div class="flex flex-col items-center whitespace-nowrap ml-4">
              <p>Length: {post.meta.length}</p>
              <p>{post.meta.date}</p>
            </div>
          </div>
        </a>
      {/if}
    {/each}
  {/each}
</div>
