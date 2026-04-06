// Header transformation on scroll
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Reveal components on scroll
const reveals = document.querySelectorAll('.reveal');

const showOnScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < triggerBottom) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animation initial state for hero
document.addEventListener('DOMContentLoaded', () => {
    console.log('POLYCAR Landing Page Loaded');
});
