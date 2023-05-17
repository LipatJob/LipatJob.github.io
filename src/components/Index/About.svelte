<script>
	import ButtonLink from '../Common/ButtonLink.svelte';
	import Navigation from '../Common/Navigation.svelte';
</script>

<div class="section-container">
	<div class="section">
		<p class="greeting">Hi, I'm <span class="greeting-name">Job Lipat</span>.</p>
		<p class="info">I am a 4th-year Computer Science student at Mapua Malayan Colleges Laguna.</p>
		<p class="subinfo">
			I use code to transform complexity into simplicity.
		</p>
		<div class="button-container">
			<ButtonLink link="https://drive.google.com/file/d/1U6Z6PfnT-CBCUv4GbUzcyWh4jyzRKGO-/view?usp=share_link" iconLink="resume-icon.svg" text="Resume" type="primary" />
			<ButtonLink link="https://github.com/LipatJob" iconLink="github-icon.svg" text="Github" />
			<ButtonLink link="mailto:joblipat@gmail.com" iconLink="email-icon.svg" text="Email" />
		</div>
	</div>
</div>

<style lang="scss">
	.section-container {
		display: flex;
		flex-direction: column;
	}

	.section {
		display: flex;
		flex-direction: column;
		margin: auto;
	}

	.greeting {
		font-size: 30px;
		font-weight: 900;
		margin-bottom: 24px;
		@include md {
			font-size: 96px;
		}
		font-family: 'Roboto', sans-serif;
	}

	.greeting-name {
		color: $primary;
		font-size: 128px;
		font-family: 'Roboto', sans-serif;
	}

	.info {
		font-size: 18px;
		font-weight: 600;
		margin-bottom: 16px;
		@include md {
			font-size: 36px;
		}
	}

	.subinfo {
		font-size: 14px;
		color: $secondary;
		margin-bottom: 38px;
		@include md {
			line-height: 43px;
			font-size: 20px;
		}
	}

	.quote {
		font-style: italic;
	}

	.button-container {
		display: flex;
		flex-direction: row;
		gap: 36px;
		justify-content: center;

		@include md {
			justify-content: left;
			gap: 24px;
		}
	}
</style>
