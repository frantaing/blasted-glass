<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let container: HTMLElement | undefined = $state();
	let mouseX = $state(0);
	let mouseY = $state(0);
    let isBlinking = $state(false);
    let blinkTimeout: ReturnType<typeof setTimeout>;

	// how much the eyes can move (in pixels)
	const MOVEMENT_RANGE = 15;

	function handleMouseMove(e: MouseEvent) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	}

    // --- BLINKING LOGIC ---
    function triggerBlink() {
        isBlinking = true;
        // time eyes are closed
        setTimeout(() => {
            isBlinking = false;
            scheduleNextBlink();
        }, 150); // <-- change here
    }

    function scheduleNextBlink() {
        // blink randomly between 2 and 6 seconds
        const randomDelay = Math.random() * 4000 + 2000;
        blinkTimeout = setTimeout(triggerBlink, randomDelay);
    }

    onMount(() => {
        scheduleNextBlink();
    });

    onDestroy(() => {
        clearTimeout(blinkTimeout);
    });
    // ----------------------

	// calc pupil offset
	let pupilTransform = $derived.by(() => {
		if (!container) return 'translate(0px, 0px)';

		// get the bounding box of the face container to find the ce
        // if blinking, squash the eye flat (scaleY 0.1)
        // keep the translation so the eye blinks "where it is looking"
        const blinkScale = isBlinking ? 'scaleY(0.1)' : 'scaleY(1)';

		const rect = container.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		const deltaX = mouseX - centerX;
		const deltaY = mouseY - centerY;

		const angle = Math.atan2(deltaY, deltaX);
		// limit the distance so the pupil stays inside the eye
		const distance = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), 100); // damper
		
		const moveX = Math.cos(angle) * Math.min(distance / 20, MOVEMENT_RANGE);
		const moveY = Math.sin(angle) * Math.min(distance / 20, MOVEMENT_RANGE);

		return `translate(${moveX}px, ${moveY}px) ${blinkScale}`;
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
	<div class="eye-column">
        <span class="eyebrow left-brow">◠</span>
        <span class="eye-socket">
            <span class="bracket">(</span>
            <span class="pupil-bounds">
                <!-- class:blinking for mobile CSS override -->
                <span 
                    class="pupil" 
                    class:blinking={isBlinking} 
                    style:transform={pupilTransform}
                >◉</span>
            </span>
            <span class="bracket"></span>
        </span>
    </div>

    <!-- nose -->
    <span class="nose self-end">o</span>

	<!-- right eye -->
	<div class="eye-column">
        <span class="eyebrow right-brow">◠</span>
        <span class="eye-socket">
            <span class="bracket"></span>
            <span class="pupil-bounds">
                <span 
                    class="pupil" 
                    class:blinking={isBlinking} 
                    style:transform={pupilTransform}
                >◉</span>
            </span>
            <span class="bracket">)</span>
        </span>
    </div>
</div>

<style>
	.face-container {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		gap: 0.5rem;
		font-family: monospace; 
		font-size: 1rem; /* BIG EYES */
		line-height: 1;
		font-weight: bold;
		padding-bottom: 1rem;
        cursor: default;
        user-select: none;
	}
	.eye-column {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1px; /* space between eyebrows and eyes */
    }
    .eyebrow {
        font-size: 1.5rem;
        line-height: 0.5;
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
        /* added transition for transform to make the blink look snappy but smooth */
		transition: transform 0.1s ease-out; 
        color: black;
        font-size: 3rem;
        /* make sure transform origin is center so it squashes to the middle */
        transform-origin: center center;
	}
    .nose {
        position: relative;
        bottom: 5px;
    }

	/* 
       MOBILE RULES
    */
	@media (max-width: 640px) {
        /* standard looking down state */
		.pupil {
			transform: translate(-3px, 10px) !important; 
		}
        
        /* 
            BLINKING RULE!
            for mobile else !important rule for looking down will stop blinking
        */
        .pupil.blinking {
            transform: translate(-3px, 10px) scaleY(0.1) !important;
        }
	}
</style>