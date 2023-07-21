<script>
	import SocialContact from "$lib/components/ui/globals/SocialContact.svelte";
	import LatestNews from "$lib/components/ui/latest-news/LatestNews.svelte";
</script>

<div class="mx-6 sm:mx-12 lg:mx-24 my-12 text-xl animate-fade animate-once animate-duration-300 animate-ease-in">
    <h1 class="text-6xl font-bold">hola!</h1>
    <p class="mt-4">
        Soy Pedro. Diseñador y desarrollador de software curioso, creativo e inquieto. Disfruto creando productos robustos, escalables y resilientes y por el camino me entretengo dando vida a todas las ideas locas que se me pasan por la cabeza. Ocasionalmente acepto colaboraciones en proyectos como freelance si estos me resultan interesantes y retadores.
    </p>
    <div class="mt-8">
        <p class="mb-2 font-medium">¿Hablamos?</p>
        <SocialContact justify={false} />
    </div>
    <LatestNews title="Novedades" />
</div>