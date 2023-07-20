<script>
    export let title = ''
    export let content = ''
	export let href = '/'
</script>

<a {href} class="card bg-neutral transition hover-scale hover:shadow-lg">
	<div class="card-body">
		<h1 class="card-title">{title}</h1>
		<span class="text-base text-slate-500 -mt-2">24 de abril de 2023</span>
		<p>{content}</p>
	</div>
</a>
