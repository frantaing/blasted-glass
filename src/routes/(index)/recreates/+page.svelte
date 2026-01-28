<script lang="ts">
    // Imports
    import { typewriter } from '$lib/actions/typewriter';
    import NavLink from '$lib/components/NavLink.svelte';
    import RepoLink from '$lib/components/RepoLink.svelte';
    import SmallLink from '$lib/components/SmallLink.svelte';
</script>

<!-- Heading & Description -->
<section>
    <h1 use:typewriter={"you're on: RECREATES"}>.</h1>
    <div class="flex flex-col gap-3">
        <p>
            <span use:typewriter={"these are recreations of certain websites. the ones grouped below are specific challenges from "}></span>
            <SmallLink href="https://www.frontendpractice.com/" text="frontend practice." />
        </p>
    </div>
</section>
<!-- Navigation -->
<section class="flex flex-col gap-5">

    <!-- Frontend Mentor recreates -->
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

    <nav class="flex flex-col">
        <div class="flex justify-between gap-1">
            <NavLink 
                href="/gemini" 
                text="GEMINI HOME PAGE" 
            />
            <RepoLink 
                href="#" 
            />
        </div>
    </nav>

    <!-- Go back -->
    <div class="w-fit mt-10">
        <SmallLink href="/" text="GO BACK" />
    </div>
</section>