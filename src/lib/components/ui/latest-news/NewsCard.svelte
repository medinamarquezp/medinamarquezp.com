<script>
    export let title = ''
    export let content = ''
	export let href = '/'
</script>

<a {href} class="card bg-neutral transition hover-scale-sm hover:shadow-lg">
	<div class="card-body">
		<h1 class="card-title">{title}</h1>
		<p>{content}</p>
	</div>
</a>
