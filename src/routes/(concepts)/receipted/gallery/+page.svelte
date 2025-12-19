<script lang="ts">
    // components
    import ReceiptGalleryItem from '$lib/components/receipted/ReceiptGalleryItem.svelte';
</script>

<!-- page title -->
<svelte:head>
	<title>concept: receipted - gallery</title>
</svelte:head>

<div class="flex flex-col gap-10">
	<section class="py-2.5">
		<!-- heading -->
		<h1>The receipt gallery</h1>
		<!-- description -->
		<div class="flex flex-col gap-5">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptates rerum at
				voluptatibus fuga corrupti ipsum laudantium numquam id voluptatem expedita, necessitatibus
				animi ex aliquid cum aut ut perspiciatis magnam.
			</p>
		</div>
	</section>

	<!-- line -->
	<hr />

	<!-- gallery -->
	<section class="flex justify-center">
	    <!-- changed from 'grid' to 'columns' for that tiling/mosaic(?) look -->
        <div class="columns-2 gap-5 w-fit max-w-4xl mx-auto md:columns-3">   
            <ReceiptGalleryItem 
                src="/receipted/receipts/receipt-1.jpg"
                alt="Receipt item"
            />
            <ReceiptGalleryItem 
                src="/receipted/receipts/receipt-2.jpg"
                alt="Receipt item"
            />
            <ReceiptGalleryItem 
                src="/receipted/receipts/receipt-3.jpg"
                alt="Receipt item"
            />
            <ReceiptGalleryItem 
                src="/receipted/receipts/receipt-4.jpg"
                alt="Receipt item"
            />
            <ReceiptGalleryItem 
                src="/receipted/receipts/receipt-5.jpg"
                alt="Receipt item"
            />
            <ReceiptGalleryItem 
                src="/receipted/receipts/receipt-6.png"
                alt="Receipt item"
            />
            <ReceiptGalleryItem 
                src="/receipted/receipts/receipt-7.jpg"
                alt="Receipt item"
            />
            <ReceiptGalleryItem 
                src="/receipted/receipts/receipt-8.webp"
                alt="Receipt item"
            />
            <ReceiptGalleryItem 
                src="/receipted/receipts/receipt-9.png"
                alt="Receipt item"
            />
        </div>
    </section>

	<!-- line -->
	<hr />
</div>
