<!-- Homepage index -->

<script lang="ts">
    import { typewriter } from '$lib/actions/typewriter';
    import NavLink from '$lib/components/NavLink.svelte';
    import SmallLink from '$lib/components/SmallLink.svelte';
</script>

<!-- Heading & Description -->
<section>
    <h1 use:typewriter={'hi, welcome to my sandbox!'}>.</h1>
    <div class="flex flex-col gap-3">
        <p use:typewriter={"this is my personal UI vault! it's my playground, where i can make random UI/website/concept/design ideas that pop into my head."}></p>    
        <p use:typewriter={"you can also find links to website recreation's i've made!"}></p>
    </div>   
</section>
<!-- Web Navigation -->
<section class="flex flex-col gap-5">
    <nav class="flex flex-col">
        <NavLink 
            href="/concepts" 
            text="CONCEPTS" 
        />
        <NavLink 
            href="/recreates" 
            text="RECREATES" 
        />
    </nav>
</section>
<!-- Design Navigation -->
<section class="flex flex-col gap-5">
    <div class="flex flex-col gap-3">
            <p use:typewriter={"i've also done some design stuff. check them out below!"}></p>    
    </div> 
    <nav class="flex flex-col">
        <NavLink 
            href="/designs" 
            text="DESIGNS" 
        />
    </nav>
</section>
<!-- github -->
<div class="w-fit mt-10">
    <SmallLink href="https://github.com/frantaing/blasted-glass" text="@frantaing" />
</div>