<script lang="ts">
	// IMPORTS
	import { fade } from "svelte/transition"; // Fade in transition for opening menu

	// Bind to update parent (Navigation) from "GEMINI" -> "BACK"
	let { activeSubmenu = $bindable() } = $props();

	// Main menu trigger data
	const menuTriggers = [
		{ id: 'products', label: 'All Products' },
		{ id: 'institutions', label: 'Institutions' },
		{ id: 'resources', label: 'Resources' }
	];
	
	// Submenu data
	const products = [
		{ title: 'ActiveTrader', desc: 'Take full control over your trading experience.' },
		{ title: 'Exchange', desc: 'Effortless buying and selling of over 90+ assets.' },
		{ title: 'Gemini Dollar', desc: 'Our USD-backed stablecoin.' },
		{ title: 'Tokenized Stocks', desc: 'Trade U.S. stocks on the blockchain.' },
		{ title: 'Staking', desc: 'Receive up to 12% APR on your crypto.' }
	];
	const institutions = [
		{ title: 'Gemini Insitutional', desc: 'Tailored solutions for institutions.' },
		{ title: 'Exchange', desc: 'Trader digital assets at scale.' },
		{ title: 'Custody', desc: 'Institutional-grade crypto cold storage.' },
		{ title: 'OTC', desc: 'Trade with deep liquidity and dedicated support.' },
		{ title: 'Staking', desc: 'Receive up to 6% APR on your crypto.' }
	];
	const resources = [
		{ title: 'The Gemini Blog', desc: 'News, insights, and updates from Gemini.' },
		{ title: 'Careers', desc: 'Build the future of finance with us.' },
		{ title: 'About', desc: 'Why we built Gemini.' },
		{ title: 'Trust Center', desc: 'Building trust through transparency.' },
		{ title: 'Cryptopedia', desc: 'Your trusted source for all things crypto.' },
		{ title: 'Support', desc: '24/7 help from our global support team.' }
	];
</script>

<div
	class="lg:hidden flex flex-col gap-1 absolute top-full left-0 w-full h-screen overflow-none xs:px-[45px] pl-4 xs:pl-12 pr-3.5 pt-5 xs:pt-6 text-xl bg-secondary"
	in:fade={{ duration: 100 }}
>
	<!-- MAIN MENU VIEW -->
	{#if activeSubmenu === null}
		<div class="flex flex-col gap-8 ">
			<a href="/gemini">Prices</a>

			{#each menuTriggers as trigger}
				<button onclick={() => activeSubmenu = trigger.id}>
					<div class="trigger-text">
						<span>{trigger.label}</span>
						<img src="/gemini/chevron-down.png" alt="Arrow" />
					</div>
				</button>
			{/each}

			<a href="/gemini">Sign in</a>
		</div>

	<!-- SUBMENU: ALL PRODUCTS -->
	{:else if activeSubmenu === 'products'}
		<div class="flex flex-col gap-1 w-full text-xl">
			{#each products as item}
				<a href="#" class="group submenu-link">
					<span class="text-sm">{item.title}</span>
					<p>{item.desc}</p>
				</a>
			{/each}
		</div>

	<!-- SUBMENU: INSTITUTIONS -->
	{:else if activeSubmenu === 'institutions'}
		<div class="flex flex-col gap-1 w-full text-xl">
			<span class="pl-3 pt-2 pb-6.5 text-xs opacity-70">Institutional Products</span>
			{#each institutions as item}
				<a href="#" class="group submenu-link">
					<span class="text-sm">{item.title}</span>
					<p>{item.desc}</p>
				</a>
			{/each}
		</div>

	<!-- SUBMENU: RESOURCES -->
	{:else if activeSubmenu === 'resources'}
		<div class="flex flex-col gap-1 w-full text-xl">
			{#each resources as item}
				<a href="#" class="group submenu-link">
					<span class="text-sm">{item.title}</span>
					<p>{item.desc}</p>
				</a>
			{/each}
		</div>
	{/if}
</div>

<style>
	@reference '../../../routes/(recreates)/gemini/gemini.css';

	.trigger-text {
		@apply flex justify-between items-center gap-0.5 w-full;

		img {
			@apply w-6! opacity-60 -rotate-90;
		}
	}

	.submenu-link {
		@apply flex flex-col gap-2 w-full pl-3 py-3 hover:bg-primary/10 rounded-xl transition-colors;

		p {
			@apply font-normal text-[13px] opacity-70 group-hover:opacity-100 transition-opacity;
		}
	}
</style>