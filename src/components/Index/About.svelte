<script>
	import ButtonLink from '../Common/ButtonLink.svelte';
</script>

<div class="section-container">
	<div class="section">
		<p class="greeting">Hi, I'm <span class="greeting-name">Job Lipat</span>.</p>
		<p class="info">
			I am a fourth year Computer Science student at Mapua Malayan Colleges Laguna.
		</p>
		<p class="subinfo">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis auctor purus, vitae
			rutrum purus placerat eu.
		</p>

		<div class="button-container">
			<ButtonLink link="resume_cv.pdf" iconLink="resume-icon.svg" text="Resume" type="primary" />
			<ButtonLink link="https://github.com/LipatJob" iconLink="github-icon.svg" text="Github" />
			<ButtonLink link="mailto:joblipat@gmail.com" iconLink="email-icon.svg" text="Email" />
		</div>
	</div>


</div>

<style lang="scss">
	.section-container {
		height: 100vh;

		display: flex;
		flex-direction: column;
	}

	.section {
		display: flex;
		flex-direction: column;
		margin: auto;
	}

	.learn-more {
		position: static;
		bottom: 0;
		display: flex;

		&-content{
			padding: 20px;
			margin: 0 auto;	
		}
	}

	.greeting {
		font-size: 30px;
		font-weight: 600;
		margin-bottom: 8px;
		@include md {
			font-size: 48px;
		}
	}

	.greeting-name {
		color: var(--primary);
		font-weight: bold;
	}

	.info {
		font-size: 18px;
		font-weight: 600;
		line-height: 136.02%;
		margin-bottom: 16px;
		color: $text-secondary;

		@include md {
			font-size: 36px;
		}
	}
	.subinfo {
		font-size: 14px;
		line-height: 20px;
		color: #474747;
		margin-bottom: 38px;
		@include md {
			line-height: 43px;
			font-size: 24px;
		}
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
