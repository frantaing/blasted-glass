<!-- src/routes/+page.svelte -->
<!-- Homepage index -->

<script lang="ts">
    import { typewriter } from '$lib/actions/typewriter';
</script>

<div class="flex flex-col gap-7 w-screen max-w-sm h-screen max-h-80 text-left">
	<!-- Heading & Description -->
    <section>
        <h1 use:typewriter={"you're: in CONCEPTS"}>.</h1>       
        <p use:typewriter={'look at all these chimkens!'}></p>   
    </section>
    <!-- Navigation -->
    <section class="flex flex-col gap-10">
        <!-- Concept links -->
        <nav class="flex flex-col gap-2">
            <a href="/receipted" class="group navlink flex items-center gap-1 hover:bg-white">
                <span class="type-me mr-1 text-xl font-black group-hover:hidden" use:typewriter={'//'}></span>
                <img src="/assets/arrow.png" alt="link hover arrow icon" class="hidden w-6 h-5 group-hover:block"/>
                <span class="group type-me flex items-center group-hover:text-black" use:typewriter={'RECEIPTED'}></span>
            </a>
        </nav>
        <!-- Go back! -->
        <a href="/" class="group navlink flex items-center gap-1 hover:bg-white">
            <span class="type-me mr-1 text-xl font-black group-hover:hidden" use:typewriter={'//'}></span>
            <img src="/assets/arrow.png" alt="link hover arrow icon" class="hidden w-6 h-5 group-hover:block"/>
            <span class="group type-me flex items-center group-hover:text-black" use:typewriter={'GO BACK?'}></span>
        </a>
    </section>
    <!-- github -->
    <a href="/" class="mt-5 text-sm hover:underline type-me" use:typewriter={'@frantaing'}>.</a>
</div>