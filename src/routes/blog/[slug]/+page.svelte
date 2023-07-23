<script lang="ts">
	import type { PageData } from './$types';
	import CardsGrid from '$lib/components/CardsGrid.svelte';
	import ShareOnTwitter from '$lib/components/ShareOnTwitter.svelte';
	import { blogsToCards } from '$lib/utilities/transformers';

	export let data: PageData;
	$: blog = data.blog;
	$: items = (blogsToCards(blog.related || []));
</script>

<div
	class="mx-8 sm:mx-16 lg:mx-60 my-12 text-xl animate-fade animate-once animate-duration-300 animate-ease-in"
>
	<span class="text-slate-500">{blog.created_at}</span>
	<h1 class="text-4xl font-bold">
		{blog.title}
	</h1>
	<div class="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-5 mb-4 items-center">
		{#if blog.categories}
			{#each blog.categories as category}
				<div class="badge badge-lg bg-secondary">{category}</div>
			{/each}
		{/if}
		<div class="text-lg text-slate-500">
			{'☕️'.repeat(Math.ceil(blog.reading_time / 15))}
			<span class="pl-1">(Léelo en {blog.reading_time} minutos)</span>
		</div>
	</div>
	{#if blog.hero}
		<div
			class="mt-12 -ml-8 mb-5 sm:mt-14 pattern-dots-md text-secondary rounded-xl"
		>
			<img
				class="rounded-lg -translate-y-6 translate-x-6"
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
	<div class="blog leading-relaxed">
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
