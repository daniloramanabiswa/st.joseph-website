// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      this.setAttribute('aria-expanded', mainNav.classList.contains('active'));
    });
  }

  // Mobile Dropdowns
  const navDropdowns = document.querySelectorAll('.nav-dropdown > a');
  
  navDropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        const parent = this.parentElement;
        parent.classList.toggle('active');
        
        // Close other open dropdowns
        navDropdowns.forEach(otherDropdown => {
          if (otherDropdown !== this && otherDropdown.parentElement.classList.contains('active')) {
            otherDropdown.parentElement.classList.remove('active');
          }
        });
      }
    });
  });

  // Language Selector
  const languageSelector = document.querySelector('.language-selector');
  
  if (languageSelector) {
    languageSelector.addEventListener('mouseenter', function() {
      this.querySelector('.language-options').style.display = 'block';
    });
    
    languageSelector.addEventListener('mouseleave', function() {
      this.querySelector('.language-options').style.display = 'none';
    });
  }

  // Cookie Consent
  const cookieConsent = document.querySelector('.cookie-consent');
  const cookieBtn = document.querySelector('.cookie-btn');
  
  if (cookieConsent && cookieBtn) {
    if (!localStorage.getItem('cookieConsent')) {
      cookieConsent.style.display = 'block';
    }
    
    cookieBtn.addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'true');
      cookieConsent.style.display = 'none';
    });
  }

  // Smooth Scrolling for Anchor Links
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

  // Active Nav Link Based on Scroll Position
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - 100)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Lazy Loading Images
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img.lazy');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Form Validation
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const requiredFields = this.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          field.classList.add('error');
          isValid = false;
        } else {
          field.classList.remove('error');
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        this.querySelector('.error-message')?.remove();
        
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Please fill in all required fields';
        errorMessage.style.color = 'var(--primary)';
        errorMessage.style.marginTop = '10px';
        
        this.appendChild(errorMessage);
      }
    });
  });

  // Search Functionality
  const searchForm = document.querySelector('.search-box');
  
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const searchInput = this.querySelector('input');
      const searchTerm = searchInput.value.trim();
      
      if (searchTerm) {
        // Implement search functionality here
        console.log('Searching for:', searchTerm);
        // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
      }
    });
  }

  // Course Card Animation
  const courseCards = document.querySelectorAll('.course-card');
  
  courseCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Back to Top Button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '&uarr;';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.style.display = 'none';
  backToTopBtn.style.position = 'fixed';
  backToTopBtn.style.bottom = '20px';
  backToTopBtn.style.right = '20px';
  backToTopBtn.style.zIndex = '99';
  backToTopBtn.style.border = 'none';
  backToTopBtn.style.outline = 'none';
  backToTopBtn.style.backgroundColor = 'var(--primary)';
  backToTopBtn.style.color = 'white';
  backToTopBtn.style.cursor = 'pointer';
  backToTopBtn.style.padding = '15px';
  backToTopBtn.style.borderRadius = '50%';
  backToTopBtn.style.fontSize = '18px';
  backToTopBtn.style.transition = 'all 0.3s ease';
  
  document.body.appendChild(backToTopBtn);
  
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
});
// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
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
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active link highlighting
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
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
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active link highlighting
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});