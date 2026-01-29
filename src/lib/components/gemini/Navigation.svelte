<script lang="ts">	
	// Imports
	import MobileMenu from "./MobileMenu.svelte";

	// ---SUBMENU STUFF---
	// State
	let isMenuOpen = $state(false);
	// Track which mobile submenu is open
	// null = Main List, 'string' = specific submenu
	let activeSubmenu: string | null = $state(null); 

	// Mobile menu toggle
	function toggleMenu() { 
		isMenuOpen = !isMenuOpen;
		// Reset submenu when closing the entire menu
		if(!isMenuOpen) activeSubmenu = null;
	}
	// Return to main list
	function goBack() { activeSubmenu = null; }
</script>

<nav class="flex justify-center items-center relative w-full h-fit px-5 xs:px-[45px] 2lg:px-20 pl-6 xs:pl-12 py-[10.8px] font-medium text-sm text-primary bg-secondary">
	
	<!-- NavBar -->
	<div class="flex justify-between items-center w-full 2lg:max-w-304">
		
		<!-- LEFT SECTION: LOGO vs BACK BUTTON -->
		<section class="flex items-center gap-1 cursor-pointer min-w-[120px]">
			{#if isMenuOpen && activeSubmenu !== null}
				<!-- BACK BUTTON (Only visible on mobile when submenu is active) -->
				<button onclick={goBack} class="lg:hidden flex items-center gap-1.5 hover:opacity-100!">
					<img src="/gemini/chevron-down.png" alt="Back" class="w-6 rotate-90" />
					<span class="font-semibold text-xl">Back</span>
				</button>

				<!-- DESKTOP LOGO (Keep showing logo on desktop even if state is weird) -->
				<div class="hidden lg:flex items-center gap-1">
					<img src="gemini/logo.png" alt="Logo" class="w-6.5 xs:w-5.5" />
					<span class="hidden xs:block font-title font-semibold text-lg">GEMINI</span>
				</div>
			{:else}
				<!-- STANDARD LOGO -->
				<a href="/" class="flex items-center gap-1">
					<img src="gemini/logo.png" alt="Logo" class="w-6.5 xs:w-5.5" />
					<span class="hidden xs:block font-title font-semibold text-lg">GEMINI</span>
				</a>
			{/if}
		</section>

		<!-- DESKTOP: Middle links -->
		<section class="hidden lg:flex justify-center items-center gap-5.5 pl-24">
			<!-- Prices -->
			<a href="/gemini">Prices</a>
			<!-- All Products -->
			<button class="group">
				<div class="navbar-dropdown">
					<span>All Products</span>
					<img src="/gemini/chevron-down.png" alt="Dropdown arrow" />
				</div>
				<!-- Dropdown menu -->
				<div></div>
			</button>
			<!-- Institutions -->
			<button class="group">
				<div class="navbar-dropdown">
					<span>Institutions</span>
					<img src="/gemini/chevron-down.png" alt="Dropdown arrow" />
				</div>
				<!-- Dropdown menu -->
				<div></div>
			</button>
			<!-- Resources -->
			<button class="group">
				<div class="navbar-dropdown">
					<span>Resources</span>
					<img src="/gemini/chevron-down.png" alt="Dropdown arrow" />
				</div>
				<!-- Dropdown menu -->
				<div></div>
			</button>
		</section>

		<!-- RIGHT: Buttons + Hamburger -->
		<section class="flex items-center gap-5.5 xs:gap-6.5 lg:gap-5">
			<!-- Sign in -->
			<a href="/gemini" class="hidden lg:block hover:opacity-100!">Sign in</a>

			<!-- Get started -->
			<a href="/gemini" class="orange-btn">Get started</a>

			<!-- HAMBURGER -->
			<button onclick={toggleMenu} class="lg:hidden w-5 cursor-pointer transition-none! hover:opacity-100!">
				<img
					src={isMenuOpen ? '/gemini/close.png' : '/gemini/menu.png'}
					alt={isMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
					class="w-5!"
				/>
			</button>
		</section>
	</div>

	<!-- MOBILE MENU COMPONENT -->
	{#if isMenuOpen}
		<!-- Bind activeSubmenu so the component can update it; Navigation can read to toggle the Back button -->
		<MobileMenu bind:activeSubmenu />
	{/if}
</nav>

<style>

	/* TODO: FIX STYLES!!! */

	@reference '../../../routes/(recreates)/gemini/gemini.css';

	button,
	a {
		&:hover {
			@apply opacity-80 cursor-pointer transition;
		}
		/* Only rotate chevrons in the desktop menu or specific classes, prevent global img rotation on the new back button */
		&.group img {
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