<script lang="ts">
	import type { TimelineItem } from '$lib/types';
	import TimelineCard from './TimelineCard.svelte';
	export let timelineItems: TimelineItem[]
</script>

<div class="w-full flex flex-col justify-center">
	<div class="lg:mx-auto w-full">
		<div class="relative transition">
			<div
				class="hidden lg:block w-px bg-slate-300 absolute h-full left-1/2 transform -translate-x-1/2"
			/>
			{#each timelineItems as item, i}
				{#if i % 2 === 0}
					<TimelineCard {item} direction="left" isFisrtElement={i === 0} />
				{:else}
					<TimelineCard {item} direction="right" isFisrtElement={i === 0} />
				{/if}
			{/each}
		</div>
	</div>
</div>
