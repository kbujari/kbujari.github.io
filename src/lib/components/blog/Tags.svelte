<script>
  import { CalendarDays, Tags } from 'lucide-svelte';

  export let tags;
  export let date;
</script>

<div class="my-8 flex flex-col items-start justify-center gap-4">
  <div class="flex items-center gap-4">
    <CalendarDays size="36" strokeWidth="1.5" />
    <p class="rounded border p-1 border-neutral-700 pointer-events-none">{date}</p>
  </div>
  <div class="flex gap-4 items-center">
    <Tags size="36" strokeWidth="1.5" />
    <div class="flex items-center gap-2 flex-wrap">
      {#each tags as tag}
        <p class="rounded border p-1 border-neutral-700 pointer-events-none">{tag}</p>
      {/each}
    </div>
  </div>
</div>
