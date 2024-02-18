<script>
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Posts", href: "/posts" },
    { name: "Resources", href: "/resources" },
  ];
</script>

<nav>
  <h1>knter.net</h1>
  {#each links as { name, href }}
    <a {href} class="link">{name}</a>
  {/each}
  <hr />
</nav>
