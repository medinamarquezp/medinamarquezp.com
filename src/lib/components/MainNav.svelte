<script lang="ts">
	import { page } from '$app/stores';
	export let classList: string;
	$: isActive = (path: string) => $page.url.pathname.includes(path);
</script>

<ul id="main-nav" tabindex="-1" class={classList}>
	<li>
		<a
			class:bg-neutral={isActive('about')}
			class="hover:bg-neutral transition"
			href="/about"
			title="Sobre mí">sobre mí</a
		>
	</li>
	<li>
		<a
			class:bg-neutral={isActive('blog')}
			class="hover:bg-neutral transition"
			href="/blog"
			title="Blog">blog</a
		>
	</li>
	<li>
		<a
			class:bg-neutral={isActive('projects')}
			class="hover:bg-neutral transition"
			href="/projects"
			title="Proyectos">proyectos</a
		>
	</li>
</ul>

<style>
	.menu-lg a {
		@apply text-xl rounded-full;
	}
</style>
