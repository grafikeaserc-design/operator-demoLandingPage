document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // prevents errors if elements don't exist
    if (!menuToggle || !mainNav) return;

    const navLinks = mainNav.querySelectorAll('a');

    // toggle menu visibility
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        mainNav.classList.toggle('active');
    });

    // close menu when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('open');
            mainNav.classList.remove('active');
        });
    });
});