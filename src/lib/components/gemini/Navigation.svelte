<script lang="ts">	
	// Imports
	import { fade } from "svelte/transition";			// Fade in transition

	// Mobile menu toggle
	let isMenuOpen = $state(false);						// Is the menu open?
	function toggleMenu() { isMenuOpen = !isMenuOpen }	// Toggle menu

</script>

<nav class="flex justify-center items-center relative w-full h-fit px-5 xs:px-[45px] 2lg:px-20 pl-6 xs:pl-12 py-[10.8px] font-medium text-sm text-primary bg-secondary">
	
	<!-- NavBar -->
	<div class="flex justify-between items-center w-full 2lg:max-w-304">
		<!-- Left: logo + title -->
		<section class="flex items-center gap-1 cursor-pointer">
			<img src="gemini/logo.png" alt="Logo" class="w-6.5 xs:w-5.5" />
			<span class="hidden xs:block font-title font-semibold text-lg">GEMINI</span>
		</section>

		<!-- DESLTOP: Middle: links -->
		<section class="hidden lg:flex justify-center items-center gap-5.5 pl-24">
			<!-- Prices -->
			<a href="/gemini">Prices</a>
			<!-- All Products -->
			<button class="group">
				<!-- The button itself -->
				<div class="navbar-dropdown">
					<span>All Products</span>
					<img src="/gemini/chevron-down.png" alt="Dropdown arrow" />
				</div>
				<!-- Dropdown content px-5 xs:px-[45px] lg:px-12 pl-6 -->
				<div></div>
			</button>
			<!-- Institutions -->
			<button class="group">
				<!-- The button itself -->
				<div class="navbar-dropdown">
					<span>Institutions</span>
					<img src="/gemini/chevron-down.png" alt="Dropdown arrow" />
				</div>
				<!-- Dropdown content -->
				<div></div>
			</button>
			<!-- Resources -->
			<button class="group">
				<!-- The button itself -->
				<div class="navbar-dropdown">
					<span>Resources</span>
					<img src="/gemini/chevron-down.png" alt="Dropdown arrow" />
				</div>
				<!-- Dropdown content -->
				<div></div>
			</button>
		</section>

		<!-- Right: ('Sign in' + 'Get started' links) + Mobile menu button -->
		<section class="flex items-center gap-5.5 xs:gap-6.5 lg:gap-5">
			<!-- DESKTOP: 'Sign in' link -->
			<a href="/gemini" class="hidden lg:block hover:opacity-100!">Sign in</a>

			<!-- Get start button -->
			<a href="/gemini" class="orange-btn">Get started</a>

			<!-- MOBILE: Hamburger menu -->
			<button onclick={toggleMenu} class="lg:hidden w-5 transition-none! hover:opacity-100!">
				<img
					src={isMenuOpen ? '/gemini/close.png' : '/gemini/menu.png'}
					alt={isMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
					class="w-5!"
				/>
			</button>
		</section>
	</div>

	<!-- Mobile menu -->
	{#if isMenuOpen}
		<!-- Fade in transition only when opening the menu! -->
		<div
			class="lg:hidden flex flex-col gap-8 absolute top-full left-0 w-full h-screen xs:px-[45px] xs:pl-12 pl-4 pr-3.5 pt-5.5 text-xl bg-black transition-opacity" 
			in:fade={{ duration: 100 }}
		>
			<!-- Prices -->
			<a href="/gemini">Prices</a>
			<!-- All Products -->
			<button class="flex flex-col">
				<!-- The button itself -->
				<div class="navbar-dropdown justify-between">
					<span>All Products</span>
					<img src="/gemini/chevron-down.png" alt="Dropdown arrow" class="w-6! opacity-60 -rotate-90" />
				</div>
				<!-- Dropdown content -->
				<div></div>
			</button>
			<!-- Institutions -->
			<button class="group">
				<!-- The button itself -->
				<div class="navbar-dropdown justify-between">
					<span>Institutions</span>
					<img src="/gemini/chevron-down.png" alt="Dropdown arrow"  class="w-6! opacity-60 -rotate-90" />
				</div>
				<!-- Dropdown content -->
				<div></div>
			</button>
			<!-- Resources -->
			<button class="group">
				<!-- The button itself -->
				<div class="navbar-dropdown justify-between">
					<span>Resources</span>
					<img src="/gemini/chevron-down.png" alt="Dropdown arrow"  class="w-6! opacity-60 -rotate-90" />
				</div>
				<!-- Dropdown content -->
				<div></div>
			</button>
			<!-- 'Sign in' link -->
			<a href="/gemini">Sign in</a>
		</div>
	{/if}
</nav>

<style>
	@reference '../../../routes/(recreates)/gemini/gemini.css';

	button,
	a {
		&:hover {
			@apply opacity-80 cursor-pointer transition;
		}
		img {
			@apply w-5 mt-px transform transition-transform group-hover:rotate-180;
		}
		&.orange-btn {
			@apply px-4 py-[9px] font-secondary text-[15px] text-secondary bg-orange-btn rounded-full;
		}
	}

	.navbar-dropdown {
		@apply flex items-center gap-0.5;
	}
</style>