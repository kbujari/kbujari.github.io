<script lang="ts">
  const links: { name: string; href: string }[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Posts", href: "/posts" },
    { name: "Resources", href: "/resources" },
    { name: "GitHub", href: "https://github.com/kbujari" },
  ];

  const is_external = (href: string) => href.at(0) != "/";
</script>

<nav>
  <h1>web.4kb.net</h1>
  {#each links as { name, href }}
    <a
      {href}
      class="link"
      rel={is_external(href) ? "noreferrer" : ""}
      target={is_external(href) ? "_blank" : ""}>{name}</a
    >
  {/each}
  <hr />
</nav>
