<script>
	import NotionIcon from '$lib/components/NotionIcon.svelte';
	import SocialContact from '$lib/components/SocialContact.svelte';

	const year = new Date().getFullYear();
	const coords = `39°33'38"N 2°40'7"E`;
</script>

<footer
	class="mt-auto flex flex-col md:flex-row gap-2 text-md text-center md:text-left justify-between"
>
	<div>
		<SocialContact />
		<div class="mt-2 mb-2 md:mb-8">
			<p>© Pedro Medina Márquez {year}, {coords} ツ</p>
		</div>
	</div>
	<div class="flex flex-row gap-2 items-center justify-center mb-8">
		Hecho con ❤️ usando <i class="devicon-svelte-plain colored text-2xl" /> y <NotionIcon size={21} />
	</div>
</footer>
