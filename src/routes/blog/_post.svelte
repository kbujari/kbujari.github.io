<script>
  export let title
  export let date
  export let length
</script>

<div class="max-w-4xl mx-auto mt-12 p-4">
  <div class="flex justify-evenly items-center">
    <p>{date}</p>
    <span>|</span>
    <a href="/blog" class="link"><p>Back to Posts</p></a>
    <span>|</span>
    <p>Length: {length}</p>
  </div>
  <h1 class="my-8 text-4xl font-bold text-center">{title}</h1>
  <div class="post-data">
    <slot />
  </div>
</div>
