/* ==========================================================================
   KÜRŞAT YILMAZ PORTFOLIO — AWWWARDS JURY EDITION
   Zero-Build Vanilla Stack with Lenis, GSAP, WebGL & Bilingual Architecture
   ========================================================================== */

// ============================================
// 1. FLAGSHIP PROJECT SHOWCASE DATA (ENTERPRISE AI & PRODUCTION SUITES)
// ============================================
const projectsData = {
    itibar: {
        title: "İtibar",
        brandName: "itibar",
        tagline: { 
            tr: '"itibar\'dan tasarruf olmaz."', 
            en: '"There is no compromise on reputation."' 
        },
        category: { 
            tr: "B2B İtibar Savunma & Hukuk Analizi", 
            en: "B2B Reputation Defense & Statutory Law" 
        },
        status: { 
            tr: "Canlı Servis", 
            en: "Live in Production" 
        },
        statusType: "active",
        badge: { 
            tr: "Canlı Servis ↗", 
            en: "Live Platform ↗" 
        },
        liveUrl: "https://www.itibar.app/",
        icon: "assets/projects/itibar/logo-mark.svg",
        logo: "assets/projects/itibar/logo-mark.svg",
        image: "assets/projects/itibar/itibar-luxury-bg.jpg",
        previewImage: "assets/projects/itibar/itibar-luxury-bg.jpg",
        gradient: "linear-gradient(135deg, #10b981, #059669)",
        spotlightColor: "16, 185, 129",
        filter: "web",
        filterCategory: ["ai", "enterprise"],
        description: {
            tr: "Organize 1-yıldızlı haksız yorum saldırılarına karşı deterministik politika kural motoru, TCK/TTK yasal dayanakları ve macOS Headless Chrome PDF raporlama boru hattıyla çalışan otonom B2B itibar savunma platformu.",
            en: "Autonomous B2B reputation defense platform running on deterministic policy classification, statutory Turkish Commercial / Criminal law rules, and macOS Headless Chrome executive PDF report compilation."
        },
        metrics: {
            tr: [
                { value: "%100", label: "Deterministik NLP", desc: "Sıfır LLM maliyeti, anlık kural motoru" },
                { value: "24+", label: "İhlal Türü Tespiti", desc: "TCK, TTK ve Google politikaları" },
                { value: "4 Döviz", label: "Dinamik ROI Motoru", desc: "GBP, USD, EUR & TRY ciro kurtarımı" },
                { value: "Headless", label: "macOS Chrome PDF", desc: "Karar verici hekime WhatsApp teslimi" }
            ],
            en: [
                { value: "100%", label: "Deterministic NLP", desc: "Zero LLM cost, instant rule execution" },
                { value: "24+", label: "Violation Classes", desc: "Statutory law & platform policy checks" },
                { value: "4 Currencies", label: "Dynamic ROI Engine", desc: "GBP, USD, EUR & TRY revenue recovery" },
                { value: "Headless", label: "macOS Chrome PDF", desc: "Automated WhatsApp delivery to leads" }
            ]
        },
        features: {
            tr: [
                "24+ ihlal türünü saptayan sıfır bağımlılıklı deterministik kural motoru",
                "TCK, TTK ve platform politikalarına dayalı resmi itiraz dilekçesi derleyicisi",
                "Gerçek zamanlı ciro kaybı & dinamik ROI hesaplama motoru (GBP/USD/EUR/TRY)",
                "macOS Headless Chrome ile karar vericilere özel lüks karanlık mod PDF raporlama",
                "Karar verici hekim ve yöneticilere doğrudan otonom WhatsApp teslimat altyapısı"
            ],
            en: [
                "Zero-dependency deterministic rule engine detecting 24+ policy violations",
                "Official legal appeal generator referencing statutory law and platform policies",
                "Real-time revenue hemorrhage & dynamic ROI calculator (GBP/USD/EUR/TRY)",
                "macOS Headless Chrome compiled executive dark-mode PDF reputation audit report",
                "Autonomous direct WhatsApp delivery pipeline for healthcare and enterprise executives"
            ]
        },
        tech: ["Vanilla JS", "Node.js", "Chrome Headless", "Jamstack", "REST API", "TCK/TTK Motoru", "Otonom PDF", "WhatsApp API"],
        github: "https://github.com/DevKursat/itibar",
        githubRepo: "itibar",
        stars: 34,
        forks: 5
    },
    unutma: {
        title: "Unutma.",
        brandName: "Unutma.",
        tagline: { 
            tr: "Mesafe tanımaz, unutulmaz.", 
            en: "Bridging distance with timeless ink." 
        },
        category: { 
            tr: "Sivil Teknoloji & Regülasyon", 
            en: "Civic Tech & Regulatory Platform" 
        },
        status: { 
            tr: "Canlı Servis", 
            en: "Live Platform" 
        },
        statusType: "active",
        badge: { 
            tr: "Canlı Servis ↗", 
            en: "Live Platform ↗" 
        },
        liveUrl: "https://unutma.itibar.app",
        icon: "assets/projects/unutma-seal.png",
        logo: "assets/projects/unutma-seal.png",
        image: "assets/projects/unutma-hero.jpg",
        previewImage: "assets/projects/unutma-hero.jpg",
        gradient: "linear-gradient(135deg, #b93826, #e06d53)",
        spotlightColor: "185, 56, 38",
        filter: "web",
        filterCategory: ["mobile", "enterprise"],
        description: {
            tr: "Cezaevlerindeki tutuklu ve hükümlülere fildişi kâğıt, gerçek mum mühür ve PTT Taahhütlü mektup gönderimini sağlayan; cezaevi mevzuatına uyumlu yapay zekâ asistanlı sivil teknoloji platformu.",
            en: "Civic tech and postal communication platform enabling users to send wax-sealed certified letters on ivory paper to inmates, compliant with prison regulations and assisted by AI."
        },
        metrics: {
            tr: [
                { value: "%100", label: "Fiziksel Teslimat", desc: "Fildişi kâğıt ve gerçek mum mühür" },
                { value: "AI Uyum", label: "Cezaevi Mevzuatı", desc: "Mevzuata uygun mektup asistanı" },
                { value: "81 İl", label: "Akıllı Adresleme", desc: "Tüm T-Tipi, F-Tipi ve Kapalı Cezaevleri" },
                { value: "PTT", label: "Barkodlu Takip", desc: "Anlık SMS ve e-posta bilgilendirmesi" }
            ],
            en: [
                { value: "100%", label: "Physical Delivery", desc: "Ivory paper with genuine wax seal" },
                { value: "AI Compliant", label: "Correctional Rules", desc: "Regulated letter generation assistant" },
                { value: "81 Cities", label: "Facility Directory", desc: "All state correctional facilities" },
                { value: "PTT Track", label: "Certified Barcode", desc: "Real-time SMS and mail dispatch" }
            ]
        },
        features: {
            tr: [
                "Fildişi kâğıt ve gerçek mum mühürlü fiziksel teslimat",
                "Cezaevi mevzuatına uyumlu yapay zekâ mektup asistanı",
                "İl / ilçe bazlı otomatik cezaevi ve koğuş adresleme sistemi",
                "PTT barkodlu takip, anlık SMS ve e-posta bilgilendirmesi"
            ],
            en: [
                "Physical delivery on ivory paper with genuine wax seal",
                "AI letter writing assistant compliant with prison regulations",
                "Automated facility and ward address resolution by district",
                "PTT barcode tracking with real-time SMS and email updates"
            ]
        },
        tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Gemini AI", "PTT Barkod API", "Mevzuat NLP", "PostgreSQL", "Edge Runtime"],
        github: "https://github.com/DevKursat/unutma",
        githubRepo: "unutma",
        stars: 18,
        forks: 3
    }
};

// ============================================
// 2. LUXURY MULTI-LANGUAGE SYSTEM (TR / EN / DE / FR / ES / AZ)
// ============================================
const SUPPORTED_LANGUAGES = {
    tr: {
        code: 'tr',
        name: 'Türkçe',
        flagSvg: `<svg viewBox="0 0 24 16" width="22" height="15" class="flag-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="16" rx="3" fill="#E30A17"/>
            <circle cx="8.5" cy="8" r="4.2" fill="#FFFFFF"/>
            <circle cx="9.6" cy="8" r="3.36" fill="#E30A17"/>
            <polygon points="13.2,5.6 13.7,7.1 15.2,7.2 14.1,8.2 14.4,9.7 13.2,8.8 12,9.7 12.3,8.2 11.2,7.2 12.7,7.1" fill="#FFFFFF"/>
        </svg>`
    },
    en: {
        code: 'en',
        name: 'English',
        flagSvg: `<svg viewBox="0 0 24 16" width="22" height="15" class="flag-svg" xmlns="http://www.w3.org/2000/svg">
            <clipPath id="ukClipNav"><rect width="24" height="16" rx="3"/></clipPath>
            <g clip-path="url(#ukClipNav)">
                <rect width="24" height="16" fill="#012169"/>
                <path d="M0 0L24 16M24 0L0 16" stroke="#FFFFFF" stroke-width="3"/>
                <path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" stroke-width="1.8"/>
                <path d="M12 0V16M0 8H24" stroke="#FFFFFF" stroke-width="5"/>
                <path d="M12 0V16M0 8H24" stroke="#C8102E" stroke-width="3"/>
            </g>
        </svg>`
    },
    de: {
        code: 'de',
        name: 'Deutsch',
        flagSvg: `<svg viewBox="0 0 24 16" width="22" height="15" class="flag-svg" xmlns="http://www.w3.org/2000/svg">
            <clipPath id="deClipNav"><rect width="24" height="16" rx="3"/></clipPath>
            <g clip-path="url(#deClipNav)">
                <rect width="24" height="5.33" y="0" fill="#000000"/>
                <rect width="24" height="5.34" y="5.33" fill="#DD0000"/>
                <rect width="24" height="5.33" y="10.67" fill="#FFCE00"/>
            </g>
        </svg>`
    },
    fr: {
        code: 'fr',
        name: 'Français',
        flagSvg: `<svg viewBox="0 0 24 16" width="22" height="15" class="flag-svg" xmlns="http://www.w3.org/2000/svg">
            <clipPath id="frClipNav"><rect width="24" height="16" rx="3"/></clipPath>
            <g clip-path="url(#frClipNav)">
                <rect width="8" height="16" x="0" fill="#002395"/>
                <rect width="8" height="16" x="8" fill="#FFFFFF"/>
                <rect width="8" height="16" x="16" fill="#ED2939"/>
            </g>
        </svg>`
    },
    es: {
        code: 'es',
        name: 'Español',
        flagSvg: `<svg viewBox="0 0 24 16" width="22" height="15" class="flag-svg" xmlns="http://www.w3.org/2000/svg">
            <clipPath id="esClipNav"><rect width="24" height="16" rx="3"/></clipPath>
            <g clip-path="url(#esClipNav)">
                <rect width="24" height="4" y="0" fill="#AA151B"/>
                <rect width="24" height="8" y="4" fill="#F1BF00"/>
                <rect width="24" height="4" y="12" fill="#AA151B"/>
            </g>
        </svg>`
    },
    az: {
        code: 'az',
        name: 'Azərbaycan',
        flagSvg: `<svg viewBox="0 0 24 16" width="22" height="15" class="flag-svg" xmlns="http://www.w3.org/2000/svg">
            <clipPath id="azClipNav"><rect width="24" height="16" rx="3"/></clipPath>
            <g clip-path="url(#azClipNav)">
                <rect width="24" height="5.33" y="0" fill="#00B5E2"/>
                <rect width="24" height="5.34" y="5.33" fill="#EF3340"/>
                <rect width="24" height="5.33" y="10.67" fill="#509E2F"/>
                <circle cx="11.2" cy="8" r="2.2" fill="#FFFFFF"/>
                <circle cx="11.7" cy="8" r="1.8" fill="#EF3340"/>
                <polygon points="14,6.8 14.3,7.5 15,7.7 14.5,8.2 14.6,8.9 14,8.5 13.4,8.9 13.5,8.2 13,7.7 13.7,7.5" fill="#FFFFFF"/>
            </g>
        </svg>`
    }
};

const CORE_I18N = {
    de: {
        'Hakkımda': 'Über mich',
        'Projeler': 'Projekte',
        'Beceriler': 'Fähigkeiten',
        'Beceriler & Teknoloji': 'Fähigkeiten & Tech',
        'Yazılar': 'Essays',
        'Yazılar & Analizler': 'Essays & Analysen',
        'İletişim': 'Kontakt',
        'İletişim & Teklif': 'Kontakt & Angebot',
        'Bağlantılar ↗': 'Links ↗',
        'Tüm Bağlantılar (Dizin)': 'Alle Links (Verzeichnis)',
        'KAPAT': 'SCHLIESSEN',
        'KONUM & ZAMAN': 'STANDORT & ZEIT',
        'DOĞRUDAN İLETİŞİM': 'DIREKTER KONTAKT',
        'DİL SEÇİMİ': 'SPRACHE WÄHLEN'
    },
    fr: {
        'Hakkımda': 'À propos',
        'Projeler': 'Projets',
        'Beceriler': 'Compétences',
        'Beceriler & Teknoloji': 'Compétences & Tech',
        'Yazılar': 'Essais',
        'Yazılar & Analizler': 'Essais & Teardowns',
        'İletişim': 'Contact',
        'İletişim & Teklif': 'Contact & Proposition',
        'Bağlantılar ↗': 'Liens ↗',
        'Tüm Bağlantılar (Dizin)': 'Tous les Liens (Répertoire)',
        'KAPAT': 'FERMER',
        'KONUM & ZAMAN': 'LIEU & HEURE',
        'DOĞRUDAN İLETİŞİM': 'CONTACT DIRECT',
        'DİL SEÇİMİ': 'CHOISIR LA LANGUE'
    },
    es: {
        'Hakkımda': 'Sobre mí',
        'Projeler': 'Proyectos',
        'Beceriler': 'Habilidades',
        'Beceriler & Teknoloji': 'Habilidades & Tech',
        'Yazılar': 'Artículos',
        'Yazılar & Analizler': 'Artículos & Análisis',
        'İletişim': 'Contacto',
        'İletişim & Teklif': 'Contacto & Propuesta',
        'Bağlantılar ↗': 'Enlaces ↗',
        'Tüm Bağlantılar (Dizin)': 'Todos los Enlaces (Directorio)',
        'KAPAT': 'CERRAR',
        'KONUM & ZAMAN': 'UBICACIÓN & HORA',
        'DOĞRUDAN İLETİŞİM': 'CONTACTO DIRECTO',
        'DİL SEÇİMİ': 'SELECCIONAR IDIOMA'
    },
    az: {
        'Hakkımda': 'Haqqımda',
        'Projeler': 'Layihələr',
        'Beceriler': 'Bacarıqlar',
        'Beceriler & Teknoloji': 'Bacarıqlar & Texnologiya',
        'Yazılar': 'Məqalələr',
        'Yazılar & Analizler': 'Məqalələr & Təhlillər',
        'İletişim': 'Əlaqə',
        'İletişim & Teklif': 'Əlaqə & Təklif',
        'Bağlantılar ↗': 'Keçidlər ↗',
        'Tüm Bağlantılar (Dizin)': 'Bütün Keçidlər (Kataloq)',
        'KAPAT': 'BAĞLA',
        'KONUM & ZAMAN': 'MƏKAN & ZAMAN',
        'DOĞRUDAN İLETİŞİM': 'BİRBAŞA ƏLAQƏ',
        'DİL SEÇİMİ': 'DİL SEÇİMİ'
    }
};

