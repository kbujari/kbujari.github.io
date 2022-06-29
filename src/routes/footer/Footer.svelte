<script>
  let groups = [
    {
      header: 'info',
      links : [
        { name: 'github', href: 'https://github.com/kbzt' },
        { name: 'mail', href: 'mailto:mail@kleidi.ca' },
        { name: 'resume', href: 'resume.pdf' },
        { name: 'linkedin', href: 'https://www.linkedin.com/in/kleidib/' }
      ]
    },
    {
      header: 'site',
      links : [
        { name: 'homepage', href: '/' },
        { name: 'posts', href: 'posts' },
        { name: 'resume', href: 'projects' },
      ]
    },
    {
      header: 'extras',
      links : [
        { name: 'pgp key', href: 'key.txt' },
        { name: 'source', href: 'https://github.com/kbzt/kleidi.ca/' },
        { name: 'colors', href: 'https://github.com/morhetz/gruvbox' },
        { name: 'font', href: 'https://github.com/bBoxType/FiraSans' }
      ]
    },
  ]
</script>

<div class="flex justify-evenly bg-[#689d6a]">
  {#each groups as group}
    <div class="flex flex-col py-12">
      <h3 class="border-b border-black text-2xl font-medium">{group.header}</h3>
      {#each group.links as {name, href}}
        <a {href} class="text-xl py-px hover:text-[#504945] hover:underline hover:duration-75">{name}</a>
      {/each}
    </div>  
  {/each}
</div>