<script>
	import Me from '$lib/components/Me.svelte';
	import Main from '$lib/components/Main.svelte';
	import WorkPlaces from '$lib/components/WorkPlaces.svelte';
	// import Projects from '../components/Projects.svelte';
	import Social from '$lib/components/Social.svelte';

	export let data;

	console.log({ data });
</script>

<svelte:head>
	<title>Joao REIS - Développeur Web Nouvelle Aquitaine, Bordeaux</title>
</svelte:head>

<Main />
<Me />
<WorkPlaces />
<Social />
