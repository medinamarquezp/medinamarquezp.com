<script>
	import SocialContact from "$lib/components/ui/globals/SocialContact.svelte";
	import LatestNews from "$lib/components/ui/latest-news/LatestNews.svelte";
</script>

<div class="mx-12 lg:mx-24 my-12 text-xl">
    <h1 class="text-6xl font-bold">hola!</h1>
    <p class="mt-4">
        Soy Pedro. Diseñador y desarrollador de software curioso, creativo e inquieto, abierto a trabajar con todo tipo de tecnologías, con especial interés por aquellas basadas en el ecosistema Javascript. Disfruto creando productos robustos, escalables y resilientes y por el camino me entretengo dando vida a todas las ideas locas que se me pasan por la cabeza.
    </p>
    <div class="mt-8">
        <p class="mb-2">¿Hablamos?</p>
        <SocialContact justify={false} />
    </div>
    <LatestNews />
</div>