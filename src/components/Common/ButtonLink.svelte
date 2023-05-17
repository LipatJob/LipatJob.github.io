<script lang="ts">
	export let link: string;
	export let iconLink: string;
	export let text: string;
	export let type: string = 'normal';
</script>

<a
	href={link}
	class={type == 'normal' ? 'button popup button-normal' : 'button popup button-primary'}
	target="_blank"
>
	<img src={iconLink} alt={`${text} Icon`} class="button-icon" />
	<span class="button-text">{text}</span>
</a>

<style lang="scss">
	.button-normal {
		gap: 10px;
		display: flex;
		flex-direction: row;
		align-items: center;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
		border-radius: 8px;
		font-size: 16px;
		border: $border;
		padding: 8px 18px;
		justify-content: center;
		width: 50px;

		text-decoration: none;
		color: $black;

		@include md {
			width: 120px;
			padding: 8px 12px;
		}
	}

	.button-primary {
		gap: 10px;
		display: flex;
		flex-direction: row;
		font-weight: 500;
		justify-content: center;
		font-size: 16px;
		line-height: 19px;
		border-radius: 8px;
		font-size: 16px;
		width: 50px;
		padding: 8px 18px;
		text-decoration: none;
		background-color: $primary;
		border: none;

		@include md {
			align-items: center;
			width: 130px;
		}
	}

	.button-primary .button-text {
		color: white;
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
