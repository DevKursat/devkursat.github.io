/* ============================================
   KÜRŞAT YILMAZ PORTFOLIO - JAVASCRIPT
   Enhanced with Language Support (TR/EN)
   ============================================ */

// ============================================
// PROJECT DATA (Bilingual)
// ============================================
const projectsData = {
    itibar: {
        title: "İtibar",
        brandName: "itibar",
        tagline: { tr: '"itibar\'dan tasarruf olmaz."', en: '"There is no compromise on reputation."' },
        category: { tr: "B2B İtibar Savunma & Hukuk", en: "B2B Reputation Defense & Law" },
        status: { tr: "Canlı Servis", en: "Live in Production" },
        statusType: "active",
        badge: { tr: "Canlı Servis ↗", en: "Live Platform ↗" },
        liveUrl: "https://www.itibar.app/",
        icon: "assets/projects/itibar/logo-mark.svg",
        logo: "assets/projects/itibar/logo-mark.svg",
        image: "assets/projects/itibar/itibar-luxury-bg.jpg",
        previewImage: "assets/projects/itibar/itibar-luxury-bg.jpg",
        gradient: "linear-gradient(135deg, #10b981, #059669)",
        spotlightColor: "16, 185, 129",
        filter: "web",
        description: {
            tr: "Haksız ve organize 1-yıldızlı yorum saldırılarına karşı deterministik politika analiz motoru ve yasal mevzuat zemininde çalışan otonom B2B itibar savunma platformu.",
            en: "Autonomous B2B reputation defense platform operating on deterministic policy classification and statutory legal grounds against unfair and fake 1-star reviews."
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
        tech: ["Vanilla JS", "Node.js", "Chrome Headless", "Jamstack", "REST API"],
        github: "https://github.com/DevKursat/itibar",
        githubRepo: "itibar",
        stars: 34,
        forks: 5
    },
    unutma: {
        title: "Unutma.",
        brandName: "Unutma.",
        tagline: { tr: "Mesafe tanımaz, unutulmaz.", en: "Bridging distance with timeless ink." },
        category: { tr: "Sivil Teknoloji & İletişim", en: "Civic Tech & Platform" },
        status: { tr: "Canlıda", en: "Live" },
        statusType: "active",
        badge: { tr: "Canlı Servis ↗", en: "Live Platform ↗" },
        liveUrl: "https://unutma.itibar.app",
        icon: "assets/projects/unutma-seal.png",
        logo: "assets/projects/unutma-seal.png",
        image: "assets/projects/unutma-hero.jpg",
        previewImage: "assets/projects/unutma-hero.jpg",
        gradient: "linear-gradient(135deg, #b93826, #e06d53)",
        spotlightColor: "185, 56, 38",
        filter: "web",
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
        liveUrl: "https://unutma.itibar.app",
        description: {
            tr: "Cezaevlerindeki tutuklu ve hükümlülere fildişi kâğıt, mum mühür ve PTT Taahhütlü mektup gönderimini sağlayan, yapay zekâ asistanlı sivil teknoloji platformu.",
            en: "Civic tech and communication platform enabling users to send wax-sealed, certified letters on ivory paper to inmates, powered by an AI assistant."
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
        tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Gemini AI"],
        github: "https://github.com/DevKursat/unutma",
        githubRepo: "unutma",
        stars: 18,
        forks: 3
    },
    firdews: {
        title: "Firdews",
        category: { tr: "Mistik & Yaşam", en: "Mystic & Lifestyle" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "🌱",
        gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
        spotlightColor: "17, 153, 142",
        filter: "mobile",
        description: {
            tr: "Zihinsel huzur, manevi gelişim ve günlük rutinler için geliştirilmiş, estetik ve dinlendirici kullanıcı deneyimine odaklanan mobil platform.",
            en: "Mobile platform developed for mental peace, spiritual growth, and daily routines, focusing on an aesthetic and calming user experience."
        },
        features: {
            tr: [
                "Kişiselleştirilmiş manevi rutinler",
                "Zihinsel dinlenme egzersizleri",
                "Estetik arayüz ve ses kütüphanesi",
                "İnteraktif hatırlatıcılar"
            ],
            en: [
                "Personalized spiritual routines",
                "Mental relaxation exercises",
                "Aesthetic interface and sound library",
                "Interactive reminders"
            ]
        },
        tech: ["Next.js", "Tailwind CSS", "Supabase", "Prisma"],
        github: "https://github.com/DevKursat/Firdews",
        githubRepo: "Firdews",
        stars: 18,
        forks: 2
    }
};

// ============================================
// LANGUAGE SYSTEM
// ============================================
function getPreferredLanguage() {
    const browserLanguages = navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language || navigator.userLanguage || 'tr'];

    return browserLanguages.some(lang => lang.toLowerCase().startsWith('tr')) ? 'tr' : 'en';
}

let currentLang = localStorage.getItem('lang') || getPreferredLanguage();

function updateLocalizedLinks(lang) {
    document.querySelectorAll('[data-tr-href][data-en-href]').forEach(el => {
        el.setAttribute('href', el.getAttribute(`data-${lang}-href`));
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-tr][data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    document.querySelectorAll('[data-tr-alt][data-en-alt]').forEach(el => {
        el.setAttribute('alt', el.getAttribute(`data-${lang}-alt`));
    });

    updateLocalizedLinks(lang);
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // If modal is open, update modal content
    const modal = document.getElementById('projectModal');
    if (modal && modal.classList.contains('active')) {
        const projectId = modal.dataset.projectId;
        if (projectId && projectsData[projectId]) {
            updateModalContent(projectsData[projectId]);
        }
    }
    
    // Update dynamically rendered projects
    const activeFilterBtn = document.querySelector('.filter-btn.active');
    const filter = activeFilterBtn ? activeFilterBtn.dataset.filter : 'all';
    renderProjects(filter);
}

function initLanguage() {
    // Set initial language
    setLanguage(currentLang);
    
    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });

    document.querySelectorAll('[data-tr-href][data-en-href]').forEach(link => {
        link.addEventListener('click', () => {
            updateLocalizedLinks(currentLang);
        });
    });
}

// ============================================
// CUSTOM CURSOR
// ============================================
function initCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (!cursor || !follower) return;
    
    // Check for touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        cursor.style.display = 'none';
        follower.style.display = 'none';
        return;
    }
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        // Cursor (fast)
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // Follower (slower)
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        
        requestAnimationFrame(animate);
    }
    animate();
    
    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .project-mini, .hobby-item, .skill-tag');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            follower.classList.add('active');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            follower.classList.remove('active');
        });
    });
}

