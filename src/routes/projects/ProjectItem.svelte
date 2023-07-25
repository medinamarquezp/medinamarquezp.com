<script lang="ts">
	import type { ProjectItem } from '$lib/types';
	import TechsList from '$lib/components/TechsList.svelte';
	import ProjectItemGallery from './ProjectItemGallery.svelte';
	export let project: ProjectItem;
</script>

<div class="mb-8">
	<div
		class="flex flex-col lg:flex-row gap-6 bg-neutral sm:bg-transparent p-8 sm:p-0 rounded-xl"
	>
		<div class="flex flex-col w-full lg:w-1/2">
			<h1 class="text-4xl font-bold">
				{project.title}
			</h1>
			<div class="flex flex-row gap-2 sm:gap-2 mt-5 mb-4 items-center">
				{#if project.categories}
					{#each project.categories as category}
						<div class="badge badge-lg bg-secondary">{category}</div>
					{/each}
				{/if}
			</div>
			<div class="uppercase text-lg mb-4 text-slate-500">
				Fase <span class="font-bold">{project.phase}</span>
			</div>
			<div class="mb-4">
				<p>
					{project.description}
				</p>
			</div>
			{#if project.techs.length}
				<TechsList techs={project.techs} />
			{/if}
		</div>
		<ProjectItemGallery title={project.title} images={project.images} />
	</div>
</div>
