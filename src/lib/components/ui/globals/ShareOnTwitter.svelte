<script lang="ts">
	import { IconBrandTwitterFilled } from '@tabler/icons-svelte';
	export let path: string;
	export let content: string;
	$: url = encodeURIComponent(path);
	$: text = encodeURIComponent(`"${content}" por @medinamarquezp`);
</script>

<a
	class="flex flex-row font-normal text-white gap-2 items-center py-4 px-6 rounded-full bg-blue-500 hover-scale"
	target="_blank"
	href={`https://twitter.com/share?url=${url}&text=${text}`}
	><IconBrandTwitterFilled size={22} /> Compártelo en Twitter 💪</a
>
