<script lang="ts">
    // components
    import ReceiptEntry from '$lib/components/receipted/ReceiptEntry.svelte';
</script>

<!-- website title -->
<svelte:head>
    <title>concept: receipted</title>
</svelte:head>

<div class="flex flex-col gap-10">
    <!-- intro (make its own component?) -->
    <div class="py-2.5">
        <!-- heading -->
        <h1>Welcome to <span class="italic">RECEIPTED</span>!</h1>
        <!-- description -->
        <div class="flex flex-col gap-5">
            <p>This is a concept for a website where receipts could be scanned, uploaded, and stored. I had a phase where I was <span class="italic">obsessed</span> with collecting receipts. I started making this site, but never got further than a few pages as a concept. I liked it though, and it was one of the very first projects I've made when I first started getting into web development.</p>
        </div>
    </div>

    <!-- line -->
    <hr />

    <!-- latest perchases (main content) -->
    <div class="restofcont">
        <!-- title -->
        <h1>Latest Purchases</h1>
        <!-- latest receipts -->
        <div class="flex flex-col gap-20">
            <ReceiptEntry 
                src="receipted/receipts/receipt-1.jpg"
                title="Receipt 1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam nisl, vulputate ac tincidunt et, ultricies non massa. Vestibulum lacinia odio purus, a congue lacus rhoncus vitae. Sed vitae ex eget elit lacinia facilisis. Curabitur ac risus non quam cursus condimentum. Mauris vitae elit et nulla maximus dapibus at sed est. Proin tempus enim ut orci porta ullamcorper. Sed sem eros, sollicitudin tincidunt nunc ut, scelerisque sollicitudin nibh."
            />
            <ReceiptEntry 
                src="receipted/receipts/receipt-2.jpg"
                title="Receipt 2"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam nisl, vulputate ac tincidunt et, ultricies non massa. Vestibulum lacinia odio purus, a congue lacus rhoncus vitae. Sed vitae ex eget elit lacinia facilisis. Curabitur ac risus non quam cursus condimentum. Mauris vitae elit et nulla maximus dapibus at sed est. Proin tempus enim ut orci porta ullamcorper. Sed sem eros, sollicitudin tincidunt nunc ut, scelerisque sollicitudin nibh."
            />
            <ReceiptEntry 
                src="receipted/receipts/receipt-3.jpg"
                title="Receipt 3"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam nisl, vulputate ac tincidunt et, ultricies non massa. Vestibulum lacinia odio purus, a congue lacus rhoncus vitae. Sed vitae ex eget elit lacinia facilisis. Curabitur ac risus non quam cursus condimentum. Mauris vitae elit et nulla maximus dapibus at sed est. Proin tempus enim ut orci porta ullamcorper. Sed sem eros, sollicitudin tincidunt nunc ut, scelerisque sollicitudin nibh."
            />            
        </div>
    </div>

    <!-- line -->
    <hr />
    
</div>