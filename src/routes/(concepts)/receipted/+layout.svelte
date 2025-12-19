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
<main class="flex justify-center">
    <section class="receipt-theme mx-16 text-sm text-justify sm:max-w-xl">
        {@render children()}
    </section>
</main>

<footer class="py-5 font-bold font-[monospace] italic text-xs text-center">
    <p>Frantaing @2025</p>
</footer>


<style>
    /* global styles for this layout only */
    .receipt-theme {
        font-family: monospace;
    }
    .receipt-theme :global(h1) {
        text-align: center;
        font-weight: 900;
        font-size: 2em;
    }
    :global(*::-webkit-scrollbar) { /* global scrollbar hide */
        display: none;
    }
</style>