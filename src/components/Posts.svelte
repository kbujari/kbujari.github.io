<script lang="ts">
  import FormattedDate from "@components/FormattedDate.svelte";
  import type { CollectionEntry } from "astro:content";

  export let posts: CollectionEntry<"posts">[];
  export let take: number = posts.length;
</script>

{#each posts.slice(0, take) as { slug, data }}
  <div style="margin: 1em auto;">
    <a href={`/posts/${slug}`}>{data.title}</a>
    <br />
    <FormattedDate date={data.pubDate} />
  </div>
{/each}
