<script lang="ts">
	import ChevronRight from '../Common/ChevronRight.svelte';

	export let imageLink: string;
	export let title: string;
	export let description: string;
	export let link: string;
</script>

<a href={link} class="link" target="_blank">
	<div class="project popup">
		<img src={imageLink} alt={`${title} project banner`} class="project-image" />
		<div class="information">
			<p class="title">{title}</p>
			<p class="description">{description}</p>
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
</style>
