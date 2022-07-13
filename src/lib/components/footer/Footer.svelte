<script>
  const links = [
    { href: '/', text: 'home' },
    { href: '/blog', text: 'blog' },
    { href: '/photos', text: 'photos' }
  ]
</script>

<div class="w-full border-t border-slate-600 mt-12 pt-12 flex flex-col justify-evenly">
  {#each links as link}
    <a href={link.href} class="text-xl">{link.text}</a>
  {/each}
</div>
