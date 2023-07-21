<script lang="ts">
	import type { Filter } from '$lib/types';
	
	export let filters: Filter[];
</script>

<div class="flex flex-row gap-2 text-base font-medium mt-6">
	{#each filters as {label, path}}
		<a
			class="py-2 px-4 bg-secondary hover:bg-secondary-focus rounded-full"
			title={label}
			href={path}>{label}</a
		>
	{/each}
</div>
