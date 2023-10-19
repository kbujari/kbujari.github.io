<script lang="ts">
  import type { CollectionEntry } from "astro:content";

  export let data: CollectionEntry<"resources">[];
</script>

{#each data as entry}
  <h2>{entry.data.name}</h2>
  {#each entry.data.links as {name, description, href}}
    <a {href} class="link" target="_blank" rel="noreferrer">{name}</a>
    <p>{description}</p>
  {/each}
{/each}
