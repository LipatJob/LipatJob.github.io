<script lang="ts">
	import Project from '../Projects/Project.svelte';
	import Skill from '../Skills/Skill.svelte';
</script>

<section class="section">
	<div class="header">
		<p class="header-label">Skills</p>
		<header class="header-title">What I Can Do</header>
		<p class="header-subtitle">
			Through my studies, I've gained a solid understanding of Computer Science and Software
			Engineering concepts.
		</p>
	</div>

	<div class="skills">
		<Skill
			skillName="Back-End Development"
			tools={['ASP.NET', 'Express.js']}
			description="Hello world"
		/>
		<Skill skillName="Data Science" tools={['Tensorflow', 'PyTorch']} description="Hello world" />
		<Skill
			skillName="Front-End Development"
			tools={['React.js', 'Vue.js', 'TailwindCSS']}
			description="Hello world"
		/>
		<Skill
			skillName="Project Management"
			tools={['Agile', 'Traditional', 'Jira']}
			description="Hello world"
		/>
	</div>
</section>

<style>
	.skills {
		display: flex;
		flex-direction: column;
		gap: 18px;
	}
</style>
