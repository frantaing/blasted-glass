<script lang="ts">
	// Imports
</script>

<nav
	class="flex justify-center items-center w-full h-fit px-5 xs:px-[45px] md:px-12 lg:px-[6%] pl-6 xs:pl-12 py-[11px] font-medium text-sm text-primary bg-secondary"
>
	<div class="flex justify-between items-center w-full xl:max-w-304">
		<!-- Left: logo + title -->
		<section class="flex items-center gap-1 cursor-pointer">
			<img src="gemini/logo.png" alt="Logo" class="w-6.5 xs:w-5.5" />
			<span class="hidden xs:block font-title font-semibold text-lg">GEMINI</span>
		</section>

		<!-- DESLTOP: Middle: links -->
		<section class="hidden lg:flex justify-center items-center gap-5.5 pl-24">
			<a href="/gemini">Prices</a>
			<!-- All Products -->
			<button class="group">
				<!-- The button itself -->
				<div class="flex items-center">
					<span>All Products</span>
					<img src="/gemini/chevron-down.png" alt="Dropdown arrow" />
				</div>
				<!-- Dropdown content -->
				<div></div>
			</button>
			<!-- Institutions -->
			<button class="group">
				<!-- The button itself -->
				<div class="flex items-center">
					<span>Institutions</span>
					<img src="/gemini/chevron-down.png" alt="Dropdown arrow" />
				</div>
				<!-- Dropdown content -->
				<div></div>
			</button>
			<!-- Resources -->
			<button class="group">
				<!-- The button itself -->
				<div class="flex items-center">
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

			<!-- MOBILE: hamburger menu -->
			<button class="lg:hidden">
				<img src="/gemini/menu.png" alt="Toggle mobile menu" class="w-7.5 h-5" />
			</button>
		</section>
	</div>
</nav>

<style>
	@reference '../../../routes/(recreates)/gemini/gemini.css';

	button,
	a {
		@apply transition;

		&:hover {
			@apply opacity-80 cursor-pointer;
		}
		& img {
			@apply w-5 mb-0.5 transform transition-all group-hover:rotate-180;
		}
		&.orange-btn {
			@apply px-4 py-[9px] font-secondary text-[15px] text-secondary bg-orange-btn rounded-full;
		}
	}
</style>