// Navar mobile menu toggle functionality
const menuBtn = document.getElementById("menu");
const sidepanelContent = document.getElementById("sidepanel-content");
const sidePanel = document.querySelector("#sidepanel");
const closeBtn = sidePanel.querySelector("#closeMenu");
const sidepanelLinks = sidePanel.querySelectorAll("#sidepanel-links li a");
const languageToggle = document.getElementById("languageToggle");
const languageOptions = document.getElementById("languageOptions");

menuBtn.addEventListener("click", () => {
    // sidePanel.style.display = "block";
    sidepanel.classList.add("visible", "opacity-100");
    sidepanel.classList.remove("invisible", "opacity-0");
    sidepanelContent.classList.add("translate-x-0");
    sidepanelContent.classList.remove("-translate-x-full");
});

closeBtn.addEventListener("click", () => {
    sidepanel.classList.add("invisible", "opacity-0", "duration-300");
    sidepanel.classList.remove("visible", "opacity-100");
    sidepanelContent.classList.add("-translate-x-full");
    sidepanelContent.classList.remove("translate-x-0");
});

sidepanelLinks.forEach((link) => {
    link.addEventListener("click", () => {
        sidepanel.classList.add("invisible", "opacity-0", "duration-300");
        sidepanel.classList.remove("visible", "opacity-100");
        sidepanelContent.classList.add("-translate-x-full");
        sidepanelContent.classList.remove("translate-x-0");
    });
});

// Close when clicking the dark overlay (outside the panel)
sidePanel.addEventListener("click", (e) => {
    if (e.target === sidePanel) {
        sidepanel.classList.add("invisible", "opacity-0", "duration-300");
        sidepanel.classList.remove("visible", "opacity-100");
        sidepanelContent.classList.add("-translate-x-full");
        sidepanelContent.classList.remove("translate-x-0");
    }
});

// Language toggle functionality
let isLanguageOptionsVisible = false;

languageToggle.addEventListener("click", () => {
    isLanguageOptionsVisible = !isLanguageOptionsVisible;
    if (isLanguageOptionsVisible) {
        languageOptions.classList.remove("invisible", "opacity-0", "scale-y-0");
        languageOptions.classList.add("visible", "opacity-100", "scale-y-100");
    } else {
        languageOptions.classList.add("invisible", "opacity-0", "scale-y-0");
        languageOptions.classList.remove(
            "visible",
            "opacity-100",
            "scale-y-100",
        );
    }
});
