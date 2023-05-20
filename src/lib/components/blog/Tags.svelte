<script>
  import { CalendarDays, Tags } from 'lucide-svelte';

  export let tags;
  export let date;
</script>

<div class="my-8 flex flex-col gap-4">
  <div class="flex items-center gap-4">
    <CalendarDays size="36" strokeWidth="1.5" />
    <p class="pointer-events-none rounded border border-neutral-700 p-1">
      {date}
    </p>
  </div>
  <div class="flex gap-4">
    <Tags size="36" strokeWidth="1.5" />
    <div class="flex flex-wrap items-center gap-2">
      {#each tags as tag}
        <p class="pointer-events-none rounded border border-neutral-700 p-1">
          {tag}
        </p>
      {/each}
    </div>
  </div>
</div>
