// JavaScript to add tooltips and minor animations

// Tooltip function for sections
document.addEventListener('DOMContentLoaded', function () {
    const tooltipSections = document.querySelectorAll('.section-header');
    tooltipSections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.cursor = 'pointer';
            section.setAttribute('title', 'Click here for more insights on this section!');
        });
    });
});

// Scroll animation function for smooth transition
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
