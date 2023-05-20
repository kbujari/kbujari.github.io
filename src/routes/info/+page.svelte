<script>
  import Title from '$lib/components/Title.svelte';
</script>

<svelte:head>
  <title>Info - KB</title>
</svelte:head>

<Title text="Info" isBig={true} />
<p>
  I'm a Computer Engineering student in Toronto, CA interested in
  online privacy, cryptography, and RF communications. The majority of my
  free time is spent hacking on personal projects mainly involving networks
  and Rust, otherwise I'll be working out or playing basketball.
</p>

<Title text="Contact" />
<p>
  The best way to reach me is by email at
  <a
    href="mailto:mail@kleidi.ca"
    target="_blank"
    rel="noreferrer"
    title="Email"
    class="link">mail@kleidi.ca</a
  >.
</p>

<Title text="Disclaimer" />
<p>
  Any opinons here are my own and do not reflect those of my employer or
  school. Feel free to use anything on this site for reference, but please give
  credit when appropriate.
  <br /><br />

  This site is built using SvelteKit and is
  <a
    href="https://github.com/kbzt/kleidi.ca"
    target="_blank"
    rel="noreferrer"
    title="Source"
    class="link">open source</a
  >. If you're interested, the two fonts used are
  <a
    href="https://github.com/bBoxType/FiraSans"
    target="_blank"
    rel="noreferrer"
    class="link">Fira Sans</a
  > and standard monospace.
</p>
