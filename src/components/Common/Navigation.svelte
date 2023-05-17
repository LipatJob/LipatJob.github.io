<script lang="ts">
	export let className: String = '';

	function handleAnchorClick(event: any) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor!.offsetTop - 70,
			behavior: 'smooth'
		});
	}
</script>

<div class={'nav ' + className}>
	<a class="nav-item" on:click={handleAnchorClick} href="#About"> About</a>
	<a class="nav-item" on:click={handleAnchorClick} href="#Projects"> Projects</a>
	<a class="nav-item" on:click={handleAnchorClick} href="#Skills"> Skills</a>
	<a class="nav-item" on:click={handleAnchorClick} href="#Experience"> Experience</a>
	<a class="nav-item" on:click={handleAnchorClick} href="#Education"> Education</a>
	<a class="nav-item" on:click={handleAnchorClick} href="#Affiliations"> Affiliations</a>
	<a class="nav-item" on:click={handleAnchorClick} href="#Contact"> Contact</a>
</div>

<style lang="scss">
	.nav {
		position: relative;
		display: flex;
		flex-direction: row;
		gap: 32px;
		padding: 20px;
		justify-content: center;
	}

	.nav-header {
		color: $primary;
		font-size: 24px;
		font-weight: 700;
	}

	.nav-item {
		position: relative;
		color: $black;
		text-decoration: none;
		font-weight: 500;
		font-size: 20px;
	}

	.nav-item:hover {
		color: $black;
	}

	.nav-item::after {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 2px;
		bottom: -6px;
		left: 0;
		background-color: #000;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.nav-item:hover::after {
		opacity: 1;
	}

	.selected::after {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 2px;
		bottom: -2px;
		left: 0;
		background-color: $primary;
		opacity: 1;
		transition: opacity 0.3s ease;
	}
</style>
