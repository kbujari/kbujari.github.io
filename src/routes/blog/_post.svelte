<script>
  import { ArrowLeftCircleIcon } from 'svelte-feather-icons'

  export let title
  export let date
</script>

<div class="max-w-4xl mx-auto mt-12 p-4">
  <div class="flex justify-evenly items-center">
    <a href="/blog" class="link"><ArrowLeftCircleIcon size=36 strokeWidth=1.5 /></a>
    <span>|</span>
    <p>{date}</p>
  </div>
  <h1 class="my-8 text-4xl font-bold text-center">{title}</h1>
  <div class="post-data">
    <slot />
  </div>
</div>
