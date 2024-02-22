<script>
	// import { enhance } from '$app/forms';
	import { superForm } from 'sveltekit-superforms';
	import Button from '$lib/ui/Button.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { page } from '$app/stores';
	import { contactFormSchema } from '$lib/contactFormValidation.js';
	import { zod, valibotClient } from 'sveltekit-superforms/adapters';

	// Client API:
	export let data;
	export const { form, errors, message, constraints, enhance } = superForm(data.form);

	let isOpen = false;
</script>

<button on:click={() => (isOpen = !isOpen)}>Opend Modal</button>

<Modal {isOpen}>
	{#if $message}
		<p>{$message}</p>
	{/if}
	<form action="/" method="POST" use:enhance>
		<label for="email">
			<input type="email" placeholder="Email" name="email" bind:value={$form.email} />
			{#if $errors?.email}
				<span class="">{$errors.email}</span>
			{/if}
		</label>
		<label for="name">
			<input type="text" placeholder="Name" name="name" bind:value={$form.name} />
			{#if $errors?.name}
				<span class="">{$errors.name}</span>
			{/if}
		</label>
		<label for="message">
			<input
				type="textarea"
				placeholder="Message"
				name="message"
				aria-rowspan="5"
				bind:value={$form.message}
			/>
			{#if $errors?.message}
				<span class="">{$errors.message}</span>
			{/if}
		</label>
		<div class="button">
			<Button type="primary">Envoyer</Button>
		</div>
	</form>
</Modal>

<style>
	.button {
		display: flex;
		justify-content: flex-end;
	}
</style>
