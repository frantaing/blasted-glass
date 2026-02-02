<script lang="ts">
    // Dropdown state
    let isOpen = false;
    let selectedLanguage = "English - Singapore";

    // Languages (TODO: add image URLs?)
    const languages = [
        { label: "English - Singapore" },
        { label: "English - United States" },
        { label: "Deutsch - German" },
        { label: "Français - French" }
    ];

    const toggleMenu = () => isOpen = !isOpen;

    // Replace button string with selected language
    const selectLanguage = (lang: string) => {
        selectedLanguage = lang;
        isOpen = false;
    };

    // Close when clicking outside
    const handleOutsideClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (isOpen && !target.closest('.dropdown-container')) {
            isOpen = false;
        }
    };

    /* Only hover on sizes xs+ */
    const handleMouseEnter = () => {
        if (window.innerWidth >= 480) isOpen = true; 
    };

    const handleMouseLeave = () => {
        if (window.innerWidth >= 480) isOpen = false;
    };
</script>

<!-- Close when exiting window -->
<svelte:window on:click={handleOutsideClick} />

<div 
    class="relative inline-block dropdown-container"
    role="none"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
>
    <!-- The button itself -->
    <button 
        on:click|stopPropagation={toggleMenu}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        class="flex justify-between items-center gap-5 p-3 bg-white/10 lg:bg-transparent rounded-full transition-all"
    >
        <div class="flex items-center gap-2">
            <img src="/gemini/globe.png" alt="Language selector icon" class="h-5.5" />
            <span class="text-sm">{selectedLanguage}</span>
        </div>
        <img 
            src="/gemini/chevron-down.png" 
            alt="Language selector dropdown" 
            class="w-5 transition-transform {isOpen ? 'rotate-180' : ''}"
        >
    </button>

    <!-- Language menu -->
    {#if isOpen}
        <div 
            class="absolute z-50 bottom-full left-0 right-0 mb-2 p-4 flex flex-col max-w-xs bg-[#191919] rounded-lg overflow-hidden border border-white/5"
            role="listbox"
        >
            {#each languages as { label }}
                <button 
                    class="lang-item {selectedLanguage === label ? 'bg-white/10' : ''}"
                    role="option"
                    aria-selected={selectedLanguage === label}
                    on:click={() => selectLanguage(label)}
                >
                    <img src="" alt=""> {label}
                </button>
            {/each}
        </div>
    {/if}
</div>

<style>
    @reference '../../../routes/(recreates)/gemini/gemini.css';

    .lang-item {
        @apply w-full mb-1.5 last:mb-0 pl-2.5 py-3 text-left text-sm text-white hover:bg-white/10 rounded-lg transition-colors;
    }
</style>