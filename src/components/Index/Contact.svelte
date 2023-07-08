<script lang="ts">
	import { onMount } from 'svelte';
	import Affiliation from '../Affiliation/Affiliation.svelte';
	import ButtonLink from '../Common/ButtonLink.svelte';
	import Item from '../Common/Item.svelte';

	let ready = false;
	let animationIndex = 1;
	onMount(() => {
		const observer = new IntersectionObserver(
			(elements) => {
				const element = elements[0];
				if (element.isIntersecting) {
					ready = true;
				}
			},
			{
				threshold: 0.3
			}
		);
		observer.observe(document.querySelector('#contact') as Element);
	});
	setInterval(() => {
		if (ready && animationIndex < 1000) {
			animationIndex++;
		}
	}, 50);
	$: animateIn = (targetIndex: number, animation: string) => {
		return targetIndex >= animationIndex ? 'hidden' : 'visible ' + animation;
	};

	const animationSpeed = 3;
</script>

<section class="section" id="contact">
	<div class="header">
		<p class={'header-label ' + animateIn(1 * animationSpeed, 'fade')}>Contact</p>
		<header class={'header-title ' + animateIn(2 * animationSpeed, 'fade')}>
			Let's Build Something Together
		</header>
		<header class={'header-subtitle ' + animateIn(3 * animationSpeed, 'fade')}>
			Feel free to reach out if you're looking for a developer, have a question, or just want to
			connect.
		</header>
	</div>

	<div class="button-container">
		<div class={animateIn(4 * animationSpeed, 'fade')}>
			<ButtonLink link="https://github.com/LipatJob" iconLink="icons/github.svg" text="Github" />
		</div>
		<div class={animateIn(5 * animationSpeed, 'fade')}>
			<ButtonLink
				link="https://www.linkedin.com/in/joblipat/"
				iconLink="icons/linkedin.png"
				text="LinkedIn"
			/>
		</div>
		<div class={animateIn(6 * animationSpeed, 'fade')}>
			<ButtonLink link="mailto:joblipat@gmail.com" iconLink="icons/email.svg" text="Email" />
		</div>
	</div>
</section>

<style>
	.section {
		text-align: center;
		display: flex;
		align-items: center;
		margin: 100px 0;
	}

	.header-subtitle {
		max-width: 568px;
	}

	.button-container {
		display: flex;
		flex-direction: row;
		gap: 20px;
	}
</style>
