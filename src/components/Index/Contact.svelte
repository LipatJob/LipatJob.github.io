<script>
	import Affiliation from '../Affiliation/Affiliation.svelte';
	import ButtonLink from '../Common/ButtonLink.svelte';
	import Item from '../Common/Item.svelte';
</script>

<section class="section">
	<div class="header">
		<p class="header-label">Contact</p>
		<header class="header-title">Let’s Build Something Together</header>
		<header class="header-subtitle">
			Feel free to reach out if you're looking for a developer, have a question, or just want to
			connect.
		</header>
	</div>

	<div class="button-container">
		<ButtonLink link="https://github.com/LipatJob" iconLink="github-icon.svg" text="Github" />
		<ButtonLink link="mailto:joblipat@gmail.com" iconLink="email-icon.svg" text="Email" />
	</div>
</section>

<style>
	.section {
		text-align: center;
		display: flex;
		align-items: center;
		margin: 100px 0;
	}

	.header-subtitle {
		max-width: 568px;
	}

	.button-container{
		display: flex;
		flex-direction: row;
		gap: 20px;
	}
</style>
