<script lang="ts">
	import type { ProjectItem } from '$lib/types';
	import TechsList from '$lib/components/TechsList.svelte';
	import ProjectItemGallery from './ProjectItemGallery.svelte';
	export let project: ProjectItem;
</script>

<div class="mb-8">
	<div
		class="flex flex-col lg:flex-row gap-8 bg-neutral sm:bg-transparent p-8 sm:p-0 rounded-xl"
	>
		<div class="flex flex-col w-full lg:w-1/2">
			<h1 class="text-4xl font-bold">
				{project.title}
			</h1>
			<div class="inline mt-5 mb-4 items-center">
				{#if project.categories}
					{#each project.categories as category}
						<div class="badge badge-lg bg-secondary mr-1">{category}</div>
					{/each}
				{/if}
			</div>
			<div class="flex flex-col sm:flex-row gap-2 sm:gap-4">
				<div class="uppercase text-base text-slate-500">
					Fase <span class="font-bold">{project.phase}</span>
				</div>
				{#if project.url}
					<div class="text-base text-slate-500">
						URL <a class="font-bold" target="_blank" href={project.url}
							>{new URL(project.url).hostname}</a
						>
					</div>
				{/if}
			</div>
			<div class="my-4">
				<p>
					{project.description}
				</p>
			</div>
			{#if project.article}
				<a
					class="btn btn-primary rounded-lg mb-4"
					href={project.article}
					title="Cuéntame más">Cuéntame más</a
				>
			{/if}
			{#if project.techs.length}
				<TechsList techs={project.techs} />
			{/if}
		</div>
		<ProjectItemGallery title={project.title} images={project.images} />
	</div>
</div>
