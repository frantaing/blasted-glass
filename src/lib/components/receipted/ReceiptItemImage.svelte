<script lang="ts">
    let {src, alt } = $props();
</script>

<div class="py-2.5">
    <img {src} {alt} />
</div>

<style>
    img {
        display: block;
        margin: 0 auto;
        width: 300px;
        height: auto;
        border: 1px solid black;
        padding: 10px;
        box-shadow: 6px 6px 0 0 rgb(63, 63, 63, 0.3);
        transition: box-shadow .2s ease-in;
        background-color: white;
    }
    img:hover {
        box-shadow: 8px 8px 0 0 yellow;
    }
</style>