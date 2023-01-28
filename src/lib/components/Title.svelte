<script>
  export let text;
  export let isBig = false;

  const styling = isBig ? 'md:text-4xl text-5xl mb-2 text-slate-200' : 'text-2xl text-slate-300';
</script>

<p class="{styling} font-title font-bold pb-2 mt-6 pointer-events-none" id={text}>
  {text}
</p>