function getPreferredLanguage() {
    const browserLanguages = navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language || navigator.userLanguage || 'tr'];

    for (const bLang of browserLanguages) {
        const prefix = bLang.toLowerCase().slice(0, 2);
        if (SUPPORTED_LANGUAGES[prefix]) return prefix;
    }
    return 'tr';
}

let currentLang = localStorage.getItem('lang') || getPreferredLanguage();
if (!SUPPORTED_LANGUAGES[currentLang]) currentLang = 'tr';

function updateLocalizedLinks(lang) {
    document.querySelectorAll('[data-tr-href][data-en-href]').forEach(el => {
        const href = el.getAttribute(`data-${lang}-href`) || el.getAttribute('data-en-href') || el.getAttribute('data-tr-href');
        if (href) el.setAttribute('href', href);
    });
}

function setLanguage(lang) {
    if (!SUPPORTED_LANGUAGES[lang]) lang = 'tr';
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    
    // Update the circular flag button in navbar
    const flagSlot = document.getElementById('currentFlagSlot');
    if (flagSlot && SUPPORTED_LANGUAGES[lang]) {
        flagSlot.innerHTML = SUPPORTED_LANGUAGES[lang].flagSvg;
    }

    // Update active state in dropdown list
    document.querySelectorAll('.lang-option-item').forEach(item => {
        const isMatch = item.dataset.lang === lang;
        item.classList.toggle('active', isMatch);
        item.setAttribute('aria-selected', String(isMatch));
    });

    // Update all translatable elements with robust fallback (data-[lang] -> CORE_I18N -> data-en -> data-tr)
    document.querySelectorAll('[data-tr][data-en]').forEach(el => {
        let text = el.getAttribute(`data-${lang}`);
        if (!text && CORE_I18N[lang]) {
            const trText = el.getAttribute('data-tr');
            if (CORE_I18N[lang][trText]) {
                text = CORE_I18N[lang][trText];
            }
        }
        if (!text) {
            text = (lang === 'tr') ? el.getAttribute('data-tr') : (el.getAttribute('data-en') || el.getAttribute('data-tr'));
        }
        if (text) el.textContent = text;
    });

    document.querySelectorAll('[data-tr-alt][data-en-alt]').forEach(el => {
        const alt = el.getAttribute(`data-${lang}-alt`) || el.getAttribute('data-en-alt') || el.getAttribute('data-tr-alt');
        if (alt) el.setAttribute('alt', alt);
    });

    updateLocalizedLinks(lang);
    
    // Update modal if open
    const modal = document.getElementById('projectModal');
    if (modal && modal.classList.contains('active')) {
        const projectId = modal.dataset.projectId;
        if (projectId && projectsData[projectId]) {
            updateModalContent(projectsData[projectId]);
        }
    }
    
    // Re-render project cards & more projects card with updated text
    renderProjects();

    // Re-render architectural skills bento with updated language
    if (typeof initSkillsBento === 'function') {
        initSkillsBento();
    }

    // Update active discipline readout in About
    const activeChip = document.querySelector('.discipline-chip.active');
    if (activeChip) {
        activeChip.dispatchEvent(new Event('mouseenter'));
    }
}

function initLanguage() {
    const pickerBtn = document.getElementById('langPickerBtn');
    const dropdownPanel = document.getElementById('langDropdownPanel');
    const wrapper = document.getElementById('langPickerWrapper');

    setLanguage(currentLang);

    if (pickerBtn && dropdownPanel) {
        pickerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dropdownPanel.classList.toggle('open');
            pickerBtn.classList.toggle('active', isOpen);
            pickerBtn.setAttribute('aria-expanded', String(isOpen));
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (wrapper && !wrapper.contains(e.target)) {
                dropdownPanel.classList.remove('open');
                pickerBtn.classList.remove('active');
                pickerBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && dropdownPanel.classList.contains('open')) {
                dropdownPanel.classList.remove('open');
                pickerBtn.classList.remove('active');
                pickerBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Bind option click handlers
    document.querySelectorAll('.lang-option-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetLang = btn.dataset.lang;
            if (targetLang) {
                setLanguage(targetLang);
                if (dropdownPanel) {
                    dropdownPanel.classList.remove('open');
                    if (pickerBtn) {
                        pickerBtn.classList.remove('active');
                        pickerBtn.setAttribute('aria-expanded', 'false');
                    }
                }
            }
        });
    });

    document.querySelectorAll('[data-tr-href][data-en-href]').forEach(link => {
        link.addEventListener('click', () => {
            updateLocalizedLinks(currentLang);
        });
    });
}

// Awwwards Mobile Tactile Micro-Haptics
function triggerHaptic(duration = 10) {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        try { navigator.vibrate(duration); } catch (e) {}
    }
}

// ============================================
// 3. MOTION & SMOOTH SCROLL ENGINE (LENIS + GSAP)
// ============================================
let lenis = null;
let currentScrollVelocity = 0;

function initLenis() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || typeof Lenis === 'undefined') return;

    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth < 768);

    try {
        lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: isTouchDevice ? 0 : 1, // Do not hijack native iOS/Android momentum touch scrolling!
            syncTouch: false
        });

        if (typeof ScrollTrigger !== 'undefined') {
            lenis.on('scroll', ScrollTrigger.update);
        }

        if (typeof gsap !== 'undefined') {
            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0);
        } else {
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
        }

        // Velocity tracking for Awwwards cursor-reactive marquee & audio interactions
        lenis.on('scroll', (e) => {
            currentScrollVelocity = e.velocity || 0;
        });
    } catch (err) {
        console.warn("Lenis init fallback:", err);
    }
}

// ============================================
// 4. STUDIO FREIGHT SPLIT SHUTTER MONOLITH PRELOADER (AWWWARDS SOTD)
// ============================================
function initLoader() {
    const preloader = document.getElementById('sitePreloader');
    const progressNum = document.getElementById('loaderProgress');
    const barFill = document.getElementById('loaderBarFill');
    const statusText = document.getElementById('loaderStatusText');
    const sigInkRect = document.getElementById('sigInkRect');

    if (!preloader) {
        initHeroReveal();
        return;
    }

    document.body.style.overflow = 'hidden';

    let progress = 0;
    const startTime = performance.now();
    const minDuration = 520; // Snappy, zero delay so user is never kept waiting

    const interval = setInterval(() => {
        const elapsed = performance.now() - startTime;
        
        let targetProgress = Math.min(Math.floor((elapsed / minDuration) * 98), 98);
        if (elapsed >= minDuration) {
            targetProgress = 100;
        }

        if (progress < targetProgress) {
            progress += 4;
            if (progress > targetProgress) progress = targetProgress;
        }

        // Natural unpadded counter (0, 7, 72, 100 - no leading zeroes)
        if (progressNum) {
            progressNum.textContent = String(progress);
        }

        // Seam hairline indicator
        if (barFill) {
            barFill.style.width = `${progress}%`;
        }

        // Unmask real handwritten signature from left to right as pen sweeps
        if (sigInkRect) {
            const inkWidth = (progress / 100) * 620;
            sigInkRect.setAttribute('width', String(inkWidth));
        }

        // Status transitions
        if (statusText) {
            const isTr = currentLang === 'tr';
            if (progress < 45) {
                statusText.textContent = isTr ? 'MİMARİ ÇEKİRDEK BAŞLATILIYOR' : 'INITIALIZING CORE ARCHITECTURE';
            } else if (progress < 85) {
                statusText.textContent = isTr ? 'İMZA VE KİMLİK DOĞRULANIYOR' : 'VERIFYING SIGNATURE & IDENTITY';
            } else {
                statusText.textContent = isTr ? 'SİSTEM HAZIR • AÇILIYOR' : 'SYSTEM READY • OPENING';
            }
        }

        if (progress >= 100) {
            clearInterval(interval);
            finishPreloader();
        }
    }, 16);

    function finishPreloader() {
        const shutterTop = document.getElementById('shutterTop');
        const shutterBottom = document.getElementById('shutterBottom');
        const shutterStage = document.getElementById('shutterStage');
        const shutterSeam = document.getElementById('shutterSeamLine');

        if (typeof gsap !== 'undefined' && shutterTop && shutterBottom) {
            document.documentElement.classList.remove('is-loading');
            // Set initial state of hero elements BEFORE shutter split so there is zero flash
            gsap.set('.hero-badge, .hero-title .title-line, .hero-roles, .hero-description, .hero-cta', {
                y: 30,
                opacity: 0
            });

            const tl = gsap.timeline({
                onComplete: () => {
                    preloader.style.display = 'none';
                    document.body.style.overflow = '';
                    initScrollAnimations();
                }
            });

            // Step 1: Stage elevates and scales slightly
            tl.to(shutterStage, {
                opacity: 0,
                scale: 1.03,
                duration: 0.22,
                ease: 'power2.in'
            });

            if (shutterSeam) {
                tl.to(shutterSeam, { opacity: 0, duration: 0.15 }, "-=0.18");
            }

            // Step 2: DUAL SPLIT SHUTTER (Fast, snappy Awwwards shutter release)
            tl.to(shutterTop, {
                yPercent: -100,
                duration: 0.85,
                ease: 'power4.inOut'
            }, "-=0.1");

            tl.to(shutterBottom, {
                yPercent: 100,
                duration: 0.85,
                ease: 'power4.inOut'
            }, "<"); // Simultaneous split!

            // Step 3: Hero section blooms in smoothly ONCE in sync with shutter release
            tl.fromTo('#hero', 
                { scale: 0.96, opacity: 0.6 },
                { scale: 1, opacity: 1, duration: 0.75, ease: 'power3.out' },
                "-=0.6"
            );

            tl.to('.hero-badge, .hero-title .title-line, .hero-roles, .hero-description, .hero-cta', {
                y: 0,
                opacity: 1,
                duration: 0.75,
                stagger: 0.08,
                ease: "power3.out"
            }, "-=0.5");
        } else {
            document.documentElement.classList.remove('is-loading');
            preloader.style.display = 'none';
            document.body.style.overflow = '';
            initHeroReveal();
            initScrollAnimations();
        }
    }
}

function initHeroReveal() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (typeof gsap !== 'undefined') {
        try {
            gsap.fromTo('.hero-badge, .hero-title .title-line, .hero-roles, .hero-description, .hero-cta, .hero-stats-banner',
                { y: 35, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.85, stagger: 0.08, ease: "power3.out", delay: 0.1 }
            );
        } catch (e) {
            console.warn("Hero reveal GSAP fallback:", e);
        }
    }
}

