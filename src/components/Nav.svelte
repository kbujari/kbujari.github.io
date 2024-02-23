<script>
  const site = import.meta.env.SITE.slice("https://".length);
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Posts", href: "/posts" },
    { name: "Resources", href: "/resources" },
  ];
</script>

<nav>
  <h1>{site}</h1>
  {#each links as { name, href }}
    <a {href} class="link">{name}</a>
  {/each}
  <hr />
</nav>
