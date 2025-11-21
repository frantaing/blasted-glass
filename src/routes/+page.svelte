<!-- src/routes/+page.svelte -->
<!-- Homepage index -->

<script lang="ts">
    import { base } from '$app/paths';
</script>

<div class="flex flex-col gap-7 w-screen max-w-sm h-screen max-h-80 text-left">
	<!-- Heading & Description -->
    <section>
        <h1 class="type-me">hi, welcome to my sandbox!</h1>        
        <p class="type-me">this is where i stash reject (but still cool) stuff i made. you can find all sort of ui elements from buttons to full on layouts.</p>    
    </section>
    <!-- Navigation -->
    <section class="flex flex-col gap-5">
        <nav class="flex flex-col gap-2">
        <a href="{base}/layouts" class="group navlink type-me">
            <img src="{base}/assets/arrow.png" alt="link hover arrow icon" class="hidden w-6 h-5 group-hover:block"/>layouts
        </a>
        </nav>
    </section>
    <!-- github -->
    <a href="{base}/" class="mt-10 text-sm hover:underline type-me">@frantaing</a>
</div>