<script>
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';

	let expanded = false;
	function toggleExpand() {
		expanded = !expanded;
	}
</script>

<svelte:window />

<slot name="mainSection" />
{#if expanded}
	<slot name="collapsableSection" />
{/if}
<div class="button-container">
	<button on:click={toggleExpand} class="expandButton popup" type="button">
		{#if !expanded}
			<p>Expand</p>
			<div class="icon">
				<Icon icon="ooui:expand" class="" width="none" height="none" />
			</div>
		{:else}
			<p>Collapse</p>
			<div class="icon">
				<Icon icon="ooui:collapse" class="" width="none" height="none" />
			</div>
		{/if}
	</button>
</div>

<style lang="scss">
	.button-container {
		width: 100%;
		margin: auto auto;
		display: flex;
		justify-content: center;
	}
	.expandButton {
		border: $border;
		border-radius: 20px;
		padding: 10px 20px;
		background-color: transparent;
		display: flex;
		flex-direction: column;
		align-items: center;
		> p {
			font-size: 18px;
			font-weight: 600;
		}

		.icon {
			width: 30px;
		}
	}
</style>
