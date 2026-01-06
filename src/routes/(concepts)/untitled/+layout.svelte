<script lang="ts">
    let { children } = $props();
</script>

<div class="untitled-theme">
    {@render children()}
</div>

<style>
    .untitled-theme {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-color: white;
    }
</style>