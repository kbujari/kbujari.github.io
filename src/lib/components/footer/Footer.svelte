<script>
  const groups = [
    {
      header: 'info',
      links: [
        { name: 'github', href: 'https://github.com/kbzt', prefetch: false },
        { name: 'mail', href: 'mailto:mail@kleidi.ca', prefetch: false },
        { name: 'resume', href: '/resume.pdf', prefetch: false },
        { name: 'linkedin', href: 'https://www.linkedin.com/in/kleidib/', prefetch: false }
      ]
    },
    {
      header: 'site',
      links: [
        { name: 'home', href: '/', prefetch: true },
        { name: 'blog', href: '/blog/', prefetch: true },
        { name: 'projects', href: '/projects/', prefetch: true }
      ]
    },
    {
      header: 'extras',
      links: [
        { name: 'pgp key', href: '/key.txt', prefetch: false },
        { name: 'source', href: 'https://github.com/kbzt/kleidi.ca/', prefetch: false },
        { name: 'colors', href: 'https://github.com/rebelot/kanagawa.nvim', prefetch: false },
        { name: 'font', href: 'https://github.com/bBoxType/FiraSans', prefetch: false }
      ]
    }
  ];
</script>

<div class="flex justify-evenly bg-[#76946a] mt-48">
  {#each groups as group}
    <div class="flex flex-col py-12 w-24 mb-8">
      <h3 class="border-b border-black text-2xl text-black font-semibold">{group.header}</h3>
      {#each group.links as { name, href, prefetch}}
        {#if prefetch}
          <a {href} sveltekit:prefetch class="text-xl text-[#1f1f28] py-px hover:text-[#223249] hover:underline hover:duration-75">{name}</a>
        {:else}
          <a {href} class="text-xl text-[#1f1f28] py-px hover:text-[#223249] hover:underline hover:duration-75">{name}</a>
        {/if}
      {/each}
    </div>
  {/each}
</div>