<!-- src/routes/+page.svelte -->
<!-- Homepage index -->

<script lang="ts">
    import { base } from '$app/paths';
</script>

<div class="flex flex-col gap-7 w-screen max-w-sm h-screen max-h-80 text-left">
	<!-- Heading & Description -->
    <section>
        <h1 class="type-me">you're in LAYOUT</h1>        
        <p class="type-me">look at all these ??!</p>    
    </section>
    <!-- Navigation -->
    <section class="flex flex-col gap-10">
        <!-- Layout links -->
        <nav class="flex flex-col gap-2">
            <a href="{base}/layouts" class="group navlink type-me">
                <img src="{base}/assets/arrow.png" alt="link hover arrow icon" class="hidden w-6 h-5 group-hover:block"/>link
            </a>
            <a href="{base}/layouts" class="group navlink type-me">
                <img src="{base}/assets/arrow.png" alt="link hover arrow icon" class="hidden w-6 h-5 group-hover:block"/>link
            </a>
            <a href="{base}/layouts" class="group navlink type-me">
                <img src="{base}/assets/arrow.png" alt="link hover arrow icon" class="hidden w-6 h-5 group-hover:block"/>link
            </a>
        </nav>
        <!-- Go back! -->
        <a href="{base}/" class="group navlink type-me">
            <img src="{base}/assets/arrow.png" alt="link hover arrow icon" class="hidden w-6 h-5 group-hover:block"/>go home!
        </a>
    </section>
    <!-- github -->
    <a href="{base}/" class="mt-5 text-sm hover:underline type-me">@frantaing</a>
</div>