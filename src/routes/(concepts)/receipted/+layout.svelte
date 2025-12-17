<script lang="ts">
    // tailwind
    import '../../../app.css';
    // components
	import NavBar from '$lib/components/receipted/NavBar.svelte';
	
    let { children } = $props();
</script>

<!-- navbar -->
<NavBar />

<!-- main page -->
<div class="receipt-theme mt-28 mx-[15%] text-sm text-justify md:mx-[20%] xl:mx-[34%]">
    {@render children()}
</div>

<div class="py-5 font-bold font-[monospace] italic text-xs text-center">
    <p>Frantaing @2025</p>
</div>


<style>
    /* global styles for this layout only */
    .receipt-theme {
        font-family: monospace;
    }
    .receipt-theme :global(h1) {
        text-align: center;
        font-weight: 900;
        padding-bottom: 40px;
        font-size: 2em;
    }
    :global(*::-webkit-scrollbar) { /* global scrollbar hide */
        display: none;
    }
</style>