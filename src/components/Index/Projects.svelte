<script lang="ts">
	import Project from '../Projects/Project.svelte';

	let projects = [
		{
			imageLink: 'TheModernBibliotheca.png',
			title: 'The Modern Bibliotheca',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis auctor purus.',
			link: ''
		},
		{
			imageLink: 'TheModernBibliotheca.png',
			title: 'The Modern Bibliotheca',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis auctor purus.',
			link: ''
		},
		{
			imageLink: 'TheModernBibliotheca.png',
			title: 'The Modern Bibliotheca',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis auctor purus.',
			link: ''
		},
		{
			imageLink: 'TheModernBibliotheca.png',
			title: 'The Modern Bibliotheca',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis auctor purus.',
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
	<div class="project-container">
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

	.project-container {
		z-index: -1;
		flex: 1;
		display: flex;
	}

	.projects-list {
		max-width: 100%;
		display: grid;
		grid-template-columns: repeat(var(--column-count), 1fr);
		grid-template-rows: 1fr 1fr;
		min-height: min-content;
		gap: 30px;
		left: 0;
		overflow-x: scroll;
		overflow-y: visible;

		// Hide scrollbar
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE 10+ */
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
