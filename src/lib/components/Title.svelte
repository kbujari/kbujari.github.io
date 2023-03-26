<script>
  export let text;
  export let isBig = false;

  const styling = isBig ? 'md:text-4xl text-5xl mb-2 text-slate-200' : 'text-2xl text-slate-300';
</script>

<p class="{styling} pointer-events-none mt-6 pb-2 font-title font-bold" id={text}>
  {text}
</p>
