<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import Header from '$lib/components/ui/globals/Header.svelte';
	import Footer from '$lib/components/ui/globals/Footer.svelte';
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
