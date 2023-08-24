<script lang="ts">
	import type { Card } from '$lib/types';
    export let item: Card;
	let { title, date, path, content } = item;
</script>

<a rel="external" href={path} class="card bg-neutral transition hover-scale hover:shadow-lg">
	<div class="card-body">
		<h1 class="card-title">{title}</h1>
		<span class="text-base text-slate-500 -mt-2">{date}</span>
		<p>{content}</p>
	</div>
</a>
