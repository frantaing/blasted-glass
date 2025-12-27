<script lang="ts">
    // imports
    import '../app.css';
    import { fade } from 'svelte/transition'; // fade when navigating layouts
    
    let { children, data } = $props();
</script>

<div class="layout-grid">
    <!-- when data.url changes, destroy old ocntnet and create new content -->
    {#key data.url}
        <div
            class="page-content"
            in:fade={{ duration: 300, delay: 300}}
            out:fade={{  duration: 300 }}
        >
            {@render children()}
        </div>
    {/key}
</div>

<style>
    .layout-grid {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden; /* no scrollbars during transition */
    }

    .page-content {
        grid-row: 1;
        grid-column: 1;
        width: 100%;
    }
</style>