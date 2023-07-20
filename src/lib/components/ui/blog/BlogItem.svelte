<script lang="ts">
	export let title: string;
	export let date: string;
	export let link: string;
</script>

<article class="relative group">
	<a href={link} class="flex p-6 rounded-xl bg-neutral sm:bg-transparent hover:bg-neutral transition">
		<svg
		viewBox="0 0 9 9"
		class="hidden absolute right-full mr-6 top-2 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
		><circle
			cx="4.5"
			cy="4.5"
			r="4.5"
			stroke="currentColor"
			stroke-width="2"
		/></svg
	>
	<div class="relative">
		<h3 class="font-semibold pt-8 lg:pt-0 text-2xl">{title}</h3>
		<div class="flex flex-row gap-4 mt-2 mb-4 items-center">
			<div class="badge badge-lg bg-secondary">Emprendimiento</div>
			<div class="text-lg text-slate-500">
				{' ☕️ '.repeat(3)} <span class="pl-1">(Léelo en 10 minutos)</span>
			</div>
		</div>
		<div
			class="mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2"
		>
			<slot />
		</div>
		<div
			class="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]"
		>
			<div class="whitespace-nowrap">{date}</div>
		</div>
	</div>
	</a>
</article>
