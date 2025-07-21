/**
 * St. Joseph Training Centre - Language System
 * Complete implementation with language selection modal
 */

// Language translations
const translations = {
    en: {
        // Top Info Bar
        contact: "Contact",
        faq: "FAQ",
        language: "Language",
        
        // Navigation
        home: "Home",
        admissions: "Admissions",
        programs: "Programs",
        testimonials: "Testimonials",
        about: "About",
        donate: "Donate",
        
        // Hero Section
        hero_title1: "Transforming <span class='text-highlight'>Karamoja</span>",
        hero_title2: "Through Vocational Skills",
        hero_text: "\"Enter to Learn, Go to Serve\" - Empowering youth with practical training and skills to boost employment opportunities since 2021",
        explore_programs: "Explore Programs",
        support_mission: "Support Our Mission",
        
        // Mission Section
        mission_title: "Our Mission",
        mission_text: "St. Joseph the Worker Training Centre provides <strong>free vocational training</strong> to underserved youth in Karamoja, Uganda. We strive to equip youth with the necessary vocational skills that empower economic growth and independence.",
        mechanics: "Automotive Mechanics",
        catering: "Catering & Hospitality",
        carpentry: "Carpentry & Construction",
        bricklaying: "Brick Laying & Concrete Practice",
        agriculture: "Sustainable Agriculture",
        tailoring: "Tailoring",
        mission_motto: "Guided by our motto: <em>\"Enter to Learn, Go to Serve.\"</em>",
        
        // Programs Section
        programs_title: "Our Training Programs",
        catering_desc: "Professional kitchen skills, food safety, and business management for culinary careers.",
        tailoring_desc: "This project will provide training in tailoring skills increasing employment and entrepreneurial opportunities for youth in Karamoja, Uganda.",
        bcp_desc: "Bricks made by trainees will be sold to contribute to the school's income and some bricks will be used for the school's own construction needs.",
        view_all: "View All Programs",
        learn_more: "Learn More",
        duration: "Months",
        certificate: "Certificate",
        
        // Impact Section
        impact_title: "Our Impact",
        graduates: "Graduates",
        job_rate: "Job Placement Rate",
        programs_offered: "Programs Offered",
        years_service: "Years of Service",
        
        // Testimonials
        testimonials_title: "What Our Students Say",
        
        // CTA Section
        cta_title: "Ready to start your journey?",
        cta_text: "Enroll today and build the skills to succeed in your chosen career path.",
        enroll: "Enroll",
        view_programs: "View Programs",
        
        // Footer
        about_us: "About Us",
        quick_links: "Quick Links",
        contact_us: "Contact",
        copyright: "&copy; 2025 St. Joseph the Worker Training Centre. All Rights Reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
    },
    it: {
        // Italian translations
        contact: "Contatto",
        faq: "FAQ",
        language: "Lingua",
        home: "Home",
        admissions: "Ammissioni",
        programs: "Programmi",
        testimonials: "Testimonianze",
        about: "Chi Siamo",
        donate: "Donare",
        hero_title1: "Trasformare <span class='text-highlight'>Karamoja</span>",
        hero_title2: "Attraverso competenze professionali",
        hero_text: "\"Entra per Imparare, Esci per Servire\" - Potenziare i giovani con formazione pratica e competenze per aumentare le opportunità di lavoro dal 2021",
        explore_programs: "Esplora i Programmi",
        support_mission: "Sostieni la Nostra Missione",
        mission_title: "La Nostra Missione",
        mission_text: "Il Centro di Formazione San Giuseppe Lavoratore fornisce <strong>formazione professionale gratuita</strong> ai giovani svantaggiati di Karamoja, Uganda. Ci sforziamo di dotare i giovani delle competenze professionali necessarie che favoriscono la crescita economica e l'indipendenza.",
        mechanics: "Meccanica Automobilistica",
        catering: "Ristorazione e Ospitalità",
        carpentry: "Falegnameria e Costruzioni",
        bricklaying: "Muratura e Pratica del Calcestruzzo",
        agriculture: "Agricoltura Sostenibile",
        tailoring: "Sartoria",
        mission_motto: "Guidati dal nostro motto: <em>\"Entra per Imparare, Esci per Servire.\"</em>",
        programs_title: "I Nostri Programmi di Formazione",
        catering_desc: "Competenze professionali in cucina, sicurezza alimentare e gestione aziendale per carriere culinarie.",
        tailoring_desc: "Questo progetto fornirà formazione in competenze sartoriali aumentando le opportunità di lavoro e imprenditoriali per i giovani in Karamoja, Uganda.",
        bcp_desc: "I mattoni realizzati dagli allievi saranno venduti per contribuire al reddito della scuola e alcuni mattoni saranno utilizzati per le esigenze costruttive della scuola stessa.",
        view_all: "Vedi Tutti i Programmi",
        learn_more: "Scopri di Più",
        duration: "Mesi",
        certificate: "Certificato",
        impact_title: "Il Nostro Impatto",
        graduates: "Laureati",
        job_rate: "Tasso di Collocamento",
        programs_offered: "Programmi Offerti",
        years_service: "Anni di Servizio",
        testimonials_title: "Cosa Dicono i Nostri Studenti",
        cta_title: "Pronto a iniziare il tuo percorso?",
        cta_text: "Iscriviti oggi e acquisisci le competenze per avere successo nel percorso professionale scelto.",
        enroll: "Iscriviti",
        view_programs: "Vedi Programmi",
        about_us: "Chi Siamo",
        quick_links: "Link Rapidi",
        contact_us: "Contatti",
        copyright: "&copy; 2025 Centro di Formazione San Giuseppe Lavoratore. Tutti i diritti riservati.",
        privacy: "Privacy",
        terms: "Termini di Servizio"
    },
    de: {
        // German translations
        contact: "Kontakt",
        faq: "FAQ",
        language: "Sprache",
        home: "Startseite",
        admissions: "Zulassungen",
        programs: "Programme",
        testimonials: "Erfahrungsberichte",
        about: "Über Uns",
        donate: "Spenden",
        hero_title1: "Verwandlung von <span class='text-highlight'>Karamoja</span>",
        hero_title2: "Durch Berufliche Fähigkeiten",
        hero_text: "\"Trete ein, um zu lernen, gehe hinaus, um zu dienen\" - Befähigung junger Menschen durch praktische Ausbildung und Fähigkeiten zur Steigerung der Beschäftigungsmöglichkeiten seit 2021",
        explore_programs: "Programme Erkunden",
        support_mission: "Unsere Mission Unterstützen",
        mission_title: "Unsere Mission",
        mission_text: "Das Ausbildungszentrum St. Josef der Arbeiter bietet <strong>kostenlose Berufsausbildung</strong> für benachteiligte Jugendliche in Karamoja, Uganda. Wir bemühen uns, Jugendliche mit den notwendigen beruflichen Fähigkeiten auszustatten, die wirtschaftliches Wachstum und Unabhängigkeit ermöglichen.",
        mechanics: "Kfz-Mechanik",
        catering: "Gastronomie und Gastgewerbe",
        carpentry: "Zimmerei und Bauwesen",
        bricklaying: "Maurerarbeiten und Betonpraxis",
        agriculture: "Nachhaltige Landwirtschaft",
        tailoring: "Schneiderei",
        mission_motto: "Geleitet von unserem Motto: <em>\"Trete ein, um zu lernen, gehe hinaus, um zu dienen.\"</em>",
        programs_title: "Unsere Ausbildungsprogramme",
        catering_desc: "Professionelle Küchenfertigkeiten, Lebensmittelsicherheit und Betriebsführung für kulinarische Karrieren.",
        tailoring_desc: "Dieses Projekt wird Schulungen in Schneidereifähigkeiten anbieten, die Beschäftigungs- und Unternehmensmöglichkeiten für Jugendliche in Karamoja, Uganda, erhöhen.",
        bcp_desc: "Von Auszubildenden hergestellte Ziegel werden verkauft, um zum Einkommen der Schule beizutragen, und einige Ziegel werden für den eigenen Bau der Schule verwendet.",
        view_all: "Alle Programme Anzeigen",
        learn_more: "Mehr Erfahren",
        duration: "Monate",
        certificate: "Zertifikat",
        impact_title: "Unsere Wirkung",
        graduates: "Absolventen",
        job_rate: "Arbeitsvermittlungsrate",
        programs_offered: "Angebotene Programme",
        years_service: "Jahre im Dienst",
        testimonials_title: "Was Unsere Schüler Sagen",
        cta_title: "Bereit, Ihre Reise zu beginnen?",
        cta_text: "Melden Sie sich heute an und erwerben Sie die Fähigkeiten, um in Ihrer gewählten Karriere erfolgreich zu sein.",
        enroll: "Einschreiben",
        view_programs: "Programme Ansehen",
        about_us: "Über Uns",
        quick_links: "Schnellzugriff",
        contact_us: "Kontakt",
        copyright: "&copy; 2025 Ausbildungszentrum St. Josef der Arbeiter. Alle Rechte vorbehalten.",
        privacy: "Datenschutz",
        terms: "Nutzungsbedingungen"
    }
};

