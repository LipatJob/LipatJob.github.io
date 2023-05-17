<script>
	import Item from '../Common/Item.svelte';
</script>

<section class="section">
	<div class="header">
		<p class="header-label">Experience</p>
		<header class="header-title">Where I've worked</header>
	</div>

	<div class="experiences">
		<Item
			icon="teacher.png"
			title="Programming Mentor"
			subtitle="Freelance"
			bullets={[
				'Taught the basics of programming to college and senior high school students',
				'Taught basic game development using Unity'
			]}
            dateStart="December 2021"
			dateEnd="Present"
		/>

		<Item
			icon="mapua mcl.png"
			title="Senior High School On-the-Job Trainee"
			subtitle="Mapua Malayan Colleges Laguna"
			bullets={[
				'Addressed the gap in the manual scholarship validation process',
				'Developed a web application for uploading and validating student scholarship requirements'
			]}
            dateStart="March 2019"
			dateEnd="May 2019"
		/>
	</div>
</section>



<style>
	.experiences {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
</style>