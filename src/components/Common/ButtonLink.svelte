<script lang="ts">
	export let link: string;
	export let iconLink: string;
	export let text: string;
	export let type: string = 'normal';
</script>

<a href={link} class={type == 'normal' ? 'button' : 'button-primary'}>
	<img src={iconLink} alt={`${text} Icon`} class="button-icon" />
	<span class="button-text">{text}</span>
	<img src={type == 'normal' ? "link-icon.svg" : "link-icon-primary.svg"} alt="Link Icon" class="link-icon" />
</a>

<style lang="scss">
	.button {
		gap: 10px;
		display: flex;
		flex-direction: row;
		align-items: center;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
		border-radius: 8px;
		font-size: 16px;
		padding: 12px;
		border: 1px solid black;
		text-decoration: none;
		color: black;

		@include md {
			width: 160px;
			padding: 16px 12px;
		}

		&-primary {
			gap: 10px;
			display: flex;
			flex-direction: row;
			align-items: center;
			font-weight: 500;
			font-size: 16px;
			line-height: 19px;
			border-radius: 8px;
			font-size: 16px;
			padding: 8px 12px;
			text-decoration: none;
			background-color: var(--primary);
			border: none;
			color: white;

            @include md {
			width: 160px;
		}
		}
	}

	.button-icon {
		width: auto;
		height: 36px;
		@include md {
			width: auto;
			height: 24px;
		}
	}

	.button-text {
		display: none;
		@include md {
			display: inline;
		}
	}

	.link-icon {
		display: none;
		@include md {
			display: block;
			width: 10.88px;
			height: 10.89px;
			margin-left: auto;
		}
	}
</style>
