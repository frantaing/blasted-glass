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
<div class="receipt-theme mt-28 mx-10 text-sm text-justify md:mx-[20%] xl:mx-[34%]">
    {@render children()}
</div>

<div class="pb-5 font-bold italic text-xs text-center">
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

    .receipt-theme :global(h3) {
        text-align: center;
        font-style: italic;
        font-size: 1.17em;
        margin-top: 20px;
    }

    /* move this to its own component for img! */
    .receipt-theme :global(img) {
        display: block;
        margin: 0 auto;
        width: 300px;
        height: auto;
        border: 1px solid black;
        padding: 10px;
        box-shadow: 6px 6px 0 0 rgb(63, 63, 63, 0.3);
        transition: box-shadow .2s ease-in;
    }

    .receipt-theme :global(img:hover) {
        box-shadow: 10px 10px 0 0 yellow;
    }
    
    /* global scrollbar hide */
    :global(*::-webkit-scrollbar) {
        display: none;
    }
</style>