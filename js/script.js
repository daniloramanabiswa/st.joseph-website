/**
 * St. Joseph Training Centre - Core Functionality
 * Works with your existing HTML/CSS structure
 */

document.addEventListener('DOMContentLoaded', function() {
    // ===== Mobile Navigation =====
    const initMobileMenu = () => {
        const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
        const mainNav = document.querySelector('.main-nav');
        
        if (mobileMenuBtn && mainNav) {
            mobileMenuBtn.addEventListener('click', function() {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isExpanded);
                mainNav.classList.toggle('active');
                document.body.classList.toggle('no-scroll');
            });
        }
    };

    // ===== Hero Background Slideshow =====
    const initHeroSlideshow = () => {
        const heroBgs = document.querySelectorAll('.hero-bg');
        if (heroBgs.length < 2) return;
        
        let currentIndex = 0;
        heroBgs[currentIndex].classList.add('active');
        
        setInterval(() => {
            heroBgs[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % heroBgs.length;
            heroBgs[currentIndex].classList.add('active');
        }, 5000);
    };   
    // ===== Smooth Scrolling =====
    const initSmoothScrolling = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if (this.getAttribute('href') === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // ===== Lazy Loading Images =====
    const initLazyLoading = () => {
        if ('IntersectionObserver' in window) {
            const lazyImages = document.querySelectorAll('img[loading="lazy"]');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.removeAttribute('loading');
                        observer.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => observer.observe(img));
        }
    };

    // ===== Sticky Header =====
    const initStickyHeader = () => {
        const header = document.querySelector('header');
        if (!header) return;
        
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    };

    // ===== Initialize All Functions =====
    const initAll = () => {
        initMobileMenu();
        initHeroSlideshow();
        initLanguageSelector();
        initSmoothScrolling();
        initLazyLoading();
        initStickyHeader();
        
        // Additional initialization can be added here
        console.log('All JavaScript initialized successfully');
    };

    initAll();
});
// Update your main.js with this language modal functionality
document.addEventListener('DOMContentLoaded', function() {
  // Check if language is already selected
  const savedLanguage = localStorage.getItem('preferredLanguage');
  const languageModal = document.getElementById('languageModal');
  
  // Only show modal if no language is selected
  if (!savedLanguage) {
    languageModal.classList.remove('hidden');
  }

  // Language selection handler
  document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
      languageModal.classList.add('hidden');
      
      // Set a cookie to remember the choice for a year
      document.cookie = `preferredLanguage=${lang}; max-age=${365*24*60*60}; path=/`;
    });
  });

  // Rest of your existing code...
});

// Modified setLanguage function to handle first-time visitors
function setLanguage(lang) {
  if (!translations[lang]) return;
  
  currentLanguage = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('preferredLanguage', lang);
  
  // For first-time visitors, set a cookie that expires in 1 year
  if (!document.cookie.includes('preferredLanguage')) {
    document.cookie = `preferredLanguage=${lang}; max-age=${365*24*60*60}; path=/`;
  }
  
  updateTextElements();
}
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.main-nav');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
      
      // Toggle body scroll when menu is open
      document.body.style.overflow = isExpanded ? '' : 'hidden';
    });

    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          toggleBtn.setAttribute('aria-expanded', 'false');
          navMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 768 && 
          navMenu.classList.contains('active') &&
          !e.target.closest('.main-nav') &&
          !e.target.closest('.mobile-menu-toggle')) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
  // Program page specific animations
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.module, .program-highlights');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if(elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Set initial state for animation
  const modules = document.querySelectorAll('.module');
  const highlights = document.querySelectorAll('.program-highlights');
  
  if(modules.length > 0) {
    modules.forEach(module => {
      module.style.opacity = '0';
      module.style.transform = 'translateY(20px)';
      module.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    highlights.forEach(highlight => {
      highlight.style.opacity = '0';
      highlight.style.transform = 'translateY(20px)';
      highlight.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
  }

  // Testimonial animation
  const testimonial = document.querySelector('.testimonial-section blockquote');
  if(testimonial) {
    testimonial.style.opacity = '0';
    testimonial.style.transform = 'scale(0.9)';
    testimonial.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    setTimeout(() => {
      testimonial.style.opacity = '1';
      testimonial.style.transform = 'scale(1)';
    }, 300);
  }
});
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', function() {
      this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
      mainNav.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
      }
    });
  });

  // Dropdown menus
  const dropdownToggles = document.querySelectorAll('.nav-dropdown > .nav-link');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdown = this.nextElementSibling;
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const langToggle = document.getElementById('lang-toggle');
  const languageModal = document.getElementById('languageModal');

  langToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    languageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  document.addEventListener('click', function(e) {
    if (!languageModal.contains(e.target) && e.target !== langToggle) {
      languageModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  const currentPath = window.location.pathname;
  let currentLang = 'en';
  if (currentPath.includes('-it.html')) currentLang = 'it';
  if (currentPath.includes('-de.html')) currentLang = 'de';

  const langOptions = {
    en: { name: 'English', flag: 'https://flagcdn.com/w20/gb.png' },
    it: { name: 'Italiano', flag: 'https://flagcdn.com/w20/it.png' },
    de: { name: 'Deutsch', flag: 'https://flagcdn.com/w20/de.png' }
  };

  const currentLangElement = document.querySelector('.current-lang');
  if (currentLangElement) {
    currentLangElement.innerHTML = `
      <img src="${langOptions[currentLang].flag}" alt="${langOptions[currentLang].name}" width="20">
      ${langOptions[currentLang].name}
    `;
  }

  document.querySelectorAll('.language-option').forEach(option => {
    if (option.getAttribute('data-lang') === currentLang) {
      option.classList.add('active');
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
});
