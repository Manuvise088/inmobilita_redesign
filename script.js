document.addEventListener('DOMContentLoaded', () => {
    // Get all DOM elements
    const footerMenuIcon = document.getElementById('footer-menu-icon');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const closeMenuButton = document.getElementById('close-menu');
    const ActivityButton = document.getElementById('activity');
    const PartnerButton = document.getElementById('partner');
    const HomeButton = document.getElementById('home');
    const WebappButton = document.getElementById('webapp');
    const CreditsButton = document.getElementById('credits');
    const ActivityMob = document.getElementById('activity_mob');
    const HomeMob = document.getElementById('home_mob');
    const WebappMob = document.getElementById('webapp_mob');
    const themeButton = document.getElementById('theme');
    const scrollToTopButton = document.getElementById("scrollToTop");
    const sezioni = document.querySelectorAll('.sezione');

    // Set Home button as default
    HomeButton.classList.add('selected');
    HomeButton.classList.add('sezione_selezionata');
    const homeIcon = HomeButton.querySelector('.material-icons, .material-icons-outlined');
    if (homeIcon) {
        homeIcon.classList.remove('material-icons-outlined');
        homeIcon.classList.add('material-icons');
    }

    // Fullscreen menu functionality
    footerMenuIcon.addEventListener('click', (e) => {
        e.preventDefault();
        fullscreenMenu.classList.remove('hide');
        fullscreenMenu.classList.add('show');
    });

    closeMenuButton.addEventListener('click', () => {
        fullscreenMenu.classList.remove('show');
        fullscreenMenu.classList.add('hide');
    });

    // Section switching functionality
    ActivityButton.addEventListener('click', () => {
        switchSection(ActivityButton, 'activity_div', "148vh");
    });

    HomeButton.addEventListener('click', () => {
        if (!HomeButton.classList.contains('selected')) {
            switchSection(HomeButton, ['what', 'goals'], "94vh");
        }
    });

    PartnerButton.addEventListener('click', () => {
        switchSection(PartnerButton, 'partner_div', "128vh");
    });

    WebappButton.addEventListener('click', () => {
        switchSection(WebappButton, 'webapp_div', "94vh");
    });

    CreditsButton.addEventListener('click', () => {
        switchSection(CreditsButton, 'credits_div', "94vh");
    });

    // Mobile section switching
    ActivityMob.addEventListener('click', () => {
        switchSection(ActivityButton, 'activity_div', "12vh");
    });

    HomeMob.addEventListener('click', () => {
        if (!HomeButton.classList.contains('selected')) {
            switchSection(HomeButton, ['what', 'goals'], "94vh");
        }
    });

    WebappMob.addEventListener('click', () => {
        switchSection(WebappButton, 'webapp_div', "94vh");
    });

    // Scroll to Top functionality
    if (scrollToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopButton.style.display = "block";
            } else {
                scrollToTopButton.style.display = "none";
                scrollToTopButton.classList.remove('scrollToTop_scrolling');
            }
        });

        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            scrollToTopButton.classList.add('scrollToTop_scrolling');
        });
    }

    // Section selection styling
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

    // Dark Mode functionality
    if (themeButton) {
        themeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            const themeIcon = themeButton.querySelector('.material-icons, .material-icons-outlined');
            if (themeIcon) {
                if (themeIcon.textContent === 'dark_mode') {
                    themeIcon.textContent = 'light_mode';
                    themeIcon.classList.remove('material-icons');
                    themeIcon.classList.add('material-icons-outlined');
                } else {
                    themeIcon.textContent = 'dark_mode';
                    themeIcon.classList.remove('material-icons-outlined');
                    themeIcon.classList.add('material-icons');
                }
            }
            
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
        
        // Initialize dark mode from localStorage
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            const themeIcon = themeButton.querySelector('.material-icons, .material-icons-outlined');
            if (themeIcon) {
                themeIcon.textContent = 'light_mode';
                themeIcon.classList.remove('material-icons');
                themeIcon.classList.add('material-icons-outlined');
            }
        }
    }

    // Helper function for section switching
    function switchSection(activeButton, contentIds, marginTop) {
        document.body.style.height = 'auto';
        document.getElementById('separatore_1').style.marginTop = marginTop;
        activeButton.classList.add('selected');
        activeButton.classList.add('sezione_selezionata');

        // Reset all other sections
        [HomeButton, ActivityButton, PartnerButton, WebappButton, CreditsButton].forEach(button => {
            if (button !== activeButton && button.classList.contains('selected')) {
                const contentToHide = getContentIdForButton(button);
                if (Array.isArray(contentToHide)) {
                    contentToHide.forEach(id => {
                        document.getElementById(id).style.animation = 'slideout 1s forwards 0s 1 normal';
                    });
                } else {
                    document.getElementById(contentToHide).style.animation = 'slideout 1s forwards 0s 1 normal';
                }
                
                button.classList.remove('selected');
                button.classList.remove('sezione_selezionata');
                
                const icon = button.querySelector('.material-icons, .material-icons-outlined');
                if (icon) {
                    icon.classList.remove('material-icons');
                    icon.classList.add('material-icons-outlined');
                }
            }
        });

        // Show new content
        if (Array.isArray(contentIds)) {
            contentIds.forEach(id => {
                document.getElementById(id).style.animation = 'slidein 1s forwards 0s 1 normal';
            });
        } else {
            document.getElementById(contentIds).style.animation = 'slidein 1s forwards 0s 1 normal';
            document.getElementById(contentIds).style.visibility = 'visible';
        }
    }

    function getContentIdForButton(button) {
        if (button === HomeButton) return ['what', 'goals'];
        if (button === ActivityButton) return 'activity_div';
        if (button === PartnerButton) return 'partner_div';
        if (button === WebappButton) return 'webapp_div';
        if (button === CreditsButton) return 'credits_div';
        return null;
    }
});