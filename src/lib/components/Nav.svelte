<script>
	import Button from '../ui/Button.svelte';
	// import { openNav } from '../stores/OpenNav';

	let y = 0;
	let onMove = 'scrolled';

	// const handle = () => {
	// 	$openNav = !$openNav;
	// };

	$: y;

	console.log(y);

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<header>
	<nav>
		<div class="logo">
			<img src="/img/vectorpaint.svg" alt="logo joao reis" />
		</div>
		<div>
			<div>
				<!-- <svg
						fill="var(--contrast-color)"
						width="36"
						height="36"
						version="1.1"
						id="lni_lni-menu"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						viewBox="0 0 64 64"
						style="enable-background:new 0 0 64 64;"
						xml:space="preserve"
					>
						<g>
							<path
								d="M61,30.3H3c-1,0-1.8,0.8-1.8,1.8S2,33.8,3,33.8h58c1,0,1.8-0.8,1.8-1.8S62,30.3,61,30.3z"
							/>
							<path
								d="M61,47.9H3c-1,0-1.8,0.8-1.8,1.8S2,51.4,3,51.4h58c1,0,1.8-0.8,1.8-1.8S62,47.9,61,47.9z"
							/>
							<path
								d="M3,16.1h58c1,0,1.8-0.8,1.8-1.8S62,12.6,61,12.6H3c-1,0-1.8,0.8-1.8,1.8S2,16.1,3,16.1z"
							/>
						</g>
					</svg> -->
			</div>
			<div>
				<ol class>
					<li class="lnk"><a href="#me" on:click|preventDefault={scrollIntoView}> Moi</a></li>
					<li class="lnk">
						<a href="#experience" on:click|preventDefault={scrollIntoView}> Expérience</a>
					</li>
				</ol>
			</div>
		</div>
	</nav>
</header>

<style>
	header {
		z-index: 10;
		padding: 1rem 2rem;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: var(--navy);
	}

	nav {
		display: flex;
		justify-content: space-between;
	}

	ol {
		display: flex;
	}

	img {
		width: 40px;
	}

	li {
		counter-increment: item 1;

		&::before {
			content: '';
		}
	}

	a {
		padding: 0 0.7rem;
		color: var(--text);

		&::before {
			content: '0' counter(item) '.';
			color: var(--contrast-color);
			margin-right: 5px;
		}

		&:hover {
			color: var(--contrast-color);
		}

		&:focus,
		&:active {
			color: var(--contrast-color);
		}
	}

	.button {
		margin-left: 2rem;
	}
</style>