// ============================================
// 5. INTERACTIVE RAW WEBGL HERO SHADER
// ============================================
function initHeroShader() {
    const canvas = document.getElementById('heroShaderCanvas');
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
        console.warn("WebGL not supported; falling back to CSS background.");
        return;
    }

    const vertexSource = `
        attribute vec2 a_position;
        void main() {
            gl_Position = vec4(a_position, 0.0, 1.0);
        }
    `;

    const fragmentSource = `
        precision highp float;
        uniform vec2 u_resolution;
        uniform float u_time;
        uniform vec2 u_mouse;
        uniform float u_velocity;

        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

        float snoise(vec2 v) {
            const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
            vec2 i  = floor(v + dot(v, C.yy) );
            vec2 x0 = v -   i + dot(i, C.xx);
            vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod289(i);
            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m = m*m;
            m = m*m;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
        }

        void main() {
            vec2 st = gl_FragCoord.xy / u_resolution.xy;
            st.x *= u_resolution.x / u_resolution.y;

            vec2 mouseNorm = u_mouse / u_resolution.xy;
            mouseNorm.x *= u_resolution.x / u_resolution.y;
            float distMouse = distance(st, mouseNorm);

            float t = u_time * 0.16 + u_velocity * 0.0006;

            float n1 = snoise(st * 1.6 + vec2(t * 0.18, t * 0.12));
            float n2 = snoise(st * 3.0 - vec2(t * 0.22, -t * 0.15) + vec2(n1 * 0.45));
            float n = (n1 * 0.65 + n2 * 0.35);

            n += (1.0 - smoothstep(0.0, 0.48, distMouse)) * 0.35;

            // Palette:
            // Obsidian #050507 (0.02, 0.02, 0.027)
            // Cyber Cyan #00D9FF (0.0, 0.85, 1.0)
            // Emerald #10B981 (0.063, 0.725, 0.506)
            // Crimson #B93826 (0.725, 0.22, 0.149)
            vec3 c_bg = vec3(0.02, 0.02, 0.027);
            vec3 c_cyan = vec3(0.0, 0.85, 1.0);
            vec3 c_emerald = vec3(0.063, 0.725, 0.506);
            vec3 c_crimson = vec3(0.725, 0.22, 0.149);

            float v1 = smoothstep(-0.25, 0.55, n);
            float v2 = smoothstep(0.18, 0.80, n);
            float v3 = smoothstep(0.45, 0.95, n);

            vec3 color = c_bg;
            color = mix(color, c_cyan * 0.36, v1 * 0.4);
            color = mix(color, c_emerald * 0.38, v2 * 0.32);
            color = mix(color, c_crimson * 0.42, v3 * (1.0 - smoothstep(0.0, 0.5, distMouse)) * 0.55);

            // Subtle edge vignette
            vec2 uv = gl_FragCoord.xy / u_resolution.xy;
            float vig = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
            vig = clamp(pow(16.0 * vig, 0.28), 0.0, 1.0);

            gl_FragColor = vec4(color * vig, 1.0);
        }
    `;

    function createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error(gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    const vertShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program));
        return;
    }
    gl.useProgram(program);

    // Quad geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1
    ]), gl.STATIC_DRAW);

    const posAttr = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const resLoc = gl.getUniformLocation(program, "u_resolution");
    const timeLoc = gl.getUniformLocation(program, "u_time");
    const mouseLoc = gl.getUniformLocation(program, "u_mouse");
    const velLoc = gl.getUniformLocation(program, "u_velocity");

    let mouseX = window.innerWidth * 0.5;
    let mouseY = window.innerHeight * 0.5;
    let currentMouseX = mouseX;
    let currentMouseY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = window.innerHeight - e.clientY;
    });

    window.addEventListener('touchmove', (e) => {
        if (e.touches && e.touches.length > 0) {
            mouseX = e.touches[0].clientX;
            mouseY = window.innerHeight - e.touches[0].clientY;
        }
    }, { passive: true });

    function resize() {
        const isMobile = window.innerWidth < 768;
        const dpr = isMobile ? Math.min(window.devicePixelRatio || 1, 1.0) : Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width = canvas.parentElement.offsetWidth * dpr;
        canvas.height = canvas.parentElement.offsetHeight * dpr;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener('resize', resize);

    let isVisible = true;
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        const observer = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;
        }, { threshold: 0.05 });
        observer.observe(heroSection);
    }

    let startTime = performance.now();
    function render() {
        if (isVisible) {
            const time = (performance.now() - startTime) * 0.001;
            currentMouseX += (mouseX - currentMouseX) * 0.08;
            currentMouseY += (mouseY - currentMouseY) * 0.08;

            gl.uniform2f(resLoc, canvas.width, canvas.height);
            gl.uniform1f(timeLoc, time);
            gl.uniform2f(mouseLoc, currentMouseX * (canvas.width / window.innerWidth), currentMouseY * (canvas.height / window.innerHeight));
            gl.uniform1f(velLoc, currentScrollVelocity);

            gl.drawArrays(gl.TRIANGLES, 0, 6);
        }
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

// ============================================
// 6. SINGLE MAGNETIC MORPHING CURSOR & MAGNETIC PULL
// ============================================
function initCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const cursorLabel = follower ? follower.querySelector('.cursor-label') : null;

    if (!cursor || !follower) return;

    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        cursor.style.display = 'none';
        follower.style.display = 'none';
        return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let followerX = mouseX;
    let followerY = mouseY;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function renderCursor() {
        cursorX += (mouseX - cursorX) * 0.45;
        cursorY += (mouseY - cursorY) * 0.45;
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;

        followerX += (mouseX - followerX) * 0.18;
        followerY += (mouseY - followerY) * 0.18;
        follower.style.left = `${followerX}px`;
        follower.style.top = `${followerY}px`;

        requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Magnetic snaps on buttons & links (blog-card hariç tutularak çakışma engellendi)
    const magneticSelector = '.btn, .nav-link, .lang-btn, .social-link, .skill-filter-btn, .project-card-expand, .contact-submit-btn, .blog-nav-arrow, .social-circle-mini-btn, .nav-menu-btn, .menu-close-btn, .footer-pill-btn, .back-to-top, .fan-nav-btn, .btn-linkedin-follow, .menu-social-icon-btn, .discipline-chip';
    
    document.addEventListener('mouseover', (e) => {
        const target = e.target;
        const blogCard = target.closest('.blog-card, .blog-fan-card');
        const projectCard = target.closest('.project-card:not(.more-projects-card)');
        const githubCard = target.closest('.more-projects-card');
        const magneticTarget = target.closest(magneticSelector);

        // Blog card üzerinde is-magnetic ile çakışmasın; doğrudan is-blog-hover olsun
        if (blogCard) {
            follower.classList.remove('is-magnetic', 'is-project-hover', 'is-github-hover');
            follower.classList.add('is-blog-hover');
            if (cursorLabel) {
                cursorLabel.textContent = currentLang === 'tr' ? 'OKU ↗' : 'READ ↗';
            }
        } else if (projectCard) {
            follower.classList.remove('is-magnetic', 'is-blog-hover', 'is-github-hover');
            follower.classList.add('is-project-hover');
            if (cursorLabel) {
                cursorLabel.textContent = currentLang === 'tr' ? 'İNCELE ↗' : 'EXPLORE ↗';
            }
        } else if (githubCard) {
            follower.classList.remove('is-magnetic', 'is-blog-hover', 'is-project-hover');
            follower.classList.add('is-github-hover');
            if (cursorLabel) {
                cursorLabel.textContent = 'GITHUB 100+ ↗';
            }
        } else if (magneticTarget) {
            follower.classList.add('is-magnetic');
        }
    });

    document.addEventListener('mouseout', (e) => {
        const related = e.relatedTarget;
        const target = e.target;

        // relatedTarget kontrolü ile alt elemanlar arasında gezinirken flicker %100 engellenir
        const blogCard = target.closest('.blog-card, .blog-fan-card');
        if (blogCard && (!related || !blogCard.contains(related))) {
            follower.classList.remove('is-blog-hover');
            if (cursorLabel) cursorLabel.textContent = '';
        }

        const projectCard = target.closest('.project-card:not(.more-projects-card)');
        if (projectCard && (!related || !projectCard.contains(related))) {
            follower.classList.remove('is-project-hover');
            if (cursorLabel) cursorLabel.textContent = '';
        }

        const githubCard = target.closest('.more-projects-card');
        if (githubCard && (!related || !githubCard.contains(related))) {
            follower.classList.remove('is-github-hover');
            if (cursorLabel) cursorLabel.textContent = '';
        }

        const magneticTarget = target.closest(magneticSelector);
        if (magneticTarget && (!related || !magneticTarget.contains(related))) {
            follower.classList.remove('is-magnetic');
        }
    });

    // Gerçek Fiziksel GSAP Manyetik Çekim (Magnetic Pull %28)
    initMagneticPull();
}

function initMagneticPull() {
    const magneticPullSelector = '.btn, .blog-nav-arrow, .social-circle-mini-btn, .nav-menu-btn, .menu-close-btn, .back-to-top, .footer-pill-btn';
    const pullElements = document.querySelectorAll(magneticPullSelector);

    pullElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            if (typeof gsap === 'undefined') return;
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distX = e.clientX - centerX;
            const distY = e.clientY - centerY;

            // Farenin merkezine olan mesafesinin %28'i kadar yumuşak çekim
            gsap.to(el, {
                x: distX * 0.28,
                y: distY * 0.28,
                duration: 0.3,
                ease: 'power2.out',
                overwrite: 'auto'
            });
        });

        el.addEventListener('mouseleave', () => {
            if (typeof gsap === 'undefined') return;
            // Fare ayrıldığında elastik yaylanarak yerine dönüş
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: 'elastic.out(1, 0.3)',
                overwrite: 'auto'
            });
        });
    });
}

// ============================================
// 7. FLAGSHIP PROJECTS SHOWCASE (2 MONUMENTAL CARDS + 100+ GITHUB ARCHIVE)
// ============================================
async function fetchGitHubStats() {
    try {
        const userRes = await fetch('https://api.github.com/users/DevKursat');
        let publicRepoCount = 100;
        if (userRes.ok) {
            const userData = await userRes.json();
            if (userData.public_repos) publicRepoCount = Math.max(userData.public_repos, 100);
        }

        const reposRes = await fetch('https://api.github.com/users/DevKursat/repos?per_page=100');
        if (!reposRes.ok) return;
        const repos = await reposRes.json();

        let totalStars = 0;
        repos.forEach(repo => {
            totalStars += repo.stargazers_count || 0;
            const repoNameLower = repo.name.toLowerCase();
            for (const key in projectsData) {
                const proj = projectsData[key];
                if (proj.githubRepo && proj.githubRepo.toLowerCase() === repoNameLower) {
                    proj.stars = repo.stargazers_count;
                    proj.forks = repo.forks_count;
                }
            }
        });

        const telemetryText = document.getElementById('githubTelemetryText');
        if (telemetryText) {
            const lang = currentLang;
            telemetryText.textContent = lang === 'tr'
                ? `${publicRepoCount}+ Proje • ${totalStars}+ GitHub Yıldızı ↗`
                : `${publicRepoCount}+ Projects • ${totalStars}+ GitHub Stars ↗`;
        }
    } catch (err) {
        console.warn("GitHub API telemetry warning:", err);
    }
}

let currentProjectsFilter = 'all';

