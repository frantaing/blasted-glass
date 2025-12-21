<script lang="ts">
    // for active links
    import { page } from '$app/state';
</script>

<nav class="z-50 fixed top-0 left-0 w-full bg-black text-white font-[monospace] font-bold text-lg">
    <div class="mx-auto flex justify-between items-center w-full max-w-xl py-5 px-16 sm:px-0">
        <div>
            <a 
                href="/receipted" 
                class:active={page.url.pathname === '/receipted'}
            >RECEIPTED</a>
        </div>
        <div>
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
</nav>

<!-- padding to push main content down -->
<div class="h-28"></div>

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