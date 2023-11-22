<script lang="ts">
  const routes = [
    { href: "/", name: "kleidi.ca" },
    { href: "/posts", name: "Posts" },
    { href: "/about", name: "About" },
  ];
</script>

<header class="mt-4">
  <nav>
    <menu class="flex gap-4">
      {#each routes as { href, name }}
        <li>
          <a {href} class="route">{name}</a>
        </li>
      {/each}
    </menu>
  </nav>
</header>
