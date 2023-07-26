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

<svelte:head>
	<link href="https://unpkg.com/pattern.css" rel="stylesheet" />
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
	/>
	<link
		rel="alternate"
		type="application/rss+xml"
		title="RSS Feed"
		href="/rss.xml"
	/>
</svelte:head>

<div class="flex flex-col min-h-screen sm:px-16 px-2">
	<Header />
	<slot />
	<Footer />
</div>
