<script>
  import '../app.css';
  import Footer from '$lib/components/footer/Footer.svelte';
</script>

<svelte:head>
  <title>Kleidi Bujari</title>
  <link rel="shortcut icon" href="/icon.png" type="image/x-icon">
</svelte:head>

<main>
  <slot />
  <Footer />
</main>

<style>
  @font-face {
    font-family: 'Fira Sans';
    src: url(/font/FiraSans-Regular.ttf);
  }

  :global(body) {
    background-color: #1f1f28;
    color: #dcd7ba;
    font-family: 'Fira Sans', 'sans-serif';
    text-rendering: optimizeLegibility;
  }

  :global(.link) {
    color: #619589;
  }

  :global(.link:hover) {
    text-decoration: underline 2px;
  }
</style>

