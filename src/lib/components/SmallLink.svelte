<script lang="ts">
    // Imports
    import { typewriter } from '$lib/actions/typewriter';

    // URL, link text
    let { href, text } = $props();
</script>

<a {href} class="underline cursor-pointer" use:typewriter={text} aria-label="Small link"></a>