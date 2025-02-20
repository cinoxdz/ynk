let currentSection = 0;

window.addEventListener('scroll', () => {
    const section2 = document.getElementById('section2');
    const scrollY = window.scrollY;

    if (scrollY > 50 && currentSection === 0) {
        // التمرير لأسفل لإظهار القسم الثاني
        section2.classList.add('active');
        currentSection = 1;
    } else if (scrollY <= 50 && currentSection === 1) {
        // التمرير لأعلى لإخفاء القسم الثاني
        section2.classList.remove('active');
        currentSection = 0;
    }
});

// تحسين التمرير على الهواتف
let startY = 0;

window.addEventListener('touchstart', (event) => {
    startY = event.touches[0].clientY;
});

window.addEventListener('touchmove', (event) => {
    const section2 = document.getElementById('section2');
    const currentY = event.touches[0].clientY;

    if (currentY < startY && currentSection === 0) {
        // التمرير لأسفل لإظهار القسم الثاني
        section2.classList.add('active');
        currentSection = 1;
    } else if (currentY > startY && currentSection === 1) {
        // التمرير لأعلى لإخفاء القسم الثاني
        section2.classList.remove('active');
        currentSection = 0;
    }
});
