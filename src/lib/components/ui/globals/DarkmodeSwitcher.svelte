<script>
	import { IconMoon, IconSunLow } from "@tabler/icons-svelte";
</script>
<label class="swap swap-rotate hover-scale btn btn-ghost hover:bg-transparent">
	<input
		type="checkbox"
		data-toggle-theme="night,cupcake"
		data-act-class="ACTIVECLASS"
	/>
	<IconSunLow class="swap-on fill-current w-8 h-8" />
	<IconMoon class="swap-off fill-current w-8 h-8" />
</label>
