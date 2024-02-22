<script>
	import Button from '$lib/ui/Button.svelte';
	export let isOpen = false;
</script>

{#if isOpen}
	<div class="modal">
		<div class="modal-content">
			<slot />
		</div>
	</div>
{/if}

<style>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal-content {
		background: #fff;
		padding: 20px;
		border-radius: 5px;
	}
</style>