// ============================================
// LOADER
// ============================================
function initLoader() {
    const loader = document.querySelector('.loader');
    
    window.addEventListener('load', () => {
        // Wait for dots animation to show
        setTimeout(() => {
            // Smooth fade out
            loader.classList.add('fade-out');
            
            // After animation, hide completely
            setTimeout(() => {
                loader.classList.add('hidden');
                document.body.style.overflow = '';
                initScrollAnimations();
            }, 800);
        }, 1000);
    });
    
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const nav = document.querySelector('.nav');
    const menuBtn = document.querySelector('.nav-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    // Scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const elements = document.querySelectorAll('[data-scroll]');
    
    const observerOptions = {
        root: null,
        rootMargin: '-50px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.scrollDelay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    elements.forEach(el => observer.observe(el));
}

// ============================================
// STATS COUNTER
// ============================================
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.dataset.count);
                animateCount(target, count);
                observer.unobserve(target);
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => observer.observe(stat));
}

function animateCount(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 1500;
    const stepTime = duration / 50;
    const suffix = element.dataset.suffix || '';
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = `${target}${suffix}`;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// ============================================
// PROJECT MODAL
// ============================================
// PROJECTS DIRECTORY SYSTEM
// ============================================
async function fetchGitHubStats() {
    try {
        const response = await fetch('https://api.github.com/users/DevKursat/repos?per_page=100');
        if (!response.ok) return;
        const repos = await response.json();
        
        repos.forEach(repo => {
            const repoNameLower = repo.name.toLowerCase();
            for (const key in projectsData) {
                const proj = projectsData[key];
                if (proj.githubRepo && proj.githubRepo.toLowerCase() === repoNameLower) {
                    proj.stars = repo.stargazers_count;
                    proj.forks = repo.forks_count;
                    
                    // Update on-screen stars/forks count
                    const card = document.querySelector(`[data-project="${key}"]`);
                    if (card) {
                        const starsEl = card.querySelector('.project-stars-count');
                        const forksEl = card.querySelector('.project-forks-count');
                        if (starsEl) starsEl.textContent = repo.stargazers_count;
                        if (forksEl) forksEl.textContent = repo.forks_count;
                    }
                }
            }
        });
    } catch (error) {
        console.error("Error fetching GitHub stats:", error);
    }
}

function renderProjects(filter = 'all') {
    const container = document.getElementById('projectsContainer');
    if (!container) return;
    
    let html = '';
    const lang = currentLang;
    
    for (const key in projectsData) {
        const project = projectsData[key];
        if (filter !== 'all' && project.filter !== filter) continue;
        
        const techHTML = project.tech.slice(0, 3).map(t => `<span>${t}</span>`).join('');
        const isIconImage = project.icon && (project.icon.endsWith('.png') || project.icon.endsWith('.jpg') || project.icon.endsWith('.svg'));
        const iconHTML = isIconImage 
            ? `<img src="${project.icon}" alt="${project.title}" class="project-card-custom-logo">` 
            : project.icon;
        
        html += `
            <article class="project-card ${project.image ? 'has-card-image' : ''}" data-project="${key}" style="--spotlight-color: ${project.spotlightColor}" data-scroll="scale-up">
                <div class="project-card-visual">
                    ${project.image ? `<img src="${project.image}" alt="${project.title}" class="project-card-bg-image" loading="lazy">` : ''}
                    <div class="project-card-visual-scrim"></div>
                    <div class="project-card-glow" style="--gradient: ${project.gradient}"></div>
                    ${project.liveUrl ? `
                        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-card-live-pill" onclick="event.stopPropagation();" aria-label="${lang === 'tr' ? 'Canlı Servisi Ziyaret Et' : 'Visit Live Platform'}">
                            <span class="live-pulse-dot"></span>
                            <span>${project.badge ? project.badge[lang] : (lang === 'tr' ? 'Canlı Servis ↗' : 'Live Platform ↗')}</span>
                        </a>
                    ` : ''}
                    <div class="project-card-brand-island">
                        <div class="project-card-brand-emblem">${iconHTML}</div>
                        ${project.brandName ? `<span class="project-card-brand-name">${project.brandName}</span>` : ''}
                    </div>
                </div>
                <div class="project-card-body">
                    <div class="project-card-meta">
                        <span class="project-card-category">${project.category[lang]}</span>
                        <span class="project-status ${project.statusType}">${project.status[lang]}</span>
                    </div>
                    <h3 class="project-card-title">${project.title}</h3>
                    <p class="project-card-desc">${project.description[lang]}</p>
                    <div class="project-card-footer">
                        <div class="project-card-tech">
                            ${techHTML}
                        </div>
                        <div class="project-card-stats">
                            ${project.liveUrl ? `
                                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-card-visit-btn" onclick="event.stopPropagation();" title="${lang === 'tr' ? 'Web Sitesini Aç' : 'Visit Website'}">
                                    <span>${lang === 'tr' ? 'Sitemizi Aç' : 'Visit Site'}</span>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                                    </svg>
                                </a>
                            ` : `
                                <span class="project-stat-item" title="Stars">
                                    🌟 <span class="project-stars-count">${project.stars}</span>
                                </span>
                                <span class="project-stat-item" title="Forks">
                                    🍴 <span class="project-forks-count">${project.forks}</span>
                                </span>
                            `}
                            <button class="project-card-expand" aria-label="${lang === 'tr' ? 'Detayları gör' : 'View details'}">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }
    
    // Curated bilingual values for the 4th GitHub card
    const moreProjectsTitle = lang === 'tr' ? 'Daha Fazla Proje' : 'More Projects';
    const moreProjectsDesc = lang === 'tr' 
        ? "Bazı kurumsal ve özel projelerimi gizlilik sözleşmeleri (NDA) sebebiyle burada gösteremiyorum. Diğer açık kaynaklı çalışmalarımı keşfetmek için GitHub profilimi ziyaret edebilirsiniz." 
        : "Due to confidentiality agreements (NDA), some of my enterprise projects are not shown here. Visit my GitHub profile to explore my open-source works.";
    const moreProjectsCategory = lang === 'tr' ? 'Daha Fazlası' : 'More';
    const moreProjectsStatus = lang === 'tr' ? 'Keşfet' : 'Explore';
    
    // Append the 4th special GitHub card (Wide horizontal layout)
    html += `
        <article class="project-card more-projects-card" onclick="window.open('https://github.com/DevKursat', '_blank')" style="--spotlight-color: 0, 217, 255" data-scroll="scale-up">
            <div class="more-projects-glow" style="--gradient: linear-gradient(135deg, #00D9FF, #0066FF); opacity: 0.12;"></div>
            <div class="more-projects-pattern"></div>
            
            <div class="more-projects-left">
                <div class="more-projects-icon-wrapper">
                    📂
                </div>
            </div>
            
            <div class="more-projects-middle">
                <h3 class="more-projects-title">${moreProjectsTitle}</h3>
                <p class="more-projects-desc">${moreProjectsDesc}</p>
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
    
    // Scroll reveal binding (trigger layout refresh since items are added dynamically)
    if (typeof scrollReveal === 'function') {
        scrollReveal();
    } else {
        // Fallback: manually trigger scroll animation visible class
        const dynamicItems = container.querySelectorAll('[data-scroll]');
        if (typeof IntersectionObserver !== 'undefined') {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            dynamicItems.forEach(item => observer.observe(item));
        } else {
            dynamicItems.forEach(item => item.classList.add('visible'));
        }
    }
    
    // Attach event listeners
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
}

function initProjects() {
    renderProjects('all');
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            renderProjects(filter);
        });
    });
    
    const modal = document.getElementById('projectModal');
    if (modal) {
        const modalBackdrop = modal.querySelector('.modal-backdrop');
        const modalClose = modal.querySelector('.modal-close');
        
        if (modalClose) modalClose.addEventListener('click', closeModal);
        if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }
    
    fetchGitHubStats();
}

