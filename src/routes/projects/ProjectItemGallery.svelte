<script lang="ts">
	export let title: string;
	export let images: string[];
</script>

<div class="w-full md:w-1/2">
	<div class="pattern-dots-md text-secondary rounded-xl">
		<div class="carousel w-full -ml-8 md:ml-0 -translate-y-2 translate-x-4">
			{#if images.length}
				{#each images as image, i}
					<div class="carousel-item w-full max-h-96">
						<img
							id={`item${i + 1}`}
							src={image}
							class="w-full rounded-xl"
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
