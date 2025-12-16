<!-- title -->
<svelte:head>
    <title>concept: receipted</title>
</svelte:head>

<!-- HTML -->
<div>
    <!-- intro (make its own component?) -->
    <div class="intro">
        <!-- heading -->
        <h1>Welcome to the Receipt Archive!</h1>
        <!-- description -->
        <p>
            This is a passion project where
            I collect receipts from various
            purchases I've made. 
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam nisl, vulputate ac tincidunt et, ultricies non massa. Vestibulum lacinia odio purus, a congue lacus rhoncus vitae. Sed vitae ex eget elit lacinia facilisis. Curabitur ac risus non quam cursus condimentum. Mauris vitae elit et nulla maximus dapibus at sed est. Proin tempus enim ut orci porta ullamcorper. Sed sem eros, sollicitudin tincidunt nunc ut, scelerisque sollicitudin nibh.
        </p>
    </div>

    <!-- maybe change this to padding instead? -->
    <br><br>
    <!-- line -->
    <hr />
    <br><br>

    <!-- latest perchases (main content) -->
    <div class="restofcont">

        <!-- title -->
        <h1>Latest Purchases</h1>
        
        
        <!-- !!![add a div container for each receipt item]!!! -->
        <!-- first image -->
        <div class="imgpad">
            <!-- Ensure images are in /static/receipts/ -->
            <img src="receipted/receipts/receipt-1.jpg" alt="Receipt 1">
        </div>
        
        <br>
        
        <!-- receipt title -->
        <h3>Receipt 1</h3>
        
        <br>
            
        <!-- receipt description -->
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam nisl, vulputate ac tincidunt et, ultricies non massa. Vestibulum lacinia odio purus, a congue lacus rhoncus vitae. Sed vitae ex eget elit lacinia facilisis. Curabitur ac risus non quam cursus condimentum. Mauris vitae elit et nulla maximus dapibus at sed est. Proin tempus enim ut orci porta ullamcorper. Sed sem eros, sollicitudin tincidunt nunc ut, scelerisque sollicitudin nibh.</p>
        
        <!-- BREAK! -->
        <br><br><br>

        <!-- receipt item... -->
        <div class="imgpad">
            <img src="receipted/receipts/receipt-2.jpg" alt="Receipt 2">
        </div>
        <br>
        <h3>Receipt 2</h3>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam nisl, vulputate ac tincidunt et, ultricies non massa. Vestibulum lacinia odio purus, a congue lacus rhoncus vitae. Sed vitae ex eget elit lacinia facilisis. Curabitur ac risus non quam cursus condimentum. Mauris vitae elit et nulla maximus dapibus at sed est. Proin tempus enim ut orci porta ullamcorper. Sed sem eros, sollicitudin tincidunt nunc ut, scelerisque sollicitudin nibh.</p>

        <!-- BREAK! -->
        <br><br><br>

        <!-- receipt item... -->
        <div class="imgpad">
            <img src="receipted/receipts/receipt-3.jpg" alt="Receipt 3">
        </div>
        <br>
        <h3>Receipt 3</h3>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam nisl, vulputate ac tincidunt et, ultricies non massa. Vestibulum lacinia odio purus, a congue lacus rhoncus vitae. Sed vitae ex eget elit lacinia facilisis. Curabitur ac risus non quam cursus condimentum. Mauris vitae elit et nulla maximus dapibus at sed est. Proin tempus enim ut orci porta ullamcorper. Sed sem eros, sollicitudin tincidunt nunc ut, scelerisque sollicitudin nibh.</p>
    </div>

    <!-- BREAK! -->
    <br><br><br>
    <!-- line -->
    <hr />
    <br>
</div>

<!-- gut this for tailwind... -->
<style>
    .intro{
        padding: 10px 0;
    }
</style>