function renderProjects(filter = currentProjectsFilter) {
    currentProjectsFilter = filter;
    const container = document.getElementById('projectsContainer');
    if (!container) return;

    let html = '';
    const lang = currentLang;
    const getLoc = (obj) => (obj && (obj[lang] || obj['en'] || obj['tr'])) || '';

    // Render Flagship Projects (Filtered by Category)
    for (const key in projectsData) {
        const project = projectsData[key];
        if (filter !== 'all') {
            const cats = project.filterCategory || [];
            if (!cats.includes(filter)) continue;
        }

        // Initial 3 visible technologies in the discrete conveyor window
        const visibleTechHTML = project.tech.slice(0, 3).map(t => `<span class="conveyor-tag">${t}</span>`).join('');
        const encodedTechList = encodeURIComponent(JSON.stringify(project.tech));
        const isIconImage = project.icon && (project.icon.endsWith('.png') || project.icon.endsWith('.jpg') || project.icon.endsWith('.svg'));
        const iconHTML = isIconImage 
            ? `<img src="${project.icon}" alt="${project.title}" class="project-card-custom-logo">` 
            : (project.icon || '⭐');

        const metricsData = (project.metrics && (project.metrics[lang] || project.metrics['en'] || project.metrics['tr'])) || [];
        const metricsPreview = metricsData.slice(0, 4);
        const metricsStripHTML = metricsPreview.length > 0 ? `
            <div class="project-card-metrics-strip">
                ${metricsPreview.map(m => `
                    <div class="project-card-mini-metric">
                        <span class="mini-metric-value">${m.value}</span>
                        <span class="mini-metric-label">${m.label}</span>
                    </div>
                `).join('')}
            </div>
        ` : '';

        html += `
            <article class="project-card ${project.image ? 'has-card-image' : ''}" data-project="${key}" style="--spotlight-color: ${project.spotlightColor}" data-scroll="scale-up">
                <div class="project-card-visual">
                    ${project.image ? `<img src="${project.image}" alt="${project.title}" class="project-card-bg-image" loading="lazy">` : ''}
                    <div class="project-card-visual-scrim"></div>
                    <div class="project-card-glow" style="--gradient: ${project.gradient}"></div>
                    ${project.liveUrl ? `
                        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-card-live-pill" onclick="event.stopPropagation();" aria-label="${lang === 'tr' ? 'Canlı Servisi Ziyaret Et' : 'Visit Live Platform'}">
                            <span class="live-pulse-dot"></span>
                            <span>${project.badge ? getLoc(project.badge) : (lang === 'tr' ? 'Canlı Servis ↗' : 'Live Platform ↗')}</span>
                        </a>
                    ` : ''}
                    <div class="project-card-brand-island">
                        <div class="project-card-brand-emblem">${iconHTML}</div>
                        ${project.brandName ? `<span class="project-card-brand-name">${project.brandName}</span>` : ''}
                    </div>
                </div>
                <div class="project-card-body">
                    <div class="project-card-meta">
                        <span class="project-card-category">${getLoc(project.category)}</span>
                    </div>
                    <h3 class="project-card-title">${project.title}</h3>
                    <p class="project-card-desc">${getLoc(project.description)}</p>
                    
                    ${metricsStripHTML}

                    <div class="project-card-footer">
                        <!-- Row 1: Full-width Single-Line Visit Action (Canlı Servis left, ↗ far right) -->
                        <div class="project-card-action-row">
                            ${project.liveUrl ? `
                                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-card-visit-btn" onclick="event.stopPropagation();" title="${lang === 'tr' ? 'Canlı Servisi Ziyaret Et' : 'Visit Live Platform'}">
                                    <span class="visit-label">${lang === 'tr' ? 'Canlı Servis' : 'Live Platform'}</span>
                                    <span class="visit-arrow">↗</span>
                                </a>
                            ` : `
                                <div class="project-card-visit-btn project-card-modal-trigger" title="${lang === 'tr' ? 'Detaylı İncele' : 'View Architecture'}">
                                    <span class="visit-label">${lang === 'tr' ? 'Mimariyi & Metrikleri İncele' : 'Inspect Architecture'}</span>
                                    <span class="visit-arrow">↗</span>
                                </div>
                            `}
                        </div>

                        <!-- Row 2: Discrete Step-by-Step Tech Conveyor (1 exits left/right, 1 enters from opposite side) -->
                        <div class="project-tech-conveyor" data-conveyor="true" data-tech-list="${encodedTechList}" onclick="event.stopPropagation();" title="${lang === 'tr' ? 'Teknolojileri kaydırın' : 'Scroll tech stack'}">
                            <button type="button" class="conveyor-step-btn conveyor-prev" aria-label="${lang === 'tr' ? 'Önceki teknoloji' : 'Previous tech'}">‹</button>
                            <div class="conveyor-viewport">
                                <div class="conveyor-track">
                                    ${visibleTechHTML}
                                </div>
                            </div>
                            <button type="button" class="conveyor-step-btn conveyor-next" aria-label="${lang === 'tr' ? 'Sonraki teknoloji' : 'Next tech'}">›</button>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }

    // Upgraded "100+ Projects & Open Source Archive" Banner (Full Width)
    const moreTitle = lang === 'tr' ? '100+ Proje, Tamamlanan Ürün Döngüleri & Açık Kaynak Arşivi' : '100+ Projects, Shipped Product Lifecycles & Open-Source Archive';
    const moreDesc = lang === 'tr' 
        ? "Canlıdaki amiral gemisi ürünlerim (İtibar & Unutma.) ve tamamlanan üretim sistemlerimin (Vera QR, Gideon AI, VoltNet, Kürşat 5.000+ MAU, Lusid AI, GoAlpha) yanı sıra 100+ açık kaynak araç ve otomasyon projesini GitHub profilimde inceleyebilirsiniz."
        : "Alongside my live flagship products (İtibar & Unutma.) and completed production systems (Vera QR, Gideon AI, VoltNet, Kürşat 5,000+ MAU, Lusid AI, GoAlpha), explore 100+ open-source tools and architectures on my GitHub profile.";

    html += `
        <article class="project-card more-projects-card" onclick="window.open('https://github.com/DevKursat', '_blank')" style="--spotlight-color: 0, 217, 255" data-scroll="scale-up">
            <div class="more-projects-glow" style="--gradient: linear-gradient(135deg, #00D9FF, #10B981); opacity: 0.15;"></div>
            <div class="more-projects-pattern"></div>
            
            <div class="more-projects-left">
                <div class="more-projects-icon-wrapper">
                    📂
                </div>
            </div>
            
            <div class="more-projects-middle">
                <h3 class="more-projects-title">${moreTitle}</h3>
                <p class="more-projects-desc">${moreDesc}</p>
                <div class="github-telemetry-pill" id="githubTelemetryPill">
                    <span class="telemetry-dot"></span>
                    <span id="githubTelemetryText">${lang === 'tr' ? '100+ Proje • Canlı GitHub Arşivi ↗' : '100+ Projects • Live GitHub Archive ↗'}</span>
                </div>
            </div>
            
            <div class="more-projects-right">
                <span class="more-projects-link">
                    github.com/DevKursat
                    <svg class="more-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </span>
            </div>
        </article>
    `;

    container.innerHTML = html;

    // Attach spotlight mouse coordinates & card click listeners
    const cards = container.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        if (!card.classList.contains('more-projects-card')) {
            card.addEventListener('click', () => {
                const projectId = card.dataset.project;
                const project = projectsData[projectId];
                if (project) {
                    openModal(project, projectId);
                }
            });
        }
    });

    initTiltEffect();
    initTechConveyors();
}

function initTiltEffect() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });
}

function initTechConveyors() {
    const conveyors = document.querySelectorAll('.project-tech-conveyor');
    conveyors.forEach(conveyor => {
        const rawList = conveyor.getAttribute('data-tech-list');
        if (!rawList) return;
        let techList = [];
        try {
            techList = JSON.parse(decodeURIComponent(rawList));
        } catch (err) {
            return;
        }
        if (techList.length <= 3) return;

        const track = conveyor.querySelector('.conveyor-track');
        const prevBtn = conveyor.querySelector('.conveyor-prev');
        const nextBtn = conveyor.querySelector('.conveyor-next');
        let startIndex = 0;
        let isAnimating = false;
        const visibleCount = 3;

        function getWindowItems(idx) {
            const res = [];
            for (let i = 0; i < visibleCount; i++) {
                res.push(techList[(idx + i + techList.length * 10) % techList.length]);
            }
            return res;
        }

        function stepConveyor(dir) {
            if (isAnimating || !track) return;
            isAnimating = true;

            const currentTags = Array.from(track.querySelectorAll('.conveyor-tag'));
            const nextIndex = (startIndex + dir + techList.length) % techList.length;
            const nextItems = getWindowItems(nextIndex);

            if (typeof gsap !== 'undefined' && currentTags.length === visibleCount) {
                const exitTag = dir > 0 ? currentTags[0] : currentTags[visibleCount - 1];
                const shiftTags = dir > 0 ? currentTags.slice(1) : currentTags.slice(0, visibleCount - 1);

                gsap.to(exitTag, {
                    x: dir > 0 ? -24 : 24,
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.16,
                    ease: 'power2.in'
                });

                gsap.to(shiftTags, {
                    x: dir > 0 ? -14 : 14,
                    duration: 0.16,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        startIndex = nextIndex;
                        track.innerHTML = nextItems.map(t => `<span class="conveyor-tag">${t}</span>`).join('');
                        const newTags = Array.from(track.querySelectorAll('.conveyor-tag'));
                        const enterTag = dir > 0 ? newTags[visibleCount - 1] : newTags[0];
                        const settledTags = dir > 0 ? newTags.slice(0, visibleCount - 1) : newTags.slice(1);

                        gsap.fromTo(settledTags,
                            { x: dir > 0 ? 10 : -10 },
                            { x: 0, duration: 0.2, ease: 'power2.out' }
                        );

                        gsap.fromTo(enterTag,
                            { x: dir > 0 ? 26 : -26, opacity: 0, scale: 0.9 },
                            {
                                x: 0,
                                opacity: 1,
                                scale: 1,
                                duration: 0.22,
                                ease: 'back.out(1.4)',
                                onComplete: () => {
                                    isAnimating = false;
                                }
                            }
                        );
                    }
                });
            } else {
                startIndex = nextIndex;
                track.innerHTML = nextItems.map(t => `<span class="conveyor-tag">${t}</span>`).join('');
                isAnimating = false;
            }
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                stepConveyor(-1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                stepConveyor(1);
            });
        }

        // Discrete wheel step (throttled per wheel gesture)
        let lastWheelTime = 0;
        conveyor.addEventListener('wheel', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const now = performance.now();
            if (now - lastWheelTime < 220) return;
            const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
            if (Math.abs(delta) > 6) {
                lastWheelTime = now;
                stepConveyor(delta > 0 ? 1 : -1);
            }
        }, { passive: false });

        // Mouse drag & touch swipe discrete step
        let startX = null;
        conveyor.addEventListener('pointerdown', (e) => {
            if (e.target.closest('.conveyor-step-btn')) return;
            startX = e.clientX;
        });

        conveyor.addEventListener('pointerup', (e) => {
            if (startX === null) return;
            const diff = e.clientX - startX;
            startX = null;
            if (Math.abs(diff) > 18) {
                stepConveyor(diff < 0 ? 1 : -1);
            }
        });

        conveyor.addEventListener('pointerleave', () => {
            startX = null;
        });
    });
}

// ============================================
// 8. CASE STUDY MODAL & GSAP CHOREOGRAPHY
// ============================================
function openModal(project, projectId) {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    modal.dataset.projectId = projectId;

    triggerHaptic(12);

    if (lenis) lenis.stop();
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    updateModalContent(project);
    modal.classList.add('active');

    // Reset scroll of modal content to top
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) modalContent.scrollTop = 0;

    if (typeof gsap !== 'undefined') {
        const modalContainer = modal.querySelector('.modal-container');
        const modalBackdrop = modal.querySelector('.modal-backdrop');
        const isMobile = window.innerWidth <= 768;

        gsap.fromTo(modalBackdrop, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: 'power2.out' });
        
        if (isMobile) {
            gsap.fromTo(modalContainer, 
                { y: '100%', opacity: 1 }, 
                { y: '0%', opacity: 1, duration: 0.45, ease: 'power3.out' }
            );
        } else {
            gsap.fromTo(modalContainer, 
                { y: 50, scale: 0.94, opacity: 0 }, 
                { y: 0, scale: 1, opacity: 1, duration: 0.5, ease: 'power3.out' }
            );
        }

        gsap.fromTo('.modal-metric-card', 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: 'power2.out', delay: 0.15 }
        );

        gsap.fromTo('.modal-feature-item', 
            { x: -15, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: 'power2.out', delay: 0.25 }
        );
    }
}

function updateModalContent(project) {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    const lang = currentLang;
    const getLoc = (obj) => (obj && (obj[lang] || obj['en'] || obj['tr'])) || '';

    modal.style.setProperty('--spotlight-color', project.spotlightColor || '16, 185, 129');
    modal.style.setProperty('--modal-gradient', project.gradient || 'linear-gradient(135deg, #10b981, #059669)');

    const modalVisual = modal.querySelector('.modal-visual');
    let modalBg = modalVisual.querySelector('.modal-bg-image');
    if (project.image) {
        if (!modalBg) {
            modalBg = document.createElement('img');
            modalBg.className = 'modal-bg-image';
            modalVisual.prepend(modalBg);
        }
        modalBg.src = project.image;
        modalBg.alt = project.title;
        modalBg.style.display = 'block';
    } else if (modalBg) {
        modalBg.style.display = 'none';
    }

    const statusPill = modal.querySelector('.modal-status-pill');
    if (statusPill && project.status) {
        statusPill.innerHTML = `
            <span class="live-pulse-dot"></span>
            <span>${getLoc(project.status)}</span>
        `;
        statusPill.className = `modal-status-pill ${project.statusType || 'active'}`;
    }

    const brandLogoImg = modal.querySelector('.modal-brand-logo');
    const brandNameEl = modal.querySelector('.modal-brand-name');
    const brandTaglineEl = modal.querySelector('.modal-brand-tagline');

    if (project.logo && brandLogoImg) {
        brandLogoImg.src = project.logo;
        brandLogoImg.alt = `${project.title} Logo`;
        brandLogoImg.style.display = 'block';
    } else if (brandLogoImg) {
        brandLogoImg.style.display = 'none';
    }

    if (brandNameEl) brandNameEl.textContent = project.brandName || project.title;
    if (brandTaglineEl) {
        brandTaglineEl.textContent = project.tagline ? getLoc(project.tagline) : getLoc(project.category);
    }

    const categoryEl = modal.querySelector('.modal-category');
    if (categoryEl) categoryEl.textContent = getLoc(project.category);

    const titleEl = modal.querySelector('.modal-title');
    if (titleEl) titleEl.textContent = project.title;

    const descEl = modal.querySelector('.modal-description');
    if (descEl) descEl.textContent = getLoc(project.description);

    const metricsWrap = modal.querySelector('#modalMetrics');
    if (metricsWrap) {
        const mList = (project.metrics && (project.metrics[lang] || project.metrics['en'] || project.metrics['tr'])) || [];
        if (mList.length > 0) {
            metricsWrap.style.display = 'block';
            const metricsGrid = metricsWrap.querySelector('.modal-metrics-grid');
            if (metricsGrid) {
                metricsGrid.innerHTML = mList.map(m => `
                    <div class="modal-metric-card" style="--spotlight-color: ${project.spotlightColor || '16, 185, 129'}">
                        <span class="modal-metric-val">${m.value}</span>
                        <span class="modal-metric-label">${m.label}</span>
                        ${m.desc ? `<span class="modal-metric-desc">${m.desc}</span>` : ''}
                    </div>
                `).join('');
            }
        } else {
            metricsWrap.style.display = 'none';
        }
    }

    const featureList = modal.querySelector('.modal-feature-list');
    const fList = (project.features && (project.features[lang] || project.features['en'] || project.features['tr'])) || [];
    if (featureList && fList.length > 0) {
        featureList.innerHTML = fList.map(f => `
            <li class="modal-feature-item">
                <span class="modal-feature-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </span>
                <span class="modal-feature-text">${f}</span>
            </li>
        `).join('');
    }

    const techList = modal.querySelector('.modal-tech-list');
    if (techList && project.tech) {
        techList.innerHTML = project.tech.map(t => `<span class="modal-tech-pill">${t}</span>`).join('');
    }

    const modalLiveBtn = modal.querySelector('.modal-live-btn');
    const modalLiveText = modal.querySelector('.modal-live-text');
    const modalGithubBtn = modal.querySelector('.modal-link');

    if (project.liveUrl && modalLiveBtn) {
        modalLiveBtn.href = project.liveUrl;
        modalLiveBtn.style.display = 'inline-flex';
        let liveLabel = lang === 'tr' ? 'Canlı Platformu Keşfet' : 'Explore Live Platform';
        if (project.title === 'İtibar') {
            liveLabel = lang === 'tr' ? 'itibar.app Platformunu Keşfet' : 'Explore itibar.app Live';
        } else if (project.title === 'Unutma.') {
            liveLabel = lang === 'tr' ? 'unutma.itibar.app Web Sitesi' : 'Visit Live Website';
        }
        if (modalLiveText) modalLiveText.textContent = liveLabel;
    } else if (modalLiveBtn) {
        modalLiveBtn.style.display = 'none';
    }

    if (modalGithubBtn) {
        if (project.title === 'Unutma.') {
            modalGithubBtn.style.display = 'none';
        } else {
            modalGithubBtn.style.display = 'inline-flex';
            modalGithubBtn.href = project.github || '#';
        }
    }

    renderArchitectureBlueprint(project);
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    triggerHaptic(8);

    if (lenis) lenis.start();
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';

    const modalContainer = modal.querySelector('.modal-container');
    const modalBackdrop = modal.querySelector('.modal-backdrop');
    const isMobile = window.innerWidth <= 768;

    if (typeof gsap !== 'undefined') {
        if (isMobile) {
            gsap.to(modalContainer, {
                y: '100%',
                duration: 0.32,
                ease: 'power3.in',
                onComplete: () => {
                    modal.classList.remove('active');
                    if (modalContainer) modalContainer.style.transform = '';
                }
            });
        } else {
            gsap.to(modalContainer, {
                y: 30,
                scale: 0.95,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => {
                    modal.classList.remove('active');
                    if (modalContainer) modalContainer.style.transform = '';
                }
            });
        }
        gsap.to(modalBackdrop, { opacity: 0, duration: 0.3, ease: 'power2.in' });
    } else {
        modal.classList.remove('active');
        if (modalContainer) modalContainer.style.transform = '';
    }
}

function initProjectsFilter() {
    const filterPills = document.getElementById('projectsFilterPills');
    if (!filterPills) return;

    filterPills.querySelectorAll('.project-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterPills.querySelectorAll('.project-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter') || 'all';
            triggerHaptic(14);
            renderProjects(filter);
        });
    });
}

function initProjects() {
    renderProjects('all');
    initProjectsFilter();

    const modal = document.getElementById('projectModal');
    if (modal) {
        const modalBackdrop = modal.querySelector('.modal-backdrop');
        const modalClose = modal.querySelector('.modal-close');
        const modalContainer = modal.querySelector('.modal-container');

        if (modalClose) modalClose.addEventListener('click', closeModal);
        if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

        // Mobile iOS Bottom Sheet: Swipe down to dismiss
        let touchStartY = 0;
        let touchCurrentY = 0;
        let isDraggingSheet = false;

        modal.addEventListener('touchstart', (e) => {
            if (window.innerWidth > 768) return;
            const target = e.target;
            const modalContent = modal.querySelector('.modal-content');
            // If dragging handle, top visual bar, or when content is scrolled to top
            if (target.closest('.modal-drag-handle') || target.closest('.modal-close') || target.closest('.modal-visual') || (modalContent && modalContent.scrollTop <= 0)) {
                touchStartY = e.touches[0].clientY;
                touchCurrentY = touchStartY;
                isDraggingSheet = true;
            } else {
                isDraggingSheet = false;
            }
        }, { passive: true });

        modal.addEventListener('touchmove', (e) => {
            if (!isDraggingSheet || window.innerWidth > 768) return;
            touchCurrentY = e.touches[0].clientY;
            const pullDistance = touchCurrentY - touchStartY;
            if (pullDistance > 0 && modalContainer) {
                // Resistance curve
                const dampedPull = Math.min(pullDistance * 0.75, 240);
                modalContainer.style.transform = `translateY(${dampedPull}px)`;
            }
        }, { passive: true });

        modal.addEventListener('touchend', () => {
            if (!isDraggingSheet || window.innerWidth > 768) return;
            const pullDistance = touchCurrentY - touchStartY;
            isDraggingSheet = false;
            touchStartY = 0;
            if (pullDistance > 90) {
                closeModal();
            } else if (modalContainer) {
                modalContainer.style.transition = 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)';
                modalContainer.style.transform = 'translateY(0)';
                setTimeout(() => {
                    if (modalContainer) modalContainer.style.transition = '';
                }, 260);
            }
        }, { passive: true });

        // Lock background scroll during modal interaction
        modal.addEventListener('wheel', (e) => {
            const modalContent = modal.querySelector('.modal-content');
            if (modalContent && modalContent.contains(e.target)) {
                const isAtTop = modalContent.scrollTop <= 0;
                const isAtBottom = modalContent.scrollTop + modalContent.clientHeight >= modalContent.scrollHeight - 1;
                if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
                    e.preventDefault();
                }
                e.stopPropagation();
            } else {
                e.preventDefault();
                e.stopPropagation();
            }
        }, { passive: false });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    fetchGitHubStats();
}

// ============================================
// 9. IDENTITY BENTO & LIVE EUROPE/ISTANBUL CLOCK
// ============================================
function initAboutBento() {
    const clockEl = document.getElementById('istanbulClock');
    const contactClockEl = document.getElementById('contactLiveClock');
    const menuClockEl = document.getElementById('menuLiveClock');

    function updateClock() {
        try {
            const now = new Date();
            const timeStr = new Intl.DateTimeFormat('tr-TR', {
                timeZone: 'Europe/Istanbul',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            }).format(now);
            
            if (clockEl) clockEl.textContent = `${timeStr} GMT+3`;
            if (contactClockEl) contactClockEl.textContent = timeStr;
            if (menuClockEl) menuClockEl.textContent = timeStr;
        } catch (e) {
            if (clockEl) clockEl.textContent = 'Istanbul GMT+3';
        }
    }

    updateClock();
    setInterval(updateClock, 1000);
}

// ============================================
// 10. ARCHITECTURAL SKILLS SPECIFICATION MATRIX (Awwwards / Linear Standard)
// ============================================
const skillsBentoData = [
    {
        id: "ai",
        code: "01 // AI ARCHITECTURE",
        title: { tr: "Uygulamalı AI & Otonom Ajan Mimarileri", en: "Applied AI & Autonomous Agent Architectures" },
        tag: { tr: "DETERMİNİSTİK & SIFIR HYPE", en: "DETERMINISTIC & ZERO HYPE" },
        motto: { 
            tr: "Statik prompt'lar yerine durum bilgili Generative UI, deterministik Zod şemaları ve sıfır veri sızıntılı pgvector hibrit RAG boru hatları.",
            en: "Stateful Generative UI instead of static text; deterministic schema validation and zero-leak pgvector RAG pipelines."
        },
        skills: [
            { 
                name: "Gemini 1.5 Pro & GPT-4o", 
                role: { tr: "Çok modlu ajan boru hatları, function calling & kod yürütme", en: "Multimodal agent pipelines, function calling & code execution" },
                badge: "MULTIMODAL",
                iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.783a4.485 4.485 0 0 1 2.366-1.973v5.68a.76.76 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 8.783zm16.597 3.855l-5.833-3.387L15.119 8.1a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 10.12V7.782a.081.081 0 0 1 .033-.062l4.84-2.796a4.499 4.499 0 0 1 6.668 4.887zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.945a4.499 4.499 0 0 1 7.375-3.453l-.142.08L6.704 6.33a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.607 1.5-2.602-1.5z"/></svg>'
            },
            { 
                name: "Claude 3.5 Sonnet", 
                role: { tr: "Yüksek bağlamlı analitik çıkarım, kod üretimi ve artefaktlar", en: "High-context analytical reasoning, code generation & artifacts" },
                badge: "REASONING",
                iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.415 4.708l-5.074 14.584H9.593L4.52 4.708h2.695l3.655 10.742h.106l3.704-10.742h2.735zm3.89 0v14.584h-2.37V4.708h2.37z"/></svg>'
            },
            { 
                name: "pgvector & Hibrit RAG", 
                role: { tr: "TCK/TTK kurumsal külliyatı, semantik ve anahtar kelime hibrit araması", en: "Statutory corpus semantic retrieval, hybrid search & zero leakage" },
                badge: "HYBRID RAG",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            },
            { 
                name: "Zod & JSON Schema", 
                role: { tr: "Sıfır sapmalı (zero-drift) yapılandırılmış çıktı ve kesin tip garantisi", en: "Zero-drift structured outputs, strict schemas and runtime safety" },
                badge: "ZERO-DRIFT",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            },
            { 
                name: "Ajan Sandbox & Güvenlik", 
                role: { tr: "İzolasyonlu çalışma ortamları, prompt injection savunması & zero trust", en: "Isolated runtimes, prompt injection defenses & zero trust security" },
                badge: "SANDBOXED",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
            }
        ]
    },
    {
        id: "frontend",
        code: "02 // FRONTEND & DESIGN",
        title: { tr: "Modern Frontend & Tasarım Mühendisliği", en: "Modern Frontend & Design Engineering" },
        tag: { tr: "60 FPS & AWWWARDS STANDARDI", en: "60 FPS & AWWWARDS CALIBER" },
        motto: { 
            tr: "Sıfır gecikmeli reaktif arayüzler, Awwwards ödül standardında tipografi ve donanım hızlandırmalı WebGL/GSAP koreografisi.",
            en: "Zero-latency reactive frontends, Awwwards-caliber typography, and hardware-accelerated WebGL/GSAP choreography."
        },
        skills: [
            { 
                name: "TypeScript (Strict Mode)", 
                role: { tr: "Sıfır 'any' disiplini, mutlak derleme güvenliği ve domain modelleme", en: "Zero 'any' discipline, absolute compile-time safety & domain modeling" },
                badge: "TYPE-SAFE",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            },
            { 
                name: "Next.js 15 & React 19", 
                role: { tr: "App Router, Server Actions, Server Components & Edge Runtime", en: "App Router, Server Actions, Server Components & Edge Runtime" },
                badge: "EDGE RUNTIME",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                invertOnDark: true
            },
            { 
                name: "Tailwind & Design Tokens", 
                role: { tr: "Katı tipografi ve boşluk hiyerarşisi, akıcı mikro-etkileşimler", en: "Strict typography & 4px spacing rhythm, fluid micro-interactions" },
                badge: "SYSTEMS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            },
            { 
                name: "GSAP, Lenis & WebGL", 
                role: { tr: "Kinetik kaydırma fiziği, shader tuvalleri ve 60 FPS donanım ivmesi", en: "Kinetic scroll physics, shader canvases and 60 FPS acceleration" },
                badge: "60 FPS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            },
            { 
                name: "Figma & Bileşen Mimarisi", 
                role: { tr: "Tasarım sistemleri, atomik bileşen hiyerarşisi ve token senkronizasyonu", en: "Design systems, atomic component tokens & design-to-code mapping" },
                badge: "ATOMIC",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
            }
        ]
    },
    {
        id: "backend",
        code: "03 // BACKEND & SYSTEMS",
        title: { tr: "Backend, Dağıtık Sistemler & Veri", en: "Backend, Distributed Systems & Data" },
        tag: { tr: "YÜKSEK ERİŞİLEBİLİRLİK & İZOLASYON", en: "HIGH AVAILABILITY & ISOLATION" },
        motto: { 
            tr: "PostgreSQL Row-Level Security (RLS) ile çok kiracılı veri izolasyonu, asenkron kuyruklar ve yüksek eşzamanlılık performansı.",
            en: "Multi-tenant data isolation via PostgreSQL RLS, resilient async event queues, and low-latency microservices."
        },
        skills: [
            { 
                name: "PostgreSQL & Row-Level Security", 
                role: { tr: "Kiracı bazlı veri sızıntısını engelleyen kriptografik RLS kuralları", en: "Tenant-isolated row-level security policies preventing cross-tenant leaks" },
                badge: "RLS TENANT",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            },
            { 
                name: "Node.js & Python FastAPI", 
                role: { tr: "Asenkron olay döngüsü, yüksek verimli LLM streaming ve mikro-servisler", en: "Async event loop, high-throughput LLM streaming & microservices" },
                badge: "ASYNC STREAM",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
            },
            { 
                name: "Supabase & Redis", 
                role: { tr: "Gerçek zamanlı abonelikler, dağıtık kilitler, kuyruklar ve hız limitleri", en: "Realtime subscriptions, distributed locks, queues & rate limiting" },
                badge: "REALTIME",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
            },
            { 
                name: "C Sistem Programlama", 
                role: { tr: "Doğrudan bellek yönetimi, işaretçi (pointer) disiplini ve işletim sistemi temelleri", en: "Bare-metal memory management, pointer discipline & OS systems foundations" },
                badge: "SYSTEMS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
            },
            { 
                name: "Docker & Konteynerizasyon", 
                role: { tr: "Yinelenebilir üretim ortamları, mikro-servis orkestrasyonu", en: "Reproducible container runtime environments & microservice isolation" },
                badge: "CONTAINERS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
            }
        ]
    },
    {
        id: "cloud",
        code: "04 // CLOUD & MOBILE",
        title: { tr: "Mobil, Egemen Bulut & Altyapı", en: "Mobile, Sovereign Cloud & Infrastructure" },
        tag: { tr: "5.000+ MAU ÖLÇEĞİ & ZERO TRUST", en: "5,000+ MAU SCALE & ZERO TRUST" },
        motto: { 
            tr: "Çapraz platform mobil mühendisliği, offline-first mimariler, kriptografik HMAC doğrulaması ve CI/CD otomasyonları.",
            en: "Cross-platform mobile apps, offline-first sync, cryptographic HMAC verification, and automated CI/CD releases."
        },
        skills: [
            { 
                name: "React Native (iOS & Android)", 
                role: { tr: "Tek kod tabanından yerel performans, TestFlight ve Play Store dağıtımı", en: "Single-codebase native performance, TestFlight & Google Play Store pipelines" },
                badge: "NATIVE CORE",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            },
            { 
                name: "HMAC & Kriptografik Doğrulama", 
                role: { tr: "Çevrimdışı çalışan dinamik token üretimi ve kurcalanamaz biletleme", en: "Offline-first dynamic token generation & tamper-proof cryptographic checks" },
                badge: "OFFLINE-FIRST",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
            },
            { 
                name: "Sertleştirilmiş Linux & Shell", 
                role: { tr: "Hardened kernel konfigürasyonu, sıfır güvenli bash/zsh sistem betikleri", en: "Hardened kernel configuration, zero trust shell & automation scripting" },
                badge: "HARDENED",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
            },
            { 
                name: "Vercel Serverless & Global CDN", 
                role: { tr: "Edge Middleware yönlendirme, küresel önbellekleme ve mikrosaniyeler", en: "Edge Middleware interception, global CDN caching & low-latency execution" },
                badge: "GLOBAL EDGE",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
                invertOnDark: true
            },
            { 
                name: "Git & GitHub Actions CI/CD", 
                role: { tr: "Otomatik test koşucuları, semantik sürümleme ve güvenli dağıtım boru hatları", en: "Automated test runners, semantic release & hardened release workflows" },
                badge: "AUTOMATED",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            }
        ]
    }
];

function initSkillsBento() {
    const container = document.getElementById('skillsBentoGrid') || document.getElementById('skillsCanvas');
    if (!container) return;

    const lang = currentLang;
    const getLoc = (obj) => (obj && (obj[lang] || obj['en'] || obj['tr'])) || '';

    let html = '';
    skillsBentoData.forEach(card => {
        const title = getLoc(card.title);
        const tag = getLoc(card.tag);
        const motto = getLoc(card.motto);

        const specsHTML = card.skills.map(s => {
            const role = typeof s.role === 'object' ? getLoc(s.role) : s.role;
            const iconHTML = s.iconSvg 
                ? s.iconSvg 
                : `<img src="${s.icon}" alt="${s.name}" ${s.invertOnDark ? 'style="filter: invert(1) brightness(2);"' : ''} loading="lazy" />`;
            return `
                <div class="skills-spec-item">
                    <div class="spec-item-left">
                        <span class="spec-item-icon">${iconHTML}</span>
                        <div class="spec-item-core">
                            <span class="spec-item-name">${s.name}</span>
                            <span class="spec-item-role">${role}</span>
                        </div>
                    </div>
                    <span class="spec-item-badge">${s.badge}</span>
                </div>
            `;
        }).join('');

        html += `
            <div class="skills-bento-card" data-category="${card.id}">
                <div class="skills-bento-header">
                    <div class="skills-bento-badge">
                        <span class="skills-bento-dot"></span>
                        <span class="skills-bento-tag">${card.code}</span>
                    </div>
                    <span class="skills-spec-status-pill">${tag}</span>
                </div>
                <h3 class="skills-bento-title">${title}</h3>
                <p class="skills-bento-motto">${motto}</p>
                <div class="skills-spec-list">
                    ${specsHTML}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    // Filter pill click listener
    const filterPills = document.querySelectorAll('.skill-filter-btn');
    filterPills.forEach(btn => {
        btn.addEventListener('click', () => {
            filterPills.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');
            const allCards = container.querySelectorAll('.skills-bento-card');

            allCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                    card.classList.remove('is-dimmed');
                } else {
                    card.style.display = 'none';
                    card.classList.add('is-dimmed');
                }
            });
        });
    });
}

