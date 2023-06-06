<script lang="ts">
	import { onMount } from 'svelte';
	import Project from '../Projects/Project.svelte';

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
	const animationSpeed = 3

	let projects = [
		{
			imageLink: '/banners/SpeakByHand.png',
			title: 'Speak by Hand',
			description:
				'A Smartwatch-Based Alternative Communication Aid for Nonverbal Individuals that uses a CNN Based Gesture Recognition Model',
			link: 'https://github.com/OlivarezK/SpeakByHand',
			tags: ['AAC', 'ML', 'Jetpack', 'Smartwatch']
		},
		{
			imageLink: '/banners/MMCLACMWebsite.png',
			title: 'Mapua MCL ACM Website',
			description:
				'The website for the ACM Student Chapter of Mapua Malayan Colleges Laguna. Built using TailwindCSS and Gatsby.',
			link: 'https://acm.mcl-ccis.net',
			tags: ['React', 'Gatsby', 'Tailwind', 'ACM']
		},
		{
			imageLink: '/banners/LokalMusic.png',
			title: 'Lokal Music',
			description:
				'An eCommerce website where fans may purchase and download music uploaded by independent Filipino artists.',
			link: 'https://github.com/LipatJob/LokalMusic',
			tags: ['SQL Server', 'ADO.NET', 'WebForms']
		},
		{
			imageLink: '/banners/SeatSave.png',
			title: 'Seat Save',
			description:
				"A website where visitors of Mapua MCL's library may find and reserve a seat. Built using ASP.NET WebAPI, Entity Framework, and React.",
			link: 'https://github.com/LipatJob/SeatSave',
			tags: ['ASP.NET', 'React', 'Agile']
		},
		{
			imageLink: '/banners/CovidTrackerV3.jpg',
			title: 'MMCL COVID19 Tracker (v3)',
			description:
				'A dashboard where users may view visualizations of COVID-19 cases in the cities and barangays of the provice of Laguna, Philippines',
			link: 'https://mcl-covid19tracker-laguna.netlify.app/',
			tags: ['Vue', 'ApexCharts', 'Data Pipeline']
		},
		{
			imageLink: '/banners/DiscoverMapuaMCL.png',
			title: 'Discover Mapua MCL',
			description:
				'An application that allows users to navigate the campus of Mapua Malayan Colleges Laguna with the help of augmented reality.',
			link: 'https://github.com/LipatJob/DiscoverMapuaMCL',
			tags: ['AR', 'Unity', 'ARCore']
		},
		{
			imageLink: '/banners/Sparse.png',
			title: 'Sparse',
			description:
				'A website where students may view how how many people are in the Library of MCL. Built using WebForms and PyTorch',
			link: 'https://github.com/zoloenma/Sparse-System',
			tags: ['ASP.NET', 'Computer Vision', 'PyTorch']
		},
		{
			imageLink: '/banners/TheModernBibliotheca.png',
			title: 'TheModernBibliotheca',
			description:
				'A website where people could browse, borrow and returns books. Built using WebForms and Bootstrap',
			link: 'https://github.com/charmaine-rabano/TheModernBibliotheca',
			tags: ['WebForms', 'Boostrap', 'Responsive']
		},
		{
			imageLink: '/banners/CFlat.png',
			title: 'Cb (C Flat)',
			description:
				'A compiled and statically typed programming language that aims combine the simplicity of Python and the type safety of C.',
			link: 'https://github.com/LipatJob/CFlat',
			tags: ['Programming Language', 'Recursive Descent']
		},
		{
			imageLink: '/banners/4Pycs1Word.png',
			title: '4pycs1word',
			description:
				'The classic mobile game 4 Pics 1 Word written in Python complete with coins, hints, and level skips.',
			link: 'https://github.com/LipatJob/4pycs1word',
			tags: ['Python', 'Tkinter', 'Game']
		}
	];
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
				<div class={'project ' + animateIn( (4 + index) * (animationSpeed/1.5), 'fade')}>
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
