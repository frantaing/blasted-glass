<script lang="ts">
    let { children } = $props();
</script>

<main class="untitled-theme">
    <div class="flex flex-col justify-center items-center gap-8 mx-10 w-full border-2 border-gray-500 sm:max-w-3xl">
        <section class="w-full text-center bg-red-200">
            all-watching eye here...
        </section>
        <section class="flex flex-col justify-between gap-5 w-full sm:flex-row">
            <div class="sm:w-40 md:w-3xs">
                <a href="#" class="text-[#0000EE] underline">hello</a>
            </div>
            <div class="w-full bg-amber-200">
                {@render children()}       
            </div>
        </section>   
    </div>
</main>

<style>
    .untitled-theme {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-color: white;
        font-family: serif;
    }
</style>