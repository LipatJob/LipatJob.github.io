<script>
	import ActivitiesTimeline from '../../components/Practicum/ActivitiesTimeline.svelte';
	import Activity from '../../components/Practicum/Activity.svelte';
	import Project from '../../components/Projects/Project.svelte';
	import courseraTimeline from '../../content/courseraTimeline.js';
	import linkedinTimeline from '../../content/linkedinTimeline.js';
	import metacraftersTimeline from '../../content/metacraftersTimeline.js';
	import { courseraProjects, courseraCertificates } from '../../content/courseraActivities.js';
	import linkedinActivities from '../../content/linkedinActivities.js';
	import {
		metacraftersProjects,
		metacratersProofOfLearns
	} from '../../content/metacraftersActivities.js';
	import Icon from '@iconify/svelte';
	import PracticumNav from '../../components/Practicum/PracticumNav.svelte';
	import ExpandableSection from '../../components/Practicum/ExpandableSection.svelte';
	import { fade } from 'svelte/transition';
</script>

<div class="container">
	<div class="nav">
		<PracticumNav />
	</div>

	<div id="introduction" class="section snappable">
		<div class="section-header">
			<div>
				<h1>CS Practicum Final Report</h1>
			</div>
			<div class="key-figures-container">
				<div class="key-figures">
					<div class="key-figure">
						<p class="value">53</p>
						<p class="name">Courses</p>
					</div>
					<div class="key-figure">
						<p class="value">28</p>
						<p class="name">Certificates</p>
					</div>
					<div class="key-figure">
						<p class="value">12</p>
						<p class="name">Projects</p>
					</div>
					<div class="key-figure">
						<p class="value">277</p>
						<p class="name">Engagement Hours</p>
					</div>
					<div class="key-figure">
						<p class="value">554</p>
						<p class="name">Credit Hours</p>
					</div>
				</div>
			</div>
		</div>
		<div />
	</div>

	<div id="linkedin-learning" class="section">
		<div class="subsection-large section-header snappable">
			<div>
				<h1>Part 1. Required LinkedIn Learning Modules</h1>

				<div class="key-figures-container">
					<div class="key-figures">
						<div class="key-figure">
							<p class="value">36</p>
							<p class="name">Courses</p>
						</div>
						<div class="key-figure">
							<p class="value">4</p>
							<p class="name">Learning Paths</p>
						</div>
						<div class="key-figure">
							<p class="value">11</p>
							<p class="name">Certificates</p>
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

		<div class="subsection snappable">
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
							<Icon icon="ph:video" class="" width="none" height="none" />
						</div>
						<div class="name">Lecture Videos</div>
						<div class="description">
							Lecture videos were the primary way of delivering lessons. These videos were by
							experts and were usually 5 minutes long.
						</div>
					</div>
					<div class="assignment">
						<div class="icon">
							<Icon icon="mdi:quiz-outline" class="" width="none" height="none" />
						</div>
						<div class="name">Quizzes</div>
						<div class="description">
							Quizzes were given at the end of each module to assess my knowledge of the topics
							covered in the module
						</div>
					</div>
					<div class="assignment">
						<div class="icon">
							<Icon icon="fluent:quiz-new-20-filled" class="" width="none" height="none" />
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

		<div class="timeline-of-activities subsection-large snappable">
			<div class="subsection-header">
				<h2>Timeline of Activities</h2>
			</div>
			<ActivitiesTimeline data={linkedinTimeline} />
		</div>

		<div class="synthesis subsection snappable">
			<h2>What I have learned</h2>
			<div>
				<ExpandableSection>
					<div slot="mainSection">
						<p>
							For the first part of my practicum, I had to take online courses in LinkedIn Learning.
							Through the courses, I have learned various soft skills that would help me as a future
							software engineer.
						</p>
						<p>
							For the design thinking module, I have learned what it takes to create innovative
							solutions. From the courses, I learned that innovation starts with critical thinking.
							As defined by Mike Figliuolo, one of the instructors of the courses, critical thinking
							is the ability to think of the correct decision given bottlenecks, problems, and
							limited time. Critical thinking is one of the main components of creativity. As
							defined by Stefan Mumaw, creativity is the ability to create solutions that are both
							novel and relevant. However, being creative is not enough in the industry. We must
							also put our creative ideas into practice by being innovative.
						</p>
						<p>
							As for the project management module, I have learned the process of how to turn ideas
							into reality. The undertaking of turning an idea to reality is called a project. More
							formally, a project is a temporary endeavor that has a specific and unique goal, and
							usually a budget. There are typically two methods for managing projects. There is the
							traditional way of project management, and there is agile project management. For
							software projects, agile project management is usually used as it enables the team to
							quickly deliver value and change depending on the needs of the user.
						</p>
					</div>
					<div slot="collapsableSection" transition:fade|local>
						<p>
							As for the workplace management module, I have learned how I should act in the
							workplace. The module covers three primary skills. The first is communication in the
							workplace. Through the courses, I learned how to communicate better with other people.
							In addition to this, I have learned the proper etiquette when calling, emailing, and
							texting. The second skill I have learned to improve is time management. Through the
							courses. I have learned how to maximize my calendar, and I have learned ways to
							balance work and personal time. Lastly, the module has helped me be more productive. I
							have learned that productivity goes hand in hand with time management. The better you
							are at time management, the more productive you are. In addition to this, I have
							learned better ways and better tools to keep track of tasks that I need to accomplish.
						</p>
						<p>
							Overall, the experience of improving my soft skills through LinkedIn learning brought
							a fresh perspective. As a software engineer, soft skills are often overlooked as there
							is so much to learn in our field. Soft skills are either overlooked or ignored so we
							often get stuck in our own ways. However, through these modules, I have been able to
							gain new perspectives, tools, and techniques to improve my soft skills.
						</p>
					</div>
				</ExpandableSection>
			</div>
		</div>

		<div class="outputs subsection-full snappable">
			<div class="subsection-header">
				<h2>Certificates</h2>
			</div>
			<div class="outputs-list">
				{#each linkedinActivities.slice(Math.floor(linkedinActivities.length / 2)) as project}
					<div class="output">
						<Activity imageLink={project.imageLink} title={project.title} link={project.link} />
					</div>
				{/each}
			</div>
			<div class="outputs-list">
				{#each linkedinActivities.slice(Math.ceil(linkedinActivities.length / 2), linkedinActivities.length) as project}
					<div class="output">
						<Activity imageLink={project.imageLink} title={project.title} link={project.link} />
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div id="coursera" class="section">
		<div class="subsection section-header snappable">
			<div>
				<h1>Part 2. IBM DevOps and Software Engineering Professional Certificate</h1>
				<div class="key-figures-container">
					<div class="key-figures">
						<div class="key-figure">
							<p class="value">14</p>
							<p class="name">Courses</p>
						</div>
						<div class="key-figure">
							<p class="value">6</p>
							<p class="name">Mini Projects</p>
						</div>
						<div class="key-figure">
							<p class="value">14</p>
							<p class="name">Certificates</p>
						</div>
						<div class="key-figure">
							<p class="value">165</p>
							<p class="name">Engagement Hours</p>
						</div>
						<div class="key-figure">
							<p class="value">330</p>
							<p class="name">Credit Hours</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="subsection snappable">
			<div class="company-info">
				<img src="/practicum/coursera/logo.png" class="company-logo" alt="linked in logo" />
				<p>
					Coursera is a global platform for online learning and career development that offers
					anyone, anywhere, access to online courses and degrees from leading universities and
					companies.
				</p>
			</div>

			<div class="nature-of-assignments">
				<h2>Nature of my Assignments</h2>
				<div class="assignments">
					<div class="assignment">
						<div class="icon">
							<Icon icon="ph:video" class="" width="none" height="none" />
						</div>
						<div class="name">Lecture Videos</div>
						<div class="description">
							Lecture videos were the primary way of delivering lessons. These videos were by
							experts and were usually 5 minutes long.
						</div>
					</div>
					<div class="assignment">
						<div class="icon">
							<Icon icon="material-symbols:keyboard-outline" class="" width="none" height="none" />
						</div>
						<div class="name">Hands-on Lab</div>
						<div class="description">
							Hands on laboratories allow us try out what I have learned in the lecture videos
							through the hands-on laboratory
						</div>
					</div>
					<div class="assignment">
						<div class="icon">
							<Icon icon="carbon:book" class="" width="none" height="none" />
						</div>
						<div class="name">Readings</div>
						<div class="description">
							Readings were also provided to elaborate on certain topics of the courses
						</div>
					</div>

					<div class="assignment">
						<div class="icon">
							<Icon icon="ph:cursor-bold" class="" width="none" height="none" />
						</div>
						<div class="name">Interactive Modules</div>
						<div class="description">
							Readings were also provided to elaborate on certain topics of the courses
						</div>
					</div>
					<div class="assignment">
						<div class="icon">
							<Icon icon="mdi:quiz-outline" class="" width="none" height="none" />
						</div>
						<div class="name">Quizzes</div>
						<div class="description">
							Quizzes were given at the end of each module to assess my knowledge of the topics
							covered in the module
						</div>
					</div>
					<div class="assignment">
						<div class="icon">
							<Icon icon="fluent:quiz-new-20-filled" class="" width="none" height="none" />
						</div>
						<div class="name">Capstone</div>
						<div class="description">
							The capstone is a project where I have to demonstrate all the concepts that I have
							learned in the 13 courses.
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="subsection snappable">
			<h2>Courses I have Taken</h2>

			<div class="courses-taken">
				<div>
					<h3>IBM DevOps and Software Engineerng Professional Certificate</h3>
					<ul>
						<li>Introduction to DevOps</li>
						<li>Introduction to Cloud Computing</li>
						<li>Introduction to Agile Development and Scrum</li>
						<li>Introduction to Software Engineering</li>
						<li>Hands-on Introduction to Linux Commands and Shell Scripting</li>
						<li>Getting Started with Git and GitHub</li>
						<li>Python for Data Science, AI & Development</li>
						<li>Python Project for AI & Application Development</li>
						<li>Introduction to Containers w/ Docker, Kubernetes & OpenShift</li>
						<li>Application Development using Microservices and Serverless</li>
						<li>Introduction to Test Driven Development (TDD)</li>
						<li>Continuous Integration and Continuous Delivery</li>
						<li>Application Security and Monitoring</li>
						<li>DevOps Capstone Project</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="timeline-of-activities subsection-large snappable">
			<div class="subsection-header">
				<h2>Timeline of Activities</h2>
			</div>
			<ActivitiesTimeline data={courseraTimeline} />
		</div>

		<div class="synthesis subsection snappable">
			<h2>What I have learned</h2>
			<div>
				<ExpandableSection>
					<div slot="mainSection">
						<p>
							In the second part of my practicum, I had to get my IBM DevOps and Software
							Engineering Professional Certificate through Coursera. In this professional
							certification, I learned what it takes to be a modern software engineer. The topics
							that I have learned range from software engineering, DevOps, practices, and tools.
						</p>
						<p>
							One huge focus of the professional certificate was on DevOps. To understand DevOps, we
							must first understand what Agile development is. As defined by John Rofrano, the
							instructor of the professional certificate, agile development is an iterative approach
							to development done by responsive teams whose purpose is to deliver value to the
							customer faster. DevOps on the other hand is the extension of the agile development
							environment to operations that aims to change the process of software delivery. The
							DevOps methodology tears down organizational silos including development and
							operations to enable the organization to deliver the software to the user in the best
							way possible. Through this organizations can leverage and enable disruptive
							technology.
						</p>
						<p>
							The professional certificate also covered Software Engineering. Topics that were
							discussed include the software development lifecycle, the basics of programming, and
							software architecture design and patterns. While I am already quite familiar with
							these concepts, the certificate was able to refresh my knowledge of the basics of
							Software Engineering.
						</p>
					</div>
					<div slot="collapsableSection" transition:fade|local>
						<p>
							In addition to learning what software engineering and DevOps are, I have also learned
							the technologies that enable teams to create highly effective software. One of these
							is using Cloud technology. By using cloud technology, the hardware could be easily
							scaled up and down both horizontally and vertically all without needing to worry about
							the physical hardware. Another technology discussed is the use of containerization
							technology. Containers allow software to be run anywhere. Using a container
							orchestration tool like Kubernetes, software could scale up and down both horizontally
							and vertically.
						</p>
						<p>
							Combining cloud and containerization technology allows both the hardware and software
							to scale. To fully leverage this capability, the microservices software architecture
							is used. Microservices is an approach to creating an application composed of many
							smaller services that are loosely coupled, independently deployable, and small. By
							decomposing software into smaller services, each service could be scaled and developed
							independently. An added benefit of this approach is that when one service fails, the
							others are not affected. The program must simply kill the container with the service
							and start a new one. Replica Sets also allow the service to have multiple instances of
							a service running which could take over the failing service, thus making the failure
							invisible to the user.
						</p>
						<p>
							In developing microservice applications, there are various practices that are used to
							ensure high-quality software. One of these is test-driven development (TDD) and
							behavior-driven development (BDD). TDD is the practice of writing a test first for
							code you wish you have, then writing the code to make the tests pass. This ensures
							that the code you are writing is working as expected and ensures future changes don’t
							break the code. BDD on the other hand describes the behavior of the system from the
							perspective of the user. This makes BDD great for integration testing. Both are needed
							to create high-quality software because BDD ensures that you are building the right
							things and TDD ensures that you are building the thing right.
						</p>
						<p>
							Another practice done to ensure high quality software is Continuous Integration (CI)
							and Continuous Delivery (CD). Continuous integration is an automated process that
							allows developers to integrate their work into a repository. A CI pipeline
							automatically runs jobs such as building, testing, linting, security scanning. The
							pipeline ensures that the code is working and is of high quality all the time. On the
							other hand, continuous delivery is an automated process that deploys integrated code
							into a production-like environment. These processes are important to reduce
							integration risk, increase code quality, reduce deployment time, and enable faster
							reaction time to change.
						</p>
						<p>
							Another practice done by software engineers that I have learned is measuring and
							monitoring. Measuring is the process of collecting metrics. On the other hand,
							monitoring is the process of keeping track of whether the metrics are within a certain
							threshold. This is important because, as explained by John Rofrano, you cannot improve
							what you cannot measure. These metrics are used to reason and judge the success of
							your progress. I have also learned how important it is to differentiate between vanity
							and actionable metrics. As software engineers, we must take actionable metrics and not
							vanity metrics. While vanity metrics may look appealing, they provide no insight into
							how the system is working. Instead, we should focus on actionable metrics because
							these produce value if we act on them.
						</p>
						<p>
							Finally, I have also learned about the various tools used by modern software
							developers. These tools include Git and GitHub which are used for collaborating on
							code with other developers. Another tool that was introduced was the Linux shell. The
							Linux shell is used to manage files and the operating system. It is also important to
							learn as many developer tools have a command line interface accessible through the
							Linux shell. Additionally, I was also able to learn to use ZenHub which is an agile
							project management tool that allows you to keep track of user stories.
						</p>
						<p>
							All in all, taking the IBM DevOps and Software Engineering Professional certificate
							has given me comprehensive knowledge of what it takes to be a modern software
							engineer. These include the tools, practices, and technology that enable software
							engineers to create high-quality and highly effective software.
						</p>
					</div>
				</ExpandableSection>
			</div>
		</div>

		<div class="outputs subsection-full snappable">
			<div class="subsection-header">
				<h2>Projects</h2>
			</div>
			<div class="outputs-list">
				{#each courseraProjects as project}
					<div>
						<Activity imageLink={project.imageLink} title={project.title} link={project.link} />
					</div>
				{/each}
			</div>
			<div class="subsection-header">
				<h2>Certificates</h2>
			</div>
			<div class="outputs-list">
				{#each courseraCertificates as project}
					<div>
						<Activity imageLink={project.imageLink} title={project.title} link={project.link} />
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div id="metacrafters" class="section">
		<div class="subsection section-header snappable">
			<div>
				<h1>Part 3. Metacrafters Courses</h1>
				<div class="key-figures-container">
					<div class="key-figures">
						<div class="key-figure">
							<p class="value">3</p>
							<p class="name">Courses</p>
						</div>
						<div class="key-figure">
							<p class="value">6</p>
							<p class="name">Projects</p>
						</div>
						<div class="key-figure">
							<p class="value">3</p>
							<p class="name">Proof of Learns</p>
						</div>
						<div class="key-figure">
							<p class="value">67</p>
							<p class="name">Engagement Hours</p>
						</div>
						<div class="key-figure">
							<p class="value">134</p>
							<p class="name">Credit Hours</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="subsection snappable">
			<div class="company-info">
				<img src="/practicum/metacrafters/logo.webp" class="company-logo" alt="linked in logo" />
				<p>
					Metacrafters is a web3 education platform where developers can Learn & Earn: earn rewards
					while learning, mentoring others, and upskilling towards a new career. Empowering the
					builders of the metaverse.
				</p>
			</div>

			<div class="nature-of-assignments">
				<h2>Nature of my Assignments</h2>
				<div class="assignments">
					<div class="assignment">
						<div class="icon">
							<Icon icon="ph:video" class="" width="none" height="none" />
						</div>
						<div class="name">Lecture Videos</div>
						<div class="description">
							Lecture videos were the primary way of delivering lessons. These videos were by
							experts and were usually 5 minutes long.
						</div>
					</div>

					<div class="assignment">
						<div class="icon">
							<Icon icon="carbon:book" class="" width="none" height="none" />
						</div>
						<div class="name">Readings</div>
						<div class="description">
							Readings were also provided to elaborate on certain topics of the courses
						</div>
					</div>

					<div class="assignment">
						<div class="icon">
							<Icon icon="mdi:quiz-outline" class="" width="none" height="none" />
						</div>
						<div class="name">Quizzes</div>
						<div class="description">
							Quizzes were given at the end of each module to assess my knowledge of the topics
							covered in the module
						</div>
					</div>
					<div class="assignment">
						<div class="icon">
							<Icon icon="material-symbols:keyboard-outline" class="" width="none" height="none" />
						</div>
						<div class="name">Challenges</div>
						<div class="description">
							Quizzes were given at the end of each module to assess my knowledge of the topics
							covered in the module
						</div>
					</div>
					<div class="assignment">
						<div class="icon">
							<Icon icon="fluent:quiz-new-20-filled" class="" width="none" height="none" />
						</div>
						<div class="name">Projects</div>
						<div class="description">
							Projects were also given at the end of each module to show our knowledge of the topics
							covered in the module
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="subsection snappable">
			<h2>Courses I have Taken</h2>

			<div class="courses-taken">
				<div>
					<h3>IBM DevOps and Software Engineerng Professional Certificate</h3>
					<ul>
						<li>JS PROOF: Beginner Course</li>
						<li>ETH PROOF: Beginner EVM Course</li>
						<li>ETH + AVAX PROOF: Intermediate EVM Course</li>
					</ul>
				</div>
			</div>
			<div class="timeline-of-activities">
				<div class="subsection-header">
					<h2>Timeline of Activities</h2>
				</div>
				<ActivitiesTimeline data={metacraftersTimeline} />
			</div>
		</div>

		<div class="synthesis subsection snappable">
			<h2>What I have learned</h2>
			<ExpandableSection>
				<div slot="mainSection">
					<p>
						In the final part of my practicum, I had to take three courses in Metacrafters. These
						courses include a beginner JavaScript course, a beginner Solidity course, and an
						intermediate Solidity and Avalanche course.
					</p>
					<p>
						The first course I took was the beginner course on JavaScript. Since I am already
						familiar with JavaScript, the course was mostly a review for me. However, despite this,
						I was able to pick up a couple of new things about the JavaScript programming language
						such as type coercion. All in all, the course was a good refresher on programming with
						JavaScript.
					</p>
					<p>
						The second course I took was the beginner solidity course. The course was mostly a
						review because I have already done some development of solidity in the past. However,
						despite being familiar with solidity, I still found a couple of new things to learn
						about the language. The course ended with a project where I needed to create a smart
						contract that allows users to mint and burn coins. Overall, I gained a deeper
						understanding of the syntax of solidity through this course.
					</p>
					<p>
						The third and final course was the intermediate Solidity and Avalanche course. The
						course discussed more advanced topics in the Solidity programming language such as
						functions, proxy contracts, and front-end integration. The course also discussed
						fallback and payable functions, abstract contracts and interfaces, ERC Contracts, and
						deploying contracts to the Avalanche C Chain.
					</p>
				</div>
				<div slot="collapsableSection" transition:fade|local>
					<p>
						I have also created four projects for the intermediate solidity and avalanche course.
						For the first project, I created a smart contract called MetaTrivia which is a trivia
						game on the blockchain where users gain points by creating and answering trivia. For the
						second project, I created a smart contract that allows pharmacists to verify the
						authenticity of prescriptions created by doctors. For the third project of the course, I
						created a token called job-coin that allows the user to get their balance, mint coins,
						burn coins, and transfer coins to another account. For the final project of the course,
						I created an ERC20 token called Degen Token.
					</p>
					<p>
						All in all, taking the Metacrafters was a great opportunity to learn more about
						blockchain technology. At the start, I thought that I was not going to learn much since
						I already had experience with developing blockchain technology. To my surprise, I was
						able to learn a lot more, and I have gained a deeper appreciation of how blockchain
						technology could be useful. Moreover, I was also able to create projects that
						demonstrate my knowledge and skills in blockchain technology.
					</p>
				</div>
			</ExpandableSection>
			<div />
		</div>

		<div class="outputs subsection-full snappable">
			<div class="subsection-header">
				<h2>Projects</h2>
			</div>
			<div class="outputs-list">
				{#each metacraftersProjects as project}
					<div>
						<Activity imageLink={project.imageLink} title={project.title} link={project.link} />
					</div>
				{/each}
			</div>
			<div class="subsection-header">
				<h2>Proof of Learns</h2>
			</div>
			<div class="outputs-list">
				{#each metacratersProofOfLearns as project}
					<div>
						<Activity imageLink={project.imageLink} title={project.title} link={project.link} />
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div id="overall-synthesis" class="section snappable">
		<div class="subsection">
			<div>
				<h1>Overall Synthesis</h1>
			</div>
			<div>
				<p>
					My practicum was primary divided in three parts. The first part was my required modules
					that I had to take in LinkedIn Learning. The second part was the IBM DevOps and Software
					Engineering professional certificate which I had to take in Coursera. The third and final
					parts were the three modules I had to take in Metacrafters.
				</p>
				<p>
					Through the three parts of my practicum. I have also learned a lot of new knowledge and
					skills that I can apply once I am in the workplace. Through my required modules, I have
					learned how to improve my soft skills including my creativity, critical thinking, project
					management, and time management. I have learned more about software engineering and DevOps
					through my professional certificate. I have also learned more about blockchain and smart
					contracts throughout the course in Metacrafters.
				</p>
				<p>
					These skills and knowledge would be especially useful for me once I become a part of the
					workforce as a Junior Software Engineer. For example, as a software engineer, I will be
					working in a team, and creativity, critical thinking, and communication will be especially
					useful. The practices and technologies such as test-driven development, CI/CD, and
					microservices will be especially useful as these are commonly used in the industry.
					Learning about blockchain and smart contracts also opens more possibilities for innovation
					and employment.
				</p>
				<p>
					Through the courses, I have also realized how much more there is to learn. Most of these,
					we will not be able to learn just by following instructions and watching video lectures.
					These could only be learned by experiencing them and by actually doing them. However,
					despite the overwhelming amount of untapped knowledge out there, I am more confident in my
					skills, and I now have a better idea of which areas I need to improve on.
				</p>
				<p>
					I also honestly did not expect that learning the modules would be as hard as it was. At
					first, I thought that if I just need to make some time to watch the modules, I would be
					doing fine. However, I quickly realized that just allocating time for watching the modules
					is not enough since I also had to absorb the lessons from the modules. By rushing through
					the modules, I was able to get a lot done, but I couldn’t learn as much as I want to.
				</p>
				<p>
					From this experience, I learned how important it is to pace yourself when you are doing
					work. While it may be tempting to accomplish work all in one go, this increases the risk
					of having low-quality outputs. In addition to this, I also realized that pacing work
					improves health. By allocating time, I was able to avoid burning out and I was able to
					make time for self-care.
				</p>
				<p>
					All in all, I found the experience of doing this practicum an eye-opener. It opened my
					eyes to new practices, technologies, and tools. I was able to gain a deeper understanding
					of these through the courses I have taken. Most importantly, my eyes were also opened to
					the areas I could improve to become a complete Software Engineer.
				</p>
			</div>
		</div>
	</div>

	<div id="appendices" class="section snappable">
		<div class="subsection">
			<div>
				<h1>Appendices</h1>
			</div>
			<div class="appendices-container">
				<a
					href="https://drive.google.com/file/d/1U6Z6PfnT-CBCUv4GbUzcyWh4jyzRKGO-/view?usp=share_link"
					target="_blank"
				>
					<div class="appendix popup">
						<div class="icon">
							<Icon icon="carbon:document" class="" width="none" height="none" />
						</div>
						<p>Competency-Based CV</p>
					</div>
				</a>
				<a href="/practicum/appendices/lipat_practicum_confirmation.pdf" target="_blank">
					<div class="appendix popup">
						<div class="icon">
							<Icon icon="carbon:document" class="" width="none" height="none" />
						</div>
						<p>Practicum Confirmation and Acceptance Form</p>
					</div>
				</a>
				<a href="/practicum/appendices/lipat_liability_waiver.pdf" target="_blank">
					<div class="appendix popup">
						<div class="icon">
							<Icon icon="carbon:document" class="" width="none" height="none" />
						</div>
						<p>Student Training Agreement and Liability Waiver</p>
					</div>
				</a>
				<a href="/practicum/appendices/lipat_learning_path_proposal.pdf" target="_blank">
					<div class="appendix popup">
						<div class="icon">
							<Icon icon="carbon:document" class="" width="none" height="none" />
						</div>
						<p>Learning Path Proposal</p>
					</div>
				</a>
				<a href="/practicum/appendices/lipat_weekly_journal.pdf" target="_blank">
					<div class="appendix popup">
						<div class="icon">
							<Icon icon="carbon:document" class="" width="none" height="none" />
						</div>
						<p>Complete Weekly Journal</p>
					</div>
				</a>
				<a href="/practicum/appendices/lipat_final_report.pdf" target="_blank">
					<div class="appendix popup">
						<div class="icon">
							<Icon icon="carbon:document" class="" width="none" height="none" />
						</div>
						<p>Final Report Document</p>
					</div>
				</a>
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

		padding: 0 20px;
		@include sm {
			padding: 0;
		}
	}

	.subsection {
		padding-top: 120px;
		min-height: 100vh;
		max-width: $screen-md-min;
		width: 100%;
		margin: 0 auto;
		margin-bottom: 30px;
	}

	.subsection-full {
		padding-top: 120px;
		min-height: 100vh;
		max-width: 100vw;
		width: 100%;
		margin: 0 auto;
		margin-bottom: 0px;
	}

	.subsection-large {
		padding-top: 120px;
		min-height: 100vh;
		max-width: $screen-xl-min;
		width: 100%;
		margin: 0 auto;
		margin-bottom: 0px;
	}

	.section-header {
		padding-top: 0;
		display: flex;
		flex-direction: column;
		max-width: $screen-md-min;
		margin: 0 auto;
		h1,
		h2 {
			margin-bottom: 30px;
			text-align: center;
		}
		> div {
			margin: auto;
		}
	}

	.subsection-header {
		max-width: $screen-md-min;
		margin: 0 auto;
		margin-bottom: 20px;
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
		font-size: 32px;
		text-align: center;

		@include sm {
			font-size: 42px;
		}
	}

	h2 {
		font-weight: 600;
		font-size: 24px;

		@include sm {
			font-size:28px;
		}
	}

	h3 {
		font-size: 20px;
		font-weight: 600;
	}

	.section-links {
		display: flex;
		flex-direction: column;
		gap: 20px;

		a {
			text-decoration: none;
		}

		width: 100%;
	}

	.section-link {
		height: 50px;
		width: 300px;
		text-align: center;
		border: $border;
		border-radius: 20px;
		padding: 4px 14px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-items: center;
		align-content: center;
		@extend .popup;
		> img {
			height: 70%;
			width: auto;
			aspect-ratio: 1 / 1;
			margin-right: 20px;
		}
		h2 {
			line-height: 1.1em;
			font-size: 20px;
			margin: auto;
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
		display: flex;
		flex-direction: row;
		gap: 20px;
		max-width: 100vw;
		position: relative;
		flex-shrink: 0;
		overflow-y: visible;
		overflow-x: auto;
		padding: 20px 10px;

		@include sm{
			padding: 20px 50px;

		}

		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE 10+ */
	}

	.outputs-list::-webkit-scrollbar {
		width: 0px;
		background: transparent;
	}

	.snappable {
		scroll-snap-align: start;
	}

	.company-info {
		> p {
			font-size: 24px;
			line-height: 1.6em;
		}
	}

	.company-logo {
		max-width: min(400px, 100%);
	}

	.assignments {
		display: flex;
		flex-direction: row;
		justify-content: center;

		flex-wrap: wrap;
		gap: 10px;

		.assignment {
			display: flex;
			flex-direction: column;
			width: 200px;
			align-items: center;
			border: $border;
			border-radius: 20px;
			padding: 20px;
			margin-bottom: 20px;

			.name {
				font-weight: 600;
				font-size: 20px;
				text-align: center;
				margin-bottom: 10px;
			}

			.icon {
				width: 60px;
				display: block;
			}

			.description {
				text-align: center;
			}
		}
	}

	.courses-taken {
		display: flex;
		flex-direction: column;
		gap: 14px;
		> div {
		}
		ul {
			display: flex;
			flex-direction: column;
			gap: 14px;
		}
		li {
			font-size: 20px;
		}

		h3 {
			margin-top: 0;
		}
	}

	#introduction {
		display: flex;
		.section-header {
			margin: auto;
		}

		h1 {
			font-size: 56px;
		}
	}

	.nav {
		z-index: 10;
		position: fixed;
		align-self: center;
		width: 100%;
		top: 0px;
	}

	.appendices-container {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-top: 24px;

		a {
			text-decoration: none;
		}

		.appendix {
			border: $border;
			padding: 0px 10px;
			border-radius: 12px;
			display: flex;
			flex-direction: row;
			align-items: center;

			.icon {
				width: 40px;
				height: auto;
				margin-right: 14px;
			}

			p {
				font-weight: 600;
			}
		}
	}

	.section-navigation {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 20px;
		font-weight: 500;
		gap: 10px;
		text-align: center;
		a {
			border: $border;
			border-radius: 10px;
			padding: 10px;
			text-decoration: none;
			@extend .popup;
		}
	}
</style>
