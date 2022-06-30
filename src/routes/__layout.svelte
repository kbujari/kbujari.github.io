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
  :global(body) {
    background-color: #1f1f28;
    color: #dcd7ba;
  }
</style>

