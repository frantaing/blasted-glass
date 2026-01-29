<script lang="ts">
	// Imports
	import { fade } from "svelte/transition"; // Fade in transition for opening menu

	// Bind to update parent (Navigation) from "GEMINI" -> "BACK"
	let { activeSubmenu = $bindable() } = $props();
</script>

<div
	class="lg:hidden flex flex-col gap-1 absolute top-full left-0 w-full h-screen overflow-none xs:px-[45px] pl-2.5 xs:pl-10 pr-3.5 pt-5 xs:pt-8 text-xl bg-secondary"
	in:fade={{ duration: 100 }}
>
	<!-- MAIN MENU VIEW -->
	{#if activeSubmenu === null}
		<div class="flex flex-col gap-8">
			<!-- Prices -->
			<a href="/gemini">Prices</a>

			<!-- All Products Trigger -->
			<button 
				class="flex flex-col group w-full text-left"
				onclick={() => activeSubmenu = 'products'}
			>
				<div class="navbar-dropdown justify-between w-full">
					<span>All Products</span>
					<img src="/gemini/chevron-down.png" alt="Arrow" class="w-6! opacity-60 -rotate-90" />
				</div>
			</button>

			<!-- Institutions Trigger -->
			<button 
				class="flex flex-col group w-full text-left"
				onclick={() => activeSubmenu = 'institutions'}
			>
				<div class="navbar-dropdown justify-between w-full">
					<span>Institutions</span>
					<img src="/gemini/chevron-down.png" alt="Arrow" class="w-6! opacity-60 -rotate-90" />
				</div>
			</button>

			<!-- Resources Trigger -->
			<button 
				class="flex flex-col group w-full text-left"
				onclick={() => activeSubmenu = 'resources'}
			>
				<div class="navbar-dropdown justify-between w-full">
					<span>Resources</span>
					<img src="/gemini/chevron-down.png" alt="Arrow" class="w-6! opacity-60 -rotate-90" />
				</div>
			</button>

			<!-- Sign in -->
			<a href="/gemini">Sign in</a>
		</div>

	<!-- SUBMENU: ALL PRODUCTS -->
	{:else if activeSubmenu === 'products'}
		<div class="flex flex-col gap-1 w-full text-xl">
			<a href="#" class="group flex flex-col gap-2 w-full pl-3 py-3 hover:bg-primary/10 rounded-xl transition-colors">
				<span class="text-sm">ActiveTrader</span>
				<p class="font-normal text-[13px] opacity-70 group-hover:opacity-100 transition-opacity">Take full control over your trading experience.</p>
			</a>
			<a href="#" class="group flex flex-col gap-2 w-full pl-3 py-3 hover:bg-primary/10 rounded-xl transition-colors">
				<span class="text-sm">Exchange</span>
				<p class="font-normal text-[13px] opacity-70 group-hover:opacity-100 transition-opacity">Effortless buying and selling of over 90+ assets.</p>
			</a>
			<a href="#" class="group flex flex-col gap-2 w-full pl-3 py-3 hover:bg-primary/10 rounded-xl transition-colors">
				<span class="text-sm">Gemini Dollar</span>
				<p class="font-normal text-[13px] opacity-70 group-hover:opacity-100 transition-opacity">Our USD-backed stablecoin.</p>
			</a>
			<a href="#" class="group flex flex-col gap-2 w-full pl-3 py-3 hover:bg-primary/10 rounded-xl transition-colors">
				<span class="text-sm">Tokenized Stocks</span>
				<p class="font-normal text-[13px] opacity-70 group-hover:opacity-100 transition-opacity">Trade U.S. stocks on the blockchain.</p>
			</a>
			<a href="#" class="group flex flex-col gap-2 w-full pl-3 py-3 hover:bg-primary/10 rounded-xl transition-colors">
				<span class="text-sm">Staking</span>
				<p class="font-normal text-[13px] opacity-70 group-hover:opacity-100 transition-opacity">Receive up to 12% APR on your crypto.</p>
			</a>
		</div>

	<!-- 3. SUBMENU: INSTITUTIONS (add here...) -->
	{:else if activeSubmenu === 'institutions'}
		<div class="flex flex-col gap-4">
			<span class="opacity-50 text-sm">Institutions Links Here...</span>
		</div>

	<!-- 4. SUBMENU: RESOURCES (add here...) -->
	{:else if activeSubmenu === 'resources'}
		<div class="flex flex-col gap-4">
			<span class="opacity-50 text-sm">Resources Links Here...</span>
		</div>
	{/if}
</div>

<style>

	/* MAKE CUSTOM CLASSES FOR REPEAT STYLES!!! */

	@reference '../../../routes/(recreates)/gemini/gemini.css';

	.navbar-dropdown {
		@apply flex items-center gap-0.5;
	}
</style>