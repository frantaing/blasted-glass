<!-- src/routes/+layout.svelte -->
<!-- The layout for indexes -->

<script lang="ts">
	import '../app.css';
  import { base } from '$app/paths';
	
  let { children } = $props();
</script>

<div class="relative w-screen min-h-screen">
  <!-- Background image -->
  <img src="{base}/backgrounds/background.gif" alt="non-stretching background" class="absolute z-0 inset-0 w-full h-full object-cover bg-center bg-no-repeat bg-black"/>
  
  <!-- Background overlay -->
  <div class="animate-overlay-on-load z-10 flex justify-center items-center w-full absolute inset-0 p-10 font-general text-white bg-black/90">
    {@render children()}
  </div>
</div>