<script lang="ts">
    let {src, alt } = $props();
</script>

<div class="mb-5 break-inside-avoid">
    <img {src} {alt} />
</div>

<style>
    img {
        display: block;
        width: 180px;
        height: auto;
        border: 1px solid black;
        padding: 10px;
        box-shadow: 6px 6px 0 0 rgb(63, 63, 63, 0.3);
        transition: box-shadow .2s ease-in;
    }
    img:hover {
        box-shadow: 8px 8px 0 0 yellow;
    }
</style>