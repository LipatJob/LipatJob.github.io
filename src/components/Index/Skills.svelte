<script lang="ts">
	import { onMount } from 'svelte';
	import Project from '../Projects/Project.svelte';
	import Skill from '../Skills/Skill.svelte';

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
		observer.observe(document.querySelector('#skills') as Element);
	});
	setInterval(() => {
		if (ready && animationIndex < 1000) {
			animationIndex++;
		}
	}, 50);

	$: animateIn = (targetIndex: number, animation: string) => {
		return targetIndex >= animationIndex ? 'hidden' : animation;
	};

	const animationSpeed = 3;
</script>

<section class="section" id="skills">
	<div class="header">
		<p class={'header-label ' + animateIn(1 * animationSpeed, 'fade')}>Skills</p>
		<header class={'header-title ' + animateIn(2 * animationSpeed, 'fade')}>What I Can Do</header>
		<p class={'header-subtitle ' + animateIn(3 * animationSpeed, 'fade')}>
			With a solid foundation in Computer Science, I bring a diverse set of skills to the table.
		</p>
	</div>

	<div class="skills">
		<div class={animateIn(4 * animationSpeed, 'fade')}>
			<Skill
				skillName="Back-End Development"
				tools={['ASP.NET', 'Express.js']}
				bullets={[
					"I've used frameworks such as ASP.NET Core, Express.Js, and Laravel to create RESTful APIs",
					"I've queried and manipulated databases using MS SQL, My SQL, Prisma, Entity Framework, and GraphQL",
					'I was involved in software design and architecture of multiple projects'
				]}
			/>
		</div>
		<div class={animateIn(4 * animationSpeed, 'fade')}>
			<Skill
				skillName="Data Science"
				tools={['Tensorflow', 'PyTorch']}
				bullets={[
					"I've trained a computer vision model that detects how many people are inside a room using PyTorch",
					"I've developed CNN and LSTM based models that detects Gestures using TensorFlow",
					"I've developed natural language processing models that predict the grades of essay"
				]}
			/>
		</div>
		<div class={animateIn(5 * animationSpeed, 'fade')}>
			<Skill
				skillName="Front-End Development"
				tools={['React.js', 'Vue.js', 'TailwindCSS']}
				bullets={[
					"I've developed multiple projects using front-end frameworks including React, Vue.Js, and Svelte",
					"I've used user interface frameworks such as SASS, TailwindCSS and Bootstrap",
					"I've created dashboard data visualizations using ApexCharts and ChartJ"
				]}
			/>
		</div>
		<div class={animateIn(6 * animationSpeed, 'fade')}>
			<Skill
				skillName="Project Management"
				tools={['Agile', 'Traditional', 'Jira']}
				bullets={[
					"I've lead different teams through the planning, analysis, design, and implementation of various projects",
					"I've enforced agile practices and principles as a scrum master in different projects",
					"I've collaborated with the project sponsors and stakeholders regularly for progress updates",
					"I've used tools such as Trello, Jira, and GitHub Issues for managing project deliverable"
				]}
			/>
		</div>
	</div>
</section>

<style lang="scss">
	.skills {
		display: flex;
		flex-direction: column;
		gap: 18px;
	}
</style>
