<script lang="ts">
	export let className: String = '';

	function handleAnchorClick(event: any) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor!.offsetTop - 80,
			behavior: 'smooth'
		});
		toggleMenu();
	}

	let menuToggled = false;
	function toggleMenu() {
		menuToggled = !menuToggled;
	}
</script>

<div class={'nav ' + className}>
	<div id="menuToggle">
		<input type="checkbox" bind:checked={menuToggled} />
		<span />
		<span />
		<span />
		<ul id="menu">
			<a class="nav-item" on:click={handleAnchorClick} href="#About"> About</a>
			<a class="nav-item" on:click={handleAnchorClick} href="#Projects"> Projects</a>
			<a class="nav-item" on:click={handleAnchorClick} href="#Skills"> Skills</a>
			<a class="nav-item" on:click={handleAnchorClick} href="#Experience"> Experience</a>
			<a class="nav-item" on:click={handleAnchorClick} href="#Education"> Education</a>
			<a class="nav-item" on:click={handleAnchorClick} href="#Affiliations"> Affiliations</a>
			<a class="nav-item" on:click={handleAnchorClick} href="#Contact"> Contact</a>
		</ul>
	</div>
</div>

<style lang="scss">
	.nav {
		overflow: hidden;
		z-index: 10;
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

	#menuToggle {
		display: block;
		position: relative;
		padding: 25px;

		@include md {
			top: 0;
			left: 0;
		}

		z-index: 1;

		-webkit-user-select: none;
		user-select: none;
	}

	#menuToggle a {
		text-decoration: none;
		color: #232323;

		transition: color 0.3s ease;
	}

	#menuToggle input {
		display: block;
		width: 40px;
		height: 32px;
		position: absolute;
		top: -7px;
		left: -5px;

		cursor: pointer;

		opacity: 0; /* hide this */
		z-index: 2; /* and place it over the hamburger */

		-webkit-touch-callout: none;
	}

	#menuToggle span {
		display: block;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		position: relative;

		background: #cdcdcd;
		border-radius: 3px;

		z-index: 1;

		transform-origin: 4px 0px;

		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

		@include md {
			display: none;
		}
	}

	#menuToggle span:first-child {
		transform-origin: 0% 0%;
	}

	#menuToggle span:nth-last-child(2) {
		transform-origin: 0% 100%;
	}

	#menuToggle input:checked ~ span {
		opacity: 1;
		transform: rotate(45deg) translate(-2px, -1px);
		background: #232323;
	}

	#menuToggle input:checked ~ span:nth-last-child(3) {
		opacity: 0;
		transform: rotate(0deg) scale(0.2, 0.2);
	}

	#menuToggle input:checked ~ span:nth-last-child(2) {
		transform: rotate(-45deg) translate(0, -1px);
	}

	#menu {
		position: absolute;
		width: 300px;
		margin: 0 0 0 -50px;
		padding: 50px;

		background: $white;
		list-style-type: none;
		-webkit-font-smoothing: antialiased;
		/* to stop flickering of text in safari */

		transform-origin: 0% 0%;
		transform: translate(-100%, 0);

		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

		display: flex;
		flex-direction: column;
		gap: 32px;

		@include md {
			transform: translate(0, 0);
			margin: 0 0 0 0;
			position: relative;
			padding: 20px;
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
		}
	}

	#menu li {
		padding: 10px 0;
		font-size: 22px;
	}

	/*
 * And let's slide it in from the left
 */
	#menuToggle input:checked ~ ul {
		transform: none;
	}
</style>
