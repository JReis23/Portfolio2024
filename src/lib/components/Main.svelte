<script>
	import Hexagon from '$lib/components/Hexagon.svelte';
	import Button from '../ui/Button.svelte';
</script>

<section id="index">
	<div class="container">
		<h2>Salut, je m'appelle</h2>
		<h1>João Reis</h1>
		<h3>et je suis développeur Web.</h3>
		<p>
			Je suis un développeur web spécialisé dans la création du front-end de tout site web, je
			développe également des applications back-end à intégrer aux solutions front-end que je crée.
			Après avoir obtenu mon diplôme, <span
				>je suis maintenant à la recherche d'un poste de développeur Web.</span
			>
		</p>

		<div class="button-main mt-16">
			<Button
				rel="external"
				href="https://drive.google.com/uc?id=1UoEYh2pBT0SBUudj7mvpgtRU2A_-7D2_"
				target="_blank"
				type="primary-main"
				>Regardez mon CV !
			</Button>
		</div>
	</div>
	<Hexagon />
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		flex-direction: row;
	}

	.container {
		width: 100%;
	}

	h1 {
		font-size: clamp(2.5rem, 8vw, 5rem);
		line-height: 0.9;
		margin-bottom: 10px;
		font-weight: 600;
		color: var(--lightest-slate);
	}

	h2 {
		padding: 0 0 1rem 0;
	}

	h3 {
		font-size: clamp(2rem, 3vw, 4rem);
		line-height: 0.9;
		margin-bottom: 2rem;
		font-weight: 600;
	}

	p {
		max-width: 36rem;
	}
</style>
