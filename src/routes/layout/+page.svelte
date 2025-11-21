<!-- src/routes/+page.svelte -->
<!-- Layouts index -->

<script lang="ts">
	import Typewriter from '$lib/components/Typewriter.svelte';

	// --- Text Content ---
	const headingText = "you're in LAYOUTS";
	const linkText = "link";
	const githubText = "@frantaing";

	// --- Animation Timing ---
	const typingSpeed = 30; // ms
	const delayBetweenElements = 200; // ms

	const delay1 = 1700; // Initial "power on" delay
	const delay2 = delay1 + headingText.length * typingSpeed + delayBetweenElements;
	const delay3 = delay2 + headingText.length * typingSpeed + delayBetweenElements;
	const delay4 = delay3 + linkText.length * typingSpeed + delayBetweenElements;
	const delay5 = delay4 + linkText.length * typingSpeed + delayBetweenElements;
	const delay6 = delay5 + linkText.length * typingSpeed + delayBetweenElements;
</script>

<!-- main content -->
<section class="flex flex-col gap-7 w-screen max-w-md h-screen max-h-80 text-left">
	<!-- heading -->
	<h1>
		<Typewriter text={headingText} speed={typingSpeed} delay={delay1} />
	</h1>
	<!-- bottom text -->
	<div class="flex flex-col gap-5">
		<!-- description -->
		<!-- navigation -->
		<nav class="flex flex-col gap-2">
			<a href="/" class="group navlink">
				<img src="/assets/arrow.png" alt="link hover arrow icon" class="hidden w-6 h-5 group-hover:block"/>
				<Typewriter text={linkText} speed={typingSpeed} delay={delay2} />
			</a>
			<a href="/" class="group navlink">
				<img src="/assets/arrow.png" alt="link hover arrow icon" class="hidden w-6 h-5 group-hover:block"/>
				<Typewriter text={linkText} speed={typingSpeed} delay={delay3} />
			</a>
			<a href="/" class="group navlink">
				<img src="/assets/arrow.png" alt="link hover arrow icon" class="hidden w-6 h-5 group-hover:block"/>
				<Typewriter text={linkText} speed={typingSpeed} delay={delay4} />
			</a>
		</nav>
	</div>
	<!-- github -->
	<a href="/" class="text-sm hover:underline">
		<Typewriter text={githubText} speed={typingSpeed} delay={delay5} keepCursor={true} />
	</a>
</section>