<script>
	import NewsCard from './NewsCard.svelte';
</script>

<div
	class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8"
>
	<h2 class="text-xl">Novedades</h2>
	<NewsCard
		title="Card title!"
		content="If a dog chews shoes whose shoes does he choose?"
	/>
	<NewsCard
		title="Card title!"
		content="If a dog chews shoes whose shoes does he choose?"
	/>
  <NewsCard
		title="Card title!"
		content="If a dog chews shoes whose shoes does he choose?"
	/>
</div>
