<script lang="ts">
	export let icon: string;
	export let title: string;
	export let subtitle: string;
	export let bullets: Array<string>;
	export let dateStart: string;
	export let dateEnd: string;
</script>

<div class="item-container">
	<div class="icon-container">
		<img class="icon" src={icon} alt={`icon for ${title}`} />
	</div>
	<div class="description">
		<div class="item-header">
			<p class="title">{title}</p>
			<p class="date">{dateStart} to {dateEnd}</p>
		</div>
		<p class="subtitle">{subtitle}</p>
		<ul class="bullets">
			{#each bullets as bullet}
				<li class="bullet">{bullet}</li>
			{/each}
		</ul>
	</div>
</div>

<style lang="scss">
	.item-container {
		display: flex;
		flex-direction: column;
		gap: 16px;

		@include sm {
			flex-direction: row;
		}
	}

	.description {
		flex-grow: 1;
	}

	.icon-container {
		margin: 0 auto;
		display: flex;
		width: 60px;
		height: 60px;
		padding: 4px;
	}

	.icon {
		width: 100%;
		object-fit: contain;
	}

	.item-header {
		display: flex;
		flex-direction: column;
		@include sm {
			flex-direction: row;
		}
		margin-bottom: 8px;
	}

	.title {
		font-weight: 700;
		font-size: 18px;
		text-align: center;
		@include sm {
			text-align: left;
		}
	}

	.date {
		font-size: 14px;
		text-align: center;
		@include sm {
			text-align: left;
			margin-left: auto;
		}
	}

	.subtitle {
		font-style: italic;
		font-size: 16px;
		text-align: center;
		@include sm {
			text-align: left;
		}
	}

	.bullets {
	}
	.bullet:not(:last-child) {
		margin-bottom: 12px;
	}

	.bullet {
		font-size: 16px;
	}
</style>
