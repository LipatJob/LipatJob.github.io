<script lang="ts">
	import Icon from '@iconify/svelte';
	import ButtonLink from '../Common/ButtonLink.svelte';
	import Pill from '../Common/Pill.svelte';
	import ImageCarousel from './ImageCarousel.svelte';

	export let onClose = () => {};

	export let project: {
		title: string;
		description: string;
		links: {
			github?: string | undefined;
			website?: string | undefined;
			paper?: string | undefined;
			slides?: string | undefined;
		};
		tags: string[];
		photos: string[];
		verticalPhotos: boolean;
	};
</script>

<div
	class="popup-background"
	on:click={(e) => {
		onClose();
	}}
	on:keypress={(e) => {
		if (e.key === 'Escape') {
			onClose();
		}
	}}
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="project-details"
		on:click={(e) => e.stopPropagation()}
		class:vertical-details={project.verticalPhotos}
	>
		<div class="image-carousel-container">
			<div class="image-carousel content" class:vertical={project.verticalPhotos}>
				<ImageCarousel photos={project.photos} />
			</div>
			<button class="close close-mobile popup" on:click={onClose}>
				<Icon icon="material-symbols:close" style="width: 24px; height: 24px" slot="icon" />
			</button>
		</div>

		<div class="details content">
			<button class="close close-desktop popup" on:click={onClose}>
				<Icon icon="material-symbols:close" style="width: 24px; height: 24px" slot="icon" />
			</button>
			<h1 class="title">{project.title}</h1>
			<div class="tags">
				{#each project.tags as tag}
					<Pill text={tag} />
				{/each}
			</div>
			<p class="description">{project.description}</p>
			<div class="links">
				{#if project.links.github}
					<ButtonLink link={project.links.github} iconLink="icons/github.svg" text="Github" />
				{/if}
				{#if project.links.website}
					<ButtonLink link={project.links.website} text="Website">
						<Icon icon="material-symbols:link" style="width: 24px; height: 24px" slot="icon" />
					</ButtonLink>
				{/if}
				{#if project.links.paper}
					<ButtonLink link={project.links.paper} text="Paper">
						<Icon icon="humbleicons:document" style="width: 24px; height: 24px" slot="icon" />
					</ButtonLink>
				{/if}
				{#if project.links.slides}
					<ButtonLink link={project.links.slides} text="Slides">
						<Icon icon="mdi:presentation" style="width: 24px; height: 24px" slot="icon" />
					</ButtonLink>
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.popup-background {
		display: flex;
		width: 100%;
		height: 100%;

		@include sm {
			width: 100vw;
			height: 100vh;
		}
		background: rgba(0, 0, 0, 0.3);
	}

	.project-details {
		display: flex;
		flex-direction: column;
		margin: auto;
		gap: 30px;
		padding: 20px;

		@include sm {
			padding: 0px;
			flex-direction: row;
			width: 85%;
			gap: 20px;
		}
	}

	.vertical-details {
		max-width: 85%;
		width: auto;
	}

	.content {
		border: $border;
		border-radius: 14px;
		background: white;
	}

	.image-carousel-container {
		position: relative;
		flex-grow: 1;
	}

	.image-carousel {
		aspect-ratio: 16/9;
		overflow: hidden;
	}

	.vertical {
		aspect-ratio: 9/16;
		max-height: 100%;
		height: 100%;
		width: 100%;
		max-width: 100%;

		@include sm {
			max-width: 400px;
			width: 400px;
		}
	}

	.close {
		position: absolute;
		top: -15px;
		right: -15px;

		border-radius: 100%;
		width: 35px;
		height: 35px;
		border: $border;
		padding: 0;
		background-color: $white;

		display: flex;
		justify-content: center;
		align-items: center;

		&-mobile {
			@include sm {
				display: none;
			}
		}

		&-desktop {
			display: none;
			@include sm {
				display: flex;
			}
		}
	}

	.details {
		position: relative;
		display: flex;
		flex-direction: column;
		@include sm {
			width: 380px;
			min-width: 380px;
		}
		padding: 20px;
		display: flex;
		flex-direction: column;
	}

	.description {
		margin-top: 20px;
		line-height: 1.5;
		font-size: 16px;
		margin-bottom: 20px;
	}

	.links {
		margin-top: auto;
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
		// dont resize elements when flex
		align-content: flex-start;
		justify-content: center;
	}

	.tags {
		display: flex;
		flex-direction: row;
		gap: 10px;
	}
</style>
