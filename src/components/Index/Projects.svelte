<script lang="ts">
	import Project from '../Projects/Project.svelte';

	let projects = [
		{
			imageLink: '/banners/SpeakByHand.png',
			title: 'Speak by Hand',
			description:
				'A Smartwatch-Based Alternative Communication Aid for Nonverbal Individuals that uses a CNN Based Gesture Recognition Model',
			link: ''
		},
		{
			imageLink: '/banners/MMCLACMWebsite.png',
			title: 'Mapua MCL ACM Website',
			description:
				'The website for the ACM Student Chapter of Mapua Malayan Colleges Laguna. Built using TailwindCSS and Gatsby.',
			link: ''
		},
		{
			imageLink: '/banners/LokalMusic.png',
			title: 'Lokal Music',
			description:
				'An eCommerce website where fans may purchase and download music uploaded by independent Filipino artists. Built using SQL Server, ASP.NET WebForms and ADO.NET',
			link: ''
		},
		{
			imageLink: '/banners/SeatSave.png',
			title: 'Seat Save',
			description:
				"A website where visitors of Mapua MCL's library may find and reserve a seat. Built using ASP.NET WebAPI, Entity Framework, and React",
			link: ''
		},
		{
			imageLink: '/banners/CovidTrackerV3.jpg',
			title: 'MMCL COVID19 Tracker (v3)',
			description:
				"A dashboard where users may view visualizations of COVID-19 cases in the cities and barangays of the provice of Laguna, Philippines",
			link: ''
		},
		{
			imageLink: '/banners/DiscoverMapuaMCL.png',
			title: 'Discover Mapua MCL',
			description:
				"An application that allows users to navigate the campus of Mapua Malayan Colleges Laguna with the help of augmented reality.",
			link: ''
		},
		{
			imageLink: '/banners/Sparse.png',
			title: 'Sparse',
			description:
				"A website where visitors of Mapua MCL's library may find and reserve a seat. Built using ASP.NET WebAPI, Entity Framework, and React",
			link: ''
		},
		{
			imageLink: '/banners/TheModernBibliotheca.png',
			title: 'TheModernBibliotheca',
			description:
				"A website where visitors of Mapua MCL's library may find and reserve a seat. Built using ASP.NET WebAPI, Entity Framework, and React",
			link: ''
		},
		{
			imageLink: '/banners/CFlat.png',
			title: 'Cb (C Flat)',
			description:
				"A compiled and statically typed programming language that aims combine the simplicity of Python and the type safety of C.",
			link: ''
		},
		{
			imageLink: '/banners/4Pycs1Word.png',
			title: '4pycs1word',
			description:
				"The classic mobile game 4 Pics 1 Word written in Python complete with coins, hints, and level skips.",
			link: ''
		}
	];
</script>

<section class="section">
	<div class="header">
		<p class="header-label">Projects</p>
		<header class="header-title">What I've Built</header>
		<p class="header-subtitle">
			I do all sorts of projects ranging from front-end development, back-end development to data
			science.
		</p>
	</div>
	<div class="projects-container">
		<div class="projects-list" style="--column-count: {Math.ceil(projects.length / 2)}">
			{#each projects as project}
				<div class="project">
					<Project
						imageLink={project.imageLink}
						title={project.title}
						description={project.description}
						link={project.link}
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
	}

	.projects-list {
		max-width: 100vw;
		display: grid;
		grid-template-columns: 1fr;
		gap: 30px;
		top: 0;
		left: 0;
		padding: 20px 100px;
		overflow-x: scroll;
		overflow-y: visible;

		// Hide scrollbar
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE 10+ */

		@include md {
			grid-template-columns: repeat(var(--column-count), 1fr);
			grid-template-rows: 1fr 1fr;
			font-size: 128px;
		}
	}

	.projects-list::-webkit-scrollbar {
		width: 0px;
		background: transparent;
	}

	.project {
		width: 400px;
		min-width: auto;
	}
</style>
