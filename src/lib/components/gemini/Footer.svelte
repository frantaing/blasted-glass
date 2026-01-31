<script lang="ts">
    // Footer nav dropdown
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

<footer class="flex flex-col justify-center items-center gap-5 w-full px-4 xs:px-12 pt-6 xs:pt-8 pb-10 xs:pb-14 text-primary bg-secondary">
    <section class="flex xs:border-b-[0.5px] xs:border-primary/20">
        <!-- (DESKTOP) Logo + Email/Subscription -->
        <div class="hidden lg:flex flex-col w-fit">
            <!-- (DESKTOP) Footer logo -->
            <img src="/gemini/logo.png" alt="Footer logo" class="w-7" />
            <!-- Email textfield + Subscribe button -->
            <div>
                <input />
                <button>Subscribe</button>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem vel delectus sapiente voluptatibus debitis cum illum, facilis maiores eveniet expedita voluptate at repudiandae sit ullam totam recusandae. Voluptate, quae.</p>
        </div>

        <!-- Footer links -->
        <nav class="flex flex-col xs:grid xs:grid-cols-4 gap-6 w-full text-sm">
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
    </section>
    
    <!-- Language + Socials + Site Policy/Legal Notice + Fine Print(?) -->
    <section class="flex flex-col lg:flex-row lg:justify-between items-center lg:w-full gap-7 xs:gap-8">
        <!-- (MOBILE) Footer logo -->
        <img src="/gemini/logo.png" alt="Footer logo" class="lg:hidden w-7" />

        <!-- Language selector -->
        <button class="flex justify-between items-center gap-5 p-3 bg-white/10 lg:bg-transparent rounded-full">
            <div class="flex items-center gap-2">
                <!-- Globe icon -->
                <img src="/gemini/globe.png" alt="Language selector icon" class="h-5.5" />
                <!-- Language selected -->
                <span class="text-sm">English - Singapore</span>
            </div>
            <!-- Dropdown icon -->
            <img src="/gemini/chevron-down.png" alt="Language selector dropdown" class="w-5">
        </button>

        <!-- Socials -->
        <div class="flex gap-8.5">
            <a href="#" class="opacity-100!">
                <img src="/gemini/twitter.png" alt="X/Twitter" class="w-4.5">
            </a>
            <a href="#" class="opacity-100!">
                <img src="/gemini/instagram.png" alt="Instagram" class="w-4.5">
            </a>
            <a href="#" class="opacity-100!">
                <img src="/gemini/linkedin.png" alt="LinkedIn" class="w-4.5">
            </a>
            <a href="#" class="opacity-100!">
                <img src="/gemini/youtube.png" alt="Youtube" class="w-4.5">
            </a>
            <a href="#" class="opacity-100!">
                <img src="/gemini/reddit.png" alt="Reddit" class="w-4.5">
            </a>
            <a href="#" class="opacity-100!">
                <img src="/gemini/threads.png" alt="Threads" class="w-4.5">
            </a>
        </div>

        <!-- Footer text -->
        <div class="flex flex-col items-center gap-6 xs:gap-4.5">
            <!-- Site Policy + Legal Notice -->
            <div class="flex gap-4 text-[13px] whitespace-nowrap">
                <a href="#">Site Policy</a>
                <a href="#">Legal Notice</a>
            </div>
            <!-- (MOBILE) Fine print -->
            <p class="lg:hidden leading-4.5 text-[11.5px] text-center text-primary/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vel natus doloribus doloremque esse earum, quam et nemo assumenda repellendus laudantium, libero, eius hic quaerat autem totam officia! Cupiditate, magnam.</p>
        </div>
    </section>
</footer>

<style>
    @reference '../../../routes/(recreates)/gemini/gemini.css';

    nav > div {
        @apply border-b-[0.5px] border-primary/20 xs:border-none;
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