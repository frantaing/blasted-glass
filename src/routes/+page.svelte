<!-- src/routes/+page.svelte -->
<!-- Homepage index -->

<script lang="ts">
    import { base } from '$app/paths';
</script>

<div class="flex flex-col gap-7 w-screen max-w-sm h-screen max-h-80 text-left">
	<!-- heading -->
    <h1 class="type-me">hi, welcome to my sandbox!</h1>
    <!-- bottom text -->
    <div class="flex flex-col gap-5">
        <!-- description -->
        <p class="type-me">this is where i stash reject (but still cool) stuff i made. you can find all sort of ui elements from buttons to full on layouts.</p>
        <!-- navigation -->
        <nav class="flex flex-col gap-2">
        <!-- NOTE: Added empty href attributes for valid HTML -->
        <a href="{base}/layouts" class="group navlink type-me">
            <img src="{base}/assets/arrow.png" alt="link hover arrow icon" class="hidden w-6 h-5 group-hover:block"/>link
        </a>
        </nav>
    </div>
    <!-- github -->
    <a href="#" class="text-sm hover:underline type-me">@frantaing</a>
</div>