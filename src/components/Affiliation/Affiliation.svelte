<script lang="ts">
	import LinkIcon from '../Common/LinkIcon.svelte';

	export let link: string;
	export let logo: string;
	export let name: string;
	export let startDate: string;
	export let endDate: string;
	export let description: string;
</script>

<div class="item-container popup">
	<a href={link}>
		<div class="item">
			<div class="item-header">
				<img class="logo" src={logo} alt={name} />
				<span class="link-icon"><LinkIcon /> </span>
			</div>
			<p class="name">{name}</p>
			<p class="date">{startDate} to {endDate}</p>
			<p class="description">{description}</p>
		</div>
	</a>
</div>

<style lang="scss">
	.item-container {
		border: $border;
		border-radius: 20px;
		a {
			text-decoration: none;
			color: black;
		}
		min-height: 100%;
	}

	.item {
		display: flex;
		flex-direction: column;
		padding: 20px 20px;
	}

	.item-header {
		display: flex;
		flex-direction: row;
	}

	.logo {
		height: 60px;
		width: auto;
	}

	.link-icon {
		width: 20px;
		height: 20px;
		margin-left: auto;
	}

	.name {
		font-weight: 700;
		font-size: 16px;
		margin-top: 8px;
		margin-bottom: 4px;
	}

	.date {
		font-size: 14px;
		margin-bottom: 8px;
	}

	.description {
		font-weight: 400;
		font-size: 14px;
		font-style: italic;
	}
</style>
