<script lang="ts">
	import type { PageData } from './$types';
	import FeedHeader from '$lib/components/FeedHeader.svelte';
	import SeoTags from '$lib/components/SeoTags.svelte';
	import BlogItem from './BlogItem.svelte';

	export let data: PageData;
	let conteinerClasses =
		'relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]';
	let timelineClasses =
		'hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[2.25rem] w-px bg-neutral-content sm:block';
</script>

<SeoTags
	title="Blog"
	description="El rincón de las reflexiones 🤔. Un lugar donde curiosear, aprender y compartir, cuyo principal objetivo es plasmar pensamientos aleatorios"
/>

<div class="container-content">
	<FeedHeader title="Últimas novedades" feedPath="/rss.xml">
		<svelte:fragment slot="description">
			El rincón de las reflexiones 🤔. Un lugar donde curiosear, aprender y
			compartir, cuyo principal objetivo es <span
				class="underline decoration-primary decoration-wavy"
				>plasmar pensamientos aleatorios</span
			>.
		</svelte:fragment>
		<!-- TODO: Blog filters -->
	</FeedHeader>
	<div class={conteinerClasses}>
		<div class={timelineClasses} />
		<div class="space-y-16">
			{#if data.blogs.length}
				{#each data.blogs as blog}
					<BlogItem {blog} />
				{/each}
			{:else}
				<p class="text-center text-slate-500 text-2xl">
					No hay entradas en el blog
				</p>
			{/if}
		</div>
	</div>
</div>
