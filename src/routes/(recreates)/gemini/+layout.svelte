<script lang="ts">
    // Imports
    import './gemini.css';
    import Navigation from "$lib/components/gemini/Navigation.svelte";
    import Footer from '$lib/components/gemini/Footer.svelte';

    let { children } = $props();
</script>

<!-- Font import -->
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</svelte:head>

<div class="flex flex-col justify-between w-full min-h-screen font-sans bg-white">
    <!-- Navigation (NavBar + Mobile menu) here! -->
    <Navigation />

    <!-- Page(s) goes here! -->
    <main class="w-full h-screen bg-pink-500">
        {@render children()}
    </main>

    <!-- Footer here! -->
    <Footer />
</div>

<style>

</style>