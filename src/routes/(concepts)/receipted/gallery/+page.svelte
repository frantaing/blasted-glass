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
		<div class="grid justify-items-center gap-2.5 w-fit sm:grid-cols-2">
			<div class="gallery_item">
				<img src="/receipted/receipts/receipt-1.jpg" />
			</div>
			<div class="gallery_item">
				<img src="/receipted/receipts/receipt-2.jpg" />
			</div>
			<div class="gallery_item">
				<img src="/receipted/receipts/receipt-3.jpg" />
			</div>
			<div class="gallery_item">
				<img src="/receipted/receipts/receipt-4.jpg" />
			</div>
			<div class="gallery_item">
				<img src="/receipted/receipts/receipt-5.jpg" />
			</div>
			<div class="gallery_item">
				<img src="/receipted/receipts/receipt-6.png" />
			</div>
			<div class="gallery_item">
				<img src="/receipted/receipts/receipt-7.jpg" />
			</div>
			<div class="gallery_item">
				<img src="/receipted/receipts/receipt-8.webp" />
			</div>
			<div class="gallery_item">
				<img src="/receipted/receipts/receipt-9.png" />
			</div>
		</div>
	</section>

	<!-- line -->
	<hr />
</div>

<style>
    /* temporary styles until component */
	img {
		display: block;
		margin: 10px;
		width: 200px;
		height: auto;
		border: 1px solid black;
		padding: 10px;

		box-shadow: 6px 6px 0 0 rgb(63, 63, 63, 0.3);
		transition: box-shadow 0.2s ease-in;
	}
	img:hover {
		box-shadow: 10px 10px 0 0 yellow;
	}
</style>
