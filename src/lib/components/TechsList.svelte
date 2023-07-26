<script lang="ts">
	import type { Tech } from "$lib/types";
    export let techs: Tech[]
</script>

<div>
	<p class="uppercase text-sm block mb-2">Tecnologías y herramientas</p>
	<div class=" text-slate-500">
		{#each techs as { icon, label }}
			<div
				class="tooltip tooltip-primary inline-block mr-4 mt-2"
				data-tip={label}
			>
				<i class="text-4xl {icon}" />
			</div>
		{/each}
	</div>
</div>
