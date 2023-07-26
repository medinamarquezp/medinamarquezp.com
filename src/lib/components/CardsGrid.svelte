<script lang="ts">
	import type { Card } from '$lib/types';
	import CardItem from './CardItem.svelte';
	export let title: string
	export let items: Card[]
</script>

<div
	class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12"
>
	<h2 class="text-2xl font-medium">{title}</h2>
	{#each items as item}
		<CardItem {item} />
	{/each}
</div>
