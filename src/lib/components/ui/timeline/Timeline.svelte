<script lang="ts">
	import type { TimelineItem } from '$lib/types';
	import TimelineCard from './TimelineCard.svelte';
	
	export let timelineItems: TimelineItem[]
</script>

<div class="w-full flex flex-col justify-center">
	<div class="md:mx-auto w-full">
		<div class="relative">
			<div
				class="hidden md:block w-1 bg-neutral-focus absolute h-full left-1/2 transform -translate-x-1/2"
			/>
			{#each timelineItems as item, i}
				{#if i % 2 === 0}
					<TimelineCard {item} direction="left" />
				{:else}
					<TimelineCard {item} direction="right" />
				{/if}
			{/each}
		</div>
	</div>
</div>
