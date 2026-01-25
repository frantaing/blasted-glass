<!-- Homepage index -->

<script lang="ts">
    import { typewriter } from '$lib/actions/typewriter';
    import NavLink from '$lib/components/NavLink.svelte';
</script>

<!-- Heading & Description -->
<section>
    <h1 use:typewriter={"you're on: DESIGNS"}>.</h1>
    <div class="flex flex-col gap-3">
        <p use:typewriter={"i used to be really into graphic design (and still am!). usually, i made social media post templates, quotes, logos/headers, and the wireframes. i've aggregated them all here!"}></p>    
    </div>   
</section>
<!-- Navigation -->
<section class="flex flex-col gap-5">
    <nav class="flex flex-col">
        <h2 use:typewriter={"category"}>.</h2>
        
        <p class="italic" use:typewriter={"NOT YET SORRY!"} />
        
    </nav>
    <!-- Go back -->
    <a href="/" class="w-fit mt-10 text-sm hover:underline type-me" use:typewriter={'GO BACK'}>.</a>
</section>