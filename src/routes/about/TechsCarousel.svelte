<script lang="ts">
	import type { Tech } from "$lib/types";
	export let techs: Tech[];
</script>

<div class="flex max-w-full overflow-x-auto gap-2 mt-2">
	{#each techs as { label, icon }}
		<div
			class="tooltip tooltip-primary p-6 my-8 bg-neutral rounded-md"
			data-tip={label}
		>
			<i class="text-6xl {icon} colored" />
		</div>
	{/each}
</div>
