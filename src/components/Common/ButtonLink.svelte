<script lang="ts">
	export let link: string;
	export let iconLink: string | undefined = undefined;
	export let text: string;
	export let type: string = 'normal';
</script>

<a
	href={link}
	class={type == 'normal' ? 'button popup button-normal' : 'button popup button-primary'}
	target="_blank"
>
	{#if $$slots.icon}
		<slot name="icon" />
	{/if}
	{#if iconLink}
		<img src={iconLink} alt={`${text} Icon`} class="button-icon" />
	{/if}

	<span class="button-text">{text}</span>
</a>

<style lang="scss">
	.button-normal {
		gap: 10px;
		display: flex;
		flex-direction: row;
		align-items: center;
		font-weight: 500;
		font-size: 20px;
		line-height: 19px;
		border-radius: 8px;
		border: $border;
		padding: 8px 18px;
		justify-content: center;
		width: 40px;
		background-color: $white;
		text-decoration: none;
		color: $black;
		text-align: center;

		@include md {
			width: 120px;
			padding: 12px 12px;
		}
	}

	.button-primary {
		gap: 10px;
		display: flex;
		flex-direction: row;
		font-weight: 500;
		justify-content: center;
		font-size: 20px;
		line-height: 19px;
		border-radius: 8px;
		font-size: 16px;
		width: 40px;
		padding: 8px 18px;
		text-decoration: none;
		background-color: $primary;
		border: $primary 2px solid;
		text-align: center;

		@include md {
			align-items: center;
			width: 120px;
			padding: 12px 12px;
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
			width: 12px;
			height: 12px;
			margin-left: auto;
		}
	}
</style>
