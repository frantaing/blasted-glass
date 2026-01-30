<script lang="ts">
	let { activeMenu, onMouseEnter, onMouseLeave } = $props();
	
	// List of all dropdown menu items
	const products = [
		{ title: 'ActiveTrader', desc: 'Take full control over your trading experience.' },
		{ title: 'Exchange', desc: 'Effortless buying and selling of over 90+ assets.' },
		{ title: 'Gemini Dollar', desc: 'Our USD-backed stablecoin.' },
		{ title: 'Tokenized Stocks', desc: 'Trade U.S. stocks on the blockchain.' },
		{ title: 'Staking', desc: 'Receive up to 12% APR on your crypto.' }
	];
	const institutionalLinks = [
		{ title: 'Exchange', desc: 'Trader digital assets at scale.' },
		{ title: 'Custody', desc: 'Institutional-grade crypto cold storage.' },
		{ title: 'OTC', desc: 'Trade with deep liquidity and dedicated support.' },
		{ title: 'Staking', desc: 'Receive up to 6% APR on your crypto.' }
	];
	const resources = [
		{ title: 'The Gemini Blog', desc: 'News, insights, and updates from Gemini.' },
		{ title: 'About', desc: 'Why we built Gemini.' },
		{ title: 'Careers', desc: 'Build the future of finance with us.' },
		{ title: 'Cryptopedia', desc: 'Your trusted source for all things crypto.' },
		{ title: 'Trust Center', desc: 'Building trust through transparency.' },
		{ title: 'Support', desc: '24/7 help from our global support team.' }
	];
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
			{#each products as item}
				<a href="#" class="group submenu-link">
					<span class="text-sm">{item.title}</span>
					<p>{item.desc}</p>
				</a>
			{/each}
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
				{#each institutionalLinks as item}
					<a href="#" class="group submenu-link">
						<span class="text-sm">{item.title}</span>
						<p>{item.desc}</p>
					</a>
				{/each}
			</div>
		</div>
	<!-- 'RESOURES' DROPDOWN -->
	{:else if activeMenu === 'resources'}
		<div class="grid grid-cols-2 gap-x-4 gap-y-2">
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
	/* Possibly aggregate all the .submenu classes and stuff to global `gemini.css`? */

	@reference '../../../routes/(recreates)/gemini/gemini.css';

	.submenu-link {
		@apply flex flex-col gap-1 pl-4.5 py-5 hover:bg-primary/10 rounded-xl transition-colors hover:opacity-100!;

		p {
			@apply font-normal text-[13px] opacity-70 group-hover:opacity-100 transition-opacity;
		}
	}
</style>