// === main.js - Complete JavaScript for St. Joseph Training Center ===

document.addEventListener('DOMContentLoaded', function () {
  // === Mobile Navigation Toggle ===
  const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', function () {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
      this.innerHTML = mainNav.classList.contains('active') ? '&times;' : '&#9776;';
    });
  }

  // === Dropdown Menus ===
  const dropdownTriggers = document.querySelectorAll('.nav-dropdown > button');
  dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      const dropdown = this.nextElementSibling;
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu !== dropdown) {
          menu.style.display = 'none';
          menu.previousElementSibling.setAttribute('aria-expanded', 'false');
        }
      });
      this.setAttribute('aria-expanded', !isExpanded);
      dropdown.style.display = isExpanded ? 'none' : 'block';
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.display = 'none';
        menu.previousElementSibling?.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // === Smooth Scroll for Anchor Links ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl && targetId !== '#') {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, null, targetId);
      }
    });
  });

  // === Active Page Link Highlighting ===
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (href !== 'index.html' && currentPage.includes(href))) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // === Animate on Scroll (Fade-in) ===
  const fadeIns = document.querySelectorAll('.program-card, .testimonial-card, .animate-on-scroll');
  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  fadeIns.forEach(el => fadeObserver.observe(el));

  // === Lazy Loading Images ===
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.removeAttribute('loading');
          observer.unobserve(img);
        }
      });
    });
    lazyImages.forEach(img => imageObserver.observe(img));
  }

  // === Cookie Consent ===
  const cookieConsent = document.querySelector('.cookie-consent');
  const cookieBtn = document.querySelector('.cookie-btn');
  if (cookieConsent && cookieBtn) {
    if (!localStorage.getItem('cookieConsent')) {
      setTimeout(() => {
        cookieConsent.style.display = 'block';
      }, 2000);
    }
    cookieBtn.addEventListener('click', function () {
      localStorage.setItem('cookieConsent', 'true');
      cookieConsent.style.display = 'none';
    });
  }

  // === Newsletter Form Submission ===
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        this.innerHTML = `
          <div class="newsletter-success">
            <i class="fas fa-check-circle"></i>
            <p>Thank you for subscribing!</p>
          </div>
        `;
        setTimeout(() => {
          this.innerHTML = `
            <input type="email" placeholder="Your email address" required>
            <button type="submit">Subscribe</button>
          `;
        }, 5000);
      }
    });
  }

  // === Contact or Application Form Validation ===
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      const name = this.querySelector('#name');
      const email = this.querySelector('#email');
      const message = this.querySelector('#message');
      if ((name && !name.value) || (email && !email.value) || (message && !message.value)) {
        e.preventDefault();
        alert('Please fill in all fields.');
      }
    });
  });

  // === Language Dropdown Expand (Basic) ===
  const langBtn = document.querySelector('.language-selector button');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const expanded = langBtn.getAttribute('aria-expanded') === 'true';
      langBtn.setAttribute('aria-expanded', !expanded);
      const dropdown = document.querySelector('.language-options');
      if (dropdown) {
        dropdown.classList.toggle('visible');
      }
    });
  }

  // === Scroll Down Arrow in Hero ===
  const scrollDown = document.querySelector('.scroll-down');
  if (scrollDown) {
    scrollDown.addEventListener('click', () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  }
});
// ===== Language Switch Handling =====
const langToggle = document.querySelector('.language-selector button');
const langOptions = document.querySelector('.language-options');

if (langToggle && langOptions) {
  langToggle.addEventListener('click', () => {
    const expanded = langToggle.getAttribute('aria-expanded') === 'true';
    langToggle.setAttribute('aria-expanded', !expanded);
    langOptions.classList.toggle('visible');
  });

  langOptions.querySelectorAll('li').forEach(option => {
    option.addEventListener('click', () => {
      const selectedLang = option.dataset.lang; // example: "en", "it", "de"
      localStorage.setItem('siteLang', selectedLang);
      location.reload(); // Later replace this with dynamic language change
    });
  });
}
const backToTopBtn = document.querySelector('.back-to-top');
if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('visible', window.scrollY > 500);
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
