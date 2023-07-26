<script lang="ts">
	import type { BlogItem } from "$lib/types";
	import { IconCalendarEvent } from "@tabler/icons-svelte";
	export let blog: BlogItem
</script>

<article class="relative group">
	<a
		href={`/blog/${blog.slug}`}
		class="flex p-6 rounded-xl bg-neutral sm:bg-transparent hover:bg-neutral transition"
	>
		<div
			class="rounded-full bg-primary border-white border-4 w-10 h-10 hidden absolute right-full top-0 md:mr-4 overflow-visible sm:block"
		>
			<IconCalendarEvent class="text-white mt-1 ml-1" size={24} stroke={2} />
		</div>
		<div class="relative">
			<h3 class="font-semibold pt-8 lg:pt-0 text-2xl">{blog.title}</h3>
			<div class="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-2 mb-4 items-start sm:items-center">
				{ #if blog.categories }
					{#each blog.categories as category}
						<div class="badge badge-lg bg-secondary">{category}</div>
					{/each}
				{/if}
				<div class="text-lg text-slate-500">
					{"☕️".repeat(Math.ceil(blog.reading_time / 15))} <span class="pl-1">(Léelo en {blog.reading_time} minutos)</span>
				</div>
			</div>
			<div
				class="mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2"
			>
				{blog.excerpt}
			</div>
			<div
				class="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]"
			>
				<div class="whitespace-nowrap text-slate-500 lg:-mt-6">{blog.created_at}</div>
			</div>
		</div>
	</a>
</article>
