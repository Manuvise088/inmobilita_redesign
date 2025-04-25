document.addEventListener('DOMContentLoaded', () => {
    const footerMenuIcon = document.getElementById('footer-menu-icon');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const closeMenuButton = document.getElementById('close-menu');
    const ActivityButton = document.getElementById('activity');
    const HomeButton = document.getElementById('home');

    // Open menu
    footerMenuIcon.addEventListener('click', (e) => {
        e.preventDefault();
        fullscreenMenu.classList.remove('hide');
        fullscreenMenu.classList.add('show');
    });

    // Close menu
    closeMenuButton.addEventListener('click', () => {
        fullscreenMenu.classList.remove('show');
        fullscreenMenu.classList.add('hide');
    });

    document.getElementById('home').style.opacity = '1';
    ActivityButton.addEventListener('click', () => {
        document.getElementById('what').style.animation = 'slideout 1s forwards 0s 1 normal';
        document.getElementById('goals').style.animation = 'slideout 1s forwards 0s 1 normal';
        document.getElementById('activity_div').style.animation = 'slidein 1s forwards 0s 1 normal';
        document.getElementById('activity_div').style.visibility = 'visible';
        document.getElementById('activity').style.backgroundColor = '#3c9dc9';
        document.getElementById('activity').style.transform = 'scale(0.9)';
        document.getElementById('activity').style.color = 'white';
        document.getElementById('activity').style.fontWeight = 'bold';
        document.getElementById('activity').style.borderColor = 'white';
        document.getElementById('home').style.opacity = '1';
        document.getElementById('home').style.backgroundColor = '#d8d8d8';
        document.getElementById('home').style.transform = 'none';
        document.getElementById('home').style.color = 'black';
        document.getElementById('home').style.fontWeight = '400';
        document.getElementById('home').style.borderColor = '#3888aa';

    });    
    HomeButton.addEventListener('click', () => {
        document.getElementById('activity_div').style.animation = 'slideout 1s forwards 0s 1 normal';
        document.getElementById('what').style.animation = 'slidein 1s forwards 0s 1 normal';
        document.getElementById('home').style.backgroundColor = '#3c9dc9';
        document.getElementById('home').style.transform = 'scale(0.9)';
        document.getElementById('home').style.color = 'white';
        document.getElementById('home').style.fontWeight = 'bold';
        document.getElementById('home').style.borderColor = 'white';
        document.getElementById('activity').style = 'default';
        document.getElementById('goals').style.animation = 'slidein 1s forwards 0s 1 normal';
    });    
});
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.getElementById("scrollToTop");

    // Show the button when scrolling down
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) { // Show when scrolled down 300px
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Scroll to the top when the button is clicked
    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scroll effect
        });
    });
});
