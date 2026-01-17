<!-- The layout for indexes -->

<script lang="ts">
  // Import: Taiwind
  import '../../app.css';

  // Import: typewriter
  import { beforeNavigate, goto } from '$app/navigation';
  import { untypeAll } from '$lib/actions/typewriter';
  import { onMount } from 'svelte';
	
  let { children } = $props();
  
  // Flag to track if typewriter animating is running
  let isNavigating = false;

  // References for index container measurements
  let measureContainer: HTMLDivElement;
  let visibleContainer: HTMLDivElement;
  let calculatedHeight = $state<number | null>(null);

  onMount(() => {
    // First render the measurement container to get height
    if (measureContainer) {
      // Wait a lil for the DOM to settle
      requestAnimationFrame(() => {
        if (measureContainer) {
          calculatedHeight = measureContainer.offsetHeight;
        }
      });
    }
  });
  
  beforeNavigate(async ({ to, cancel }) => {
    // if 'to'=null OR if navigation is happening, STOP!
    if (!to || isNavigating) return;

    // set flag to 'true'
    isNavigating = true;
    cancel();
    await untypeAll(); // play typewriter animation

    // check if the destination is external or internal
    if (to.url.origin === location.origin) {
        // INTERNAL: use sveltekit fast router
        await goto(to.url);
    } else {
        // EXTERNAL: use standard browser nav
        window.location.assign(to.url.href);
    }
    
    // reset the flag in case nagivation oopsies
    isNavigating = false;
  });
</script>

<div class="relative w-screen min-h-screen">
  <!-- Background image -->
  <img src="/backgrounds/background.gif" alt="non-stretching background" class="absolute z-0 inset-0 w-full h-full object-cover bg-center bg-no-repeat bg-black"/>
  
  <!-- Background overlay -->
  <div class="animate-overlay-on-load z-10 flex justify-center items-center w-full absolute inset-0 p-10 font-general text-white bg-black/90">
        <!-- HIDDEN: Used only for measuring final height! Renders with full text immediately -->
        <div 
          bind:this={measureContainer}
          class="flex flex-col gap-7 w-screen max-w-sm text-left"
          style="position: absolute; visibility: hidden; pointer-events: none;"
          aria-hidden="true"
          data-no-typewriter="true"
        >  
          {@render children()}
        </div>
        
        <!-- VISIBLE: The actual content with typewriter effect -->
        <div 
          bind:this={visibleContainer}
          class="flex flex-col gap-7 w-screen max-w-sm text-left"
          style:height={calculatedHeight ? `${calculatedHeight}px` : 'auto'}
        >  
          {@render children()}
        </div>
  </div>
</div>