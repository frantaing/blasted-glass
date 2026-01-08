<script lang="ts">
    // components
    import SideTopNav from "$lib/components/untitled/SideTopNav.svelte";
    import WatchingEyes from "$lib/components/untitled/WatchingEyes.svelte";
    
    let { children } = $props();
</script>

<main class="untitled-theme flex justify-center">
    <div class="flex flex-col items-center gap-8 m-10 my-12 w-full sm:max-w-3xl">
        <section class="flex justify-between items-end w-full pb-5 text-center border-b-2 border-black">
            <h1 class="text-lg">untitled</h1>
            <WatchingEyes />
        </section>
        <section class="flex flex-col sm:flex-row justify-between gap-10 sm:gap-5 w-full">
            <!-- nav -->
            <SideTopNav />
            <!-- main content -->
            <div class="w-full">
                {@render children()}       
            </div>
        </section>   
    </div>
</main>

<style>
    .untitled-theme {
        width: 100%;
        height: 100vh;
        background-color: white;
        font-family: serif;
    }
</style>