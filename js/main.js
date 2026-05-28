// js/main.js

// --- Navbar scroll shrink ---
const navbar = document.getElementById('navbar');
const navContainer = document.getElementById('nav-container');
const navLogo = document.getElementById('nav-logo');
const scrollIndicator = document.getElementById('scroll-indicator');

if (navbar && navContainer) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('border-white/10');
            navbar.classList.remove('border-white/5');
            navContainer.style.height = '56px';
            if (navLogo) navLogo.style.height = '36px';
            if (scrollIndicator) scrollIndicator.style.opacity = '0';
        } else {
            navbar.classList.remove('border-white/10');
            navbar.classList.add('border-white/5');
            navContainer.style.height = '';
            if (navLogo) navLogo.style.height = '';
            if (scrollIndicator) scrollIndicator.style.opacity = '0.4';
        }
    });
}

// --- Mobile hamburger menu ---
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

let menuOpen = false;

if (menuBtn && mobileMenu && bar1 && bar2 && bar3) {
    menuBtn.addEventListener('click', () => {
        menuOpen = !menuOpen;
        mobileMenu.classList.toggle('hidden', !menuOpen);

        // Animate bars to X
        if (menuOpen) {
            bar1.style.transform = 'translateY(8px) rotate(45deg)';
            bar2.style.opacity = '0';
            bar3.style.transform = 'translateY(-8px) rotate(-45deg)';
        } else {
            bar1.style.transform = '';
            bar2.style.opacity = '';
            bar3.style.transform = '';
        }
    });

    // Close menu on link click
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menuOpen = false;
            mobileMenu.classList.add('hidden');
            bar1.style.transform = '';
            bar2.style.opacity = '';
            bar3.style.transform = '';
        });
    });
}

// --- Active nav link ---
const currentPath = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('nav a').forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop().split('#')[0] || 'index.html';
    if (linkPath === currentPath) {
        link.classList.add('text-primary');
        link.classList.remove('text-white/60');
    }
});
