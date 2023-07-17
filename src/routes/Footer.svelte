<script>
	import SocialContact from "$lib/components/ui/globals/SocialContact.svelte";
	const year = new Date().getFullYear();
	const coords = `39°33'38"N 2°40'7"E`;
</script>

<footer class="mt-auto flex flex-col gap-2 text-md text-center sm:text-left">
	<SocialContact />
	<div class="mb-8">
		<p>© Pedro Medina Márquez {year}, {coords} ツ</p>
	</div>
</footer>
