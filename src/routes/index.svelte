<script>
  import { PaperclipIcon, MailIcon, GithubIcon, LinkedinIcon } from 'svelte-feather-icons'
</script>

<div class="h-screen flex flex-col gap-8 justify-center items-center">
  <p class="text-5xl text-slate-300 font-bold pointer-events-none">kleidi bujari</p>
  <div class="flex gap-6">
    <a href="/resume.pdf" target="_blank" rel="noopener me" title="Resume" class="link"><PaperclipIcon size="32" /></a>
    <a href="mailto:mail@kleidi.ca" target="_blank" rel="noopener me" title="Email" class="link"><MailIcon size="32" /></a>
    <a href="https://github.com/kbzt" target="_blank" rel="noopener me" title="Github" class="link"><GithubIcon size="32" /></a>
    <a href="https://linkedin.com/in/kleidib/" target="_blank" rel="noopener me" title="Linkedin" class="link"><LinkedinIcon size="32" /></a>
  </div>
  <div class="flex items-center gap-4">
    {#each ['info', 'blog', 'photos'] as link}
      <a href="/{link}" class="link text-2xl">{link}</a>
    {/each}
  </div>
</div>
