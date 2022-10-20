<script>
  import { ArrowLeftCircleIcon } from 'svelte-feather-icons'
  export let text
  export let size = '2'
</script>

<div class="flex items-center justify-between">
  <p class="text-3xl mb-4 pointer-events-none text-slate-400 border-b-4 border-neutral-700">
    {text}
  </p>
  {#if size === '4'}
    <a sveltekit:prefetch href="../" class="link">
      <ArrowLeftCircleIcon size="36" strokeWidth="1.5" />
    </a>
  {/if}
</div>
{#if size === '4'}
  <hr class="mb-4" />
{/if}
