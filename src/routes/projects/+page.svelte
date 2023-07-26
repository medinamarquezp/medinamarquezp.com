<script lang="ts">
	import type { PageData } from './$types';
	import SeoTags from '$lib/components/SeoTags.svelte';
	import FeedHeader from '$lib/components/FeedHeader.svelte';
	import ProjectItem from './ProjectItem.svelte';
	export let data: PageData;
</script>

<SeoTags
	title="Proyectos"
	description="El rincón de las ideas locas 🤪. Un lugar donde construir, experimentar y desarrollar, cuyo principal objetivo es convertir problemas en soluciones"
/>

<div class="container-content">
	<FeedHeader title="Proyectos">
		<svelte:fragment slot="description">
			El rincón de las ideas locas 🤪. Un lugar donde construir, experimentar y
			desarrollar, cuyo principal objetivo es <span
				class="underline decoration-primary decoration-wavy"
				>convertir problemas en soluciones</span
			>.
		</svelte:fragment>
	</FeedHeader>
	<div class="mt-20">
		{#if data.projects.length}
			{#each data.projects as project}
				<ProjectItem {project} />
			{/each}
		{:else}
			<p class="text-center text-slate-500 text-2xl">
				No hay proyectos para mostrar
			</p>
		{/if}
	</div>
</div>