function initSkillsCanvas() {
    initSkillsBento();
}

function initFooterWordmark() {
    const wordmarkWrap = document.getElementById('footerWordmark');
    const wordmarkText = document.getElementById('stellarHugeText');
    if (!wordmarkWrap || !wordmarkText) return;

    const reveal = () => {
        wordmarkText.classList.add('is-revealed');
    };

    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            reveal();
        }
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    observer.observe(wordmarkWrap);

    const checkScroll = () => {
        const rect = wordmarkWrap.getBoundingClientRect();
        if (rect.top < window.innerHeight - 10) {
            reveal();
        }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    if (window.lenis) {
        window.lenis.on('scroll', checkScroll);
    }
}

// ============================================
// 11. NAVIGATION & GENERAL INTERACTIONS
// ============================================
function initNavigation() {
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    initFullscreenMenu();

    // Smooth scroll for nav anchor links (exclude fullscreen menu to avoid conflicts)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.closest('#fullscreenMenu')) return;
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                if (lenis) {
                    lenis.scrollTo(target, { offset: -80 });
                } else {
                    const offset = 80;
                    const top = target.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }
        });
    });
}

function initFullscreenMenu() {
    const menuBtn = document.querySelector('.nav-menu-btn');
    const overlay = document.getElementById('fullscreenMenu');
    const closeBtn = document.getElementById('menuCloseBtn');
    const navItems = overlay ? overlay.querySelectorAll('.menu-nav-item') : [];
    const timeEl = document.getElementById('menuLiveTime');

    if (!overlay) return;

    function updateMenuTime() {
        if (!timeEl) return;
        try {
            const now = new Date();
            const timeStr = new Intl.DateTimeFormat('tr-TR', {
                timeZone: 'Europe/Istanbul',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            }).format(now);
            timeEl.textContent = `${timeStr} GMT+3`;
        } catch (e) {
            timeEl.textContent = 'GMT+3';
        }
    }
    updateMenuTime();
    setInterval(updateMenuTime, 1000);

    function openMenu() {
        overlay.classList.add('is-active');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        if (lenis) lenis.stop();

        if (typeof gsap !== 'undefined') {
            gsap.fromTo(overlay.querySelector('.menu-backdrop'), 
                { opacity: 0 }, 
                { opacity: 1, duration: 0.4, ease: 'power2.out' }
            );
            gsap.fromTo(overlay.querySelector('.menu-header'), 
                { opacity: 0, y: -20 }, 
                { opacity: 1, y: 0, duration: 0.5, delay: 0.1, ease: 'power3.out' }
            );
            gsap.fromTo(navItems, 
                { opacity: 0, y: 50, skewY: 3.5, rotate: -1.5 }, 
                { opacity: 1, y: 0, skewY: 0, rotate: 0, duration: 0.7, stagger: 0.08, delay: 0.15, ease: 'power4.out' }
            );
            gsap.fromTo(overlay.querySelector('.menu-footer'), 
                { opacity: 0, y: 20 }, 
                { opacity: 1, y: 0, duration: 0.5, delay: 0.45, ease: 'power3.out' }
            );
        }
    }

    function closeMenu() {
        if (!overlay.classList.contains('is-active')) return;
        if (typeof gsap !== 'undefined') {
            gsap.to(overlay, {
                opacity: 0,
                duration: 0.3,
                ease: 'power2.inOut',
                onComplete: () => {
                    overlay.classList.remove('is-active');
                    overlay.setAttribute('aria-hidden', 'true');
                    overlay.style.opacity = '';
                    document.body.style.overflow = '';
                    if (lenis) lenis.start();
                }
            });
        } else {
            overlay.classList.remove('is-active');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            if (lenis) lenis.start();
        }
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openMenu();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeMenu();
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const href = item.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                // 1. Immediately remove lock and hide menu
                overlay.classList.remove('is-active');
                overlay.setAttribute('aria-hidden', 'true');
                overlay.style.opacity = '';
                document.body.style.overflow = '';
                if (lenis) lenis.start();

                // 2. Scroll to section
                if (target) {
                    setTimeout(() => {
                        if (lenis) {
                            lenis.scrollTo(target, { offset: -70 });
                        } else {
                            const top = target.getBoundingClientRect().top + window.scrollY - 70;
                            window.scrollTo({ top, behavior: 'smooth' });
                        }
                    }, 50);
                }
            } else {
                closeMenu();
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('is-active')) {
            closeMenu();
        }
    });
}

