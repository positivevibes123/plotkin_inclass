// This file contains JavaScript code for interactive elements on the website, such as navigation menu toggles, animations, and any other dynamic features.

document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu toggle for mobile view
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    for (let link of anchorLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Add any additional interactive features here
});