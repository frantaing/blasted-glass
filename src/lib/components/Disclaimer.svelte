<script lang="ts">
    // Imports
    import { slide } from 'svelte/transition';
    import { typewriter } from '$lib/actions/typewriter';

    let isOpen = $state(false);
</script>

<div class="mt-4 w-full max-w-xl">
    
    <!-- Button -->
    <button 
        onclick={() => isOpen = !isOpen}
        class="group flex items-center gap-2 text-sm font-bold text-white/70 hover:text-white transition-colors uppercase"
    >
        <!-- [ + ] Button -->
        <span class="text-yellow-500 flex gap-px">
            <span use:typewriter={'['}></span>
            <span use:typewriter={isOpen ? '-' : '+'}></span>
            <span use:typewriter={']'}></span>
        </span>

        <!-- Label -->
        <span use:typewriter={'RECREATION DISCLAIMER'}></span>
    </button>

    <!-- Content Area (NOT TYPED) -->
    {#if isOpen}
        <div transition:slide={{ duration: 300 }} class="overflow-hidden">
            <p class="mt-2 text-sm leading-relaxed text-justify">
                This is a personal, non-commercial project created for educational and recreational purposes only. All text content, links, and branding elements in this project are copied from the original websites for practice purposes. All images, icons, and other media are sourced from free-to-use platforms (e.g., Unsplash, Boxicons) or replaced with placeholders. This project is not affiliated with, endorsed, sponsored, or specifically approved by the original sites. All original code in this repository is licensed under the 
                <!-- Link inside the paragraph -->
                <a 
                    href="https://github.com/frantaing/blasted-glass/blob/main/LICENSE" 
                    target="_blank"
                    class="underline hover:text-white transition-colors"
                >
                    MIT License.
                </a>
            </p>
        </div>
    {/if}
    
</div>