<script>
  export let text
  export let isBig = false

  const styling = isBig ? 'text-3xl md:text-4xl mb-2 text-white' : 'text-xl md:text-2xl text-slate-100'
</script>

<p class="{styling} font-body font-bold pb-2 mt-6 pointer-events-none" id={text}>
  {text}
</p>
