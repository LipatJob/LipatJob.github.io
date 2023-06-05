<script lang="ts">
	export let text: string;
</script>

<div class="pill">{text}</div>

<style lang="scss">
	.pill {
		padding: 8px 12px;
		font-size: 12px;
		border-radius: 40px;
		border: $border;
		font-size: 14px;
        min-width: 40px;
        text-align: center;
		font-weight: 500;
	}
</style>
