<script lang="ts">
    // Import components here!
    // NavBar and Footer
    import NavBar from "$lib/components/gemini/NavBar.svelte";

    let { children } = $props();
</script>

<div class="min-h-screen w-full bg-white">
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