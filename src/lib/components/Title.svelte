<script>
  export let text
  export let isBig = false

  const styling = isBig ? "text-4xl border-b-2 border-neutral-700 mb-2" : "text-3xl"
</script>

<p class="{styling} font-semibold pb-2 mt-6 pointer-events-none text-slate-400">
  {text}
</p>
