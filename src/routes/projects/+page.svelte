<script lang="ts">
	import type { Filter } from '$lib/types';
	import FeedHeader from '$lib/components/ui/globals/FeedHeader.svelte';
	import Filters from '$lib/components/ui/blog/Filters.svelte';
	import ProjectItem from '$lib/components/ui/project/ProjectItem.svelte';
	let filters: Filter[] = [
		{ label: 'fullstack', path: '/' },
		{ label: 'buildinginpublic', path: '/' }
	];
</script>

<div
	class="mx-6 sm:mx-12 lg:mx-24 my-12 text-xl animate-fade animate-once animate-duration-300 animate-ease-in"
>
	<FeedHeader title="Proyectos" feedPath="/">
		<svelte:fragment slot="description">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
			sollicitudin mi, vel eleifend magna. Aenean vel mollis tortor, vitae
			sagittis leo.
		</svelte:fragment>
		<Filters {filters} />
	</FeedHeader>
	<div class="mt-10">
		<ProjectItem />
	</div>
</div>
