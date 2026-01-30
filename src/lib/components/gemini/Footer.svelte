<script lang="ts">
    // Dropdown
    let openMenu: string | null = null; // Track which menuy is open
    const toggle = (menuName: string): void => {
        if (openMenu === menuName) {
            openMenu = null; // Close if the same dropdown is clicked
        } else {
            openMenu = menuName; // If one dropdown is already open, close it and open new dropdown
        }
    }
</script>

<footer class="w-full px-5 pt-6 pb-10 text-primary bg-secondary">

    <!-- Links -->
    <nav class="flex flex-col gap-6 text-sm">
        <div class="dropdown-item">
            <button 
                on:click={() => toggle('products')} 
                class="dropdown-button"
            >
                <span>Products</span>
                <img 
                    src="/gemini/chevron-down.png" 
                    alt="Arrow" 
                    class="{openMenu === 'products' ? '' : '-rotate-90'}" 
                />
            </button>
            {#if openMenu === 'products'}
                <div class="footer-links">
                    <a href="#">ActiveTrader</a>
                    <a href="#">Clearing</a>
                    <a href="#">Credit Card</a>
                    <a href="#">Predictions</a>
                    <a href="#">Custody</a>
                    <a href="#">Perpetuals</a>
                    <a href="#">Exchange</a>
                    <a href="#">Gemini Dollar</a>
                    <a href="#">Staking</a>
                    <a href="#">Wallet</a>
                    <a href="#">Margin Trading</a>
                </div>
            {/if}
        </div>
        <div class="dropdown-item">
            <button 
                on:click={() => toggle('institutions')} 
                class="dropdown-button"
            >
                <span>Institutions</span>
                <img 
                    src="/gemini/chevron-down.png" 
                    alt="Arrow" 
                    class={openMenu === 'products' ? '' : '-rotate-90'}
                />
            </button>
            {#if openMenu === 'institutions'}
                <div class="footer-links">
                    <a href="#">Exchange</a>
                    <a href="#">Clearing</a>
                    <a href="#">Custody</a>
                    <a href="#">OTC</a>
                    <a href="#">Staking</a>
                    <a href="#">Wallet</a>
                    <a href="#">Margin Trading</a>
                </div>
            {/if}
        </div>
        <div class="dropdown-item">
            <button 
                on:click={() => toggle('company')} 
                class="dropdown-button"
            >
                <span>Company</span>
                <img 
                    src="/gemini/chevron-down.png" 
                    alt="Arrow" 
                    class={openMenu === 'products' ? '' : '-rotate-90'}
                />
            </button>
            {#if openMenu === 'company'}
                <div class="footer-links">
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                    <a href="#">Contact us</a>
                    <a href="#">Frontier Fund</a>
                    <a href="#">Investors</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Trust and Safety</a>
                    <a href="#">Security</a>
                    <a href="#">Gemini Trust User Agreement</a>
                    <a href="#">Gemini Moonbase User Agreement</a>
                    <a href="#">Digital Assets Disclosures</a>
                </div>
            {/if}
        </div>
        <div class="dropdown-item">
            <button 
                on:click={() => toggle('resources')} 
                class="dropdown-button"
            >
                <span>Resources</span>
                <img 
                    src="/gemini/chevron-down.png" 
                    alt="Arrow" 
                    class={openMenu === 'products' ? '' : '-rotate-90'}
                />
            </button>
            {#if openMenu === 'resources'}
                <div class="footer-links">
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                    <a href="#">Contact us</a>
                    <a href="#">Frontier Fund</a>
                    <a href="#">Investors</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Trust and Safety</a>
                    <a href="#">Security</a>
                    <a href="#">Gemini Trust User Agreement</a>
                    <a href="#">Gemini Moonbase User Agreement</a>
                    <a href="#">Digital Assets Disclosures</a>
                </div>
            {/if}
        </div>
    </nav>

</footer>

<style>
    @reference '../../../routes/(recreates)/gemini/gemini.css';

    nav {
        > div {
            @apply border-b-[0.5px] border-primary/30;
        }
    }
    
	a {
        @apply w-full opacity-70;

		&:hover {
			@apply opacity-100 cursor-pointer transition;
		}
    }

    .dropdown-item {
        @apply relative inline-block pb-3 text-left;
    }

    .dropdown-button {
        @apply flex justify-between items-center gap-2 w-full pb-3 font-medium text-sm;
        
        img {
            @apply w-5;
        }
    }

    .footer-links {
        @apply flex flex-col gap-5 w-full pb-6 mt-3;
    }
</style>