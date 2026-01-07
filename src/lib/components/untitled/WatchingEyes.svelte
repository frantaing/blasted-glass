<script lang="ts">
	import { onMount } from 'svelte';

	let container: HTMLElement | undefined = $state();
	let mouseX = $state(0);
	let mouseY = $state(0);

	// how much the eyes can move (in pixels)
	const MOVEMENT_RANGE = 15;

	function handleMouseMove(e: MouseEvent) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	}

	// calc pupil offset
	let pupilTransform = $derived.by(() => {
		if (!container) return 'translate(0px, 0px)';

		// get the bounding box of the face container to find the center
		const rect = container.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		// calc distance from center
		const deltaX = mouseX - centerX;
		const deltaY = mouseY - centerY;

		// calc angle and distance
		const angle = Math.atan2(deltaY, deltaX);
		// limit the distance so the pupil stays inside the eye
		const distance = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), 100); // arbitrary damper
		
		// map distance to movement range (0 to MOVEMENT_RANGE)
		const moveX = Math.cos(angle) * Math.min(distance / 20, MOVEMENT_RANGE);
		const moveY = Math.sin(angle) * Math.min(distance / 20, MOVEMENT_RANGE);

		return `translate(${moveX}px, ${moveY}px)`;
	});
</script>

<svelte:window onmousemove={handleMouseMove} />

<!-- 
  make the face here...
-->
<!-- 
  'aria-hidden' because screen readers will try to read 
  this as text and it sounds terrible. use label instead
-->
<div 
    class="face-container" 
    bind:this={container} 
    role="img" 
    aria-label="A text face with eyes that follow you"
>
	<!-- left eye -->
	<span class="eye-socket">
		<span class="bracket">(</span>
		<span class="pupil-bounds">
			<span class="pupil" style:transform={pupilTransform}>◉</span>
		</span>
		<span class="bracket"></span>
	</span>

    <!-- nose -->
    <span class="nose">o</span>

	<!-- right eye -->
	<span class="eye-socket">
		<span class="bracket"></span>
		<span class="pupil-bounds">
			<span class="pupil" style:transform={pupilTransform}>◉</span>
		</span>
		<span class="bracket">)</span>
	</span>
</div>

<style>
	.face-container {
		display: flex;
		justify-content: center;
		align-items: end;
		gap: 0.5rem;
		font-family: monospace; /* monospace keeps the ASCII alignment neat */
		font-size: 1rem; /* BIG EYES */
		line-height: 1;
		font-weight: bold;
		padding-bottom: 1rem;
        cursor: default;
        user-select: none;
	}

	.eye-socket {
		display: inline-flex;
		align-items: center;
	}

	.pupil-bounds {
		display: inline-block;
		width: 45px; /* eye interior width */
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.pupil {
		display: inline-block;
		transition: transform 0.1s ease-out; /* smooths the jitter */
        color: black;
        font-size: 3rem;
	}
    
    .nose {
        position: relative;
        top: 10px;
    }

	/* 
       MOBILE
       when screen is small (sm), force eyes to look down 
    */
	@media (max-width: 640px) {
		.pupil {
			/* override above */
			transform: translate(-3px, 10px) !important; 
		}
	}
</style>