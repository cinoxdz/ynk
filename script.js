let currentSection = 0;

window.addEventListener('wheel', (event) => {
    const section2 = document.getElementById('section2');

    if (event.deltaY > 0 && currentSection === 0) {
        // Scroll down to reveal section 2
        section2.classList.add('active');
        currentSection = 1;
    } else if (event.deltaY < 0 && currentSection === 1) {
        // Scroll up to hide section 2
        section2.classList.remove('active');
        currentSection = 0;
    }
});

// تحسين التمرير على الهواتف
window.addEventListener('touchmove', (event) => {
    const section2 = document.getElementById('section2');

    if (event.touches[0].clientY > 50 && currentSection === 0) {
        section2.classList.add('active');
        currentSection = 1;
    } else if (event.touches[0].clientY < 50 && currentSection === 1) {
        section2.classList.remove('active');
        currentSection = 0;
    }
}); 
