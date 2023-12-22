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

<div class="mt-2">
  <nav>
    <menu class="flex flex-wrap gap-3">
      {#each links as { name, href }}
        <li>
          <a
            {href}
            class="link"
            rel={is_external(href) ? "noreferrer" : ""}
            target={is_external(href) ? "_blank" : ""}>{name}</a
          >
        </li>
      {/each}
    </menu>
  </nav>
</div>
