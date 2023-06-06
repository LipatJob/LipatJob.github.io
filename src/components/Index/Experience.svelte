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

<section class="section" id="experience">
	<div class="header">
		<p class={'header-label ' + animateIn(1 * animationSpeed, 'fade')}>Experience</p>
		<header class={'header-title ' + animateIn(2 * animationSpeed, 'fade')}>
			Where I've worked
		</header>
	</div>

	<div class="experiences">
		<div class={animateIn(3 * animationSpeed, 'fade')}>
			<Item
				icon="teacher.png"
				title="Programming Mentor"
				subtitle="Freelance"
				bullets={[
					'Taught the basics of programming to college and senior high school students',
					'Taught basic game development using Unity'
				]}
				dateStart="December 2021"
				dateEnd="Present"
			/>
		</div>
		<div class={animateIn(4 * animationSpeed, 'fade')}>
			<Item
				icon="mapua mcl.png"
				title="Senior High School On-the-Job Trainee"
				subtitle="Mapua Malayan Colleges Laguna"
				bullets={[
					'Addressed the gap in the manual scholarship validation process',
					'Developed a web application for uploading and validating student scholarship requirements'
				]}
				dateStart="March 2019"
				dateEnd="May 2019"
			/>
		</div>
	</div>
</section>

<style>
	.experiences {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
</style>
