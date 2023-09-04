<script lang="ts">
	import type { PageData } from './$types';
	import { blogsToCards } from '$lib/utilities/transformers';
	import SeoTags from '$lib/components/SeoTags.svelte';
	import CardsGrid from '$lib/components/CardsGrid.svelte';
	import SocialContact from '$lib/components/SocialContact.svelte';

	export let data: PageData;
	$: items = blogsToCards(data.latest);
</script>

<SeoTags />

<div class="container-content">
	<h1
		class="mt-5 text-4xl sm:text-5xl md:text-6xl !leading-snug tracking-tight font-bold bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text"
	>
		¡Hola, soy Pedro!
	</h1>
	<p class="mt-2 text-2xl sm:text-3xl font-normal sm:!leading-[2.6rem]">
		<span class="underline decoration-primary decoration-wavy">
			Diseñador y desarrollador Full Stack</span
		> 🤹‍♀️ curioso e inquieto.
		Disfruto creando productos <span class="underline decoration-primary decoration-wavy"
		>robustos, escalables y resilientes </span> y, por el
		camino, me entretengo dando vida a todas las ideas locas 🤪 que se me pasan
		por la cabeza. Ocasionalmente,
		<span class="underline decoration-primary decoration-wavy"
			> acepto colaboraciones en proyectos como freelance</span
		> si estos me resultan retadores.
	</p>
	<div class="mt-6 lg:mt-10">
		<p class="mb-2 text-xl sm:text-2xl font-medium">¿Hablamos?</p>
		<SocialContact justify={false} />
	</div>
	<CardsGrid title="Novedades" {items} />
</div>
