<script lang="ts">
  import Section from "./Section.svelte";

  const links: { name: string, href: string }[] = [
    { name: "Home", href: "/" },
    { name: "Posts", href: "/posts" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "GitHub", href: "https://github.com/kbujari" },
  ];

  const is_external = (href: string) => href.at(0) != '/';
</script>

<div class="md:basis-1/4 md:sticky md:top-4 w-full">
  <nav>
    <Section title="Navigation">
      <menu class="flex md:flex-col gap-3 flex-wrap">
        {#each links as {name, href}}
          <li class="md:before:content-['->_']">
            <a {href} class="link" rel={is_external(href) ? "noreferrer"  : ""} target={is_external(href) ? "_blank" : ""}>{name}</a>
          </li>
        {/each}
      </menu>
    </Section>
  </nav>
</div>
