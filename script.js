document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay');

// Open the overlay menu
    menuBtn.addEventListener('click', () => {
        overlay.classList.add('open');
    });

    // Close the overlay menu
    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('open');
    });

    // Close overlay if clicked outside the links
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('open');
        }
    });   
});
   