// ============================================
// 10. BLOG 3D CARD FAN CAROUSEL (AWWWARDS SOTD)
// ============================================
function initBlogFan() {
    const deck = document.getElementById('blogFanDeck');
    const prevBtn = document.getElementById('blogFanPrev');
    const nextBtn = document.getElementById('blogFanNext');
    const activeIdxEl = document.getElementById('blogActiveIdx');

    if (!deck) return;

    const cards = Array.from(deck.querySelectorAll('.blog-fan-card'));
    const total = cards.length;
    let currentIndex = 0; // 0: Ollama (En güncel), 1: Sam Altman, 2: Claude Code

    function syncDeckHeight() {
        const activeCard = deck.querySelector('.blog-fan-card.is-active') || cards[0];
        if (activeCard) {
            const h = Math.ceil(activeCard.getBoundingClientRect().height);
            const targetH = Math.max(h, 540);
            deck.style.minHeight = `${targetH + 32}px`;
            deck.style.height = `${targetH + 32}px`;
            const stage = deck.closest('.blog-fan-stage');
            if (stage) {
                stage.style.minHeight = `${targetH + 32}px`;
                stage.style.height = `${targetH + 32}px`;
            }
        }
    }

    if (window.ResizeObserver) {
        const ro = new ResizeObserver(() => syncDeckHeight());
        cards.forEach(card => ro.observe(card));
    }

    deck.querySelectorAll('img').forEach(img => {
        if (!img.complete) {
            img.addEventListener('load', syncDeckHeight);
        }
    });

    window.addEventListener('load', syncDeckHeight);

    function updateDeck(newIndex) {
        currentIndex = (newIndex + total) % total;

        cards.forEach((card, idx) => {
            card.classList.remove('is-active', 'is-next', 'is-far');
            
            // Relative distance in cyclic 3-card stack: 0 = front, 1 = right/behind, 2 = furthest
            const offset = (idx - currentIndex + total) % total;
            
            if (offset === 0) {
                card.classList.add('is-active');
            } else if (offset === 1) {
                card.classList.add('is-next');
            } else {
                card.classList.add('is-far');
            }
        });

        if (activeIdxEl) {
            activeIdxEl.textContent = String(currentIndex + 1).padStart(2, '0');
        }

        setTimeout(syncDeckHeight, 50);
    }

    window.addEventListener('resize', syncDeckHeight);
    setTimeout(syncDeckHeight, 200);

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            updateDeck(currentIndex + 1);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            updateDeck(currentIndex - 1);
        });
    }

    // Clicking a non-active card brings it to the front; clicking front card navigates
    cards.forEach((card, idx) => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('a')) return;

            if (idx !== currentIndex) {
                e.preventDefault();
                updateDeck(idx);
            } else {
                const link = card.dataset.link;
                if (link) window.location.href = link;
            }
        });
    });

    // Touch / Swipe gestures for mobile & trackpad
    let startX = null;
    deck.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    deck.addEventListener('touchend', (e) => {
        if (startX === null) return;
        const diff = e.changedTouches[0].clientX - startX;
        startX = null;
        if (Math.abs(diff) > 40) {
            if (diff < 0) updateDeck(currentIndex + 1);
            else updateDeck(currentIndex - 1);
        }
    }, { passive: true });

    // Initialize state
    updateDeck(0);
}

let homeCurrentStep = 1;
let homeSelectedTopic = 'B2B Yazılım & Sistem Mimarisi';

window.advanceHomeTf = function(currentStep) {
    const formWrap = document.getElementById('homeTypeform');
    if (!formWrap) return;
    const panes = formWrap.querySelectorAll('.typeform-step-pane');
    const progressBar = document.getElementById('htfProgress');
    const badge = document.getElementById('htfStepBadge');
    const prevBtn = document.getElementById('htfPrevBtn');

    if (currentStep === 2) {
        const nameVal = document.getElementById('htfName')?.value.trim();
        if (!nameVal) {
            document.getElementById('htfName')?.focus();
            return;
        }
    } else if (currentStep === 3) {
        const contactVal = document.getElementById('htfContact')?.value.trim();
        if (!contactVal) {
            document.getElementById('htfContact')?.focus();
            return;
        }
    }

    const nextStep = currentStep + 1;
    if (nextStep > 4) return;

    homeCurrentStep = nextStep;
    panes.forEach(pane => {
        pane.classList.remove('active');
        if (parseInt(pane.dataset.step, 10) === nextStep) {
            pane.classList.add('active');
        }
    });

    if (progressBar) progressBar.style.width = `${nextStep * 25}%`;
    if (badge) badge.textContent = `0${nextStep} / 04`;
    if (prevBtn) prevBtn.style.visibility = nextStep > 1 ? 'visible' : 'hidden';

    // Focus input on active pane
    if (nextStep === 2) setTimeout(() => document.getElementById('htfName')?.focus(), 150);
    if (nextStep === 3) setTimeout(() => document.getElementById('htfContact')?.focus(), 150);
    if (nextStep === 4) setTimeout(() => document.getElementById('htfMessage')?.focus(), 150);
};

window.submitHomeTypeform = async function(channel) {
    const name = document.getElementById('htfName')?.value.trim() || 'İsimsiz İletişim';
    const contact = document.getElementById('htfContact')?.value.trim() || 'Belirtilmedi';
    const message = document.getElementById('htfMessage')?.value.trim() || 'Belirtilmedi';
    const topic = homeSelectedTopic || 'Genel İletişim';

    if (channel === 'wa') {
        const text = encodeURIComponent(
            `Merhaba Kürşat Bey,\n\nKonu: ${topic}\nİsim / Marka: ${name}\nİletişim: ${contact}\n\nDetaylar:\n${message}`
        );
        window.open(`https://wa.me/kursat.yz?text=${text}`, '_blank');
        return;
    }

    if (channel === 'mail') {
        const subject = encodeURIComponent(`[devkursat.github.io] ${topic} — ${name}`);
        const body = encodeURIComponent(
            `Merhaba Kürşat,\n\nTalep Konusu: ${topic}\nİsim / Marka: ${name}\nİletişim: ${contact}\n\nDetaylar:\n${message}\n\n—\nBu talep devkursat.github.io Typeform arayüzünden doğrudan oluşturulmuştur.`
        );
        window.location.href = `mailto:tckursat@icloud.com?subject=${subject}&body=${body}`;
        return;
    }

    // Direct Web Submission (Zero-Database Serverless Webhook Dispatch)
    const directBtn = document.getElementById('htfDirectSubmitBtn');
    const directText = document.getElementById('htfDirectBtnText');
    const directSpinner = document.getElementById('htfSpinner');

    if (directBtn) directBtn.disabled = true;
    if (directSpinner) directSpinner.style.display = 'inline-block';
    if (directText) directText.textContent = currentLang === 'tr' ? 'İletiliyor...' : 'Sending...';

    try {
        await fetch('https://ntfy.sh/kursat-portfolio-contact', {
            method: 'POST',
            headers: {
                'Title': `Web İletişim Formu: ${name} [${topic}]`,
                'Priority': 'high',
                'Tags': 'envelope,incoming_envelope,briefcase',
                'Actions': `view, İletişim: ${contact}, mailto:${contact.includes('@') ? contact : 'tckursat@icloud.com'}`
            },
            body: `📌 Talep Konusu: ${topic}\n👤 İsim / Marka: ${name}\n📬 İletişim: ${contact}\n\n💬 Mesaj / Notlar:\n${message}\n\n🕒 Tarih: ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })}`
        });
    } catch (err) {
        console.warn('Web direct dispatch note:', err);
    }

    if (directBtn) directBtn.disabled = false;
    if (directSpinner) directSpinner.style.display = 'none';
    if (directText) directText.textContent = currentLang === 'tr' ? 'Siteden Doğrudan Gönder ↵' : 'Send Directly from Site ↵';

    showHomeTfSuccess();
};

window.showHomeTfSuccess = function() {
    const formWrap = document.getElementById('homeTypeform');
    if (!formWrap) return;

    const panes = formWrap.querySelectorAll('.typeform-step-pane');
    panes.forEach(p => p.classList.remove('active'));

    const successPane = document.getElementById('htfSuccessPane');
    if (successPane) successPane.classList.add('active');

    const progressBar = document.getElementById('htfProgress');
    if (progressBar) progressBar.style.width = '100%';

    const badge = document.getElementById('htfStepBadge');
    if (badge) badge.textContent = '04 / 04';

    const prevBtn = document.getElementById('htfPrevBtn');
    if (prevBtn) prevBtn.style.visibility = 'hidden';
};

window.resetHomeTypeform = function() {
    const formWrap = document.getElementById('homeTypeform');
    if (!formWrap) return;

    homeCurrentStep = 1;
    const panes = formWrap.querySelectorAll('.typeform-step-pane');
    panes.forEach(pane => {
        pane.classList.remove('active');
        if (parseInt(pane.dataset.step, 10) === 1) pane.classList.add('active');
    });

    const progressBar = document.getElementById('htfProgress');
    if (progressBar) progressBar.style.width = '25%';

    const badge = document.getElementById('htfStepBadge');
    if (badge) badge.textContent = '01 / 04';

    const prevBtn = document.getElementById('htfPrevBtn');
    if (prevBtn) prevBtn.style.visibility = 'hidden';

    // Clear inputs
    const nameEl = document.getElementById('htfName');
    const contactEl = document.getElementById('htfContact');
    const msgEl = document.getElementById('htfMessage');
    if (nameEl) nameEl.value = '';
    if (contactEl) contactEl.value = '';
    if (msgEl) msgEl.value = '';
};

function initHomeTypeform() {
    const formWrap = document.getElementById('homeTypeform');
    if (!formWrap) return;

    const topicCards = formWrap.querySelectorAll('#htfTopicGrid .typeform-choice-card');
    topicCards.forEach(card => {
        card.addEventListener('click', () => {
            topicCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            homeSelectedTopic = card.dataset.topic || card.textContent.trim();
            advanceHomeTf(1);
        });
    });

    const prevBtn = document.getElementById('htfPrevBtn');
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (homeCurrentStep <= 1) return;
            const panes = formWrap.querySelectorAll('.typeform-step-pane');
            const progressBar = document.getElementById('htfProgress');
            const badge = document.getElementById('htfStepBadge');

            homeCurrentStep--;
            panes.forEach(pane => {
                pane.classList.remove('active');
                if (parseInt(pane.dataset.step, 10) === homeCurrentStep) {
                    pane.classList.add('active');
                }
            });

            if (progressBar) progressBar.style.width = `${homeCurrentStep * 25}%`;
            if (badge) badge.textContent = `0${homeCurrentStep} / 04`;
            prevBtn.style.visibility = homeCurrentStep > 1 ? 'visible' : 'hidden';
        });
    }

    // Enter key listeners
    const nameInput = document.getElementById('htfName');
    if (nameInput) {
        nameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                advanceHomeTf(2);
            }
        });
    }

    const contactInput = document.getElementById('htfContact');
    if (contactInput) {
        contactInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                advanceHomeTf(3);
            }
        });
    }

    // Live clock on contact typeform card
    const clockEl = document.getElementById('contactLiveClock');
    if (clockEl) {
        function updateContactClock() {
            try {
                const now = new Date();
                const timeStr = new Intl.DateTimeFormat('tr-TR', {
                    timeZone: 'Europe/Istanbul',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                }).format(now);
                clockEl.textContent = `${timeStr} GMT+3`;
            } catch (e) {
                clockEl.textContent = 'GMT+3';
            }
        }
        updateContactClock();
        setInterval(updateContactClock, 1000);
    }
}

function initScrollAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        const elements = document.querySelectorAll('section:not(#hero) [data-scroll]');
        elements.forEach(el => {
            const delay = (parseInt(el.dataset.scrollDelay, 10) || 0) / 1000;
            const scrollType = el.dataset.scroll;
            const fromVars = {
                opacity: 0,
                duration: 0.85,
                delay: delay,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 92%',
                    toggleActions: 'play none none none',
                    once: true
                }
            };

            if (scrollType === 'fade-left') fromVars.x = -40;
            else if (scrollType === 'fade-right') fromVars.x = 40;
            else if (scrollType === 'scale-up') fromVars.scale = 0.94;
            else fromVars.y = 30;

            gsap.from(el, fromVars);
        });

        ScrollTrigger.refresh();
    }
}

function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    let triggered = new Set();

    const trigger = (el) => {
        if (triggered.has(el)) return;
        triggered.add(el);
        const count = parseInt(el.dataset.count, 10);
        if (!isNaN(count)) animateCount(el, count);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                trigger(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '80px 0px' });

    stats.forEach(stat => {
        const rect = stat.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            trigger(stat);
        } else {
            observer.observe(stat);
        }
    });

    if (lenis) {
        lenis.on('scroll', () => {
            stats.forEach(stat => {
                if (!triggered.has(stat)) {
                    const rect = stat.getBoundingClientRect();
                    if (rect.top < window.innerHeight - 30) {
                        trigger(stat);
                        observer.unobserve(stat);
                    }
                }
            });
        });
    }
}

function animateCount(element, target) {
    let current = 0;
    const duration = 900;
    const steps = 30;
    const increment = target / steps;
    const stepTime = duration / steps;
    const suffix = element.dataset.suffix || '';

    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = `${target}${suffix}`;
            clearInterval(counter);
        } else {
            element.textContent = `${Math.floor(current)}${suffix}`;
        }
    }, stepTime);
}

// ============================================
// AWWWARDS SOTD: SYNTHESIZED WEB AUDIO ENGINE
// ============================================
const AudioUI = (() => {
    let audioCtx = null;
    let isEnabled = localStorage.getItem('devkursat_audio_ui') !== 'false';

    function initCtx() {
        if (!audioCtx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) audioCtx = new AudioContextClass();
        }
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    }

    function playTone(freq1 = 520, freq2 = 880, duration = 0.025, gainVal = 0.035) {
        if (!isEnabled) return;
        try {
            initCtx();
            if (!audioCtx) return;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            const now = audioCtx.currentTime;

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq1, now);
            osc.frequency.exponentialRampToValueAtTime(freq2, now + duration);

            gain.gain.setValueAtTime(gainVal, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start(now);
            osc.stop(now + duration);
        } catch (e) {
            // Audio policy fallback
        }
    }

    return {
        hover: () => playTone(680, 840, 0.016, 0.02),
        click: () => playTone(340, 680, 0.03, 0.04),
        open: () => playTone(440, 1100, 0.05, 0.05),
        close: () => playTone(880, 320, 0.04, 0.04),
        toggle: () => {
            isEnabled = !isEnabled;
            localStorage.setItem('devkursat_audio_ui', isEnabled ? 'true' : 'false');
            const btn = document.getElementById('audioToggleBtn');
            if (btn) {
                btn.classList.toggle('is-active', isEnabled);
                btn.setAttribute('aria-pressed', isEnabled ? 'true' : 'false');
            }
            if (isEnabled) playTone(440, 880, 0.04, 0.05);
            return isEnabled;
        },
        isEnabled: () => isEnabled
    };
})();

