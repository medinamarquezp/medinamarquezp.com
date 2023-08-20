<script lang="ts">
	export let id: string;
	export let title: string;
	export let url: string;
</script>

<dialog {id} class="modal">
	<form method="dialog" class="modal-box max-w-3xl">
		<img src={url} alt={title} />
	</form>
	<form method="dialog" class="modal-backdrop">
		<button>Cerrar</button>
	</form>
</dialog>
