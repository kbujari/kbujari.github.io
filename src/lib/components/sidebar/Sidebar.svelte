<script>
  import { XIcon } from 'svelte-feather-icons'
  import { PaperclipIcon, MailIcon, GithubIcon, LinkedinIcon } from 'svelte-feather-icons'
  import { fly, fade } from 'svelte/transition'
  import { clickOutside } from '$lib/utils/click_outside.js'

  export let menuActive = false

  const routes = [
    { name: 'Home',   src: '/' },
    { name: 'Blog',   src: '/blog'},
    { name: 'Photos', src: '/photos'}
  ]
</script>

{#if menuActive}
  <aside class="fixed z-20 w-80 h-full bg-black text-white" use:clickOutside on:outclick={() => (menuActive = false)} in:fly={{ x: -200, duration: 350 }} out:fade={{ duration: 150, delay: 500 }}>
    <div class="flex flex-col w-full h-full p-4" transition:fly={{ y: 15, duration: 350, delay: 300 }}>
      <button class="float-right self-end cursor-pointer" on:click={() => (menuActive = false)}>
        <XIcon strokeWidth="2" size="32" />
      </button>
      {#each routes as route}
        <a class="w-full link p-2 border-b border-neutral-700" href={route.src} on:click={() => (menuActive = false)}>
          <div>
            {route.name}
          </div>
        </a>
      {/each}
      <div class="flex gap-2 mt-4 p-2">
        <a href="/resume.pdf" target="_blank" rel="noopener" title="Resume" class="link"><PaperclipIcon size="24" /> </a>
        <a href="mailto:mail@kleidi.ca" target="_blank" rel="noopener" title="Email" class="link"><MailIcon size="24" /> </a>
        <a href="https://github.com/kbzt" target="_blank" rel="noopener external" title="Github" class="link"><GithubIcon size="24" /> </a>
        <a href="https://linkedin.com/in/kleidib/" target="_blank" rel="noopener external" title="Linkedin" class="link"><LinkedinIcon size="24" /> </a>
      </div>
    </div>
  </aside>
{/if}
