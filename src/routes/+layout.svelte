<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';

	onMount(() => {
		themeChange(false);
	});
</script>

<div class="flex flex-col min-h-screen sm:px-16 px-2">
	<Header />
	<slot />
	<Footer />
</div>
