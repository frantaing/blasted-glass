<script lang="ts">
    import '../../../app.css';
    
	import NavBar from '$lib/components/receipted/NavBar.svelte';
    let { children } = $props();
</script>

<!-- navbar -->
<NavBar />

<!-- main page -->
<div class="mt-24 mx-[34%] text-sm text-justify md:mx-20 xl:mx-40">
    {@render children()}
</div>

<div class="pb-5 font-bold italic text-xs text-center">
    <p>Frantaing @2025</p>
</div>


<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: monospace;
    }
    *::-webkit-scrollbar{
        display:none;
    }
</style>