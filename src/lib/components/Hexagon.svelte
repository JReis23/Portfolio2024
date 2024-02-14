<article class="container">
	<div>
		<div>
			<span class="one h6"></span>
			<span class="two h3"></span>
		</div>
	</div>

	<div>
		<div>
			<span class="one h1"></span>
			<span class="two h4"></span>
		</div>
	</div>

	<div>
		<div>
			<span class="one h5"></span>
			<span class="two h2"></span>
		</div>
	</div>
</article>

<style>
	div {
		position: absolute;
		width: 360px;
		height: 204px;
	}

	div:nth-of-type(2) {
		transform: rotate(60deg);
	}
	div:nth-of-type(3) {
		transform: rotate(-60deg);
	}

	div div {
		width: 100%;
		height: 100%;
		position: relative;
	}

	div div span {
		position: absolute;
		width: 4px;
		height: 0%;
		background: var(--contrast-color);
		z-index: 999999;
	}

	.h1 {
		left: 0;
		animation: load1 22.5s ease infinite;
	}
	.h2 {
		right: 0;
		animation: load2 22.5s ease 2s infinite;
	}
	.h3 {
		right: 0;
		animation: load3 22.5s ease 4s infinite;
	}
	.h4 {
		right: 0;
		animation: load4 22.5s ease 6s infinite;
	}
	.h5 {
		left: 0;
		animation: load5 22.5s ease 8s infinite;
	}
	.h6 {
		left: 0;
		animation: load6 22.5s ease 10s infinite;
	}

	@keyframes load1 {
		0% {
			bottom: 0;
			height: 0;
		}
		6.944444444% {
			bottom: 0;
			height: 100%;
		}
		50% {
			top: 0;
			height: 100%;
		}
		59.944444433% {
			top: 0;
			height: 0;
		}
		/*   91.6666667%{top:0;height:0%;} */
	}

	@keyframes load2 {
		0% {
			top: 0;
			height: 0;
		}
		6.944444444% {
			top: 0;
			height: 100%;
		}
		50% {
			bottom: 0;
			height: 100%;
		}
		59.944444433% {
			bottom: 0;
			height: 0;
		}
		/*   91.6666667%{bottom:0;height:0%} */
	}

	@keyframes load3 {
		0% {
			top: 0;
			height: 0;
		}
		6.944444444% {
			top: 0;
			height: 100%;
		}
		50% {
			bottom: 0;
			height: 100%;
		}
		59.94444443% {
			bottom: 0;
			height: 0;
		}
		/*   91.6666667%{bottom:0;height:0%;} */
	}

	@keyframes load4 {
		0% {
			top: 0;
			height: 0;
		}
		6.944444444% {
			top: 0;
			height: 100%;
		}
		50% {
			bottom: 0;
			height: 100%;
		}
		59.94444443% {
			bottom: 0;
			height: 0;
		}
		/*   91.6666667%{bottom:0;height:0%;} */
	}

	@keyframes load5 {
		0% {
			bottom: 0;
			height: 0;
		}
		6.944444444% {
			bottom: 0;
			height: 100%;
		}
		50% {
			top: 0;
			height: 100%;
		}
		59.94444443% {
			top: 0;
			height: 0;
		}
		/*   91.6666667%{top:0;height:0%;} */
	}

	@keyframes load6 {
		0% {
			bottom: 0;
			height: 0;
		}
		6.944444444% {
			bottom: 0;
			height: 100%;
		}
		50% {
			top: 0;
			height: 100%;
		}
		59.94444443% {
			top: 0;
			height: 0;
		}
		/*   91.6666667%{top:0;height:0%;} */
	}
</style>
