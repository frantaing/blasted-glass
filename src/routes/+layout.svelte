<script lang="ts">
    // imports
    import '../app.css';
    import { fade } from 'svelte/transition'; // fade when navigating layouts
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';
    
    // apply types to $props
    let { children, data } = $props<{ children: Snippet, data: LayoutData }>();
</script>

<div class="layout-grid">
    <!-- when data.layoutGroup changes, destroy old ocntnet and create new content -->
    {#key data.layoutGroup}
        <div
            class="page-content"
            in:fade={{ duration: 250, delay: 250}}
            out:fade={{  duration: 250 }}
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
        background-color: black;
    }

    .page-content {
        grid-row: 1;
        grid-column: 1;
        width: 100%;
    }
</style>