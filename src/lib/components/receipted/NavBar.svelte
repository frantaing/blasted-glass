<script lang="ts">
    // imports
    import { page } from '$app/state'; // for active links
    import { slide } from 'svelte/transition';
    // track if menu is open
    let isMenuOpen = $state(false);
    // toggle menu
    function toggleMenu() { isMenuOpen = !isMenuOpen }
</script>

<!-- main navbar -->
<nav class="z-50 fixed top-0 left-0 w-full bg-black text-white font-[monospace] font-bold text-lg">
    <div class="mx-auto flex justify-between items-center w-full max-w-xl py-3 px-16 sm:px-0 sm:py-5">
        <div>
            <a 
                href="/receipted" 
                class:active={page.url.pathname === '/receipted'}
            >RECEIPTED</a>
        </div>
        <!-- mobile menu button (hidden on desktop) -->
        <button 
            onclick={toggleMenu} 
            class="sm:hidden text-white uppercase focus:outline-none hover:text-yellow-300 transition-colors"
        >
            <!-- change text based on state -->
            {isMenuOpen ? 'close' : 'menu'}
        </button>
        <!-- desktop menu (hidden on mobile) -->
        <div class="hidden sm:block">
            <a 
                href="/receipted/gallery" 
                class="lowercase"
                class:active={page.url.pathname === '/receipted/gallery'}
            >gallery</a> 
            <a 
                href="/receipted/about" 
                class="lowercase"
                class:active={page.url.pathname === '/receipted/about'}
            >about</a>
            <!-- no need for active styling on HOME link -->
            <a href="/concepts" class="uppercase">HOME</a>
        </div>
    </div>
    
    <!-- mobile menu -->
    {#if isMenuOpen}
        <div 
            transition:slide={{ duration: 200 }}
            class="absolute top-full left-0 w-full pr-5 pb-4 bg-black sm:hidden"
        >
            <div class="flex flex-col items-end px-10 py-2 gap-4">
                <div>
                    <a 
                        href="/receipted/gallery" 
                        class="lowercase"
                        class:active={page.url.pathname === '/receipted/gallery'}
                        onclick={() => isMenuOpen = false}
                    >gallery</a> 
                </div>
                <div>
                    <a 
                        href="/receipted/about" 
                        class="lowercase"
                        class:active={page.url.pathname === '/receipted/about'}
                        onclick={() => isMenuOpen = false}
                    >about</a>
                </div>
                <div>
                    <a 
                        href="/concepts" 
                        class="uppercase"
                        onclick={() => isMenuOpen = false}
                    >HOME</a>
                </div>
            </div>
        </div>
    {/if}
</nav>

<!-- padding to push main content down -->
<div class="h-20 sm:h-28"></div>

<style>
    a {
        text-decoration: none;
        color:white;
        text-align:center;
        padding: 0px 2px;
        box-shadow: inset 0 -1px 0 0 yellow;
        transition: color .2s ease-in-out, box-shadow .2s ease-in-out;
    }
    a:hover, a:focus, a.active {
        color:black;        box-shadow: inset 0 -100px 0 0 yellow;
    }
</style>