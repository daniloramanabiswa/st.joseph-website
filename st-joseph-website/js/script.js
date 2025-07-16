// ==========================================
// script.js - St. Joseph Training Institute
// Modern JavaScript File (Enhanced & Modular)
// ==========================================

document.addEventListener('DOMContentLoaded', function () {

    // ========== 1. MOBILE NAVIGATION ==========
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function () {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }

    // ========== 2. DROPDOWN MENU ==========
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

    // ========== 3. OUTSIDE DROPDOWN CLICK ==========
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.nav-dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
                menu.previousElementSibling.setAttribute('aria-expanded', 'false');
            });
        }
    });

    // ========== 4. SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                if (mainNav.classList.contains('active')) {
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    mainNav.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }

                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });

                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    location.hash = targetId;
                }
            }
        });
    });

    // ========== 5. ACTIVE LINK HIGHLIGHT ==========
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (href !== 'index.html' && currentPage.includes(href))) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    // ========== 6. COOKIE CONSENT ==========
    const cookieConsent = document.querySelector('.cookie-consent');
    const cookieBtn = document.querySelector('.cookie-btn');
    if (cookieConsent && cookieBtn) {
        if (!localStorage.getItem('cookieConsent')) {
            setTimeout(() => {
                cookieConsent.style.display = 'block';
            }, 2500);
        }
        cookieBtn.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'true');
            cookieConsent.style.display = 'none';
        });
    }

    // ========== 7. ANIMATE ON SCROLL ==========
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add('animated');
            }
        });
    };
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // ========== 8. HERO SCROLL BUTTON ==========
    const scrollDown = document.querySelector('.scroll-down');
    if (scrollDown) {
        scrollDown.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    // ========== 9. NEWSLETTER FORM ==========
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
                    </div>`;
                setTimeout(() => {
                    this.innerHTML = `
                        <input type="email" placeholder="Your email address" required>
                        <button type="submit">Subscribe</button>`;
                }, 5000);
            }
        });
    }

    // ========== 10. INTERSECTION OBSERVER: LAZY LOADING ==========
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

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ========== 11. LANGUAGE SELECTOR ==========
    const langBtn = document.querySelector('.language-selector button');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const expanded = langBtn.getAttribute('aria-expanded') === 'true';
            langBtn.setAttribute('aria-expanded', !expanded);
            document.querySelector('.language-selector ul')?.classList.toggle('open');
        });
    }

    // ========== 12. DARK MODE TOGGLE ==========
    const darkToggle = document.querySelector('#dark-mode-toggle');
    if (darkToggle) {
        darkToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark-mode');
            localStorage.setItem('theme', document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light');
        });

        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark-mode');
        }
    }

    // ========== 13. ACCORDION ==========
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            header.classList.toggle('active');
            body.style.maxHeight = body.style.maxHeight ? null : `${body.scrollHeight}px`;
        });
    });

    // ========== 14. TABS ==========
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = document.querySelector(button.dataset.tabTarget);
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            button.classList.add('active');
            target.classList.add('active');
        });
    });

    // ========== 15. CAROUSEL / SLIDER ==========
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        let index = 0;
        const slides = carousel.querySelectorAll('.slide');
        const nextBtn = carousel.querySelector('.next');
        const prevBtn = carousel.querySelector('.prev');

        function showSlide(i) {
            slides.forEach((slide, idx) => {
                slide.style.display = idx === i ? 'block' : 'none';
            });
        }

        showSlide(index);

        nextBtn?.addEventListener('click', () => {
            index = (index + 1) % slides.length;
            showSlide(index);
        });

        prevBtn?.addEventListener('click', () => {
            index = (index - 1 + slides.length) % slides.length;
            showSlide(index);
        });
    });

    // ========== 16. MODALS ==========
    const modalTriggers = document.querySelectorAll('[data-modal-target]');
    const modals = document.querySelectorAll('.modal');
    const modalCloses = document.querySelectorAll('.modal-close');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modal = document.querySelector(trigger.dataset.modalTarget);
            modal?.classList.add('show');
        });
    });

    modalCloses.forEach(close => {
        close.addEventListener('click', () => {
            close.closest('.modal').classList.remove('show');
        });
    });

    window.addEventListener('click', e => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    });

    // ========== 17. FORM HANDLER ==========
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            const formData = new FormData(this);
            const submitBtn = this.querySelector('button[type="submit"]');

            try {
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = 'Sending...';
                }

                const response = await fetch('your-endpoint.php', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                this.innerHTML = `
                    <div class="form-success">
                        <i class="fas fa-check-circle"></i>
                        <p>${result.message || 'Thank you for your submission!'}</p>
                    </div>`;

            } catch (err) {
                console.error(err);
                alert('Submission failed. Please try again.');
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Submit';
                }
            }
        });
    });
});

// ========== 18. HELPER: DEBOUNCE ==========
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');

    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('active');})