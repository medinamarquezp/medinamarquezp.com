<script>
	import DarkmodeSwitcher from '$lib/components/ui/globals/DarkmodeSwitcher.svelte';
	import { IconMenuDeep } from '@tabler/icons-svelte';
</script>

<div class="navbar">
	<div class="navbar-start">
		<a href="/" title="Inicio">
			<img class="w-12 h-12" src="/medinamarquezp.gif" alt="medinamarquezp" />
		</a>
	</div>
	<div class="navbar-center hidden sm:flex">
		<ul class="menu menu-lg menu-horizontal px-1">
			<li><a href="/about" title="Sobre mí">sobre mí</a></li>
			<li><a href="/blog" title="Blog">blog</a></li>
			<li><a href="/projects" title="Proyectos">proyectos</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<DarkmodeSwitcher />
		<details class="dropdown dropdown-end">
			<summary class="btn btn-ghost hover-scale hover:bg-transparent sm:hidden">
				<IconMenuDeep size={32} stroke={3} />
			</summary>
			<ul
				class="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/about" title="Sobre mí">sobre mí</a></li>
				<li><a href="/blog" title="Blog">blog</a></li>
				<li><a href="/projects" title="Proyectos">proyectos</a></li>
			</ul>
		</details>
	</div>
</div>

<style>
	.menu-lg a {
		@apply text-xl rounded-full;
	}
</style>
