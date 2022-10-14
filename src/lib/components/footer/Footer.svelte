<script>
  const links = [
    { href: '/', text: 'home' },
    { href: '/blog', text: 'blog' },
    { href: '/photos', text: 'photos' }
  ]

  const year = new Date().getFullYear()
</script>

<div class="w-full border-t border-slate-600 mt-12 pt-12 flex flex-col items-center">
  <div class="flex justify-evenly w-full">
    {#each links as link}
      <a href={link.href} class="text-xl link">{link.text}</a>
    {/each}
  </div>
  <div class="my-16">
    <p>Kleidi Bujari - {year}</p>
  </div>
</div>
