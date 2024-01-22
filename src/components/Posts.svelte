<script lang="ts">
  import FormattedDate from "@components/FormattedDate.svelte";
  import type { CollectionEntry } from "astro:content";

  export let posts: CollectionEntry<"posts">[];
  export let take: number = posts.length;
</script>

{#each posts.slice(0, take) as { slug, data }}
  <div class="flex flex-col gap-3 py-6 md:flex-row first:pt-0 last:pb-0">
    <div class="basis-1/5">
      <span class="text-neutral-200">
        <FormattedDate date={data.pubDate} />
      </span>
    </div>
    <div class="basis-4/5">
      <a href={`/posts/${slug}`} class="block space-y-4">
        <span class="link w-fit">{data.title}</span>
        <p class="my-0 line-clamp-2">{data.description}</p>
      </a>
    </div>
  </div>
{/each}
