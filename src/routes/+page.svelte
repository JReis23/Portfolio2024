<script>
	import Me from '$lib/components/Me.svelte';
	import Main from '$lib/components/Main.svelte';
	import WorkPlaces from '$lib/components/WorkPlaces.svelte';
	// import Projects from '../components/Projects.svelte';
	import Social from '$lib/components/Social.svelte';
	// import Contact from '$lib/components/Contact.svelte';
	import { enhance } from '$app/forms';

	export let data;
	export let form;
	console.log({ form });
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
<form action="/" method="POST" use:enhance>
	<label for="email">
		<input type="email" placeholder="Email" name="email" />
		#{#if form?.errors?.email}
			<span class="label-text-alt text-error">{form?.errors?.name[0]}</span>
		{/if}
	</label>
	<label for="name">
		<input type="text" placeholder="Name" name="name" />
	</label>
	<label for="message">
		<input type="textarea" placeholder="Message" name="message" aria-rowspan="5" />
	</label>
	<button>Envoyer</button>
</form>
