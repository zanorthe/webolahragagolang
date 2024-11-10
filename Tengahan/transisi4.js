let currentSection = 0;
const sections = document.querySelectorAll('.row');

function scrollToSection(index) {
  if (index < 0 || index >= sections.length) return; // Prevent invalid index
  sections[index].scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('wheel', function (event) {
  if (event.deltaY > 0) {
    // Scrolling down
    currentSection++;
  } else {
    // Scrolling up
    currentSection--;
  }
  currentSection = Math.max(0, Math.min(currentSection, sections.length - 1)); // Clamp value
  scrollToSection(currentSection);
});
