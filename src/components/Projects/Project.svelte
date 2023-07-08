<script lang="ts">
	import ChevronRight from '../Common/ChevronRight.svelte';
	import Pill from '../Common/Pill.svelte';

	export let imageLink: string;
	export let title: string;
	export let summary: string;
	export let tags: Array<string> = [];
</script>

<div class="project popup">
	<img src={imageLink} alt={`${title} project banner`} class="project-image" />
	<div class="information">
		<p class="title">{title}</p>
		<p class="description">{summary}</p>
		<div class="tags">
			{#each tags as tag}
				<Pill text={tag} />
			{/each}
		</div>
	</div>
</div>

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
		padding: 20px;
	}

	.title {
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		margin-bottom: 16px;
	}

	.description {
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		color: $black;
		line-height: 25px;
		margin-bottom: 20px;
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
	}

	.tags {
		display: flex;
		flex-direction: row;
		gap: 10px;
	}
</style>
