<script>
	import Item from '../Common/Item.svelte';
</script>

<section class="section">
	<div class="header">
		<p class="header-label">Education</p>
		<header class="header-title">Where I've Studied</header>
	</div>

	<div class="schools">
		<Item
			icon="mapua mcl ccis.png"
			title="B.S. Computer Science"
			subtitle="Mapua Malayan Colleges Laguna"
			bullets={[
				'Full Academic Scholar, Dean’s Lister, and President’s Lister for 3 years',
				'Running General Weighted Average of 1.06 (Expected to graduate Summa Cum Laude)',
				'Expected to graduate in June 2023'
			]}
			dateStart="August 2019"
			dateEnd="Present"
		/>

		<Item
			icon="mapua mcl shs.png"
			title="Senior High School On-the-Job Trainee"
			subtitle="Mapua Malayan Colleges Laguna"
			bullets={[
				'Graduated with Honors',
				'Given “Best in Work Immersion Award” by SHS Principal on June 21, 2019'
			]}
			dateStart="June 2017"
			dateEnd="June 2019"
		/>
	</div>
</section>

<style>
	.schools {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
</style>
