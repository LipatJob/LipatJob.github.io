<script lang="ts">
	import { text } from 'svelte/internal';
	import ChevronRight from '../Common/ChevronRight.svelte';
	import Pill from '../Common/Pill.svelte';
	import ProjectFeature from './ProjectFeature.svelte';
	import { fade, slide } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';

	export let skillName: string;
	export let tools: Array<string>;
	export let bullets: Array<string>;
	export let opened: boolean = true;

	function toggle() {
		opened = !opened;
	}
</script>

<div class="skill">
	<button class="skill-toggle" on:click={toggle}>
		<div class="toggle" class:closed={!opened}>
			<ChevronRight />
		</div>
		<p class="skill-name">
			{skillName}
		</p>
		<div class="tools">
			{#each tools as tool}
				<Pill text={tool} />
			{/each}
		</div>
	</button>

	{#if opened}
		<div transition:slide={{ duration: 100, axis: 'y' }}>
			<hr />
			<div class="description">
				<ul>
					{#each bullets as bullet}
						<li>{bullet}</li>
					{/each}
				</ul>
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.skill-toggle {
		display: flex;
		flex-direction: column;
		width: 100%;
		background: none;
		color: inherit;
		border: none;

		@include sm {
			flex-direction: row;
			align-items: center;
		}
	}

	.toggle {
		margin-right: 8px;
		transform: rotate(90deg);
		transition: transform 0.2s ease-in-out;
	}

	.skill-name {
		font-weight: 500;
		font-size: 20px;
		margin-bottom: 8px;

		@include sm {
			margin-bottom: 0px;
		}
	}

	.tools {
		margin-left: 0;

		display: flex;
		flex-direction: row;
		gap: 10px;

		@include sm {
			margin-left: auto;
		}
	}

	.description {
		margin: 18px 0;
		margin-left: 12px;
		font-size: 18px;
	}

	.description ul li {
		margin: 14px 0;
	}

	.features {
		display: flex;
		flex-direction: row;
		gap: 20px;
		margin: 0 40px;
	}

	.closed {
		transform: rotate(0deg);
		transition: transform 0.2s ease-in-out;
	}
</style>
