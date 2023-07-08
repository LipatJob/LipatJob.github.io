<script lang="ts">
	import { fade } from 'svelte/transition';
	import ChevronRight from '../Common/ChevronRight.svelte';
	import Icon from '@iconify/svelte';

	export let photos: string[];
	export let vertical: boolean = false;

	let currentIndex = 0;
	let transitioning = false;

	const next = () => {
		if (!transitioning) {
			transitioning = true;
			setTimeout(() => {
				currentIndex = (currentIndex + 1) % photos.length;
				transitioning = false;
			}, 300);
		}
	};

	const previous = () => {
		if (!transitioning) {
			transitioning = true;
			setTimeout(() => {
				if (currentIndex === 0) {
					currentIndex = photos.length - 1;
				} else {
					currentIndex = (currentIndex - 1) % photos.length;
				}
				transitioning = false;
			}, 300);
		}
	};
</script>

<div class="carousel">
	{#each photos as item, index}
		<div class:transitioning class="image-container">
			{#if index === currentIndex}
				<img class="image" src={item} alt="" class:vertical />
			{/if}
		</div>
	{/each}

	<div class="controls">
		<button class="previous button popup" on:click={previous}>
			<Icon icon="ic:sharp-chevron-left" style="width: 36px; height: 36px" />
		</button>
		<button class="next button popup" on:click={next}>
			<Icon icon="ic:sharp-chevron-right" style="width: 36px; height: 36px" />
		</button>
	</div>
</div>

<style lang="scss">
	.carousel {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.controls {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.previous {
		margin-left: 20px;
		margin-right: auto;
	}

	.next {
		margin-right: 20px;
		margin-left: auto;
	}

	.button {
		display: flex;
		align-items: center;
		justify-content: center;

		border-radius: 100%;
		width: 50px;
		height: 50px;
		border: $border;
		padding: 0;
		background-color: $white;

		> svg {
			width: 10px;
			height: 10px;
		}
	}

	.carousel .image-container {
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
	}

	.image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.carousel .image-container.transitioning {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	.vertical{
		
	}
</style>
