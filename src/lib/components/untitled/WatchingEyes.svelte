<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	// lets-a-go
	let container: HTMLElement | undefined = $state();
	let mouseX = $state(0);
	let mouseY = $state(0);
    
    // state
    let isBlinking = $state(false);
    let isHoveringLink = $state(false); 
    
    // timers
    let blinkTimeout: ReturnType<typeof setTimeout>;
    let resetTimer: ReturnType<typeof setTimeout> | undefined;

	// how much the eyes can move (in pixels)
	const MOVEMENT_RANGE = 15;

	function handleMouseMove(e: MouseEvent) {
		mouseX = e.clientX;
		mouseY = e.clientY;

        // check if target is a link/button
        const target = e.target as HTMLElement;
        const isOver = !!target.closest('a, button'); 

        if (isOver) {
            // logic: if we are over a link, look surprised immediately
            // and cancel any pending "go back to normal" timer
            if (resetTimer) {
                clearTimeout(resetTimer);
                resetTimer = undefined;
            }
            isHoveringLink = true;
        } else {
            // logic: we are NOT over a link.
            // if we are currently surprised, wait a moment before resetting.
            // this prevents the "jitter" when moving between nav items.
            if (isHoveringLink && !resetTimer) {
                resetTimer = setTimeout(() => {
                    isHoveringLink = false;
                    resetTimer = undefined;
                }, 400); // <--- 400ms delay to bridge the gap between links
            }
        }
	}

    // --- BLINKING LOGIC ---
    function triggerBlink() {
        // don't blink if we are currently surprised (looks weird)
        if (isHoveringLink) {
             scheduleNextBlink();
             return;
        }

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
        clearTimeout(resetTimer);
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
    class:surprised={isHoveringLink}
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
    <!-- logic: if hovering link, use 'o', otherwise use 'ᴗ' -->
    <span class="nose self-end">
        {isHoveringLink ? 'o' : 'ᴗ'}
    </span>

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
        
        /* 
           FIXED HEIGHT: 
           reserve space so when eyebrows jump up, 
           the layout doesn't shift.
        */
        height: 80px; 
        box-sizing: border-box;
	}

	.eye-column {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1px; /* space between eyebrows and eyes */
        transition: gap 0.2s ease-out; /* Smooth transition for the jump */
    }

    /* 
        SURPRISED STATE 
        increase gap. because container aligns-items: flex-end,
        this pushes the eyebrows UP into the empty space.
    */
    .face-container.surprised .eye-column {
        gap: 10px;
    }

    .eyebrow {
        font-size: 1.5rem;
        line-height: 0.3;
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
        /* Ensure nose doesn't jump width when changing char */
        bottom: -12px;
        width: 1rem; 
        text-align: center;
        font-size: 1.5rem; /* Make the smile/mouth visible */
    }

	/* 
       MOBILE RULES
    */
	@media (max-width: 640px) {
	    /* make emoticon smaller */
    	.face-container {
       		font-size: 0.8rem;
            height: 40px;
            padding-bottom: 0;
    	}
        .eye-column {
            gap: 3px;
        }
    	.pupil-bounds {
    		width: 30px;
    		height: 30px;
    	}
    	.pupil {
            font-size: 2.5rem;
    	}
        .nose {
            font-size: 1rem;
            bottom: 0;
        }
        .eyebrow {
            line-height: 0;
        }
        
        /* standard looking down state */
		.pupil {
			transform: translate(0px, 0px) !important; 
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