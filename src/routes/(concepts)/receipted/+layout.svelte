<script lang="ts">
    import '../../../app.css';
    
	import NavBar from '$lib/components/receipted/NavBar.svelte';
    let { children } = $props();
</script>

<!-- navbar -->
<NavBar />

<!-- main page -->
<div class="">
    {@render children()}
</div>

<div class="pb-5 font-bold italic text-xs text-center">
    <p>Frantaing @2025</p>
</div>


<style>
    * {
        font-family: monospace;
    }
</style>