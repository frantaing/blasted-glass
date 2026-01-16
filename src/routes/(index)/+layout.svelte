<!-- The layout for indexes -->

<script lang="ts">
  // taiwind
  import '../../app.css';

  // import typewriter
  import { beforeNavigate, goto } from '$app/navigation';
  import { untypeAll } from '$lib/actions/typewriter';
	
  let { children } = $props();
  
  // flag to track if typewriter animating is running
  let isNavigating = false;

  beforeNavigate(async ({ to, cancel }) => {
    // if 'to'=null OR if navigation is happening, STOP!
    if (!to || isNavigating) return;

    // set flag to 'true'
    isNavigating = true;
    cancel();
    await untypeAll(); // play typewriter animation

    // check if the destination is external or internal
    // location.origin is "https://blasted-glass/[x].com"
    // to.url.origin is "https://[x].com"
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
    {@render children()}
  </div>
</div>