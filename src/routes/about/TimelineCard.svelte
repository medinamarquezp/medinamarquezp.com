<script lang="ts">
	import type { TimelineItem } from '$lib/types';
	import { IconBriefcase, IconSchool } from '@tabler/icons-svelte';

	export let item: TimelineItem;
	export let direction: 'left' | 'right';
	export let isFisrtElement: boolean;
	$: padding = direction === 'left' ? 'lg:pr-8' : 'lg:pl-8';
	$: justify = direction === 'left' ? 'justify-start' : 'justify-end';

	function formatDate(date: Date | null) {
		if (date) {
			return date.toLocaleDateString('es-ES', {
				year: 'numeric',
				month: 'short'
			});
		}
		return 'Actualmente';
	}
</script>

<div class="mt-6 lg:mt-0 lg:mb-10">
	<div
		class:lg:-mt-40={!isFisrtElement}
		class="flex flex-col lg:flex-row items-center mt-0"
	>
		<div class="flex {justify} w-full mx-auto items-center">
			<div class="w-full lg:w-1/2 {padding}">
				<div class="p-8 bg-neutral rounded-lg text-lg shadow">
					<div class="flex flex-row">
						{#if item.brand}
							<img
								class="hidden sm:inline-block w-16 h-16 border-neutral-focus mr-2 border-4 rounded-full"
								src={item.brand}
								alt={item.company}
							/>
						{/if}
						<div>
							<h1 class="font-semibold">{item.title}</h1>
							<h2>{item.company}</h2>
							<span class="text-base text-slate-500"
								>{formatDate(item.start)} -- {formatDate(item.end)}</span
							>
						</div>
					</div>
					<p class="mt-2">{item.description}</p>
					{#if item.techs.length}
						<p class="uppercase text-sm block mb-2">
							Tecnologías y herramientas
						</p>
						<div class=" text-slate-500">
							{#each item.techs as { icon, label }}
								<div
									class="tooltip tooltip-primary inline-block mr-4 mt-2"
									data-tip={label}
								>
									<i class="text-4xl {icon}" />
								</div>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
		<div
			class="rounded-full bg-primary border-white border-4 w-10 h-10 absolute left-1/2 -translate-y-4 lg:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
		>
			{#if item.type === 'academic'}
				<IconSchool class="text-white" size={24} stroke={2} />
			{:else if item.type === 'professional'}
				<IconBriefcase class="text-white" size={24} stroke={2} />
			{/if}
		</div>
	</div>
</div>
