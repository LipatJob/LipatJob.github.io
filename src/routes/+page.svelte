<script>
	import About from '../components/Index/About.svelte';
	import Affiliations from '../components/Index/Affiliations.svelte';
	import Contact from '../components/Index/Contact.svelte';
	import Education from '../components/Index/Education.svelte';
	import Experience from '../components/Index/Experience.svelte';
	import Projects from '../components/Index/Projects.svelte';
	import Skills from '../components/Index/Skills.svelte';
</script>

<div class="index">
	<About />
	<Projects />
	<Skills />
	<Experience />
	<Education />
	<Affiliations />
	<Contact />
</div>

<style lang="scss">
	.index {
		max-width: 820px;
		padding: 0 25px;
		display: flex;
		flex-direction: column;
		gap: 240px;

		@include sm {
			margin: 0 auto;
		}
	}
</style>
