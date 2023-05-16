<script lang="ts">
	import ChevronRight from '../Common/ChevronRight.svelte';

	export let imageLink: string;
	export let title: string;
	export let description: string;
	export let link: string;
</script>

<div class="project">
	<img src={imageLink} alt={`${title} project banner`} class="projectImage" />
	<p class="title">{title}</p>
	<p class="description">{description}</p>
	<a href={link} class="link">
		<p class="linkText">View Project</p>
		<ChevronRight />
	</a>
</div>

<style>
	.project {
		display: flex;
		flex-direction: column;
	}

	.title {
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		margin-bottom: 20px;
	}

	.description {
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		color: #454545;
		margin-bottom: 26px;
		line-height: 25px;
	}
	.link {
		font-weight: 600;
		font-size: 16px;
		line-height: 19px;
		display: flex;
		flex-direction: row;
		align-items: center;
		color: black;
		text-decoration: none;
	}

	.linkText {
		margin-right: 6px;
	}
    
	.projectImage {
		max-width: 100%;
		margin-bottom: 20px;
	}
</style>
