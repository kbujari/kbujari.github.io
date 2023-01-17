<script>
	import IconLinks from '$lib/components/IconLinks.svelte';
	import { clickOutside } from '$lib/utils/click_outside.js';
	import { XIcon } from 'svelte-feather-icons';
	import { fly, fade } from 'svelte/transition';
	import { aside, routes } from '$lib/utils/stores.js';
</script>

{#if $aside}
	<aside class="fixed z-20 top-0 w-72 h-full bg-app-bg border-r border-neutral-700" use:clickOutside on:outclick={aside.toggle} in:fly={{ x: -200, duration: 350 }} out:fade={{ duration: 150 }}>
		<div class="flex flex-col w-full h-full p-4" transition:fly={{ y: 15, duration: 350, delay: 300 }}>
			<button class="self-end icon" on:click={aside.toggle}>
				<XIcon strokeWidth="2" size="32" />
			</button>
			{#each $routes as route}
				<a class="w-full route p-2 border-b border-neutral-700 font-title text-xl" data-sveltekit-prefetch href={route.src} on:click={aside.toggle}>
					<div>
						{route.name}
					</div>
				</a>
			{/each}
			<div class="mb-2" />
			<IconLinks />
		</div>
	</aside>
{/if}
