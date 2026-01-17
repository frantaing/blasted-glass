// src/routes/(index)/+layout.svelte

<!-- The layout for indexes -->

<script lang="ts">
  // Import: Taiwind
  import '../../app.css';

  // Import: typewriter
  import { beforeNavigate, afterNavigate, goto } from '$app/navigation';
  import { untypeAll, measureContent } from '$lib/actions/typewriter';
	
  let { children } = $props();
  
  // Flag to track if typewriter animating is running
  let isNavigating = false;
  
  // References for index container measurements
  let contentContainer: HTMLDivElement;
  let calculatedHeight = $state<number | null>(null);

  afterNavigate(() => {
    // After navigation completes, measure the full content height
    setTimeout(() => {
      if (contentContainer) {
        const height = measureContent(contentContainer);
        calculatedHeight = height;
      }
    }, 50); // Small delay to ensure DOM is ready
  });

  beforeNavigate(async ({ to, cancel }) => {
    // If 'to'=null OR if navigation is happening, STOP!
    if (!to || isNavigating) return;

    // Set flag to 'true'
    isNavigating = true;
    cancel();
    await untypeAll(); // play typewriter animation

    // Check if the destination is external or internal
    if (to.url.origin === location.origin) {
        // INTERNAL: use sveltekit fast router
        await goto(to.url);
    } else {
        // EXTERNAL: use standard browser nav
        window.location.assign(to.url.href);
    }
    
    // Reset the flag in case navigation oopsies
    isNavigating = false;
  });
</script>

<div class="relative w-screen min-h-screen">
  <!-- Background image -->
  <img src="/backgrounds/background.gif" alt="non-stretching background" class="absolute z-0 inset-0 w-full h-full object-cover bg-center bg-no-repeat bg-black"/>
  
  <!-- Background overlay -->
  <div class="animate-overlay-on-load z-10 flex justify-center items-center w-full absolute inset-0 p-10 font-general text-white bg-black">
        <div 
          bind:this={contentContainer}
          class="flex flex-col gap-7 w-screen max-w-sm text-left"
          style:height={calculatedHeight ? `${calculatedHeight}px` : 'auto'}
        >  
          {@render children()}
        </div>
  </div>
</div>