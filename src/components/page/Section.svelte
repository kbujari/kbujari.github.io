<script lang="ts">
  export let title: string = "";
</script>

<section class="mb-6">
  <div class="text-2xl/none flex items-center w-full px-4 font-bold bg-gray-700 text-neutral-300 h-8">{title}</div>
  <div class="p-4 bg-neutral-900">
    <slot />
  </div>
</section>
