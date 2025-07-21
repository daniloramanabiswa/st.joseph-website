/**
 * St. Joseph the Worker Training Centre - Main JavaScript
 * Core functionality while preserving your exact HTML structure
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            this.setAttribute('aria-expanded', 
                this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
            mainNav.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }

    // Hero Background Slideshow
    const heroBgs = document.querySelectorAll('.hero-bg');
    if (heroBgs.length > 0) {
        let currentBg = 0;
        heroBgs[currentBg].classList.add('active');
        
        setInterval(() => {
            heroBgs[currentBg].classList.remove('active');
            currentBg = (currentBg + 1) % heroBgs.length;
            heroBgs[currentBg].classList.add('active');
        }, 5000);
    }

    // Language Selector
    const languageSelector = document.querySelector('.language-selector');
    const languageOptions = document.querySelector('.language-options');
    
    if (languageSelector && languageOptions) {
        languageSelector.addEventListener('click', function(e) {
            e.stopPropagation();
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            languageOptions.style.display = isExpanded ? 'none' : 'block';
        });
        
        // Close when clicking outside
        document.addEventListener('click', function() {
            languageSelector.setAttribute('aria-expanded', 'false');
            languageOptions.style.display = 'none';
        });
        
        // Prevent closing when clicking inside
        languageOptions.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Lazy load images
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src') || img.src;
                    img.removeAttribute('loading');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});

// Initialize hero background slideshow
function initHeroSlideshow() {
    const heroBgs = document.querySelectorAll('.hero-bg');
    if (!heroBgs.length) return;
    
    let currentIndex = 0;
    heroBgs[currentIndex].classList.add('active');
    
    setInterval(() => {
        heroBgs[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % heroBgs.length;
        heroBgs[currentIndex].classList.add('active');
    }, 5000);
}