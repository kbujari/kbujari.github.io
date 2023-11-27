<script lang="ts">
  import FormattedDate from "@components/FormattedDate.svelte";
  import type { CollectionEntry } from "astro:content";

  export let posts: CollectionEntry<"posts">[];
</script>

{#each posts as { slug, data }}
  <div class="flex flex-col gap-3 py-6 md:flex-row first:pt-0 last:pb-0">
    <div class="basis-1/4">
      <span class="text-neutral-200">
        <FormattedDate date={data.pubDate} />
      </span>
      <div class="flex flex-wrap gap-3">
        {#each data.tags as tag}
          <span>{tag}</span>
        {/each}
      </div>
    </div>
    <div class="basis-3/4">
      <a href={`/posts/${slug}`} class="block space-y-4">
        <span class="link w-fit">{data.title}</span>
        <p class="my-0 line-clamp-2">{data.description}</p>
      </a>
    </div>
  </div>
{/each}
