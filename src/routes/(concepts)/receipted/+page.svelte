<!-- src/routes/(concepts)/receipted/+page.svelte -->

<svelte:head>
    <title>receipted</title>
</svelte:head>

<div class="navbar">
    <!-- Updated link to point to this page's route -->
    <a href="/receipted">RECEIPTED</a>
    <div class="rightnav">
        <a href="#">gallery</a> 
        <a href="#">about</a>
    </div>
</div>

<div class="main">

    <div class="intro">
        <h1>Welcome to the Receipt Archive!</h1>
        <p>
            This is a passion project where
            I collect receipts from various
            purchases I've made. 
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam nisl, vulputate ac tincidunt et, ultricies non massa. Vestibulum lacinia odio purus, a congue lacus rhoncus vitae. Sed vitae ex eget elit lacinia facilisis. Curabitur ac risus non quam cursus condimentum. Mauris vitae elit et nulla maximus dapibus at sed est. Proin tempus enim ut orci porta ullamcorper. Sed sem eros, sollicitudin tincidunt nunc ut, scelerisque sollicitudin nibh.
        </p>
    </div>

    <br><br>
    <hr />
    <br><br>

    <div class="restofcont">

        <h1>Latest Purchases</h1>
        
            <div class="imgpad">
                <!-- Ensure images are in /static/receipts/ -->
                <img src="receipted/receipts/receipt-1.jpg" alt="Receipt 1">
            </div>
        <br>
        <h3>Receipt 1</h3>
        <br>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam nisl, vulputate ac tincidunt et, ultricies non massa. Vestibulum lacinia odio purus, a congue lacus rhoncus vitae. Sed vitae ex eget elit lacinia facilisis. Curabitur ac risus non quam cursus condimentum. Mauris vitae elit et nulla maximus dapibus at sed est. Proin tempus enim ut orci porta ullamcorper. Sed sem eros, sollicitudin tincidunt nunc ut, scelerisque sollicitudin nibh.
        </p>

        <br><br><br>

            <div class="imgpad">
                <img src="receipted/receipts/receipt-2.jpg" alt="Receipt 2">
            </div>
        <br>
        <h3>Receipt 2</h3>
        <br>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam nisl, vulputate ac tincidunt et, ultricies non massa. Vestibulum lacinia odio purus, a congue lacus rhoncus vitae. Sed vitae ex eget elit lacinia facilisis. Curabitur ac risus non quam cursus condimentum. Mauris vitae elit et nulla maximus dapibus at sed est. Proin tempus enim ut orci porta ullamcorper. Sed sem eros, sollicitudin tincidunt nunc ut, scelerisque sollicitudin nibh.
        </p>

        <br><br><br>

            <div class="imgpad">
                <img src="receipted/receipts/receipt-3.jpg" alt="Receipt 3">
            </div>
        <br>
        <h3>Receipt 3</h3>
        <br>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam nisl, vulputate ac tincidunt et, ultricies non massa. Vestibulum lacinia odio purus, a congue lacus rhoncus vitae. Sed vitae ex eget elit lacinia facilisis. Curabitur ac risus non quam cursus condimentum. Mauris vitae elit et nulla maximus dapibus at sed est. Proin tempus enim ut orci porta ullamcorper. Sed sem eros, sollicitudin tincidunt nunc ut, scelerisque sollicitudin nibh.
        </p>
    </div>

    <br><br><br>
    <hr />
    <br>

</div>

<div class="footnote">
    <p> <!-- Update this i guess -->
        F.B.T. @2025
    </p>
</div>

<style>
    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }
    *::-webkit-scrollbar{
        display:none;
    }
    .navbar{
        display:flex;
        justify-content:space-between;
        position:fixed;
        left:0;
        top:0;
        width:100%;
    
        background-color:black;
        color:white;
        font-family:monospace;
        font-weight:bold;
        font-size:17px;
        padding: 20px 33%;
    }
    .rightnav{
        float:right;
    }
    .navbar a{
        text-decoration: none;
        color:white;
        text-align:center;
        margin: 0 10px;
    
        box-shadow: inset 0 -1px 0 0 yellow;
        transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    }
    .navbar a:hover{
        color:black;
        box-shadow: inset 0 -100px 0 0 yellow;
    }
    .navbar a:focus{
        color:black;
        box-shadow: inset 0 -100px 0 0 yellow;
    }
    .main{
        margin: 0 34%;
        margin-top:100px;
    
        font-family:monospace;
        font-size: 16px;
        text-align:justify;
    }
    .intro{
        padding: 10px 0;
    }
    img{
        display:block;
        margin: 0 auto;
        width:300px;
        height:450px;
        border: 1px solid black;
        padding: 10px;
    
        box-shadow: 6px 6px 0 0 rgb(63, 63, 63, 0.3);
        transition: box-shadow .2s ease-in;
    }
    img:hover{
        box-shadow: 10px 10px 0 0 yellow;
    }
    h1{
        text-align: center;
        font-weight:900;  
        padding-bottom: 40px;
    }
    h3{
        text-align:center;
        font-style: italic;
    }
    .footnote{
        font-family: monospace;
        font-size: 10px;
        font-style: italic;
        font-weight: bolder;
        text-align:center;
        padding-bottom: 20px;
    }
    
    /*small screens*/
    @media only screen and (max-width:1100px){
        .navbar{
            padding: 20px 10rem;
        }
        .main{
            margin: 0 10rem;
            margin-top:100px;
        }
    }
    @media only screen and (max-width:800px){
        .navbar{
            padding: 20px 4rem;
        }
        .main{
            margin: 0 5rem;
            margin-top:100px;
        }
    }
</style>