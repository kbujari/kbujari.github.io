<script>
  const links = [
    { href: '/', text: 'home' },
    { href: '/blog', text: 'blog' },
    { href: '/photos', text: 'photos' }
  ]

  const year = new Date().getFullYear()
</script>

<div class="font-title w-full border-t border-neutral-700 mt-12 pt-12 flex flex-col items-center">
  <!--
  <div class="flex justify-evenly w-full">
    {#each links as link}
      <a href={link.href} class="text-xl link">{link.text}</a>
    {/each}
  </div>
  -->
  <div>
    <p>Kleidi Bujari - {year}</p>
  </div>
</div>
