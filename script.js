document.addEventListener('DOMContentLoaded', () => {
    const footerMenuIcon = document.getElementById('footer-menu-icon');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const closeMenuButton = document.getElementById('close-menu');
    const ActivityButton = document.getElementById('activity');

    // Open menu
    footerMenuIcon.addEventListener('click', (e) => {
        e.preventDefault();
        fullscreenMenu.classList.remove('hide'); // Remove 'show' class if present
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

    ActivityButton.addEventListener('click', () => {
        document.getElementById('what').style.animation = 'slideout 1s forwards 0s 1 normal';
        document.getElementById('goals').style.animation = 'slideout 1s forwards 0s 1 normal';
        document.getElementById('activity_div').style.animation = 'slidein 1s forwards 0s 1 normal';
        document.getElementById('activity_div').style.visibility = 'visible';
        document.getElementById('activity').style.opacity = '0.5';
        document.getElementById('home').style.opacity = '1';
    });    
});
