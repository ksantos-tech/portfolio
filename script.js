// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 25, 47, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 25, 47, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Observe skill categories
document.querySelectorAll('.skill-category').forEach(category => {
    observer.observe(category);
});

// Observe certification cards
document.querySelectorAll('.certification-card').forEach(card => {
    observer.observe(card);
});

// Observe achievement cards
document.querySelectorAll('.achievement-card').forEach(card => {
    observer.observe(card);
});

// Active link highlighting
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Add staggered animation to skill tags
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.05}s`;
});

// Console message for cybersecurity theme
console.log(`
%c🔒 KIM SANTOS | L3 CYBERSECURITY CONSULTANT
%c-------------------------------------
%c"Securing Digital Frontiers"
%c
%cWebsite: https://ksantos-tech.github.io
%cLinkedIn: linkedin.com/in/ksantos-tech
%cEmail: kimrench23@gmail.com
%c
%c© 2025 All rights reserved.
`, 
    'color: #00d4aa; font-size: 14px; font-weight: bold;',
    'color: #8892b0;',
    'color: #64ffda; font-style: italic;',
    'color: #8892b0;',
    'color: #e6f1ff;',
    'color: #e6f1ff;',
    'color: #e6f1ff;',
    'color: #8892b0;'
);
