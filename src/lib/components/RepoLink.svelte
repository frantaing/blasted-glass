<script lang="ts">
    // Imports
    import { typewriter } from '$lib/actions/typewriter';
    
    // URL
    let { href } = $props();
</script>

<a {href} class="group navlink-sec flex items-center gap-1 hover:bg-white">
    <!-- The separator -->
    <span class="type-me mr-1 text-xl font-black group-hover:hidden" use:typewriter={'|'}></span>
    <!-- The hover icon -->
    <img src="/assets/arrow.png" alt="link hover arrow icon" class="hidden w-6 h-5 group-hover:block"/>
    <!-- The text -->
    <span class="group type-me flex items-center group-hover:text-black" use:typewriter={'</>'}></span>
</a>