// ============================================
// AWWWARDS SOTD: INTERACTIVE SYSTEM ARCHITECTURE BLUEPRINT
// ============================================
function renderArchitectureBlueprint(project) {
    const wrap = document.getElementById('modalArchBlueprint');
    const stage = document.getElementById('archBlueprintStage');
    const telemetry = document.getElementById('archNodeTelemetry');
    if (!wrap || !stage) return;

    if (project.title !== 'İtibar' && project.title !== 'Unutma.') {
        wrap.style.display = 'none';
        return;
    }

    wrap.style.display = 'block';
    const lang = currentLang;
    const isTr = lang === 'tr';

    let nodes = [];
    if (project.title === 'İtibar') {
        nodes = [
            { id: 'client', name: isTr ? 'İstemci (Web / PWA)' : 'Client (Web / PWA)', sub: 'Next.js 15 • React 19', color: '#00d9ff', desc: isTr ? 'Sıfır gecikmeli PWA arayüzü, Web Crypto imzalı oturum ve anlık telemetri akışı.' : 'Zero-latency PWA interface, Web Crypto session signing & live telemetry.' },
            { id: 'edge', name: isTr ? 'Edge Proxy & WAF' : 'Edge Proxy & WAF', sub: 'Cloudflare & Vercel Edge', color: '#38bdf8', desc: isTr ? 'DDoS mitigasyonu, akıllı bot filtreleme ve 25ms küresel TTFB dağıtım katmanı.' : 'DDoS mitigation, intelligent bot scrubbing & 25ms global TTFB distribution layer.' },
            { id: 'policy', name: isTr ? 'Deterministik Politika Motoru' : 'Deterministic Policy Engine', sub: isTr ? '5651 & Yasal Kural Ağacı' : 'Statutory & Policy Rule Tree', color: '#10b981', desc: isTr ? 'Haksız yorumların hukuki ve kurumsal politika uygunluğunu sıfır halüsinasyonla doğrulayan çekirdek motor.' : 'Statutory evaluation engine validating violation criteria with 0% hallucination.' },
            { id: 'ai', name: isTr ? 'AI Denetim Pipeline\'ı' : 'AI Audit Pipeline', sub: 'DeepSeek / vLLM Çıkarım', color: '#a855f7', desc: isTr ? 'Egemen yerel modellerle semantik itiraz metni ve delil klasörü sentezleme.' : 'Sovereign on-device models generating semantic appeal briefs & evidence dossiers.' },
            { id: 'dispatch', name: isTr ? 'İcra & Dağıtım Motoru' : 'Execution & Dispatch', sub: 'Google Maps API / Legal', color: '#f59e0b', desc: isTr ? 'Resmi Google Haritalar API ve yasal tebligat kanallarına otomatik sevk.' : 'Automated dispatch to official Google Maps compliance APIs and legal portals.' }
        ];
    } else {
        nodes = [
            { id: 'client', name: isTr ? 'Zero-Knowledge İstemci' : 'Zero-Knowledge Client', sub: 'Tailwind & Web Crypto', color: '#ec4899', desc: isTr ? 'Mesaj içeriği sunucuya ulaşmadan önce tarayıcıda belleğe alınır, sıfır log prensibiyle işlenir.' : 'Message content is held in volatile memory; processed under strict zero-log policy.' },
            { id: 'vault', name: isTr ? 'Kriptografik Kasa' : 'Cryptographic Vault', sub: 'Argon2id + AES-256-GCM', color: '#8b5cf6', desc: isTr ? 'İçerik verisi çift katmanlı simetrik şifreleme ile paketlenir; sunucu bile içeriği okuyamaz.' : 'Client payload encrypted with dual-layer symmetric ciphers; server remains blind.' },
            { id: 'queue', name: isTr ? 'Zaman Ayarlı Kuyruk' : 'Durable Time Queue', sub: 'Redis Episodic Worker', color: '#10b981', desc: isTr ? 'Mektubun gönderileceği tam güne kadar şifreli saklanan dayanıklı cron kuyruğu.' : 'Durable episodic queue holding encrypted state until targeted dispatch date.' },
            { id: 'physical', name: isTr ? 'Baskı & Mühür İstasyonu' : 'Print & Seal Station', sub: isTr ? 'Özel Kağıt & Balmumu' : 'Textured Paper & Wax Seal', color: '#eab308', desc: isTr ? 'Mektup yüksek gramajlı özel kağıda basılır ve gerçek balmumu mühürle el yapımı kapatılır.' : 'Printed on premium heavy stock and hand-sealed with authentic molten wax.' },
            { id: 'ptt', name: isTr ? 'PTT Taahhütlü Teslimat' : 'PTT Registered Dispatch', sub: isTr ? 'Barkodlu Resmi Takip' : 'Barcode Tracked Mail', color: '#06b6d4', desc: isTr ? 'Cezaevine veya adrese barkodlu resmi taahhütlü teslimat ve anlık SMS bildirimi.' : 'Official registered barcode mail delivery directly to institutions or recipients.' }
        ];
    }

    const svgWidth = 720;
    const svgHeight = 130;
    const nodeCount = nodes.length;
    const nodeWidth = 110;
    const nodeHeight = 64;
    const stepX = (svgWidth - 60) / (nodeCount - 1);

    let svgHTML = `
        <svg viewBox="0 0 ${svgWidth} ${svgHeight}" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="archLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#00d9ff" stop-opacity="0.2"/>
                    <stop offset="50%" stop-color="#10b981" stop-opacity="0.8"/>
                    <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.3"/>
                </linearGradient>
            </defs>
            <path d="M 30 65 L ${svgWidth - 30} 65" stroke="url(#archLineGrad)" stroke-width="2.5" stroke-dasharray="6 6" />
    `;

    nodes.forEach((n, idx) => {
        const cx = 30 + idx * stepX;
        const cy = 65;
        const x = cx - nodeWidth / 2;
        const y = cy - nodeHeight / 2;

        svgHTML += `
            <g class="arch-node" data-node-id="${n.id}" data-desc="${n.desc}" data-color="${n.color}">
                <rect x="${x}" y="${y}" width="${nodeWidth}" height="${nodeHeight}" rx="12" fill="#0d0e14" stroke="${n.color}" stroke-opacity="0.4" stroke-width="1.2" />
                <circle cx="${cx}" cy="${y + 16}" r="3.5" fill="${n.color}"/>
                <text x="${cx}" y="${y + 36}" text-anchor="middle" fill="#ffffff" font-family="Inter, sans-serif" font-size="8.5" font-weight="600">${n.name}</text>
                <text x="${cx}" y="${y + 50}" text-anchor="middle" fill="${n.color}" font-family="JetBrains Mono, monospace" font-size="7" font-weight="500">${n.sub}</text>
            </g>
        `;
    });

    svgHTML += `</svg>`;
    stage.innerHTML = svgHTML;

    stage.querySelectorAll('.arch-node').forEach(nodeEl => {
        nodeEl.addEventListener('mouseenter', () => {
            AudioUI.hover();
            const desc = nodeEl.dataset.desc;
            const color = nodeEl.dataset.color;
            if (telemetry) {
                telemetry.innerHTML = `<span class="active-metric" style="color: ${color};">➔ [CANLI TELEMETRİ]:</span> <span style="margin-left: 8px;">${desc}</span>`;
            }
        });
        nodeEl.addEventListener('mouseleave', () => {
            if (telemetry) {
                telemetry.innerHTML = `<span class="telemetry-prompt">${isTr ? 'Mimarî akışı ve bileşen detaylarını görmek için düğümlerin üzerine gelin.' : 'Hover nodes to inspect architectural components and throughput.'}</span>`;
            }
        });
    });
}