// Current language
let currentLanguage = 'en';

// Initialize language system
function initLanguageSystem() {
    // Set up language selector
    const languageOptions = document.querySelectorAll('.language-options li, .language-modal .language-option');
    
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            document.getElementById('languageModal').classList.add('hidden');
        });
    });
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        setLanguage(savedLanguage);
    } else {
        // Show modal if no language preference is set
        document.getElementById('languageModal').classList.remove('hidden');
    }
}

// Set the language
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
    
    // Update language selector button text
    const languageButton = document.querySelector('.language-selector button');
    if (languageButton) {
        languageButton.innerHTML = `🌍 ${translations[lang].language}`;
    }
}

// Update all text elements on the page
function updateTextElements() {
    const langData = translations[currentLanguage];
    
    // Top Info Bar
    updateText('a[href="contact.html"]', langData.contact);
    updateText('a[href="faq.html"]', langData.faq);
    
    // Navigation
    updateText('a[href="index.html"].nav-link', langData.home);
    updateText('a[href="admissions.html"]', langData.admissions);
    updateText('a[href="programs.html"]', langData.programs);
    updateText('a[href="testimonials.html"]', langData.testimonials);
    updateText('a[href="about.html"]', langData.about);
    updateText('.donate-btn', langData.donate);
    
    // Hero Section
    document.querySelector('.hero-title:nth-of-type(1)').innerHTML = langData.hero_title1;
    document.querySelector('.hero-title:nth-of-type(2)').textContent = langData.hero_title2;
    document.querySelector('.hero-text').innerHTML = langData.hero_text;
    updateText('.btn-primary', langData.explore_programs);
    updateText('.btn-secondary', langData.support_mission);
    
    // Mission Section
    updateText('.mission .section-title', langData.mission_title);
    document.querySelector('.mission-content p').innerHTML = langData.mission_text;
    updateText('.mission-list li:nth-child(1)', langData.mechanics);
    updateText('.mission-list li:nth-child(2)', langData.catering);
    updateText('.mission-list li:nth-child(3)', langData.carpentry);
    updateText('.mission-list li:nth-child(4)', langData.bricklaying);
    updateText('.mission-list li:nth-child(5)', langData.agriculture);
    updateText('.mission-list li:nth-child(6)', langData.tailoring);
    document.querySelector('.mission-content p:last-child').innerHTML = langData.mission_motto;
    
    // Programs Section
    updateText('.programs .section-title', langData.programs_title);
    updateText('.program-card:nth-of-type(1) p', langData.catering_desc);
    updateText('.program-card:nth-of-type(2) p', langData.tailoring_desc);
    updateText('.program-card:nth-of-type(3) p', langData.bcp_desc);
    updateText('.program-meta span:nth-child(1)', langData.duration);
    updateText('.program-meta span:nth-child(2)', langData.certificate);
    updateText('.btn-outline', langData.learn_more);
    updateText('.text-center .btn-primary', langData.view_all);
    
    // Impact Section
    updateText('#impact-title', langData.impact_title);
    updateText('.impact-label:nth-of-type(1)', langData.graduates);
    updateText('.impact-label:nth-of-type(2)', langData.job_rate);
    updateText('.impact-label:nth-of-type(3)', langData.programs_offered);
    updateText('.impact-label:nth-of-type(4)', langData.years_service);
    
    // Testimonials
    updateText('#testimonials-title', langData.testimonials_title);
    
    // CTA Section
    updateText('.cta h2', langData.cta_title);
    updateText('.cta p', langData.cta_text);
    updateText('.cta .btn-primary', langData.enroll);
    updateText('.cta .btn-outline', langData.view_programs);
    
    // Footer
    updateText('.footer-col:nth-child(1) h3', langData.about_us);
    updateText('.footer-col:nth-child(2) h3', langData.quick_links);
    updateText('.footer-col:nth-child(4) h3', langData.contact_us);
    document.querySelector('.footer-bottom p').innerHTML = langData.copyright;
    updateText('.footer-legal a:nth-child(1)', langData.privacy);
    updateText('.footer-legal a:nth-child(2)', langData.terms);
}

// Helper function to update text content
function updateText(selector, text) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        el.textContent = text;
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSystem();
    
    // Mobile menu toggle (existing functionality)
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.main-nav');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
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
