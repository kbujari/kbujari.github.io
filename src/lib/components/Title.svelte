<script>
  export let text
  export let isBig = false

  const styling = isBig ? 'text-4xl mb-2 text-stone-100' : 'text-2xl text-stone-300'
</script>

<p class="{styling} font-title font-bold pb-2 mt-6 pointer-events-none" id={text}>
  {text}
</p>