// ============================================
// AWWWARDS SOTD: 60FPS RAF CURSOR & VELOCITY REACTIVE INFINITE MARQUEE
// ============================================
function initMarquee() {
    const marquee = document.querySelector('.marquee');
    const contents = marquee ? marquee.querySelectorAll('.marquee-content') : [];
    const portraitMarquee = document.getElementById('aboutMarquee');
    const portraitTrack = portraitMarquee ? portraitMarquee.querySelector('.vertical-marquee-track') : null;
    const portraitCard = document.getElementById('aboutPortraitCard');

    // 1. Horizontal Marquee Engine
    if (marquee && contents.length > 0) {
        let xPos = 0;
        let baseSpeed = 1.15;
        let cursorInfluence = 0;
        let isPointerOver = false;

        window.addEventListener('mousemove', (e) => {
            const normalizedX = (e.clientX / window.innerWidth) - 0.5;
            cursorInfluence = normalizedX * 1.8;
        }, { passive: true });

        marquee.addEventListener('mouseenter', () => { isPointerOver = true; });
        marquee.addEventListener('mouseleave', () => { isPointerOver = false; });

        function animateHorizontalMarquee() {
            const velocityBoost = Math.max(Math.min((currentScrollVelocity || 0) * 0.15, 12), -12);
            const currentSpeed = baseSpeed + (isPointerOver ? cursorInfluence * 2 : cursorInfluence * 0.4) + velocityBoost;
            
            xPos -= currentSpeed;
            
            const firstContent = contents[0];
            const contentWidth = firstContent ? firstContent.offsetWidth : 1000;

            if (contentWidth > 0 && Math.abs(xPos) >= contentWidth) {
                xPos = 0;
            }

            const skew = Math.max(Math.min((currentScrollVelocity || 0) * 0.08 + (isPointerOver ? cursorInfluence * 1.5 : 0), 5), -5);

            contents.forEach(el => {
                el.style.transform = `translate3d(${xPos}px, 0, 0) skewX(${skew}deg)`;
            });

            requestAnimationFrame(animateHorizontalMarquee);
        }

        contents.forEach(el => {
            el.style.animation = 'none';
        });

        requestAnimationFrame(animateHorizontalMarquee);
    }

    // 2. Editorial Portrait 3D Tilt & Bottom Role Dock Rotation
    if (portraitCard) {
        portraitCard.addEventListener('mousemove', (e) => {
            const rect = portraitCard.getBoundingClientRect();
            const relX = (e.clientX - rect.left) / rect.width - 0.5;
            const relY = (e.clientY - rect.top) / rect.height - 0.5;

            const tiltX = -relY * 8;
            const tiltY = relX * 8;
            portraitCard.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-2px)`;

            const lighting = document.getElementById('portraitLighting');
            if (lighting) {
                lighting.style.background = `radial-gradient(circle at ${(relX + 0.5) * 100}% ${(relY + 0.5) * 100}%, rgba(0, 217, 255, 0.12), transparent 60%)`;
            }
        });

        portraitCard.addEventListener('mouseleave', () => {
            portraitCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });

        // Smooth Rotating Role Ticker at bottom of portrait
        const roleTicker = document.getElementById('portraitRoleTicker');
        if (roleTicker) {
            const roles = {
                tr: [
                    'AI Product Developer',
                    'Full-Stack Architect',
                    'Yazar & Felsefe',
                    'Boksör Disiplini'
                ],
                en: [
                    'AI Product Developer',
                    'Full-Stack Architect',
                    'Writer & Philosophy',
                    'Boxing Conditioning'
                ]
            };
            let roleIdx = 0;
            setInterval(() => {
                const list = roles[currentLang] || roles.tr;
                roleIdx = (roleIdx + 1) % list.length;
                roleTicker.style.opacity = '0';
                roleTicker.style.transform = 'translateY(6px)';
                setTimeout(() => {
                    roleTicker.textContent = list[roleIdx];
                    roleTicker.style.opacity = '1';
                    roleTicker.style.transform = 'translateY(0)';
                }, 280);
            }, 2800);
        }
    }
}

// ============================================
// AWWWARDS SOTD: ⌘K DEVELOPER COMMAND PALETTE
// ============================================
function initCommandPalette() {
    const modal = document.getElementById('cmdPaletteModal');
    const input = document.getElementById('cmdSearchInput');
    const results = document.getElementById('cmdResultsList');
    const triggerBtn = document.getElementById('cmdPaletteTriggerBtn');
    const backdrop = document.getElementById('cmdPaletteBackdrop');
    if (!modal || !input || !results) return;

    let selectedIndex = 0;

    const commands = [
        { id: 'itibar', group: 'Projeler', title: 'itibar.app — Canlı Platformu Aç', sub: 'B2B İtibar Savunma Motoru', icon: '⚡', action: () => window.open('https://itibar.app', '_blank'), badge: 'itibar.app' },
        { id: 'unutma', group: 'Projeler', title: 'Unutma. (unutma.itibar.app) — Canlı Platformu Aç', sub: 'Mektup & Yasal İletişim', icon: '💌', action: () => window.open('https://unutma.itibar.app', '_blank'), badge: 'unutma.app' },
        { id: 'cven', group: 'Özgeçmiş', title: 'Kürşat Yılmaz CV (İngilizce PDF)', sub: '1 Sayfalık EPAM & Global Format', icon: '📄', action: () => window.open('Kursat_Yilmaz_CV_EN.pdf', '_blank'), badge: 'CV EN' },
        { id: 'cvtr', group: 'Özgeçmiş', title: 'Kürşat Yılmaz CV (Türkçe PDF)', sub: '1 Sayfalık Üretim & Mühendislik Formatı', icon: '📄', action: () => window.open('Kursat_Yilmaz_CV_TR.pdf', '_blank'), badge: 'CV TR' },
        { id: 'sec-about', group: 'Navigasyon', title: 'Hakkımda Bölümüne Git', sub: '#about — Mühendislik & Felsefe', icon: '👤', action: () => scrollToSection('#about') },
        { id: 'sec-projects', group: 'Navigasyon', title: 'Projeler Bölümüne Git', sub: '#projects — Flagship Sistemler', icon: '🚀', action: () => scrollToSection('#projects') },
        { id: 'sec-skills', group: 'Navigasyon', title: 'Beceriler & Teknoloji Bölümüne Git', sub: '#skills — 22+ Modern Stack', icon: '🛠️', action: () => scrollToSection('#skills') },
        { id: 'sec-blog', group: 'Navigasyon', title: 'Yazılar & Analizler Bölümüne Git', sub: '#blog — Güncel Mühendislik Notları', icon: '✍️', action: () => scrollToSection('#blog') },
        { id: 'sec-contact', group: 'Navigasyon', title: 'İletişim & Teklif Konsoluna Git', sub: '#contact — Doğrudan Görüşme', icon: '✉️', action: () => scrollToSection('#contact') },
        { id: 'links', group: 'Navigasyon', title: 'Tüm Bağlantılar Dizini (/links)', sub: 'Sosyal Ağlar & Ekosistem', icon: '🌐', action: () => window.location.href = 'links', badge: '/links' },
        { id: 'latest-blog', group: 'Yazılar', title: 'En Güncel Analizi Oku: OpenAI 1.2M$ Linux Exploit', sub: '30 Saatte 948 Root Açığı Postmortem', icon: '🔥', action: () => window.location.href = 'blog/openai-1-2-milyon-dolarlik-linux-exploit-skandali.html', badge: 'EN GÜNCEL' },
        { id: 'email', group: 'Aksiyon', title: 'E-Posta Adresini Kopyala', sub: 'tckursat@icloud.com', icon: '📋', action: () => copyEmailToClipboard(), badge: 'KOPYALA' },
        { id: 'audio', group: 'Ayarlar', title: 'Ses Geri Bildirimini (Audio UI) Aç/Kapat', sub: 'Web Audio API Synthesizer', icon: '🔊', action: () => AudioUI.toggle(), badge: 'AUDIO' },
        { id: 'lang-en', group: 'Dil', title: 'Switch Language to English', sub: 'Global English Mode', icon: '🇬🇧', action: () => setLanguage('en') },
        { id: 'lang-tr', group: 'Dil', title: 'Dili Türkçe\'ye Çevir', sub: 'Ana Dil Modu', icon: '🇹🇷', action: () => setLanguage('tr') }
    ];

    function scrollToSection(selector) {
        closePalette();
        const target = document.querySelector(selector);
        if (target) {
            setTimeout(() => {
                if (lenis) lenis.scrollTo(target, { offset: -70 });
                else target.scrollIntoView({ behavior: 'smooth' });
            }, 60);
        }
    }

    function copyEmailToClipboard() {
        navigator.clipboard.writeText('tckursat@icloud.com');
        closePalette();
        const emailLink = document.querySelector('.contact-email');
        if (emailLink) {
            const orig = emailLink.innerHTML;
            emailLink.innerHTML = `<span style="color: #00d9ff;">✓ tckursat@icloud.com Panoya Kopyalandı!</span>`;
            setTimeout(() => { emailLink.innerHTML = orig; }, 2400);
        }
    }

    function openPalette() {
        modal.classList.add('is-open');
        input.value = '';
        selectedIndex = 0;
        renderResults('');
        input.focus();
        document.body.style.overflow = 'hidden';
        if (lenis) lenis.stop();
        AudioUI.open();
    }

    function closePalette() {
        if (!modal.classList.contains('is-open')) return;
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
        if (lenis) lenis.start();
        AudioUI.close();
    }

    function renderResults(filterText) {
        const query = (filterText || '').toLowerCase().trim();
        const matched = commands.filter(c => {
            if (!query) return true;
            return c.title.toLowerCase().includes(query) || 
                   c.sub.toLowerCase().includes(query) || 
                   c.group.toLowerCase().includes(query);
        });

        if (matched.length === 0) {
            results.innerHTML = `<div style="padding: 24px; text-align: center; color: #71717a; font-size: 0.85rem;">Eşleşen komut bulunamadı.</div>`;
            return;
        }

        if (selectedIndex >= matched.length) selectedIndex = 0;

        let html = '';
        let lastGroup = null;

        matched.forEach((c, idx) => {
            if (c.group !== lastGroup) {
                lastGroup = c.group;
                html += `<div class="cmd-group-label">${lastGroup}</div>`;
            }
            const isSelected = idx === selectedIndex;
            html += `
                <div class="cmd-item ${isSelected ? 'is-selected' : ''}" data-idx="${idx}" role="option" aria-selected="${isSelected}">
                    <div class="cmd-item-left">
                        <span class="cmd-item-icon">${c.icon}</span>
                        <div>
                            <span class="cmd-item-title">${c.title}</span>
                            <span class="cmd-item-subtitle">${c.sub}</span>
                        </div>
                    </div>
                    ${c.badge ? `<span class="cmd-item-badge">${c.badge}</span>` : ''}
                </div>
            `;
        });

        results.innerHTML = html;

        results.querySelectorAll('.cmd-item').forEach(itemEl => {
            itemEl.addEventListener('mouseenter', () => {
                const idx = parseInt(itemEl.dataset.idx, 10);
                selectedIndex = idx;
                results.querySelectorAll('.cmd-item').forEach(i => i.classList.remove('is-selected'));
                itemEl.classList.add('is-selected');
                AudioUI.hover();
            });

            itemEl.addEventListener('click', () => {
                const idx = parseInt(itemEl.dataset.idx, 10);
                const cmd = matched[idx];
                if (cmd && cmd.action) {
                    AudioUI.click();
                    cmd.action();
                    closePalette();
                }
            });
        });
    }

    input.addEventListener('input', (e) => {
        selectedIndex = 0;
        renderResults(e.target.value);
    });

    input.addEventListener('keydown', (e) => {
        const items = results.querySelectorAll('.cmd-item');
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (items.length > 0) {
                selectedIndex = (selectedIndex + 1) % items.length;
                renderResults(input.value);
                AudioUI.hover();
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (items.length > 0) {
                selectedIndex = (selectedIndex - 1 + items.length) % items.length;
                renderResults(input.value);
                AudioUI.hover();
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const activeItem = results.querySelector('.cmd-item.is-selected');
            if (activeItem) {
                activeItem.click();
            }
        } else if (e.key === 'Escape') {
            closePalette();
        }
    });

    if (triggerBtn) {
        triggerBtn.addEventListener('click', openPalette);
    }

    if (backdrop) {
        backdrop.addEventListener('click', closePalette);
    }

    const audioBtn = document.getElementById('audioToggleBtn');
    if (audioBtn) {
        audioBtn.addEventListener('click', () => AudioUI.toggle());
    }

    // Global Key Listener for ⌘K
    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            if (modal.classList.contains('is-open')) closePalette();
            else openPalette();
        } else if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closePalette();
        }
    });
}

// ============================================
// AWWWARDS SOTD: VELVET PAGE TRANSITION CURTAIN
// ============================================
function initPageTransitions() {
    const curtain = document.getElementById('pageTransitionCurtain');
    if (!curtain) return;

    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        const isInternal = (href.startsWith('blog/') || href === 'links' || href === 'links/') && !href.startsWith('http') && !href.startsWith('#');
        if (isInternal) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                AudioUI.click();
                curtain.classList.add('is-closing');
                setTimeout(() => {
                    window.location.href = href;
                }, 380);
            });
        }
    });

    window.addEventListener('pageshow', () => {
        curtain.classList.remove('is-closing');
    });
}

// ============================================
// 11. BIOMETRIC HUD & DISCIPLINE SCANNER (AWWWARDS SOTD)
// ============================================
function initDisciplineScanner() {
    const card = document.getElementById('aboutPortraitCard');
    if (!card) return;

    const chips = document.querySelectorAll('.discipline-chip');
    if (!chips || chips.length === 0) return;

    const readoutLabel = document.getElementById('readoutLabel');
    const readoutDesc = document.getElementById('readoutDesc');
    const photo = document.getElementById('portraitPhoto');
    const lighting = document.getElementById('portraitLighting');

    const telemetryData = {
        ai: {
            labelTr: 'AI MİMARİSİ',
            labelEn: 'AI ARCHITECTURE',
            descTr: 'vLLM, egemen yerel çıkarım & ajan orkestrasyonu',
            descEn: 'vLLM, sovereign local inference & agent swarms',
            filter: 'contrast(1.15) brightness(0.95) grayscale(0.15)',
            glow: 'radial-gradient(circle at 45% 28%, rgba(0, 217, 255, 0.14), transparent 65%)'
        },
        saas: {
            labelTr: 'B2B YAZILIM',
            labelEn: 'B2B SYSTEMS',
            descTr: 'Deterministic policy motoru & Jamstack mimarisi',
            descEn: 'Deterministic policy engine & Jamstack stack',
            filter: 'contrast(1.1) brightness(0.9) grayscale(0.25)',
            glow: 'radial-gradient(circle at 55% 35%, rgba(16, 185, 129, 0.14), transparent 65%)'
        },
        builder: {
            labelTr: 'GİRİŞİMCİ',
            labelEn: 'ENTREPRENEUR',
            descTr: '100+ açık kaynak repo, itibar.app, unutma.app',
            descEn: '100+ open-source repos, itibar.app, unutma.app',
            filter: 'contrast(1.18) brightness(0.98) grayscale(0.05)',
            glow: 'radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.12), transparent 70%)'
        },
        boxer: {
            labelTr: 'BOKSÖR',
            labelEn: 'BOXER',
            descTr: '12 raund kondisyon, refleks & baskı altında çelik odak',
            descEn: '12-round conditioning, reflexes & relentless composure',
            filter: 'contrast(1.28) brightness(0.85) grayscale(0.4)',
            glow: 'radial-gradient(circle at 60% 40%, rgba(239, 68, 68, 0.14), transparent 65%)'
        },
        author: {
            labelTr: 'MÜZİSYEN & YAZAR',
            labelEn: 'POET & MUSICIAN',
            descTr: 'Yayınlanmış şiirler & Spotify resmi sanatçı profili',
            descEn: 'Published literary poetry & official Spotify artist stream',
            filter: 'contrast(1.08) brightness(0.92) grayscale(0.1)',
            glow: 'radial-gradient(circle at 40% 30%, rgba(168, 85, 247, 0.14), transparent 65%)'
        }
    };

    chips.forEach(chip => {
        chip.addEventListener('mouseenter', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            const key = chip.dataset.discipline;
            const data = telemetryData[key];
            if (!data) return;

            const isTr = currentLang === 'tr';
            if (readoutLabel) readoutLabel.textContent = isTr ? data.labelTr : data.labelEn;
            if (readoutDesc) readoutDesc.textContent = isTr ? data.descTr : data.descEn;

            if (photo) photo.style.filter = data.filter;
            if (lighting) lighting.style.background = data.glow;
        });
    });
}

// ============================================
// 12. SNELLENBERG CONTACT FORM & CLOCK
// ============================================
function initContactForm() {
    const servicePills = document.querySelectorAll('#contactServicePills .service-pill-btn');
    servicePills.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
        });
    });

    const clockEl = document.getElementById('contactClock');
    if (clockEl) {
        function updateContactClock() {
            try {
                const now = new Date();
                const timeStr = new Intl.DateTimeFormat('tr-TR', {
                    timeZone: 'Europe/Istanbul',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                }).format(now);
                clockEl.textContent = `${timeStr} GMT+3`;
            } catch (e) {
                clockEl.textContent = 'GMT+3';
            }
        }
        updateContactClock();
        setInterval(updateContactClock, 1000);
    }
}

function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    const selectedPills = Array.from(document.querySelectorAll('#contactServicePills .service-pill-btn.active'))
        .map(b => b.textContent.trim())
        .join(', ');

    const statusMsg = document.getElementById('formStatusMsg');
    if (!name || !email || !message) return;

    if (statusMsg) {
        statusMsg.textContent = currentLang === 'tr' 
            ? '✓ E-posta istemciniz hazırlanıyor...' 
            : '✓ Preparing email client...';
    }

    const subject = encodeURIComponent(`[devkursat.github.io] Proje & Mimari Talebi - ${name}`);
    const body = encodeURIComponent(
`Merhaba Kürşat,

İsim: ${name}
E-posta: ${email}
Hizmet Alanı: ${selectedPills || 'Genel Mimarî Görüşme'}

Mesaj / Proje Detayı:
${message}
`
    );

    setTimeout(() => {
        window.location.href = `mailto:tckursat@icloud.com?subject=${subject}&body=${body}`;
        if (statusMsg) {
            statusMsg.textContent = currentLang === 'tr' 
                ? '✓ Mesaj iletildi. 24 saat içinde yanıt verilecektir.' 
                : '✓ Message dispatched. I will reply within 24h.';
        }
    }, 400);
}

// ============================================
// 12. 3D CYBER GRID & HORIZON PARALLAX
// ============================================
function init3DGridEnvironment() {
    const gridPlane = document.getElementById('cyberGridPlane');
    if (!gridPlane) return;

    let targetRotZ = 0;
    let currentRotZ = 0;

    window.addEventListener('mousemove', (e) => {
        const normX = (e.clientX / window.innerWidth) - 0.5;
        targetRotZ = normX * 6; // up to ±3 deg subtle twist
    }, { passive: true });

    function tick() {
        currentRotZ += (targetRotZ - currentRotZ) * 0.08;
        gridPlane.style.transform = `rotateX(64deg) rotateZ(${currentRotZ.toFixed(2)}deg)`;
        requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

// ============================================
// 12.1 INTERACTIVE 3D CARD TILT & SPECULAR GLARE
// ============================================
function init3DCardTilt() {
    // Only enable on desktop with mouse
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const tiltSelector = '.project-card, .skills-bento-card, .about-portrait-card, .editorial-pub-row, .blog-cta-banner';
    const attachTilt = () => {
        const cards = document.querySelectorAll(tiltSelector);
        cards.forEach(card => {
            if (card.dataset.tiltAttached) return;
            card.dataset.tiltAttached = 'true';
            card.classList.add('has-3d-tilt', 'grid-caliper-card');

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const normX = (x - rect.width / 2) / (rect.width / 2);
                const normY = (y - rect.height / 2) / (rect.height / 2);

                const maxTilt = 7; // deg
                const rotX = -normY * maxTilt;
                const rotY = normX * maxTilt;

                card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(8px) scale3d(1.012, 1.012, 1.012)`;
                card.style.setProperty('--tilt-shine-x', `${x}px`);
                card.style.setProperty('--tilt-shine-y', `${y}px`);
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)';
            });
        });
    };

    attachTilt();
    // Re-check after dynamic renders
    setTimeout(attachTilt, 600);
    setTimeout(attachTilt, 1500);
}

// ============================================
// 12.2 SLIDE-BY-SLIDE DECK NAVIGATION RAIL
// ============================================
function initSlideDeckHUD() {
    const deckHud = document.getElementById('slideDeckHud');
    const nodes = document.querySelectorAll('.deck-slide-node');
    const activeIdxEl = document.getElementById('deckActiveIdx');
    if (!deckHud || !nodes.length) return;

    const sectionIds = ['hero', 'about', 'projects', 'skills', 'blog', 'contact'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    let activeIndex = 0;

    function setActiveSlide(idx) {
        if (idx < 0 || idx >= nodes.length) return;
        activeIndex = idx;
        nodes.forEach((n, i) => {
            if (i === idx) {
                n.classList.add('active');
            } else {
                n.classList.remove('active');
            }
        });
        if (activeIdxEl) {
            activeIdxEl.textContent = String(idx + 1).padStart(2, '0');
        }
    }

    // IntersectionObserver to sync active node on scroll
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const idx = sectionIds.indexOf(entry.target.id);
                    if (idx !== -1) {
                        setActiveSlide(idx);
                    }
                }
            });
        }, {
            threshold: 0.25,
            rootMargin: '-10% 0px -40% 0px'
        });

        sections.forEach(sec => observer.observe(sec));
    }

    // Smooth Click Jumps
    nodes.forEach(node => {
        node.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = node.getAttribute('href');
            const targetEl = document.querySelector(targetId);
            if (!targetEl) return;

            if (window.lenis) {
                window.lenis.scrollTo(targetEl, { duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
            } else {
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Keyboard Arrow slide control (ArrowDown / ArrowUp / PageDown / PageUp)
    window.addEventListener('keydown', (e) => {
        // Do not intercept if user is typing in form inputs
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            if (activeIndex < sections.length - 1) {
                e.preventDefault();
                const nextSec = sections[activeIndex + 1];
                if (window.lenis) window.lenis.scrollTo(nextSec, { duration: 1.1 });
                else nextSec.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            if (activeIndex > 0) {
                e.preventDefault();
                const prevSec = sections[activeIndex - 1];
                if (window.lenis) window.lenis.scrollTo(prevSec, { duration: 1.1 });
                else prevSec.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}

// ============================================
// 13. INITIALIZATION ORCHESTRATOR
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initLenis();
    initLoader();
    initHeroShader();
    initCursor();
    initNavigation();
    initStatsCounter();
    initProjects();
    initAboutBento();
    initSkillsCanvas();
    initDisciplineScanner();
    initMarquee();
    initContactForm();
    initBlogFan();
    initHomeTypeform();
    initCommandPalette();
    initPageTransitions();
    initFooterWordmark();
    init3DGridEnvironment();
    init3DCardTilt();
    initSlideDeckHUD();
});

// Tab Visibility Guard
document.addEventListener('visibilitychange', () => {
    const state = document.hidden ? 'paused' : 'running';
    document.querySelectorAll('.marquee-content, .spotify-eq-bars span').forEach(el => {
        el.style.animationPlayState = state;
    });
});

console.log('%c🚀 Kürşat Yılmaz | Awwwards Juried Portfolio', 'font-size: 18px; color: #00D9FF; font-weight: 700;');
console.log('%cArchitecting deterministic AI platforms & sovereign systems.', 'font-size: 13px; color: #10B981;');
