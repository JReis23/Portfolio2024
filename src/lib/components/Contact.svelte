<script>
	import { enhance } from '$app/forms';
	export let form;
</script>

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
