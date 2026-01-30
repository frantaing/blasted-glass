<script lang="ts">
    // Dropdown
    let openMenu: string | null = null; // Track which menuy is open
    // List of all footer nav subheadings + links
    const footerData = [
        {
            id: 'products',
            title: 'Products',
            links: ['ActiveTrader', 'Clearing', 'Credit Card', 'Predictions', 'Custody', 'Perpetuals', 'Exchange', 'Gemini Dollar', 'Staking', 'Wallet', 'Margin Trading']
        },
        {
            id: 'institutions',
            title: 'Institutions',
            links: ['Exchange', 'Clearing', 'Custody', 'OTC', 'Staking', 'Wallet', 'Margin Trading']
        },
        {
            id: 'company',
            title: 'Company',
            links: ['About', 'Blog', 'Careers', 'Contact us', 'Frontier Fund', 'Investors', 'Privacy Policy', 'Trust and Safety', 'Security', 'Gemini Trust User Agreement', 'Gemini Moonbase User Agreement', 'Digital Assets Disclosures']
        },
        {
            id: 'resources',
            title: 'Resources',
            links: ['API Docs', 'Cryptopedia', 'Fees', 'Asset Listing Hub', 'Marketplace', 'Prices', 'Support Center', 'System Status', 'Referral Program', 'Trust Center', 'TradingView', 'Do Not Share My Personal Information']
        }
    ];

    const toggle = (menuName: string): void => {
        openMenu = openMenu === menuName ? null : menuName;
    };
</script>

<footer class="w-full px-5 pt-6 pb-10 text-primary bg-secondary">
    <nav class="flex flex-col xs:flex-row xs:flex-wrap xs:justify-between gap-6 text-sm">
        {#each footerData as section}
            <div class="dropdown-item">
                <button 
                    on:click={() => toggle(section.id)} 
                    class="dropdown-button xs:hidden"
                >
                    <span>{section.title}</span>
                    <img 
                        src="/gemini/chevron-down.png" 
                        alt="Arrow" 
                        class="transition-transform duration-200 {openMenu === section.id ? '' : '-rotate-90'}" 
                    />
                </button>
                <!-- Links -->
                <div class="{openMenu === section.id ? 'flex' : 'hidden'} xs:flex footer-links">
                    {#each section.links as link}
                        <a href="#">{link}</a>
                    {/each}
                </div>
            </div>
        {/each}
    </nav>
</footer>

<style>
    @reference '../../../routes/(recreates)/gemini/gemini.css';

    nav > div {
        @apply border-b-[0.5px] border-primary/30 xs:border-none;
    }
    
    a {
        @apply w-full opacity-70 transition-opacity;

        &:hover {
            @apply opacity-100 cursor-pointer;
        }
    }

    .dropdown-item {
        @apply relative inline-block pb-3 text-left;
    }

    .dropdown-button {
        @apply flex justify-between items-center gap-2 w-full pb-3 font-medium text-sm;
        
        img {
            @apply w-5 xs:hidden;
        }
    }

    .footer-links {
        @apply flex-col gap-5 w-full pb-6 mt-3 xs:pb-0 xs:mt-0 xs:gap-3;
    }
</style>