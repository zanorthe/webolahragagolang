let currentSection = 0;
const sections = document.querySelectorAll(".row");
let isTabActive = true; // Track if the tab is active
let focusTimeout; // Track the timeout for focus event

function scrollToSection(index) {
  if (index < 0 || index >= sections.length) return;
  sections[index].scrollIntoView({ behavior: "smooth" });
}

function handleScrollEvent(event) {
  if (!isTabActive) return; // Skip if the tab is not active

  if (event.type === "wheel") {
    currentSection += event.deltaY > 0 ? 1 : -1;
  } else if (event.type === "keydown") {
    if (event.key === "ArrowDown" || event.key === "PageDown") currentSection++;
    else if (event.key === "ArrowUp" || event.key === "PageUp")
      currentSection--;

    if (["PageUp", "PageDown", "ArrowUp", "ArrowDown"].includes(event.key)) {
      event.preventDefault();
    }
  }

  currentSection = Math.max(0, Math.min(currentSection, sections.length - 1));
  scrollToSection(currentSection);
}

// Event listeners for mouse wheel and keyboard events
window.addEventListener("wheel", handleScrollEvent, { passive: false });
window.addEventListener("keydown", handleScrollEvent);

// Track tab focus and blur
window.addEventListener("focus", () => {
  isTabActive = true;

  // Clear any existing timeout to prevent previous delays from triggering scroll
  clearTimeout(focusTimeout);

  // Delay scroll functionality for 100ms after tab focus
  focusTimeout = setTimeout(() => {
    isTabActive = true;
  }, 100); // Adjust the delay as needed
});

window.addEventListener("blur", () => {
  isTabActive = false;
});
