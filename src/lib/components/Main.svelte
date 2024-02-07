<script>
	import Button from '../ui/Button.svelte';
</script>

<section id="index">
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
</section>

<style>
	section {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin: 0 auto;
	}

	h1 {
		font-size: clamp(40px, 8vw, 80px);
		line-height: 0.9;
		margin-bottom: 10px;
		font-weight: 600;
		color: var(--lightest-slate);
	}

	h3 {
		font-size: clamp(40px, 8vw, 80px);
		line-height: 0.9;
		margin-bottom: 10px;
	}

	p {
		max-width: 530px;
	}
</style>
