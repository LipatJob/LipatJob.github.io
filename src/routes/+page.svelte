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
	<div class="nav ">
		<Navigation />
	</div>
	<div class="about section screen-height" id="About">
		<About />
	</div>

	<div class="section screen-height snappable" id="Projects">
		<Projects />
	</div>
	<div class="section screen-height snappable" id="Skills">
		<Skills />
	</div>
	<div class="section screen-height snappable">
		<div id="Experience">
			<Experience />
		</div>
		<div class="" id="Education">
			<Education />
		</div>
	</div>
	<div class="">
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
		max-width: $screen-lg-min;
		gap: 140px;
		@include sm {
			margin: 0 auto;
		}

		padding: 0 25px;
		display: flex;
		flex-direction: column;
	}

	.overflow {
		display: flex;
		gap: 48px;
	}

	.section {
		display: flex;
		gap: 48px;
	}

	.snappable {
	}

	.screen-height {
		min-height: 80vh;
	}

	.nav {
		position: sticky;
		align-self: center;
		width: 100%;
		top: 0px;
		background-color: $white;
	}
</style>
