<script>
	import { page } from '$app/stores';
</script>

<div class="flex flex-col mx-6 sm:mx-12 lg:mx-24 mt-10 items-center">
	<h1 class="text-6xl font-bold mb-4">🥲 {$page.status}</h1>
	<h2 class="text-3xl font-bold mb-4">
		{#if $page.status === 404}
			¡Ups! Parece que el contenido no está disponible.
		{/if}
		{#if $page.status === 500}
			¡Ups! parce que algo no ha ido bien.
		{/if}
	</h2>
	<a
		class="text-xl bg-neutral hover:bg-neutral-focus py-4 px-8 rounded-full"
		href="/"
	>
		<span class="mr-2">🚕</span> Llévame a la página de inicio</a
	>
</div>
