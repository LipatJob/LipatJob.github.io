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
			bullets={[
				'Used frameworks such as ASP.NET Core, Express.Js, and Laravel to create RESTful APIs',
				'Queried and manipulated databases using MS SQL, My SQL, Prisma, Entity Framework, and GraphQL',
				'Involved in software design and architecture of multiple projects'
			]}
		/>
		<Skill
			skillName="Data Science"
			tools={['Tensorflow', 'PyTorch']}
			bullets={[
				'Trained a computer vision model that detects how many people are inside a room using PyTorch',
				'Developed CNN and LSTM based models that detects Gestures using TensorFlow',
				'Developed natural language processing models that predict the grades of essays'
			]}
		/>
		<Skill
			skillName="Front-End Development"
			tools={['React.js', 'Vue.js', 'TailwindCSS']}
			bullets={[
				'Developed multiple projects using front-end frameworks including React, Vue.Js, and Svelte',
				'Used user interface frameworks such as SASS, TailwindCSS and Bootstrap',
				'Created dashboard data visualizations using ApexCharts and ChartJs'
			]}
		/>
		<Skill
			skillName="Project Management"
			tools={['Agile', 'Traditional', 'Jira']}
			bullets={[
				'Lead different teams through the planning, analysis, design, and implementation of various projects',
				'Enforced agile practices and principles as a scrum master in different projects',
				'Collaborated with the project sponsors and stakeholders regularly for progress updates',
				'Used tools such as Trello, Jira, and GitHub Issues for managing project deliverables'
			]}
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
