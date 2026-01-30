<script lang="ts">
	let { activeMenu, onMouseEnter, onMouseLeave } = $props();
</script>

<!-- Add mouseenter/mouseleave here. If the user hovers this menu, we tell the Navigation to CANCEL closing the menu. -->
<div
	class="absolute w-3xl top-20 right-0 left-0 m-auto p-8 bg-secondary rounded-2xl shadow-2xl z-50 cursor-default"
	role="menu"
	tabindex="-1"
	onmouseenter={onMouseEnter}
	onmouseleave={onMouseLeave}
>
	<!-- 'ALL PRODUCTS' DROPDOWN -->
	{#if activeMenu === 'products'}
		<div class="grid grid-cols-2 gap-x-4 gap-y-2">
			<a href="#" class="group submenu-link">
				<span class="text-sm">ActiveTrader</span>
				<p>Take full control over your trading experience.</p>
			</a>
			<a href="#" class="group submenu-link">
				<span class="text-sm">Exchange</span>
				<p>Effortless buying and selling of over 90+ assets.</p>
			</a>
			<a href="#" class="group submenu-link">
				<span class="text-sm">Gemini Dollar</span>
				<p>Our USD-backed stablecoin.</p>
			</a>
			<a href="#" class="group submenu-link">
				<span class="text-sm">Tokenized Stocks</span>
				<p>Trade U.S. stocks on the blockchain.</p>
			</a>
			<a href="#" class="group submenu-link">
				<span class="text-sm">Staking</span>
				<p>Receive up to 12% APR on your crypto.</p>
			</a>
		</div>
		<!-- 'INSTITUTIONS' DROPDOWN -->
	{:else if activeMenu === 'institutions'}
		<div class="grid grid-cols-2 gap-x-4 gap-y-2 h-full">
			<!-- Left column (image) -->
			<div class="flex flex-col justify-between">
				<img src="/gemini/institution_Ant Rozetsky.jpg" alt="institutions dropdown" class="h-1/2 object-cover rounded-xl" />
				<div class="group submenu-link pl-0! hover:bg-transparent!">
					<span class="text-sm">Gemini Insitutional</span>
					<p class="opacity-70 group-hover:opacity-70!">Tailored solutions for institutions.</p>
				</div>
			</div>
			<!-- Right column (links) -->
			<div class="flex flex-col">
				<span class="pl-5 pt-2 pb-8 text-xs opacity-70">Institutional Products</span>
				<a href="#" class="group submenu-link">
					<span class="text-sm">Exchange</span>
					<p>Trader digital assets at scale.</p>
				</a>
				<a href="#" class="group submenu-link">
					<span class="text-sm">Custody</span>
					<p>Institutional-grade crypto cold storage.</p>
				</a>
				<a href="#" class="group submenu-link">
					<span class="text-sm">OTC</span>
					<p>Trade with deep liquidity and dedicated support.</p>
				</a>
				<a href="#" class="group submenu-link">
					<span class="text-sm">Staking</span>
					<p>Receive up to 6% APR on your crypto.</p>
				</a>
			</div>
		</div>
		<!-- 'RESOURES' DROPDOWN -->
	{:else if activeMenu === 'resources'}
		<div class="grid grid-cols-2 gap-x-4 gap-y-2">
			<a href="#" class="group submenu-link">
				<span class="text-sm">The Gemini Blog</span>
				<p>News, insights, and updates from Gemini.</p>
			</a>
			<a href="#" class="group submenu-link">
				<span class="text-sm">About</span>
				<p>Why we built Gemini.</p>
			</a>
			<a href="#" class="group submenu-link">
				<span class="text-sm">Careers</span>
				<p>Build the future of finance with us.</p>
			</a>
			<a href="#" class="group submenu-link">
				<span class="text-sm">Cryptopedia</span>
				<p>Your trusted source for all things crypto.</p>
			</a>
			<a href="#" class="group submenu-link">
				<span class="text-sm">Trust Center</span>
				<p>Building trust through transparency.</p>
			</a>
			<a href="#" class="group submenu-link">
				<span class="text-sm">Support</span>
				<p>24/7 help from our global support team.</p>
			</a>
		</div>
	{/if}
</div>

<style>
	/* Possibly aggregate all the .submenu classes and stuff to global `gemini.css`? */

	@reference '../../../routes/(recreates)/gemini/gemini.css';

	.submenu-link {
		@apply flex flex-col gap-1 pl-4.5 py-5 hover:bg-primary/10 rounded-xl transition-colors hover:opacity-100!;

		p {
			@apply font-normal text-[13px] opacity-70 group-hover:opacity-100 transition-opacity;
		}
	}
</style>
