<script lang="ts">
	export let badgets: string[];
</script>

<div class="badgets inline-block">
	{#each badgets as badget}
		<span>{badget}</span>
	{/each}
</div>

<style>
	.badgets span {
		@apply px-6 py-2 mr-2 mb-2 bg-neutral whitespace-nowrap rounded-lg inline-block;
	}
</style>
