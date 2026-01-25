<!-- Homepage index -->

<script lang="ts">
    // Imports
    import { typewriter } from '$lib/actions/typewriter';
    import NavLink from '$lib/components/NavLink.svelte';
    import SmallLink from '$lib/components/SmallLink.svelte';
</script>

<!-- Heading & Description -->
<section>
    <h1 use:typewriter={"you're on: CONCEPTS"}>.</h1>
    <div class="flex flex-col gap-3">
        <p use:typewriter={"these are some little website concepts that i made!"}></p>    
    </div>   
</section>
<!-- Navigation -->
<section class="flex flex-col gap-5">
    <nav class="flex flex-col">
        <NavLink 
            href="/receipted" 
            text="RECEIPTED" 
        />
        <NavLink 
            href="/untitled" 
            text="UNTITLED" 
        />
    </nav>
    <!-- Go back -->
    <div class="w-fit mt-10">
        <SmallLink href="/" text="GO BACK" />
    </div>
</section>