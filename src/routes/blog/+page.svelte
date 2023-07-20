<script lang="ts">
	import type { Filter } from '$lib/types';
	import FeedHeader from '$lib/components/ui/globals/FeedHeader.svelte';
	import Filters from '$lib/components/ui/blog/Filters.svelte';
	import BlogItem from '$lib/components/ui/blog/BlogItem.svelte';

	let conteinerClasses =
		'relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]';
	let timelineClasses =
		'hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[2.25rem] w-px bg-neutral-content sm:block';
	let filters: Filter[] = [
		{ label: 'emprendimiento', path: '/' },
		{ label: 'desarrollo', path: '/' }
	];
</script>

<div
	class="mx-6 sm:mx-12 lg:mx-24 my-12 text-xl animate-fade animate-once animate-duration-300 animate-ease-in"
>
	<FeedHeader title="Últimas novedades" feedPath="/">
		<svelte:fragment slot="description">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
			sollicitudin mi, vel eleifend magna. Aenean vel mollis tortor, vitae
			sagittis leo.
		</svelte:fragment>
		<Filters {filters} />
	</FeedHeader>
	<div class={conteinerClasses}>
		<div class={timelineClasses} />
		<div class="space-y-16">
			<BlogItem
				link="/blog/123"
				date="April 24, 2023"
				title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
					sollicitudin mi, vel eleifend magna. Aenean vel mollis tortor, vitae
					sagittis leo.
				</p>
			</BlogItem>
		</div>
	</div>
</div>
