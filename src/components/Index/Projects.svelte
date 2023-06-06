<script lang="ts">
	import { onMount } from 'svelte';
	import Project from '../Projects/Project.svelte';
	import projects from '../../content/projects.js';

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
		observer.observe(document.querySelector('#projects') as Element);
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

<section class="section" id="projects">
	<div class="header">
		<p class={'header-label ' + animateIn(1 * animationSpeed, 'fade')}>Projects</p>
		<header class={'header-title ' + animateIn(2 * animationSpeed, 'fade')}>What I've Built</header>
		<p class={'header-subtitle ' + animateIn(3 * animationSpeed, 'fade')}>
			I do all sorts of projects ranging from front-end development, back-end development to data
			science.
		</p>
	</div>
	<div class="projects-container">
		<div class="projects-list" style="--project-count: {projects.length}">
			{#each projects as project, index}
				<div class={'project ' + animateIn((4 + index) * (animationSpeed / 1.5), 'fade')}>
					<Project
						imageLink={project.imageLink}
						title={project.title}
						description={project.description}
						link={project.link}
						tags={project.tags}
					/>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.section {
		max-width: 100%;
	}

	.header {
		display: flex;
		flex-direction: column;
		@include sm {
			margin: 0 auto;
		}
		max-width: $screen-lg-min;
		padding-bottom: 40px;
	}

	.projects-list {
		max-width: 100vw;
		display: grid;
		grid-template-columns: 1fr;
		gap: 30px;
		top: 0;
		left: 0;
		@include sm {
			padding: 10px 100px;
		}
		padding: 0;
		overflow-x: scroll;
		overflow-y: visible;

		// Hide scrollbar
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE 10+ */

		grid-template-columns: repeat(calc(var(--project-count) / 2), 1fr);
		grid-template-rows: 1fr 1fr;

		@include sm {
			grid-template-columns: repeat(calc(var(--project-count) / 2), 1fr);
			grid-template-rows: 1fr 1fr;

			font-size: 128px;
		}
	}

	.projects-list::-webkit-scrollbar {
		width: 0px;
		background: transparent;
	}

	.project {
		@include sm {
			width: 400px;
		}
		width: 100vw;
		min-width: auto;
	}
</style>
