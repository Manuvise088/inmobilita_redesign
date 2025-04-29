document.addEventListener('DOMContentLoaded', () => {
    const footerMenuIcon = document.getElementById('footer-menu-icon');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const closeMenuButton = document.getElementById('close-menu');
    const ActivityButton = document.getElementById('activity');
    const HomeButton = document.getElementById('home');

    // Set Home button as default
    HomeButton.classList.add('selected'); // Add 'selected' class to indicate it's active
    HomeButton.style.pointerEvents = 'none'; // Disable clicks
    HomeButton.style.opacity = '1'; // Ensure visibility
    HomeButton.style.backgroundColor = '#3c9dc9';
    HomeButton.style.transform = 'scale(0.9)';
    HomeButton.style.color = 'white';
    HomeButton.style.fontWeight = 'bold';
    HomeButton.style.borderColor = 'white';

    const homeIcon = HomeButton.querySelector('.material-icons, .material-icons-outlined');
    if (homeIcon) {
        homeIcon.classList.remove('material-icons-outlined'); // Remove outlined style
        homeIcon.classList.add('material-icons'); // Apply full icon style
    }

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

    ActivityButton.addEventListener('click', () => {
        document.getElementById('what').style.animation = 'slideout 1s forwards 0s 1 normal';
        document.getElementById('goals').style.animation = 'slideout 1s forwards 0s 1 normal';
        document.getElementById('activity_div').style.animation = 'slidein 1s forwards 0s 1 normal';
        document.getElementById('separatore_1').style.animation = 'slidein 1s forwards 0s 1 normal';
        document.getElementById('activity_div').style.visibility = 'visible';
        document.getElementById('activity').style.backgroundColor = '#3c9dc9';
        document.getElementById('activity').style.transform = 'scale(0.9)';
        document.getElementById('activity').style.color = 'white';
        document.getElementById('activity').style.fontWeight = 'bold';
        document.getElementById('activity').style.borderColor = 'white';

        // Restore the Home button state and its icon
        HomeButton.style.pointerEvents = 'auto';
        HomeButton.classList.remove('selected');
        HomeButton.style.backgroundColor = '#d8d8d8';
        HomeButton.style.transform = 'none';
        HomeButton.style.color = 'black';
        HomeButton.style.fontWeight = '400';
        HomeButton.style.borderColor = '#3888aa';

        const homeIcon = HomeButton.querySelector('.material-icons, .material-icons-outlined');
        if (homeIcon) {
            homeIcon.classList.remove('material-icons');
            homeIcon.classList.add('material-icons-outlined');
        }
    });

    HomeButton.addEventListener('click', () => {
        if (!HomeButton.classList.contains('selected')) {
            document.getElementById('activity_div').style.animation = 'slideout 1s forwards 0s 1 normal';
            document.getElementById('what').style.animation = 'slidein 1s forwards 0s 1 normal';
            document.getElementById('goals').style.animation = 'slidein 1s forwards 0s 1 normal';
            document.getElementById('separatore_1').style.animation = 'slideout 1s forwards 0s 1 normal';
            document.getElementById('separatore_1').style.animation = 'slidein 1s forwards 0s 1 normal';
            HomeButton.classList.add('selected');
            HomeButton.style.pointerEvents = 'none';
            HomeButton.style.backgroundColor = '#3c9dc9';
            HomeButton.style.transform = 'scale(0.9)';
            HomeButton.style.color = 'white';
            HomeButton.style.fontWeight = 'bold';
            HomeButton.style.borderColor = 'white';

            const homeIcon = HomeButton.querySelector('.material-icons, .material-icons-outlined');
            if (homeIcon) {
                homeIcon.classList.remove('material-icons-outlined');
                homeIcon.classList.add('material-icons');
            }

            ActivityButton.style.pointerEvents = 'auto';
            ActivityButton.style.backgroundColor = '#d8d8d8';
            ActivityButton.style.transform = 'none';
            ActivityButton.style.color = 'black';
            ActivityButton.style.fontWeight = '400';
            ActivityButton.style.borderColor = '#3888aa';

            const activityIcon = ActivityButton.querySelector('.material-icons, .material-icons-outlined');
            if (activityIcon) {
                activityIcon.classList.remove('material-icons');
                activityIcon.classList.add('material-icons-outlined');
            }
        }
    });

    // Scroll to Top functionality
    const scrollToTopButton = document.getElementById("scrollToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    const sezioni = document.querySelectorAll('.sezione');

    sezioni.forEach(sezione => {
        sezione.addEventListener('click', () => {
            sezioni.forEach(sec => {
                const icon = sec.querySelector('.material-icons, .material-icons-outlined');
                if (icon) {
                    icon.classList.remove('material-icons');
                    icon.classList.add('material-icons-outlined');
                }
                sec.classList.remove('selected');
            });

            const icon = sezione.querySelector('.material-icons, .material-icons-outlined');
            if (icon) {
                icon.classList.remove('material-icons-outlined');
                icon.classList.add('material-icons');
            }
            sezione.classList.add('selected');
        });
    });
});
