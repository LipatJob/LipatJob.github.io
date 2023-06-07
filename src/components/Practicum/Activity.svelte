<script lang="ts">
	import ChevronRight from '../Common/ChevronRight.svelte';
	import Pill from '../Common/Pill.svelte';

	export let imageLink: string;
	export let title: string;
	export let link: string;
	export let tags: Array<string> = [];
</script>

<a href={link} class="link" target="_blank">
	<div class="project popup">
		<img src={imageLink} alt={`${title} project banner`} class="project-image" />
	</div>
</a>

<style lang="scss">
	.project {
		height: 100%;
		z-index: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: $border;
		border-radius: 14px;
		overflow: hidden;
		aspect-ratio: 16 / 9;
	}

	.project-image {
		border: none;
		object-fit: fill;
		max-width: 100%;
	}

	.information {
		display: flex;
		padding: 20px;
		height: 76px;
	}

	.title {
		margin: auto auto;
		text-align: center;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		color: $black;
		line-height: 25px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3; /* number of lines to show */
		line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	.link {
		height: 100%;
		font-weight: 600;
		font-size: 16px;
		line-height: 19px;
		display: flex;
		flex-direction: row;
		align-items: center;
		color: $black;
		text-decoration: none;
	}

	.linkText {
		margin-right: 6px;
	}

	

	.tags {
		display: flex;
		flex-direction: row;
		gap: 10px;
	}
</style>
