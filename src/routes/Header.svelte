<script>
	import DarkmodeSwitcher from '$lib/components/ui/DarkmodeSwitcher.svelte';
</script>

<div class="navbar">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="-1" for="menu" class="btn btn-ghost sm:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
			</label>
			<ul
				tabindex="-1"
				class="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/about" title="Sobre mí">sobre mí</a></li>
				<li><a href="/blog" title="Blog">blog</a></li>
				<li><a href="/projects" title="Proyectos">Proyectos</a></li>
			</ul>
		</div>
		<a href="/" title="Inicio">
			<img class="w-12 h-12" src="/medinamarquezp.gif" alt="medinamarquezp">
		</a>
	</div>
	<div class="navbar-center hidden sm:flex">
		<ul class="menu menu-lg menu-horizontal px-1">
			<li><a href="/about" title="Sobre mí">sobre mí</a></li>
			<li><a href="/blog" title="Blog">blog</a></li>
			<li><a href="/projects" title="Proyectos">Proyectos</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<DarkmodeSwitcher />
	</div>
</div>
