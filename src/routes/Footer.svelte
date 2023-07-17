<script>
	import SocialContact from "$lib/components/ui/SocialContact.svelte";
	const year = new Date().getFullYear();
	const coords = `39°33'38"N 2°40'7"E`;
</script>

<footer class="mt-8 flex flex-col gap-1 text-md">
	<SocialContact />
	<div>
		<p>© Pedro Medina Márquez {year}, {coords} ツ</p>
	</div>
</footer>
