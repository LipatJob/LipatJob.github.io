<script lang="ts">
	import ChevronRight from '../Common/ChevronRight.svelte';
	import ProjectFeature from './ProjectFeature.svelte';

	export let skillName: string;
	export let tools: Array<string>;
	export let bullets: Array<string>;
	let opened = true;
</script>

<div class="skill">
	<button
		class="skill-toggle"
		on:click={() => {
			opened = !opened;
		}}
	>
		<p class="skill-name"><span class="toggle"><ChevronRight /></span>{skillName}</p>
		<div class="tools">
			{#each tools as tool}
				<div class="tool">{tool}</div>
			{/each}
		</div>
	</button>

	{#if opened}
		<hr />
		<div class="description">
			<ul>
				{#each bullets as bullet}
					<li>{bullet}</li>
				{/each}
			</ul>

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

	.tool {
		padding: 8px;
		font-size: 12px;
		border-radius: 40px;
		border: $border;
	}

	.description {
		margin: 18px 0;
		margin-left: 12px;
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
</style>
