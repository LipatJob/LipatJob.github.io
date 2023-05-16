<script lang="ts">
	import Project from '../Projects/Project.svelte';
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

	<div class="projects-list">
		<Project
			imageLink="TheModernBibliotheca.png"
			title="The Modern Bibliotheca"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis auctor purus."
			link=""
		/>
		<Project
			imageLink="CovidTrackerV3.jpg"
			title="MCL COVID19 Tracker"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis auctor purus."
			link=""
		/>
		<Project
			imageLink="Community.png"
			title="Community"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis auctor purus."
			link=""
		/>
		<Project
			imageLink="TheModernBibliotheca.png"
			title="The Modern Bibliotheca"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis auctor purus."
			link=""
		/>
	</div>
</section>

<style lang="scss">
	.section {
		max-width: 100%;
	}

	.projects-list {
		gap: 60px;
		display: grid;
		grid-template-columns: repeat(1, 1fr);

		@include sm {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
