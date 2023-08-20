<script lang="ts">
	import { onMount } from 'svelte';
	import { IconMoon, IconSunLow } from '@tabler/icons-svelte';
	let theme: string;
	onMount(() => {
		theme = localStorage.getItem('theme') || 'cupcake';
	});
</script>

<label class="swap swap-rotate hover-scale btn btn-ghost hover:bg-transparent transition">
	<input
		type="checkbox"
		data-toggle-theme="cupcake,night"
		data-act-class="ACTIVECLASS"
	/>
	{#if theme === 'night'}
		<IconMoon class="swap-on fill-current w-8 h-8" />
		<IconSunLow class="swap-off fill-current w-8 h-8" />
	{:else if theme === 'cupcake'}
		<IconSunLow class="swap-on fill-current w-8 h-8" />
		<IconMoon class="swap-off fill-current w-8 h-8" />
	{/if}
</label>
