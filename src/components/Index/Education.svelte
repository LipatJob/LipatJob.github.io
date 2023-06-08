<script lang="ts">
	import { onMount } from 'svelte';
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
		observer.observe(document.querySelector('#experience') as Element);
	});
	setInterval(() => {
		if (ready && animationIndex < 1000) {
			animationIndex++;
		}
	}, 50);
	$: animateIn = (targetIndex: number, animation: string) => {
		return targetIndex >= animationIndex ? 'hidden' : animation;
	};

	const animationSpeed = 3;
</script>

<section class="section">
	<div class="header">
		<p class={'header-label ' + animateIn(5 * animationSpeed, 'fade')}>Education</p>
		<header class={'header-title ' + animateIn(6 * animationSpeed, 'fade')}>
			Where I've Studied
		</header>
	</div>

	<div class="schools">
		<div class={animateIn(7 * animationSpeed, 'fade')}>
			<Item
				icon="mapua mcl ccis.png"
				title="B.S. Computer Science"
				subtitle="Mapua Malayan Colleges Laguna"
				bullets={[
					'Running General Weighted Average of 1.0598 (Expectd to graduate Summa Cum Laude)',
					"Full Academic Scholar, Dean's Lister, and President's Lister for 3 years",
					'Expected to graduate in June 2023'
				]}
				dateStart="August 2019"
				dateEnd="Present"
			/>
		</div>
		<div class={animateIn(8 * animationSpeed, 'fade')}>
			<Item
				icon="mapua mcl shs.png"
				title="Senior High School On-the-Job Trainee"
				subtitle="Mapua Malayan Colleges Laguna"
				bullets={[
					'Graduated with Honors',
					'Given “Best in Work Immersion Award” by SHS Principal on June 21, 2019'
				]}
				dateStart="June 2017"
				dateEnd="June 2019"
			/>
		</div>
	</div>
</section>

<style>
	.schools {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
</style>
