<!-- src/routes/+page.svelte -->
<!-- Homepage index -->

<script lang="ts">
    import { typewriter } from '$lib/actions/typewriter';
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
        <a href="/designs" class="group navlink flex items-center gap-1 hover:bg-white">
            <span class="type-me mr-1 text-xl font-black group-hover:hidden" use:typewriter={'//'}></span>
            <img src="/assets/arrow.png" alt="link hover arrow icon" class="hidden w-6 h-5 group-hover:block"/>
            <span class="group type-me flex items-center group-hover:text-black" use:typewriter={'DUMMY LINK'}></span>
        </a>
    </nav>
    <a href="/" class="group navlink flex items-center gap-0.5 hover:bg-white">
        <span class="type-me mr-1 text-sm font-black group-hover:hidden" use:typewriter={'//'}></span>
        <img src="/assets/arrow.png" alt="link hover arrow icon" class="hidden w-4 h-3 group-hover:block"/>
        <span class="group type-me flex items-center text-sm group-hover:text-black" use:typewriter={'GO BACK'}></span>
    </a>
</section>