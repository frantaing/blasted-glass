<script lang="ts">
    // Import components here!
    // NavBar and Footer

    let { children } = $props();
</script>

<div class="min-h-screen w-full bg-white">
    <!-- Navbar here! -->

    <!-- Page(s) goes here! -->
    <main>
        {@render children()}
    </main>

    <!-- Footer here! -->
</div>

<style lang="scss">

</style>