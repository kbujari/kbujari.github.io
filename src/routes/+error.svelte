<script>
  import { page } from '$app/stores'
</script>

<div class="text-center font-title">
  <p class="text-5xl">{$page.status}</p>
  <p class="text-xl">{$page.error.message}</p>

  <p class="mt-16">
    Looks like this page doesn't exist, try going back
    <a href="/" class="link">home.</a>
  </p>
</div>
