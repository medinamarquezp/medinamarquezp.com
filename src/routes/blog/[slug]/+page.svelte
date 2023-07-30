<script lang="ts">
	import type { PageData } from './$types';
	import SeoTags from '$lib/components/SeoTags.svelte';
	import CardsGrid from '$lib/components/CardsGrid.svelte';
	import ShareOnTwitter from '$lib/components/ShareOnTwitter.svelte';
	import { blogsToCards } from '$lib/utilities/transformers';
	import './blogDetails.css'

	export let data: PageData;
	$: blog = data.blog;
	$: items = blogsToCards(blog.related || []);
</script>

<SeoTags
	title={blog.title}
	description={blog.tldr}
	image={blog.hero}
	keywords={blog.categories.join(', ')}
/>

<svelte:head>
	<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
</svelte:head>

<div
	class="container mx-auto px-4 md:px-6 lg:px-24 xl:px-48 my-12 text-xl animate-fade animate-once animate-duration-300 animate-ease-in"
>
	<span class="text-slate-500">{blog.created_at}</span>
	<h1 class="text-4xl font-bold">
		{blog.title}
	</h1>
	<div class="flex flex-row gap-1 mt-4 sm:mt-2 mb-2 items-start sm:items-center">
		{ #if blog.categories }
			{#each blog.categories as category}
				<div class="badge badge-lg bg-secondary">{category}</div>
			{/each}
		{/if}
	</div>
	<div class="flex flex-row text-lg text-slate-500 mb-2">
		{"☕️".repeat(Math.ceil(blog.reading_time / 15))} <span class="pl-1">(Léelo en {blog.reading_time} minutos)</span>
	</div>
	{#if blog.hero}
		<div
			class="mt-12 -ml-8 mb-5 sm:mt-14 pattern-dots-md text-secondary rounded-xl"
		>
			<img
				class="rounded-lg -translate-y-5 translate-x-4"
				src={blog.hero}
				alt={blog.title}
			/>
		</div>
	{/if}
	{#if blog.tldr}
		<div class="mb-10">
			<span class="font-bold text-2xl">TL;DR</span>
			<p class="italic">
				{blog.tldr}
			</p>
		</div>
	{/if}
	<div class="content leading-relaxed">
		{@html blog.content}
	</div>
	<div class="flex justify-center mt-10">
		<ShareOnTwitter path={blog.slug} content={blog.title} />
	</div>
</div>

{#if items.length}
	<div class="mx-6 sm:mx-12 lg:mx-24 mt-0 mb-12 text-xl">
		<CardsGrid title="🤔 También podría interesarte" {items} />
	</div>
{/if}
