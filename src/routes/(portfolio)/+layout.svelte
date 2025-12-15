<!-- The layout for indexes -->

<script lang="ts">
  import '../../app.css';

  // Import logic for typewriter navigation
  import { beforeNavigate, goto } from '$app/navigation';
  import { untypeAll } from '$lib/actions/typewriter';
	
  let { children } = $props();
  
  // Flag to track if typewriter animating is running
  let isNavigating = false;

  beforeNavigate(async ({ to, cancel }) => {
    // If 'to'=null OR if navigation is happening, STOP!
    if (!to || isNavigating) return;

    // Set flag to 'true'
    isNavigating = true;
    cancel();
    await untypeAll();

    // Navigate now!
    await goto(to.url);
    
    // Reset the flag in case nagivation oopsies
    isNavigating = false;
  });
</script>

<div class="relative w-screen min-h-screen">
  <!-- Background image -->
  <img src="/backgrounds/background.gif" alt="non-stretching background" class="absolute z-0 inset-0 w-full h-full object-cover bg-center bg-no-repeat bg-black"/>
  
  <!-- Background overlay -->
  <div class="animate-overlay-on-load z-10 flex justify-center items-center w-full absolute inset-0 p-10 font-general text-white bg-black/90">
    {@render children()}
  </div>
</div>