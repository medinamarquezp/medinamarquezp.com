<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { IconBrandTwitterFilled } from '@tabler/icons-svelte';
	export let path: string;
	export let content: string;
</script>

<a
	class="flex flex-row w-full sm:w-auto font-normal text-white gap-2 justify-center items-center py-4 px-6 rounded-full bg-blue-500 hover-scale"
	target="_blank"
	href={`https://twitter.com/share?url=${encodeURIComponent(
		`${env.PUBLIC_SITE_URL}/blog/${path}`
	)}&text=${encodeURIComponent(`"${content}" por @medinamarquezp`)}`}
	><IconBrandTwitterFilled size={22} /> Compártelo en Twitter
	<span class="hidden sm:inline">💪</span></a
>
