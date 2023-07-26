<script lang="ts">
	import type { PageData } from './$types';
	import { blogsToCards } from '$lib/utilities/transformers';
	import SeoTags from '$lib/components/SeoTags.svelte';
	import CardsGrid from '$lib/components/CardsGrid.svelte';
	import SocialContact from '$lib/components/SocialContact.svelte';

	export let data: PageData;
	$: items = (blogsToCards(data.latest));
</script>

<SeoTags />

<div
	class="container px-6 sm:px-12 lg:px-24 my-12 text-xl animate-fade animate-once animate-duration-300 animate-ease-in"
>
	<h1
		class="text-5xl sm:text-7xl !leading-snug tracking-tight font-bold bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text"
	>
		¡Hola, soy Pedro!
	</h1>
	<p class="mt-2 text-2xl font-normal leading-normal">
		<span class="underline decoration-primary decoration-wavy">
		Diseñador y desarrollador de software curioso, creativo e inquieto.</span> Disfruto
		creando productos robustos, escalables y resilientes y por el camino me entretengo
		dando vida a todas las ideas locas 🤪 que se me pasan por la cabeza. <span class="underline decoration-primary decoration-wavy">Ocasionalmente
		acepto colaboraciones en proyectos como freelance</span> si estos me resultan interesantes
		y retadores.
	</p>
	<div class="mt-6">
		<p class="mb-2 text-2xl font-medium">¿Hablamos?</p>
		<SocialContact justify={false} />
	</div>
	<CardsGrid title="Novedades" {items} />
</div>
