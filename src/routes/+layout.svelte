<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import Header from './Header.svelte';
	import '../app.css';
	
	onMount(() => {
		themeChange(false);
	});
</script>

<div class="sm:px-16 px-2">
	<Header />
	<slot />
</div>
