<script>
  import { PaperclipIcon, MailIcon, GithubIcon, LinkedinIcon } from 'svelte-feather-icons'

  export let isSmall = true
  let iconSize

  isSmall ? (iconSize = '24') : (iconSize = '32')

  const options = [
    { href: '/resume.pdf', title: 'Resume', component: PaperclipIcon },
    { href: 'mailto:mail@kleidi.ca', title: 'Email', component: MailIcon },
    { href: 'https://github.com/kbzt', title: 'Github Account', component: GithubIcon },
    { href: 'https://linkedin.com/in/kleidib', title: 'Linkedin Account', component: LinkedinIcon }
  ]
</script>

<div class="flex p-2" class:gap-2={isSmall} class:gap-8={!isSmall}>
  {#each options as option}
    <a href={option.href} target="_blank" rel="noreferrer" title={option.title} class="link">
      <svelte:component this={option.component} size={iconSize} strokeWidth="2" />
    </a>
  {/each}
</div>