function openModal(project, projectId) {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    modal.dataset.projectId = projectId;
    
    // Hide tech cursor canvas so particles don't obscure modal
    const canvas = document.getElementById('techCursorCanvas');
    if (canvas) canvas.style.opacity = '0';
    
    updateModalContent(project);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateModalContent(project) {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    const lang = currentLang;
    
    // Bind spotlight color and dynamic gradient to modal
    modal.style.setProperty('--spotlight-color', project.spotlightColor || '16, 185, 129');
    modal.style.setProperty('--modal-gradient', project.gradient || 'linear-gradient(135deg, #10b981, #059669)');
    
    // Update visual header
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

    const visualGrad = modal.querySelector('.modal-visual-gradient') || modal.querySelector('.modal-gradient');
    if (visualGrad) {
        visualGrad.style.background = `linear-gradient(180deg, rgba(8, 8, 10, 0.1) 0%, rgba(14, 14, 18, 0.5) 55%, #0e0e12 100%)`;
    }

    // Status Pill in header
    const statusPill = modal.querySelector('.modal-status-pill');
    if (statusPill && project.status) {
        statusPill.innerHTML = `
            <span class="live-pulse-dot"></span>
            <span>${project.status[lang]}</span>
        `;
        statusPill.className = `modal-status-pill ${project.statusType || 'active'}`;
    }

    // Brand Hero (Official Logo + Brand Word + Tagline)
    const brandHero = modal.querySelector('.modal-brand-hero');
    const brandLogoImg = modal.querySelector('.modal-brand-logo');
    const brandNameEl = modal.querySelector('.modal-brand-name');
    const brandTaglineEl = modal.querySelector('.modal-brand-tagline');

    if (brandHero) {
        if (project.logo) {
            brandLogoImg.src = project.logo;
            brandLogoImg.alt = `${project.title} Logo`;
            brandLogoImg.style.display = 'block';
        } else {
            brandLogoImg.style.display = 'none';
        }
        
        if (brandNameEl) {
            brandNameEl.textContent = project.brandName || project.title;
        }
        
        if (brandTaglineEl) {
            const taglineText = project.tagline ? project.tagline[lang] : project.category[lang];
            brandTaglineEl.textContent = taglineText;
        }
    }
    
    // Update category & title
    const categoryEl = modal.querySelector('.modal-category');
    if (categoryEl) categoryEl.textContent = project.category[lang];
    
    const titleEl = modal.querySelector('.modal-title');
    if (titleEl) titleEl.textContent = project.title;
    
    const descEl = modal.querySelector('.modal-description');
    if (descEl) descEl.textContent = project.description[lang];
    
    // Metrics (Awwwards Impact Cards)
    const metricsWrap = modal.querySelector('#modalMetrics');
    if (metricsWrap) {
        if (project.metrics && project.metrics[lang] && project.metrics[lang].length > 0) {
            metricsWrap.style.display = 'block';
            const metricsGrid = metricsWrap.querySelector('.modal-metrics-grid');
            if (metricsGrid) {
                metricsGrid.innerHTML = project.metrics[lang].map(m => `
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

    // Update features (2-Column Glass Cards)
    const featureList = modal.querySelector('.modal-feature-list');
    if (featureList && project.features && project.features[lang]) {
        featureList.innerHTML = project.features[lang].map(f => `
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
    
    // Update tech stack
    const techList = modal.querySelector('.modal-tech-list');
    if (techList && project.tech) {
        techList.innerHTML = project.tech.map(t => `<span class="modal-tech-pill">${t}</span>`).join('');
    }
    
    // Actions - Canlı Web Sitesi & GitHub Butonları
    const modalLiveBtn = modal.querySelector('.modal-live-btn');
    const modalLiveText = modal.querySelector('.modal-live-text');
    const modalGithubBtn = modal.querySelector('.modal-link');
    const modalGithubSpan = modalGithubBtn ? modalGithubBtn.querySelector('span') : null;
    
    if (project.liveUrl && modalLiveBtn) {
        modalLiveBtn.href = project.liveUrl;
        modalLiveBtn.style.display = 'inline-flex';
        let liveLabel = lang === 'tr' ? 'Canlı Platformu Keşfet' : 'Explore Live Platform';
        if (project.title === 'İtibar') {
            liveLabel = lang === 'tr' ? 'itibar.app Platformunu Keşfet' : 'Explore itibar.app Live';
        } else if (project.title === 'Unutma.') {
            liveLabel = lang === 'tr' ? 'Web Sitesini Ziyaret Et (unutma.itibar.app)' : 'Visit Live Website (unutma.itibar.app)';
        }
        if (modalLiveText) {
            modalLiveText.textContent = liveLabel;
            modalLiveText.dataset.tr = liveLabel;
            modalLiveText.dataset.en = liveLabel;
        }
    } else if (modalLiveBtn) {
        modalLiveBtn.style.display = 'none';
    }
    
    if (modalGithubBtn) {
        if (project.title === 'Unutma.') {
            modalGithubBtn.style.display = 'none';
        } else {
            modalGithubBtn.style.display = 'inline-flex';
            modalGithubBtn.href = project.github || '#';
            if (modalGithubSpan) {
                modalGithubSpan.textContent = lang === 'tr' ? "GitHub Kaynak Kodu" : 'View Source on GitHub';
                modalGithubSpan.dataset.tr = "GitHub Kaynak Kodu";
                modalGithubSpan.dataset.en = 'View Source on GitHub';
            }
        }
    }
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Restore tech cursor canvas
    const canvas = document.getElementById('techCursorCanvas');
    if (canvas) canvas.style.opacity = '1';
}

// ============================================
// PARALLAX EFFECTS
// ============================================
function initParallax() {
    const orbs = document.querySelectorAll('.gradient-orb');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        orbs.forEach((orb, index) => {
            const speed = 0.1 + (index * 0.05);
            orb.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
}

// ============================================
// ============================================
// INTERACTIVE FLOATING SKILLS CANVAS
// ============================================
const skillsData = [
    { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', color: '#3178C6' },
    { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
    { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', color: '#61DAFB' },
    { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', color: '#FFFFFF', invertOnDark: true },
    { name: 'Vue.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', color: '#4FC08D' },
    { name: 'Tailwind CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', color: '#38BDF8' },
    { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', color: '#339933' },
    { name: 'NestJS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg', color: '#E0234E' },
    { name: 'FastAPI', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', color: '#009688' },
    { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', color: '#3776AB' },
    { name: 'Go', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg', color: '#00ADD8' },
    { name: 'Rust', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg', color: '#DEA584' },
    { name: 'Flutter', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg', color: '#02569B' },
    { name: 'React Native', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', color: '#61DAFB' },
    { name: 'Prisma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg', color: '#5A67D8', invertOnDark: true },
    { name: 'Supabase', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg', color: '#3ECF8E' },
    { name: 'Firebase', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg', color: '#FFCA28' },
    { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', color: '#336791' },
    { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', color: '#47A248' },
    { name: 'Redis', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg', color: '#FF3E30' },
    { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', color: '#2496ED' },
    { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', color: '#FF9900' },
    { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', color: '#F05032' },
    { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', color: '#F24E1E' },
    { name: 'Vite', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg', color: '#646CFF' },
    { name: 'GraphQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg', color: '#E10098' }
];

function initSkillsCanvas() {
    const container = document.getElementById('skillsCanvas');
    if (!container) return;

    container.innerHTML = '';

    const relativeCoords = [
        // Row 1 (y: ~15%)
        { x: 0.06, y: 0.15 }, { x: 0.20, y: 0.13 }, { x: 0.34, y: 0.16 }, { x: 0.48, y: 0.14 }, { x: 0.62, y: 0.17 }, { x: 0.76, y: 0.15 }, { x: 0.90, y: 0.13 },
        // Row 2 (y: ~38%)
        { x: 0.10, y: 0.36 }, { x: 0.26, y: 0.40 }, { x: 0.42, y: 0.37 }, { x: 0.58, y: 0.39 }, { x: 0.74, y: 0.36 }, { x: 0.90, y: 0.40 },
        // Row 3 (y: ~62%)
        { x: 0.05, y: 0.60 }, { x: 0.19, y: 0.64 }, { x: 0.33, y: 0.61 }, { x: 0.47, y: 0.63 }, { x: 0.61, y: 0.60 }, { x: 0.75, y: 0.64 }, { x: 0.89, y: 0.61 },
        // Row 4 (y: ~83%)
        { x: 0.08, y: 0.83 }, { x: 0.24, y: 0.80 }, { x: 0.40, y: 0.84 }, { x: 0.56, y: 0.81 }, { x: 0.72, y: 0.85 }, { x: 0.88, y: 0.82 }
    ];

    const cards = [];

    function hexToRgb(hex) {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0, 217, 255';
    }

    skillsData.forEach((skill, index) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'floating-skill-card';
        cardEl.style.setProperty('--card-hover-color', skill.color);
        cardEl.style.setProperty('--card-glow-rgb', hexToRgb(skill.color));
        
        const imgStyle = skill.invertOnDark ? 'style="filter: invert(1) brightness(2);"' : '';
        cardEl.innerHTML = `
            <img src="${skill.iconUrl}" alt="${skill.name}" ${imgStyle} />
            <div class="floating-skill-tooltip">${skill.name}</div>
        `;
        
        container.appendChild(cardEl);

        cards.push({
            element: cardEl,
            baseX: 0,
            baseY: 0,
            width: 80,
            height: 80,
            springX: 0,
            springY: 0,
            vx: 0,
            vy: 0,
            floatPhaseX: Math.random() * Math.PI * 2,
            floatPhaseY: Math.random() * Math.PI * 2,
            floatPhaseRot: Math.random() * Math.PI * 2,
            floatSpeed: 0.6 + Math.random() * 0.8,
            floatAmpX: 4 + Math.random() * 5,
            floatAmpY: 4 + Math.random() * 5,
            floatAmpRot: 2 + Math.random() * 4
        });
    });

    let mouseX = -9999;
    let mouseY = -9999;
    let containerRect = container.getBoundingClientRect();

    function handleResize() {
        containerRect = container.getBoundingClientRect();
        cards.forEach((card, index) => {
            const rect = card.element.getBoundingClientRect();
            card.width = rect.width || 80;
            card.height = rect.height || 80;
            
            const coord = relativeCoords[index % relativeCoords.length];
            card.baseX = coord.x * containerRect.width - card.width / 2;
            card.baseY = coord.y * containerRect.height - card.height / 2;
            
            card.element.style.left = `${card.baseX}px`;
            card.element.style.top = `${card.baseY}px`;
        });
    }

    setTimeout(handleResize, 100);
    window.addEventListener('resize', handleResize);

    container.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    container.addEventListener('mouseleave', () => {
        mouseX = -9999;
        mouseY = -9999;
    });

    container.addEventListener('touchstart', (e) => {
        if (e.touches.length > 0) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        }
    }, { passive: true });

    container.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        }
    }, { passive: true });

    container.addEventListener('touchend', () => {
        mouseX = -9999;
        mouseY = -9999;
    });

    container.addEventListener('touchcancel', () => {
        mouseX = -9999;
        mouseY = -9999;
    });

    const stiffness = 220;
    const damping = 18;

    let lastTime = performance.now();
    let animationFrameId = null;

    function updatePhysics(dt) {
        containerRect = container.getBoundingClientRect();

        cards.forEach((card) => {
            const cx = containerRect.left + card.baseX + card.width / 2 + card.springX;
            const cy = containerRect.top + card.baseY + card.height / 2 + card.springY;

            let targetX = 0;
            let targetY = 0;

            if (mouseX !== -9999 && mouseY !== -9999) {
                const dx = cx - mouseX;
                const dy = cy - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 160 && distance > 0) {
                    const angle = Math.atan2(dy, dx);
                    const force = (1 - distance / 160) * 70;
                    targetX = Math.cos(angle) * force;
                    targetY = Math.sin(angle) * force;
                }
            }

            const ax = stiffness * (targetX - card.springX) - damping * card.vx;
            const ay = stiffness * (targetY - card.springY) - damping * card.vy;

            card.vx += ax * dt;
            card.vy += ay * dt;
            card.springX += card.vx * dt;
            card.springY += card.vy * dt;
        });
    }

    function renderLoop(timeNow) {
        let deltaTime = (timeNow - lastTime) / 1000;
        lastTime = timeNow;

        if (deltaTime > 0.1) deltaTime = 0.1;

        const step = 0.008;
        let accumulatedTime = deltaTime;
        while (accumulatedTime >= step) {
            updatePhysics(step);
            accumulatedTime -= step;
        }

        cards.forEach((card) => {
            const time = timeNow * 0.001 * card.floatSpeed;
            const floatX = Math.sin(time + card.floatPhaseX) * card.floatAmpX;
            const floatY = Math.cos(time * 0.85 + card.floatPhaseY) * card.floatAmpY;
            const floatRot = Math.sin(time * 0.5 + card.floatPhaseRot) * card.floatAmpRot;

            const x = card.springX + floatX;
            const y = card.springY + floatY;

            card.element.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${floatRot}deg)`;
        });

        animationFrameId = requestAnimationFrame(renderLoop);
    }

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
        window.removeEventListener('resize', handleResize);
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    };
}

// ============================================
// 3D TILT EFFECT FOR PROJECT CARDS
// ============================================
function initTiltEffect() {
    const cards = document.querySelectorAll('.project-mini');
    
    cards.forEach(card => {
        card.classList.add('tilt');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// ============================================
// MARQUEE PAUSE ON HOVER
// ============================================
function initMarquee() {
    const marquee = document.querySelector('.marquee');
    if (!marquee) return;
    
    const contents = marquee.querySelectorAll('.marquee-content');
    
    marquee.addEventListener('mouseenter', () => {
        contents.forEach(content => {
            content.style.animationPlayState = 'paused';
        });
    });
    
    marquee.addEventListener('mouseleave', () => {
        contents.forEach(content => {
            content.style.animationPlayState = 'running';
        });
    });
}

// ============================================
// ABOUT VISUAL VERTICAL MARQUEE OPACITY PHYSICS
// ============================================
function initAboutMarquee() {
    const marqueeContainer = document.getElementById('aboutMarquee');
    if (!marqueeContainer) return;

    const items = marqueeContainer.querySelectorAll('.marquee-item');
    
    function updateOpacity() {
        const containerRect = marqueeContainer.getBoundingClientRect();
        const centerY = containerRect.top + containerRect.height / 2;

        items.forEach((item) => {
            const itemRect = item.getBoundingClientRect();
            const itemCenterY = itemRect.top + itemRect.height / 2;
            const distance = Math.abs(centerY - itemCenterY);
            const maxDistance = containerRect.height / 2;
            const normalizedDistance = Math.min(distance / maxDistance, 1);
            
            const opacity = 1 - normalizedDistance * 0.88;
            item.style.opacity = opacity.toString();
            
            const scale = 1.06 - normalizedDistance * 0.12;
            item.style.transform = `scale(${scale})`;
        });
    }

    let animationFrameId;
    function loop() {
        updateOpacity();
        animationFrameId = requestAnimationFrame(loop);
    }

    loop();
}

// ============================================
// TECH PARTICLE CURSOR
// ============================================
const techCursorIcons = [
    {
        name: "JavaScript",
        src: "https://res.cloudinary.com/dz1fy2tof/image/upload/v1755012752/js_nocitj.png"
    },
    {
        name: "TypeScript",
        src: "https://res.cloudinary.com/dz1fy2tof/image/upload/v1755012632/ts_elsqw8.png"
    },
    {
        name: "React",
        src: "https://res.cloudinary.com/dz1fy2tof/image/upload/v1755012941/react_ogt6ny.svg"
    },
    {
        name: "Next.js",
        src: "https://res.cloudinary.com/dz1fy2tof/image/upload/v1755012973/next_hrodnb.svg"
    },
    {
        name: "HTML",
        src: "https://res.cloudinary.com/dz1fy2tof/image/upload/v1755012812/html_xbcdkj.png"
    },
    {
        name: "CSS",
        src: "https://res.cloudinary.com/dz1fy2tof/image/upload/v1755012862/css_1_irojyc.png"
    }
];

function initTechCursor() {
    // Avoid running on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'techCursorCanvas';
    canvas.className = 'tech-cursor-canvas';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const techImages = [];
    let imagesLoaded = false;

    const loadImages = async () => {
        const promises = techCursorIcons.map(({ name, src }) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.crossOrigin = "anonymous";
                img.onload = () => resolve({ name, src, image: img });
                img.onerror = () => resolve(null);
            });
        });
        const results = await Promise.all(promises);
        results.forEach(res => {
            if (res) techImages.push(res);
        });
        imagesLoaded = techImages.length > 0;
    };

    loadImages();

    const particles = [];

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.update();
            p.draw(ctx);
            if (p.alpha <= 0) {
                particles.splice(i, 1);
            }
        }
        requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('mousemove', (e) => {
        if (!imagesLoaded) return;

        // Check if cursor is over projects or skills section
        const isOverTarget = e.target.closest('#projects') || e.target.closest('#skills');
        if (!isOverTarget) return;

        const randomIcon = techImages[Math.floor(Math.random() * techImages.length)];
        if (!randomIcon) return;

        const size = 22 + Math.random() * 8;

        const particle = {
            x: e.clientX,
            y: e.clientY,
            alpha: 1,
            image: randomIcon.image,
            size,
            update() {
                this.y -= 0.4;
                this.alpha -= 0.02;
            },
            draw(ctx) {
                ctx.globalAlpha = this.alpha;
                ctx.drawImage(
                    this.image,
                    this.x - this.size / 2,
                    this.y - this.size / 2,
                    this.size,
                    this.size
                );
                ctx.globalAlpha = 1;
            }
        };

        particles.push(particle);
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initLoader();
    initCursor();
    initNavigation();
    initStatsCounter();
    initProjects();
    initParallax();
    initSkillsCanvas();
    initAboutMarquee();
    initMarquee();
    initTechCursor();
    initTiltEffect();
});

// Handle page visibility
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when tab is not visible
        document.querySelectorAll('.marquee-content, .skill-orbit').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    } else {
        // Resume animations
        document.querySelectorAll('.marquee-content, .skill-orbit').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
});

// Performance: Reduce motion if user prefers
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--duration-fast', '0.01ms');
    document.documentElement.style.setProperty('--duration-normal', '0.01ms');
    document.documentElement.style.setProperty('--duration-slow', '0.01ms');
}

console.log('%c🚀 Portfolio by Kürşat Yılmaz', 'font-size: 20px; color: #00D9FF; font-weight: bold;');
console.log('%cBuilding ideas into reality, fast.', 'font-size: 14px; color: #666;');
