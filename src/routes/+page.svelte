<!-- src/routes/+page.svelte -->
<!-- Homepage index -->

<script lang="ts">
	import { typewriter } from '$lib/actions/typewriter'; // Apply Typewriter animation
</script>

<div class="flex flex-col gap-7 w-screen max-w-sm h-screen max-h-80 text-left">
	<!-- Heading & Description -->
    <section class="flex flex-col gap-2">
        <h1 use:typewriter={'hi, welcome to my sandbox!'}>.</h1>
		<p use:typewriter={'this is where i stash reject (but still cool) stuff i made. you can find all sort of ui elements from buttons to full on layouts.'}></p>
    </section>
    <!-- navigation -->
    <nav class="flex flex-col gap-2 pl-2 border-l-2">
        <a href="/" class="group navlink">
            <img src="/assets/arrow.png" alt="Link hover arrow icon" class="hidden w-6 h-5 group-hover:block"/>
            <span use:typewriter={'layouts'}></span>
        </a>
    </nav>
    <!-- github -->
    <a href="https://github.com/frantaing/blasted-glass" class="text-sm hover:underline" use:typewriter={'@frantaing'} aria-label="blasted-glass Github repo"></a>
</div>