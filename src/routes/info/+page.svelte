<script>
  import Title from '$lib/components/Title.svelte';
</script>

<svelte:head>
  <title>Info - KB</title>
</svelte:head>

<Title text="Info" isBig={true} />
<p>I'm a Computer Engineering student in Toronto, Canada passionate about operating systems, robotics, circuit design, and online security/privacy. In my free time, I'm usually spending too much time ricing my unix setups or working on a very overkill home server (blog post coming soon once I settle on a setup I like).</p>

<br />

<p>I love Open-Source Software, it's easily been the best resource for learning ever since I started messing with computers and it holds a special place in my heart.</p>
<Title text="Contact" />
<p>
  The best way to reach me is by email at
  <a href="mailto:mail@kleidi.ca" target="_blank" rel="noreferrer" title="Email" class="link">mail@kleidi.ca</a>. Also check out my
  <a href="/resume.pdf" target="_blank" rel="noreferrer" title="Resume" class="link">resume</a>.
</p>
<Title text="Website" />
<p>
  This site is built with SvelteKit/TailwindCSS and prerendered to be lightweight and speedy. Feel free to view the <a href="https://github.com/kbzt/kleidi.ca" target="_blank" rel="noreferrer" title="Source" class="link">source code</a>
  and leave a star if you'd like. If you're interested, the two fonts used are <a href="https://github.com/bBoxType/FiraSans" target="_blank" rel="noreferrer" class="link">Fira Sans</a> and standard monospace.
</p>
