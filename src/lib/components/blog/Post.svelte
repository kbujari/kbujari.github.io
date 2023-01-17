<script>
	export let title;
	export let date;
	export let img;
	export let path;
	export let tags;
</script>

<a data-sveltekit-prefetch href={path} class="border border-neutral-700 rounded p-4 w-full hover:text-white">
	<div class="flex flex-col md:flex-row gap-4 md:gap-8">
		<div class="basis-2/5">
			<img src={img} alt="blog post descriptor" class="rounded object-cover h-64 w-full" />
		</div>
		<div class="basis-3/5">
			<p class="transition font-title font-bold text-2xl mb-2">{title}</p>
			<p class="no-underline text-neutral-500 mb-2">{date}</p>
			<div class="flex flex-wrap gap-2">
				{#each tags.split(' ') as tag}
					<p class="rounded font-title text-slate-300 p-2 border border-neutral-700">{tag}</p>
				{/each}
			</div>
		</div>
	</div>
</a>
