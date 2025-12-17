<script lang="ts">
    import ReceiptItemImage from './ReceiptItemImage.svelte';
    
    let { src, title, description } = $props();
</script>

<div class="flex flex-col gap-7">
    <ReceiptItemImage {src} alt={title} />
    <div class="flex flex-col gap-5">
        <h3 class="italic text-xl text-center">{title}</h3>
        <p class="text-justify">{description}</p>
    </div>
</div>