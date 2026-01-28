<script lang="ts">
    // Import components here!
    // NavBar and Footer
    import './gemini.css';
    import NavBar from "$lib/components/gemini/NavBar.svelte";

    let { children } = $props();
</script>

<!-- Font import -->
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</svelte:head>

<div class="w-full min-h-screen font-sans bg-white">
    <!-- Navbar here! -->
    <NavBar />

    <!-- Page(s) goes here! -->
    <main>
        {@render children()}
    </main>

    <!-- Footer here! -->
</div>

<style>

</style>