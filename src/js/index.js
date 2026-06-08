// Navar mobile menu toggle functionality
const menuBtn = document.getElementById("menu");
const sidepanelContent = document.getElementById("sidepanel-content");
const sidePanel = document.querySelector("#sidepanel");
const closeBtn = sidePanel.querySelector("#closeMenu");
const sidepanelLinks = sidePanel.querySelectorAll("#sidepanel-links li a");
const languageToggle = document.getElementById("languageToggle");
const languageOptions = document.getElementById("languageOptions");
const btnEn = document.getElementById("btn-en");
const btnBn = document.getElementById("btn-bn");

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

// Language Switching
const activeClasses = ["bg-primary", "text-container"];
const inactiveClasses = ["bg-transparent", "text-text"];

function setLang(lang) {
    const isBangla = lang === "bn";

    document.body.classList.toggle("bangla", isBangla);
    localStorage.setItem("lang", lang);

    // Active button styling
    if (isBangla) {
        btnBn.classList.add(...activeClasses);
        btnBn.classList.remove(...inactiveClasses);
        btnEn.classList.add(...inactiveClasses);
        btnEn.classList.remove(...activeClasses);
    } else {
        btnEn.classList.add(...activeClasses);
        btnEn.classList.remove(...inactiveClasses);
        btnBn.classList.add(...inactiveClasses);
        btnBn.classList.remove(...activeClasses);
    }
}

// Restore saved language on page load
const saved = localStorage.getItem("lang") || "en";
setLang(saved);

// Button click listeners
btnEn.addEventListener("click", () => setLang("en"));
btnBn.addEventListener("click", () => setLang("bn"));
