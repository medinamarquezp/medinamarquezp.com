<script lang="ts">
	import GalleryModal from './GalleryModal.svelte';
	export let title: string;
	export let images: string[];
</script>

<div class="w-full lg:w-1/2">
	<div class="pattern-dots-md text-secondary rounded-xl">
		<div class="carousel w-full -ml-8 md:ml-0 -translate-y-0 translate-x-6 lg:translate-x-2">
			{#if images.length}
				{#each images as image, i}
					<div class="carousel-item w-full max-h-96">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
						<img
							on:click={() =>
								//@ts-ignore
								window[`modal_item${i + 1}`].showModal()}
							id={`item${i + 1}`}
							src={image}
							class="object-cover cursor-pointer rounded-xl"
							alt={title}
						/>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="flex justify-center w-full pt-4 gap-2">
		{#if images.length > 1}
			{#each images as _, i}
				<a
					href="#item{i + 1}"
					class="bg-primary hover:bg-primary-focus rounded-xl w-4 h-4">&nbsp;</a
				>
			{/each}
		{/if}
	</div>
</div>

{#if images.length}
	{#each images as image, i}
		<GalleryModal id={`modal_item${i + 1}`} {title} url={image} />
	{/each}
{/if}
