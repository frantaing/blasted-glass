<!-- src/routes/+page.svelte -->
<!-- Homepage index -->

<script lang="ts">
    import { typewriter } from '$lib/actions/typewriter';
</script>

<div class="flex flex-col gap-7 w-screen max-w-sm h-screen max-h-80 text-left">
	<!-- Heading & Description -->
    <section>
        <h1 use:typewriter={"you're on: RECREATES"}>.</h1>
        <div class="flex flex-col gap-3">
            <p use:typewriter={"these are recreations of certain websites. the ones grouped below are specific challenges from 'frontend practice'."}></p>    
        </div>   
    </section>
    <!-- Navigation -->
    <section class="flex flex-col gap-5">
        <nav class="flex flex-col">
            <h2 use:typewriter={"frontend mentor"}>.</h2>
            <a href="https://frantaing.github.io/monstercat-page-recreate/" class="group navlink flex items-center gap-1 hover:bg-white">
                <span class="type-me mr-1 text-xl font-black group-hover:hidden" use:typewriter={'//'}></span>
                <img src="/assets/arrow.png" alt="link hover arrow icon" class="hidden w-6 h-5 group-hover:block"/>
                <span class="group type-me flex items-center group-hover:text-black" use:typewriter={'MONSTERCAT ALBUM PAGE'}></span>
            </a>
            <a href="https://frantaing.github.io/monogram-shop-recreate/" class="group navlink flex items-center gap-1 hover:bg-white">
                <span class="type-me mr-1 text-xl font-black group-hover:hidden" use:typewriter={'//'}></span>
                <img src="/assets/arrow.png" alt="link hover arrow icon" class="hidden w-6 h-5 group-hover:block"/>
                <span class="group type-me flex items-center group-hover:text-black" use:typewriter={'MONOGRAM SHOP PAGE'}></span>
            </a>
            <a href="https://frantaing.github.io/backstagetalks-recreate/" class="group navlink flex items-center gap-1 hover:bg-white">
                <span class="type-me mr-1 text-xl font-black group-hover:hidden" use:typewriter={'//'}></span>
                <img src="/assets/arrow.png" alt="link hover arrow icon" class="hidden w-6 h-5 group-hover:block"/>
                <span class="group type-me flex items-center group-hover:text-black" use:typewriter={'BACKSTAGETALKS MAGAZINE'}></span>
            </a>
            <a href="https://frantaing.github.io/ableton-home-page/" class="group navlink flex items-center gap-1 hover:bg-white">
                <span class="type-me mr-1 text-xl font-black group-hover:hidden" use:typewriter={'//'}></span>
                <img src="/assets/arrow.png" alt="link hover arrow icon" class="hidden w-6 h-5 group-hover:block"/>
                <span class="group type-me flex items-center group-hover:text-black" use:typewriter={'ABLETON HOME PAGE'}></span>
            </a>
            <a href="https://frantaing.github.io/abstract-help-page/" class="group navlink flex items-center gap-1 hover:bg-white">
                <span class="type-me mr-1 text-xl font-black group-hover:hidden" use:typewriter={'//'}></span>
                <img src="/assets/arrow.png" alt="link hover arrow icon" class="hidden w-6 h-5 group-hover:block"/>
                <span class="group type-me flex items-center group-hover:text-black" use:typewriter={'ABTRACT HELP PAGE'}></span>
            </a>
        </nav>
        <a href="/" class="group navlink flex items-center gap-0.5 hover:bg-white">
            <span class="type-me mr-1 text-sm font-black group-hover:hidden" use:typewriter={'//'}></span>
            <img src="/assets/arrow.png" alt="link hover arrow icon" class="hidden w-4 h-3 group-hover:block"/>
            <span class="group type-me flex items-center text-sm group-hover:text-black" use:typewriter={'GO BACK'}></span>
        </a>
    </section>
</div>