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
		<div class="information">
			<p class="title">{title}</p>
		</div>
	</div>
</a>

<style lang="scss">
	.project {
		z-index: 0;
		display: flex;
		flex-direction: column;
		border: $border;
		border-radius: 14px;
		overflow: hidden;
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

	.project-image {
		max-width: 100%;
		height: auto;
		border: none;
		aspect-ratio: 2 / 1;
		object-fit: cover;
	}

	.tags {
		display: flex;
		flex-direction: row;
		gap: 10px;
	}
</style>
