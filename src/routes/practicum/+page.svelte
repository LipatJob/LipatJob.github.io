<script>
	import ActivitiesTimeline from '../../components/Practicum/ActivitiesTimeline.svelte';
	import Activity from '../../components/Practicum/Activity.svelte';
	import Project from '../../components/Projects/Project.svelte';
	import courseraTimeline from '../../content/courseraTimeline.js';
	import linkedinTimeline from '../../content/linkedinTimeline.js';
	import metacraftersTimeline from '../../content/metacraftersTimeline.js';
	import courseraActivities from '../../content/courseraActivities.js';
	import linkedinActivities from '../../content/linkedinActivities.js';
	import metacraftersActivities from '../../content/metacraftersActivities.js';
	import Icon from '@iconify/svelte';
</script>

<div class="container">
	<div id="linkedin-learning" class="section">
		<div class="section section-header snappable">
			<div>
				<h1>Part 1. Required LinkedIn Learning Modules</h1>
				<div class="key-figures-container">
					<div class="key-figures">
						<div class="key-figure">
							<p class="value">QQ</p>
							<p class="name">Projects</p>
						</div>
						<div class="key-figure">
							<p class="value">QQ</p>
							<p class="name">Courses</p>
						</div>
						<div class="key-figure">
							<p class="value">QQ</p>
							<p class="name">Quizes</p>
						</div>
						<div class="key-figure">
							<p class="value">45</p>
							<p class="name">Engagement Hours</p>
						</div>
						<div class="key-figure">
							<p class="value">90</p>
							<p class="name">Credit Hours</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="company-info subsection snappable">
			<div class="company-info">
				<img src="/practicum/linkedin/logo.png" class="company-logo" alt="linked in logo" />
				<p>
					LinkedIn Learning is an online educational platform that helps you discover and develop
					business, technology-related, and creative skills through expert-led course videos.
				</p>
			</div>

			<div class="nature-of-assignments">
				<h2>Nature of my Assignments</h2>
				<div class="assignments">
					<div class="assignment">
						<div class="icon">
							<Icon icon="ph:video" class="" width="inherit" height="inherit" />
						</div>
						<div class="name">Lecture Videos</div>
						<div class="description">
							Lecture videos were the primary way of delivering lessons. These videos are delivered
							by subject matter experts and were usually 5 to 10 minutes long.
						</div>
					</div>
					<div class="assignment">
						<div class="icon">
							<Icon icon="mdi:quiz-outline" class="" width="inherit" height="inherit" />
						</div>
						<div class="name">Quizzes</div>
						<div class="description">
							Quizzes were given at the end of each module to assess my knowledge of the topics
							covered in the module
						</div>
					</div>
					<div class="assignment">
						<div class="icon">
							<Icon icon="fluent:quiz-new-20-filled" class="" width="inherit" height="inherit" />
						</div>
						<div class="name">Assessments</div>
						<div class="description">
							Assessments were given at the end of each course to assess my knowledge of the topics
							covered in the course.
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="subsection snappable">
			<h2>Courses I have Taken</h2>

			<div class="courses-taken">
				<div>
					<h3>Design Thinking Learning Module</h3>
					<ul>
						<li>Learning Design Thinking: Lead Change in Your Organization</li>
						<li>Develop Your Creative Thinking and Innovation Skills Learning Path</li>
						<li>Develop Critical-Thinking, Decision-Making, and Problem-Solving Skills</li>
					</ul>
				</div>
				<div>
					<h3>Project Management Learning Module</h3>
					<ul>
						<li>Project Management Foundation</li>
						<li>Become an Agile Project Manager Learning Path</li>
					</ul>
				</div>
				<div>
					<h3>Workplace Management Learning Module</h3>
					<ul>
						<li>Develop Your Communication Skills and Interpersonal Influence</li>
						<li>Time Management Fundamentals</li>
						<li>Time Management: Working from Home</li>
						<li>Business Etiquette: Phone, Email, and Text</li>
						<li>Getting Things Done</li>
						<li>Productivity Tips: Finding Your Productive Mindset Certificate of Completion</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="timeline-of-activities subsection-full snappable">
			<div class="subsection-header">
				<h2>Timeline of Activities</h2>
			</div>
			<ActivitiesTimeline data={linkedinTimeline} />
		</div>

		<div class="synthesis subsection snappable">
			<h2>Synthesis</h2>
			<div>
				<p>
					For the first part of my practicum, I had to take online courses in LinkedIn Learning.
					Through the courses, I have learned various soft skills that would help me as a future
					software engineer.
				</p>
				<p>
					For the design thinking module, I have learned what it takes to create innovative
					solutions. From the courses, I learned that innovation starts with critical thinking. As
					defined by Mike Figliuolo, one of the instructors of the courses, critical thinking is the
					ability to think of the correct decision given bottlenecks, problems, and limited time.
					Critical thinking is one of the main components of creativity. As defined by Stefan Mumaw,
					creativity is the ability to create solutions that are both novel and relevant. However,
					being creative is not enough in the industry. We must also put our creative ideas into
					practice by being innovative.
				</p>
				<p>
					As for the project management module, I have learned the process of how to turn ideas into
					reality. The undertaking of turning an idea to reality is called a project. More formally,
					a project is a temporary endeavor that has a specific and unique goal, and usually a
					budget. There are typically two methods for managing projects. There is the traditional
					way of project management, and there is agile project management. For software projects,
					agile project management is usually used as it enables the team to quickly deliver value
					and change depending on the needs of the user.
				</p>
				<p>
					As for the workplace management module, I have learned how I should act in the workplace.
					The module covers three primary skills. The first is communication in the workplace.
					Through the courses, I learned how to communicate better with other people. In addition to
					this, I have learned the proper etiquette when calling, emailing, and texting. The second
					skill I have learned to improve is time management. Through the courses. I have learned
					how to maximize my calendar, and I have learned ways to balance work and personal time.
					Lastly, the module has helped me be more productive. I have learned that productivity goes
					hand in hand with time management. The better you are at time management, the more
					productive you are. In addition to this, I have learned better ways and better tools to
					keep track of tasks that I need to accomplish.
				</p>
				<p>
					Overall, the experience of improving my soft skills through LinkedIn learning brought a
					fresh perspective. As a software engineer, soft skills are often overlooked as there is so
					much to learn in our field. Soft skills are either overlooked or ignored so we often get
					stuck in our own ways. However, through these modules, I have been able to gain new
					perspectives, tools, and techniques to improve my soft skills.
				</p>
			</div>
		</div>

		<div class="outputs subsection-full snappable">
			<div class="subsection-header">
				<h2>Outputs</h2>
			</div>
			<div class="outputs-list">
				{#each linkedinActivities as project}
					<div>
						<Activity imageLink={project.imageLink} title={project.title} link={project.link} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	p {
		line-height: 32px;
		font-size: 18px;
		font-weight: 400;
		margin-bottom: 2em;

		display: block;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
	}

	.section {
		min-height: 100vh;
		margin-bottom: 20px;
	}

	.subsection {
		min-height: 100vh;
		max-width: $screen-md-min;
		width: 100%;
		margin: 0 auto;
		margin-bottom: 30px;
	}

	.subsection-full {
		max-width: $screen-xl-min;
		width: 100%;
		margin: 0 auto;
		margin-bottom: 20px;
	}

	.section-header {
		display: flex;
		max-width: $screen-md-min;
		margin: 0 auto;
		h1 {
			margin-bottom: 30px;
		}
		> div {
			margin: auto;
		}
	}

	.subsection-header {
		max-width: $screen-md-min;
		margin: 0 auto;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		line-height: 52px;
		margin-bottom: 4px;
	}

	h1 {
		font-size: 42px;
		text-align: center;
	}

	h2 {
		font-weight: 600;
		font-size: 28px;
	}

	h3 {
		font-size: 20px;
		font-weight: 500;
	}

	.section-link-container {
		display: flex;
		flex-direction: column;
		gap: 20px;

		a {
			text-decoration: none;
		}

		width: 100%;
	}

	.section-link {
		border: $border;
		border-radius: 20px;
		padding: 16px;
		@extend .popup;
		h2 {
			font-size: 20px;
			margin: 0;
		}
	}

	.key-figures {
		display: flex;
		flex-direction: row;
		gap: 20px;
		flex-wrap: wrap;
		align-content: space-between;
		justify-content: center;
	}

	.key-figure {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 180px;
		height: 80px;
		border-radius: 20px;

		.name {
			font-size: 18px;
			font-weight: 400;
			margin: 0;
			text-align: center;
		}

		.value {
			font-size: 28px;
			font-weight: 700;
			margin: 0;
		}
	}

	.outputs-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
	}

	.snappable {
		scroll-snap-align: start;
	}

	.company-logo {
		max-width: 400px;
	}

	.assignments {
		display: flex;
		flex-direction: row;
		align-content: space-between;
		justify-content: space-between;
		flex-wrap: wrap;

		.assignment {
			display: flex;
			flex-direction: column;
			width: 200px;
			align-items: center;
			border: $border;
			border-radius: 20px;
			padding: 20px;

			.name {
				font-weight: 600;
				font-size: 20px;
				text-align: center;
				margin-bottom: 10px;
			}

			.icon {
				width: 100px;
				display: block;
			}

			.description {
			}
		}
	}

	.courses-taken {
		display: flex;
		flex-direction: column;
		gap: 20px;
		> div {
		}
		li {
			font-size: 20px;
			margin-bottom: 14px;
		}
	}
</style>
