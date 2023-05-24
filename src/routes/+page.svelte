<script>
	import Navigation from '../components/Common/Navigation.svelte';
	import About from '../components/Index/About.svelte';
	import Affiliations from '../components/Index/Affiliations.svelte';
	import Contact from '../components/Index/Contact.svelte';
	import Education from '../components/Index/Education.svelte';
	import Experience from '../components/Index/Experience.svelte';
	import Projects from '../components/Index/Projects.svelte';
	import Skills from '../components/Index/Skills.svelte';
</script>

<div class="container">
	<div class="nav">
		<Navigation />
	</div>
	<div class="section about screen-height" id="About">
		<About />
	</div>

	<div class="section-full screen-height" id="Projects">
		<Projects />
	</div>
	<div class="section screen-height" id="Skills">
		<Skills />
	</div>
	<div class="section screen-height">
		<div id="Experience">
			<Experience />
		</div>
		<div id="Education">
			<Education />
		</div>
	</div>
	<div class="section">
		<div id="Affiliations">
			<Affiliations />
		</div>
		<div id="Contact">
			<Contact />
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		gap: 140px;
		width: 100%;
		padding: 0 25px;
		display: flex;
		flex-direction: column;

		@include sm {
			padding: 0 0;
		}
	}

	.overflow {
		display: flex;
		gap: 48px;
	}

	.section {
		display: flex;
		@include sm {
			width: $screen-lg-min;
			max-width: $screen-lg-min;
			margin: 0 auto;
		}
		gap: 24px;
	}

	.section-full {
		max-width: 100%;
	}

	.snappable {
		scroll-snap-align: start;
	}

	.screen-height {
		min-height: 80vh;
	}

	.nav {
		z-index: 10;
		position: fixed;
		align-self: center;
		width: 100%;
		top: 0px;
		background-color: $white;
	}
</style>
