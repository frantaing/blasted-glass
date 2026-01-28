<script lang="ts">
    // Imports
</script>

<nav class="flex justify-center items-center w-full h-fit px-4 xs:px-10 md:px-12 pl-6 xs:pl-12 py-2.5 font-medium text-sm text-white bg-black">
    <div class="flex justify-between items-center w-full xl:max-w-304">
    <!-- Left: logo + title -->
    <section class="flex items-center gap-1">
        <img src="gemini/logo.png" alt="Logo" class="w-6.5 xs:w-5.5"/>
        <span class="hidden xs:block font-semibold mt-0.5">GEMINI</span>
    </section>

    <!-- DESLTOP: Middle: links -->
    <section class="hidden lg:flex justify-center items-center gap-5.5 pl-24">
        <a href="/gemini">Prices</a>
        <!-- All Products -->
        <button class="group">
            <!-- The button itself -->
            <div class="flex items-center">
                <span>All Products</span>
                <img src="/gemini/chevron-down.png" alt="Dropdown arrow" />
            </div>
            <!-- Dropdown content -->
            <div></div>
        </button>
        <!-- Institutions -->
        <button class="group">
            <!-- The button itself -->
            <div class="flex items-center">
                <span>Institutions</span>
                <img src="/gemini/chevron-down.png" alt="Dropdown arrow" />
            </div>
            <!-- Dropdown content -->
            <div></div>
        </button>
        <!-- Resources -->
        <button class="group">
            <!-- The button itself -->
            <div class="flex items-center">
                <span>Resources</span>
                <img src="/gemini/chevron-down.png" alt="Dropdown arrow" />
            </div>
            <!-- Dropdown content -->
            <div></div>
        </button>
    </section>

    <!-- Right: ('Sign in' + 'Get started' links) + Mobile menu button -->
    <section class="flex items-center gap-5 md:gap-6.5 lg:gap-5">
        <!-- DESKTOP: 'Sign in' link -->
        <a href="/gemini" class="hidden lg:block hover:opacity-100!">Sign in</a>

        <!-- Get start button -->
        <a href="/gemini" class="px-4 py-2.5 font-semibold text-black bg-amber-400 rounded-full">Get started</a>
        
        <!-- MOBILE: hamburger menu -->
        <button class="lg:hidden">
            <img src="/gemini/menu.png" alt="Toggle mobile menu" class="w-7.5 h-5" />
        </button>
    </section>
    </div>
</nav>

<style lang="scss">

@import "../../../routes/(recreates)/gemini/gemini.scss";

button, a {
    &:hover {
        @apply opacity-80 cursor-pointer;
    }

    img {
        @apply w-5 h-4.5 transform transition-all group-hover:rotate-180;
    }
}

</style>