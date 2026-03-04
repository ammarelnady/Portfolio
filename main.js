// Main JavaScript for Portfolio

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollSpy();
    initDownloadCV();
    setCurrentYear();
});

// Navigation - Smooth scrolling to sections
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const scrollButtons = document.querySelectorAll('[data-scroll]');
    
    // Handle navigation menu clicks
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            scrollToSection(sectionId);
            
            // Update active state
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Handle scroll buttons (like "Projects" button in hero)
    scrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-scroll');
            scrollToSection(sectionId);
        });
    });
}

// Scroll to section with smooth behavior
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Scroll Spy - Track active section during scroll
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');
    
    // Options for Intersection Observer
    const options = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };
    
    // Create observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                
                // Update active nav item
                navItems.forEach(item => {
                    const itemSection = item.getAttribute('data-section');
                    if (itemSection === sectionId) {
                        navItems.forEach(nav => nav.classList.remove('active'));
                        item.classList.add('active');
                    }
                });
            }
        });
    }, options);
    
    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Download CV functionality
function initDownloadCV() {
    const downloadBtn = document.getElementById('downloadCV');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Create temporary link element
            const link = document.createElement('a');
            link.href = 'my_cv.pdf';
            link.download = 'Ammar_Ahmed_Elnady_CV.pdf';
            
            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
}

// Set current year in footer
function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Optional: Add loading animation effect
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Optional: Handle scroll-based animations (fade in elements)
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const animationObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });
}
