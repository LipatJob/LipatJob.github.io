<script lang="ts">
	import ChevronRight from '../Common/ChevronRight.svelte';

	export let imageLink: string;
	export let link: string;
</script>

<a class="project" href={link}>
	<img src={imageLink} alt={`project banner`} class="projectImage" />
</a>

<style>
	.project:hover {
		transform: translateY(-3px);
		transition: 0.1s transform ease-in-out;
		box-shadow: 0 3px 3px rgb(0 0 0 / 0.1);
	}

	.project {
		display: flex;
		flex-direction: column;
		border: solid black 1px;
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
		color: #454545;
		line-height: 25px;
		margin-bottom: 20px;
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
	}
</style>
