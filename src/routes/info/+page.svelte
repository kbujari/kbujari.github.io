<script>
  import Title from '$lib/components/Title.svelte'
</script>

<svelte:head>
  <title>Info - KB</title>
</svelte:head>

<div class="container">
  <Title text="About" isBig={true} />
  <p>I'm a Computer Engineering student in Toronto, Canada passionate about operating system design, computer hardware, and online security/privacy. In my free time, I'm usually spending too much time ricing my unix setups or working on optimizing a very overkill home server.</p>
  <Title text="Contact" />
  <p>
    The best way to reach me is by email at
    <a href="mailto:mail@kleidi.ca" target="_blank" rel="noopener me" title="Email" class="link">mail@kleidi.ca</a>. Also check out my
    <a href="/resume.pdf" target="_blank" rel="noopener me" title="Resume" class="link">resume</a>.
  </p>
  <Title text="Website" />
  <p>
    This app is built with SvelteKit and TailwindCSS, and hosted by me personally. Feel free to view the <a href="https://github.com/kbzt/kleidi.ca" target="_blank" rel="noopener me" title="Source" class="link">source</a>
    and leave a star if you'd like.
  </p>
</div>
