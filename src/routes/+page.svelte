<script>
	import Me from '$lib/components/Me.svelte';
	import Main from '$lib/components/Main.svelte';
	import WorkPlaces from '$lib/components/WorkPlaces.svelte';
	// import Projects from '../components/Projects.svelte';
	import Social from '$lib/components/Social.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { superForm } from 'sveltekit-superforms';
	import Button from '$lib/ui/Button.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { page } from '$app/stores';
	import { contactFormSchema } from '$lib/contactFormValidation.js';
	import { zod, valibotClient } from 'sveltekit-superforms/adapters';

	import SuperDebug from 'sveltekit-superforms';

	export let data;

	const { form, errors, message, constraints, enhance } = superForm(data.form);

	console.log($message);

	let isOpen = false;
</script>

<svelte:head>
	<title>Joao REIS - Développeur Web Nouvelle Aquitaine, Bordeaux</title>
</svelte:head>

{#each data.serializedData as item}
	<h1>{item.name}</h1>
{/each}

<Main />
<Me />
<WorkPlaces />
<Social />

<button on:click={() => (isOpen = !isOpen)}>Opend Modal</button>
<SuperDebug data={$form} />
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

<style>
	.button {
		display: flex;
		justify-content: flex-end;
	}
</style>
