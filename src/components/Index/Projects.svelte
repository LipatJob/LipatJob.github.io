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
</section>

<style lang="scss">
	.section {
		max-width: 100%;
	}

	.projects-list {
		max-width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		min-height: min-content;
		gap: 30px;
		left: 0;
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
		width: auto;
		min-width: auto;
	}
</style>
