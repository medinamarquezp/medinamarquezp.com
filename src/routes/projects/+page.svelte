<script lang="ts">
	import FeedHeader from '$lib/components/FeedHeader.svelte';
	import ProjectItem from './ProjectItem.svelte';
</script>

<div
	class="mx-6 sm:mx-12 lg:mx-24 my-12 text-xl animate-fade animate-once animate-duration-300 animate-ease-in"
>
	<FeedHeader title="Proyectos" feedPath="/">
		<svelte:fragment slot="description">
			El rincon de las ideas locas 🤪. Un lugar donde construir, experimentar y
			desarrollar, cuyo principal objetivo es <span
				class="underline decoration-primary decoration-wavy"
				>convertir problemas en soluciones</span
			>.
		</svelte:fragment>
	</FeedHeader>
	<div class="mt-20">
		<ProjectItem />
	</div>
</div>
