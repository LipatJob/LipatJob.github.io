<script>
	import Affiliation from '../Affiliation/Affiliation.svelte';
	import Item from '../Common/Item.svelte';
</script>

<section class="section">
	<div class="header">
		<p class="header-label">Affiliations</p>
		<header class="header-title">Organizations I'm Affiliated With</header>
	</div>

	<div class="affiliations">
		<Affiliation
			link="https://www.facebook.com/mapuamclacm"
			logo="mapua mcl acm.png"
			name="Mapua MCL ACM Student Chapter"
			startDate="August 2019"
			endDate="Present"
			description="An organization that aims to promote a greater interest in modern computing and its application"
		/>
		<Affiliation
			link="https://www.facebook.com/MCLccis.sc"
			logo="ccis council.png"
			name="Mapua MCL CCIS Student Council"
			startDate="August 2020"
			endDate="August 2021"
			description="The student council of Mapua Malayan Colleges Laguna’s College of Computer and Information Science"
		/>
		<Affiliation
			link="https://www.facebook.com/mapuamclacm"
			logo="junior mcl acm.png"
			name="Junior MCL ACM Student Chapter"
			startDate="November 2018"
			endDate="June 2019"
			description="The senior high school counterpart of Mapua MCL ACM Student Chapter"
		/>
	</div>
</section>

<style lang="scss">
	.section {
		width: 100%;
	}
	.affiliations {
		gap: 20px;
		display: flex;
		flex-direction: column;
		width: 100%;
		@include lg {
			flex-direction: row;
			justify-content: space-between;
		}
	}

	.affiliations > * {
		min-width: 100%;
		@include lg {
			min-width: 263px;
		}
	}
</style>
