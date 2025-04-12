document.addEventListener('DOMContentLoaded', () => {
    const footerMenuIcon = document.getElementById('footer-menu-icon');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const closeMenuButton = document.getElementById('close-menu');

    // Open menu
    footerMenuIcon.addEventListener('click', (e) => {
        e.preventDefault();
        fullscreenMenu.classList.remove('hide'); // Remove 'hide' class if present
        fullscreenMenu.classList.add('show'); // Add 'show' class
    });

    // Close menu
    closeMenuButton.addEventListener('click', () => {
        fullscreenMenu.classList.remove('show'); // Remove 'show' class
        fullscreenMenu.classList.add('hide'); // Add 'hide' class
    });

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const valore = scrollY / 10;

        document.documentElement.style.setProperty('--blur-var', valore);
    });
});
