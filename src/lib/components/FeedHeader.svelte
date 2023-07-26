<script lang="ts">
	import { IconRss } from '@tabler/icons-svelte';

	export let title: string;
	export let feedPath: string | null = null;
</script>

<div class="flex flex-col mb-12">
	<div class="flex flex-row gap-3 items-baseline">
		<h1 class="text-4xl font-bold">{title}</h1>
		{#if feedPath}
			<a href={feedPath} title="Blog RSS" target="_blank">
				<IconRss class="hover-scale" size={28} stroke={4} />
			</a>
		{/if}
	</div>
	<div class="w-full md:w-1/2 mt-2">
		<slot name="description" />
	</div>
	<slot />
</div>
