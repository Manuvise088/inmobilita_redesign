document.addEventListener('DOMContentLoaded', () => {
    const footerMenuIcon = document.getElementById('footer-menu-icon');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const closeMenuButton = document.getElementById('close-menu');
    const ActivityButton = document.getElementById('activity');
    const PartnerButton = document.getElementById('partner');
    const HomeButton = document.getElementById('home');
    const WebappButton = document.getElementById('webapp');

    // Set Home button as default
    HomeButton.classList.add('selected'); // Add 'selected' class to indicate it's active
    HomeButton.classList.add('sezione_selezionata');

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
        // Set Activity button as new default
        document.body.style.height = 'auto';
        document.getElementById('separatore_1').style.marginTop = "94vh";
        ActivityButton.classList.add('selected'); // Add 'selected' class to indicate it's active
        ActivityButton.classList.add('sezione_selezionata');

        if(HomeButton.classList.contains('selected')){
            document.getElementById('what').style.animation = 'slideout 1s forwards 0s 1 normal';
            document.getElementById('goals').style.animation = 'slideout 1s forwards 0s 1 normal';
            HomeButton.classList.remove('selected');
            HomeButton.classList.remove('sezione_selezionata');

            const homeIcon = HomeButton.querySelector('.material-icons, .material-icons-outlined');
            if (homeIcon) {
                homeIcon.classList.remove('material-icons');
                homeIcon.classList.add('material-icons-outlined');
            }
        }
        else if (PartnerButton.classList.contains('selected')){
            document.getElementById('partner_div').style.animation = 'slideout 1s forwards 0s 1 normal';
            PartnerButton.classList.remove('selected');
            PartnerButton.classList.remove('sezione_selezionata');
            const partnerIcon = PartnerButton.querySelector('.material-icons, .material-icons-outlined');
            if (partnerIcon) {
                partnerIcon.classList.remove('material-icons');
                partnerIcon.classList.add('material-icons-outlined');
            }
        }
        else if (WebappButton.classList.contains('selected')){
            document.getElementById('webapp_div').style.animation = 'slideout 1s forwards 0s 1 normal';
            WebappButton.classList.remove('selected');
            WebappButton.classList.remove('sezione_selezionata');
            const webappIcon = WebappButton.querySelector('.material-icons, .material-icons-outlined');
            if (webappIcon) {
                webappIcon.classList.remove('material-icons');
                webappIcon.classList.add('material-icons-outlined');
            }
        }

        document.getElementById('activity_div').style.animation = 'slidein 1s forwards 0s 1 normal';
        document.getElementById('activity_div').style.visibility = 'visible';
    });

    HomeButton.addEventListener('click', () => {
        if (!HomeButton.classList.contains('selected')) {
            document.getElementById('separatore_1').style.marginTop = "94vh";
            document.body.style.height = 'auto';
            if(ActivityButton.classList.contains('selected')){
                document.getElementById('activity_div').style.animation = 'slideout 1s forwards 0s 1 normal';
                ActivityButton.classList.remove('selected');
                ActivityButton.classList.remove('sezione_selezionata');
                const activityIcon = ActivityButton.querySelector('.material-icons, .material-icons-outlined');
                if (activityIcon) {
                    activityIcon.classList.remove('material-icons');
                    activityIcon.classList.add('material-icons-outlined');
                }
            }
            else if(PartnerButton.classList.contains('selected')){
                document.getElementById('partner_div').style.animation = 'slideout 1s forwards 0s 1 normal';
                PartnerButton.classList.remove('selected');
                PartnerButton.classList.remove('sezione_selezionata');
                const partnerIcon = PartnerButton.querySelector('.material-icons, .material-icons-outlined');
                if (partnerIcon) {
                    partnerIcon.classList.remove('material-icons');
                    partnerIcon.classList.add('material-icons-outlined');
                }
            }
            else if (WebappButton.classList.contains('selected')){
                document.getElementById('webapp_div').style.animation = 'slideout 1s forwards 0s 1 normal';
                WebappButton.classList.remove('selected');
                WebappButton.classList.remove('sezione_selezionata');
                const webappIcon = WebappButton.querySelector('.material-icons, .material-icons-outlined');
                if (webappIcon) {
                    webappIcon.classList.remove('material-icons');
                    webappIcon.classList.add('material-icons-outlined');
                }
            }

            document.getElementById('what').style.animation = 'slidein 1s forwards 0s 1 normal';
            document.getElementById('goals').style.animation = 'slidein 1s forwards 0s 1 normal';
            HomeButton.classList.add('selected');
            HomeButton.classList.add('sezione_selezionata');

            const homeIcon = HomeButton.querySelector('.material-icons, .material-icons-outlined');
            if (homeIcon) {
                homeIcon.classList.remove('material-icons-outlined');
                homeIcon.classList.add('material-icons');
            }
        }
    });

    PartnerButton.addEventListener('click', () =>{
        // Set Activity button as new default
        PartnerButton.classList.add('selected'); // Add 'selected' class to indicate it's active
        PartnerButton.classList.add('sezione_selezionata');
        document.body.style.height = 'auto';
        document.getElementById('separatore_1').style.marginTop = "128vh";

        if(HomeButton.classList.contains('selected')){
            document.getElementById('what').style.animation = 'slideout 1s forwards 0s 1 normal';
            document.getElementById('goals').style.animation = 'slideout 1s forwards 0s 1 normal';
            HomeButton.classList.remove('selected');
            HomeButton.classList.remove('sezione_selezionata');

            const homeIcon = HomeButton.querySelector('.material-icons, .material-icons-outlined');
            if (homeIcon) {
                homeIcon.classList.remove('material-icons');
                homeIcon.classList.add('material-icons-outlined');
            }
        }
        else if (ActivityButton.classList.contains('selected')){
            document.getElementById('activity_div').style.animation = 'slideout 1s forwards 0s 1 normal';
            ActivityButton.classList.remove('selected');
            ActivityButton.classList.remove('sezione_selezionata');
            const activityIcon = ActivityButton.querySelector('.material-icons, .material-icons-outlined');
            if (activityIcon) {
                activityIcon.classList.remove('material-icons');
                activityIcon.classList.add('material-icons-outlined');
            }
        }
        else if (WebappButton.classList.contains('selected')){
            document.getElementById('webapp_div').style.animation = 'slideout 1s forwards 0s 1 normal';
            WebappButton.classList.remove('selected');
            WebappButton.classList.remove('sezione_selezionata');
            const webappIcon = WebappButton.querySelector('.material-icons, .material-icons-outlined');
            if (webappIcon) {
                webappIcon.classList.remove('material-icons');
                webappIcon.classList.add('material-icons-outlined');
            }
        }

        document.getElementById('partner_div').style.animation = 'slidein 1s forwards 0s 1 normal';
        document.getElementById('partner_div').style.visibility = 'visible';
    })

    WebappButton.addEventListener('click', () => {
        // Set Webapp button as new default
        document.body.style.height = 'auto';
        document.getElementById('separatore_1').style.marginTop = "94vh";
        WebappButton.classList.add('selected'); // Add 'selected' class to indicate it's active
        WebappButton.classList.add('sezione_selezionata');

        if(HomeButton.classList.contains('selected')){
            document.getElementById('what').style.animation = 'slideout 1s forwards 0s 1 normal';
            document.getElementById('goals').style.animation = 'slideout 1s forwards 0s 1 normal';
            HomeButton.classList.remove('selected');
            HomeButton.classList.remove('sezione_selezionata');

            const homeIcon = HomeButton.querySelector('.material-icons, .material-icons-outlined');
            if (homeIcon) {
                homeIcon.classList.remove('material-icons');
                homeIcon.classList.add('material-icons-outlined');
            }
        }
        else if (PartnerButton.classList.contains('selected')){
            document.getElementById('partner_div').style.animation = 'slideout 1s forwards 0s 1 normal';
            PartnerButton.classList.remove('selected');
            PartnerButton.classList.remove('sezione_selezionata');
            const partnerIcon = PartnerButton.querySelector('.material-icons, .material-icons-outlined');
            if (partnerIcon) {
                partnerIcon.classList.remove('material-icons');
                partnerIcon.classList.add('material-icons-outlined');
            }
        }
        else if (ActivityButton.classList.contains('selected')){
            document.getElementById('activity_div').style.animation = 'slideout 1s forwards 0s 1 normal';
            ActivityButton.classList.remove('selected');
            ActivityButton.classList.remove('sezione_selezionata');
            const activityIcon = ActivityButton.querySelector('.material-icons, .material-icons-outlined');
            if (activityIcon) {
                activityIcon.classList.remove('material-icons');
                activityIcon.classList.add('material-icons-outlined');
            }
        }

        document.getElementById('webapp_div').style.animation = 'slidein 1s forwards 0s 1 normal';
        document.getElementById('webapp_div').style.visibility = 'visible';
    });

    // Scroll to Top functionality
    document.addEventListener("DOMContentLoaded", function () {
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
