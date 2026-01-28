<script lang="ts">
    // Import components here!
    // NavBar and Footer
    import './gemini.scss';
    import NavBar from "$lib/components/gemini/NavBar.svelte";

    let { children } = $props();
</script>

<div class="w-full min-h-screen font-sans bg-white">
    <!-- Navbar here! -->
    <NavBar />

    <!-- Page(s) goes here! -->
    <main>
        {@render children()}
    </main>

    <!-- Footer here! -->
</div>

<style lang="scss">

</style>