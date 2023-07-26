<script lang="ts">
	import { navigating } from '$app/stores';
	import { IconMenuDeep } from '@tabler/icons-svelte';
	import MainNav from './MainNav.svelte';
	import DarkmodeSwitcher from './DarkmodeSwitcher.svelte';
</script>

<div class="container mx-auto navbar">
	<div class="navbar-start">
		{#if $navigating}
			<span class="loading loading-spinner loading-lg text-secondary" />
		{:else}
			<a href="/" title="Inicio">
				<img class="w-12 h-12" src="/medinamarquezp.gif" alt="medinamarquezp" />
			</a>
		{/if}
	</div>
	<div class="navbar-center hidden sm:flex">
		<MainNav classList="menu menu-lg menu-horizontal gap-1" />
	</div>
	<div class="navbar-end">
		<DarkmodeSwitcher />
		<details class="dropdown dropdown-end">
			<summary class="btn btn-ghost hover-scale hover:bg-transparent sm:hidden">
				<IconMenuDeep size={32} stroke={3} />
			</summary>
			<MainNav
				classList="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			/>
		</details>
	</div>
</div>
