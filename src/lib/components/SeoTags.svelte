<script lang="ts">
	import { page } from '$app/stores';
	import { env } from '$env/dynamic/public';
	export let title = '¡Hola soy Pedro! Te doy la bienvenida a mi weblog';
	export let description =
		'Disfruto creando productos robustos, escalables y resilientes y por el camino me entretengo dando vida a todas las ideas locas 🤪 que se me pasan por la cabeza';
	export let keywords =
		'diseño, desarrollo web, emprendimiento, solopreneur, indiehacker, maker, buildinginpublic';
	export let image: string | null = null;
	const pageUrl = `${env.PUBLIC_SITE_URL}${$page.url.pathname}`
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={pageUrl} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="author" content="Pedro Medina Márquez" />
	<meta name="language" content="es" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	{#if image}
		<meta property="og:image" content={image} />
	{/if}
	<meta property="og:url" content={pageUrl} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@medinamarquezp"/>
	<meta name="twitter:creator" content="@medinamarquezp">
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	{#if image}
		<meta name="twitter:image" content={image} />
	{/if}
</svelte:head>
