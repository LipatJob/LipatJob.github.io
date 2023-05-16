<script lang="ts">
	import LinkIcon from '../Common/LinkIcon.svelte';

	export let link: string;
	export let logo: string;
	export let name: string;
	export let startDate: string;
	export let endDate: string;
	export let description: string;
</script>

<a class="item-container" href={link}>
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

<style>
	.item-container {
		border-radius: 20px;

		width: 263px;
		border: 1px solid black;
		text-decoration: none;
		color: black;
	}

	.item {
		display: flex;
		flex-direction: column;
		padding: 20px 12px;
	}

	.item-header {
		display: flex;
		flex-direction: row;
	}

	.logo {
		height: 40px;
		width: auto;
	}

	.link-icon {
		width: 20px;
		height: 20px;
		margin-left: auto;
	}

	.name {
		font-weight: 600;
		font-size: 14px;
		margin-top: 8px;
		margin-bottom: 4px;
	}

	.date {
		font-weight: 300;
		font-size: 12px;
		margin-bottom: 8px;
	}

	.description {
		font-weight: 400;
		font-size: 12px;
		font-style: italic;
	}
</style>
