<!-- Homepage index -->

<script lang="ts">
    // Imports
    import { typewriter } from '$lib/actions/typewriter';
    import NavLink from '$lib/components/NavLink.svelte';
    import RepoLink from '$lib/components/RepoLink.svelte';
</script>

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
        <div class="flex justify-between gap-1">
            <NavLink 
                href="https://frantaing.github.io/monstercat-page-recreate/" 
                text="MONSTERCAT ALBUM PAGE" 
            />
            <RepoLink 
                href="https://github.com/frantaing/monstercat-page-recreate" 
            />
        </div>
        <div class="flex justify-between gap-1">
            <NavLink 
                href="https://frantaing.github.io/monogram-shop-recreate/" 
                text="MONOGRAM SHOP PAGE" 
            />
            <RepoLink 
                href="https://github.com/frantaing/monogram-shop-recreate" 
            />
        </div>
        <div class="flex justify-between gap-1">
            <NavLink 
                href="https://frantaing.github.io/backstagetalks-recreate/" 
                text="BACKSTAGE TALKS MAGAZINE" 
            />
            <RepoLink 
                href="https://github.com/frantaing/backstagetalks-recreate" 
            />
        </div>
        <div class="flex justify-between gap-1">
            <NavLink 
                href="https://frantaing.github.io/ableton-home-page/" 
                text="ABLETON HOME PAGE" 
            />
            <RepoLink 
                href="https://github.com/frantaing/ableton-home-page" 
            />
        </div>
        <div class="flex justify-between gap-1">
            <NavLink 
                href="https://frantaing.github.io/abstract-help-page" 
                text="ABTRACT HELP PAGE" 
            />
            <RepoLink 
                href="https://github.com/frantaing/abstract-help-page" 
            />
        </div>
    </nav>
    <a href="/" class="group navlink flex items-center gap-0.5 hover:bg-white">
        <span class="type-me mr-1 text-sm font-black group-hover:hidden" use:typewriter={'//'}></span>
        <img src="/assets/arrow.png" alt="link hover arrow icon" class="hidden w-4 h-3 group-hover:block"/>
        <span class="group type-me flex items-center text-sm group-hover:text-black" use:typewriter={'GO BACK'}></span>
    </a>
</section>