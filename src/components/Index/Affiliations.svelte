<script lang="ts">
	import { onMount } from 'svelte';
	import Affiliation from '../Affiliation/Affiliation.svelte';
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
		observer.observe(document.querySelector('#aff') as Element);
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

<section class="section" id="aff">
	<div class="header">
		<p class={'header-label ' + animateIn(1 * animationSpeed, 'fade')}>Affiliations</p>
		<header class={'header-title ' + animateIn(2 * animationSpeed, 'fade')}>
			Organizations I'm Affiliated With
		</header>
	</div>

	<div class="affiliations">
		<div class={animateIn(3 * animationSpeed, 'fade')}>
			<Affiliation
				link="https://www.facebook.com/mapuamclacm"
				logo="mapua mcl acm.png"
				name="Mapua MCL ACM Student Chapter"
				startDate="August 2019"
				endDate="Present"
				description="An organization that aims to promote a greater interest in modern computing and its application"
			/>
		</div>
		<div class={animateIn(4 * animationSpeed, 'fade')}>
			<Affiliation
				link="https://www.facebook.com/MCLccis.sc"
				logo="ccis council.png"
				name="Mapua MCL CCIS Student Council"
				startDate="August 2020"
				endDate="August 2021"
				description="The student council of Mapua Malayan Colleges Laguna’s College of Computer and Information Science"
			/>
		</div>
		<div class={animateIn(5 * animationSpeed, 'fade')}>
			<Affiliation
				link="https://www.facebook.com/mapuamclacm"
				logo="junior mcl acm.png"
				name="Junior MCL ACM Student Chapter"
				startDate="November 2018"
				endDate="June 2019"
				description="The senior high school counterpart of Mapua MCL ACM Student Chapter"
			/>
		</div>
	</div>
</section>

<style lang="scss">
	.section {
		width: 100%;
	}
	.affiliations {
		gap: 20px;
		display: grid;
		width: 100%;
		@include lg {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	.affiliations > * {
		min-width: 100%;
		min-height: 100%;
	}

	.visible{
		opacity: 1;
	}
</style>
