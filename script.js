/* ==========================================================================
   KÜRŞAT YILMAZ PORTFOLIO — AWWWARDS JURY EDITION
   Zero-Build Vanilla Stack with Lenis, GSAP, WebGL & Bilingual Architecture
   ========================================================================== */

// ============================================
// 1. FLAGSHIP PROJECT SHOWCASE DATA (ITIBAR & UNUTMA ONLY)
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
        tech: ["Vanilla JS", "Node.js", "Chrome Headless", "Jamstack", "REST API"],
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
        tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Gemini AI"],
        github: "https://github.com/DevKursat/unutma",
        githubRepo: "unutma",
        stars: 18,
        forks: 3
    }
};

// ============================================
// 2. LANGUAGE SYSTEM (TR / EN)
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
}

function initLanguage() {
    setLanguage(currentLang);
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
// 3. MOTION & SMOOTH SCROLL ENGINE (LENIS + GSAP)
// ============================================
let lenis = null;
let currentScrollVelocity = 0;

function initLenis() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || typeof Lenis === 'undefined') return;

    try {
        lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.8
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

        // Velocity reactive marquee skew & speed
        lenis.on('scroll', (e) => {
            currentScrollVelocity = e.velocity || 0;
            const skew = Math.max(Math.min(currentScrollVelocity * 0.12, 6), -6);
            document.querySelectorAll('.marquee-content').forEach(el => {
                el.style.transform = `skewX(${skew}deg)`;
            });
        });
    } catch (err) {
        console.warn("Lenis init fallback:", err);
    }
}

// ============================================
// 4. CINEMATIC PRELOADER & CURTAIN REVEAL
// ============================================
function initLoader() {
    const preloader = document.getElementById('sitePreloader');
    const progressNum = document.getElementById('loaderProgress');
    const barFill = document.getElementById('loaderBarFill');
    const curtainPath = document.getElementById('loaderCurtainPath');

    if (!preloader) {
        initHeroReveal();
        return;
    }

    document.body.style.overflow = 'hidden';

    let progress = 0;
    const startTime = performance.now();
    const minDuration = 1100; // ms

    const interval = setInterval(() => {
        const elapsed = performance.now() - startTime;
        const fontReady = document.fonts ? document.fonts.status === 'loaded' : true;
        
        let targetProgress = Math.min(Math.floor((elapsed / minDuration) * 90), 92);
        if (elapsed >= minDuration && fontReady) {
            targetProgress = 100;
        }

        if (progress < targetProgress) {
            progress += 2;
            if (progress > 100) progress = 100;
        }

        if (progressNum) {
            progressNum.textContent = String(progress).padStart(3, '0');
        }
        if (barFill) {
            barFill.style.width = `${progress}%`;
        }

        if (progress >= 100) {
            clearInterval(interval);
            finishPreloader();
        }
    }, 20);

    function finishPreloader() {
        if (typeof gsap !== 'undefined' && curtainPath) {
            const tl = gsap.timeline({
                onComplete: () => {
                    preloader.style.display = 'none';
                    document.body.style.overflow = '';
                    initHeroReveal();
                    initScrollAnimations();
                }
            });

            tl.to('.loader-content', {
                opacity: 0,
                y: -30,
                duration: 0.4,
                ease: 'power2.in'
            });

            // Smooth SVG curtain curve pull up
            tl.to(curtainPath, {
                attr: { d: "M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z" },
                duration: 0.85,
                ease: "power4.inOut"
            }, "-=0.15");
        } else {
            // Vanilla Fallback
            preloader.classList.add('hidden');
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

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
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
// 6. SINGLE MAGNETIC MORPHING CURSOR
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

    // Magnetic snaps on buttons & links
    const magneticSelector = '.btn, .nav-link, .lang-btn, .social-link, .skill-filter-btn, .project-card-expand, .contact-submit-btn, .blog-card';
    document.addEventListener('mouseover', (e) => {
        const target = e.target.closest(magneticSelector);
        if (target) {
            follower.classList.add('is-magnetic');
        }

        const projectCard = e.target.closest('.project-card:not(.more-projects-card)');
        if (projectCard) {
            follower.classList.add('is-project-hover');
            if (cursorLabel) {
                cursorLabel.textContent = currentLang === 'tr' ? 'İNCELE ↗' : 'EXPLORE ↗';
            }
        }

        const githubCard = e.target.closest('.more-projects-card');
        if (githubCard) {
            follower.classList.add('is-github-hover');
            if (cursorLabel) {
                cursorLabel.textContent = 'GITHUB 100+ ↗';
            }
        }
    });

    document.addEventListener('mouseout', (e) => {
        const target = e.target.closest(magneticSelector);
        if (target) {
            follower.classList.remove('is-magnetic');
        }

        const projectCard = e.target.closest('.project-card:not(.more-projects-card)');
        if (projectCard) {
            follower.classList.remove('is-project-hover');
            if (cursorLabel) cursorLabel.textContent = '';
        }

        const githubCard = e.target.closest('.more-projects-card');
        if (githubCard) {
            follower.classList.remove('is-github-hover');
            if (cursorLabel) cursorLabel.textContent = '';
        }
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

function renderProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;

    let html = '';
    const lang = currentLang;

    // Render Flagship Projects (Itibar & Unutma Only)
    for (const key in projectsData) {
        const project = projectsData[key];
        const techHTML = project.tech.slice(0, 4).map(t => `<span>${t}</span>`).join('');
        const isIconImage = project.icon && (project.icon.endsWith('.png') || project.icon.endsWith('.jpg') || project.icon.endsWith('.svg'));
        const iconHTML = isIconImage 
            ? `<img src="${project.icon}" alt="${project.title}" class="project-card-custom-logo">` 
            : (project.icon || '⭐');

        const metricsPreview = (project.metrics && project.metrics[lang]) ? project.metrics[lang].slice(0, 4) : [];
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
                    
                    ${metricsStripHTML}

                    <div class="project-card-footer">
                        <div class="project-card-tech">
                            ${techHTML}
                        </div>
                        <div class="project-card-stats">
                            ${project.liveUrl ? `
                                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-card-visit-btn" onclick="event.stopPropagation();" title="${lang === 'tr' ? 'Web Sitesini Aç' : 'Visit Website'}">
                                    <span>${lang === 'tr' ? 'Canlı Servis' : 'Live Site'}</span>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                                    </svg>
                                </a>
                            ` : ''}
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

    // Upgraded "100+ Projects & Open Source Archive" Banner (Full Width)
    const moreTitle = lang === 'tr' ? '100+ Proje & Açık Kaynak Arşivi' : '100+ Projects & Open-Source Archive';
    const moreDesc = lang === 'tr' 
        ? "Canlıdaki amiral gemisi ürünlerimin yanı sıra geliştirdiğim 100+ açık kaynak araç, otomasyon botu ve deneysel yazılım projesini GitHub profilimde inceleyebilirsiniz."
        : "Alongside my live flagship products, explore 100+ open-source tools, automation engines, and experimental software projects on my GitHub profile.";

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

// ============================================
// 8. CASE STUDY MODAL & GSAP CHOREOGRAPHY
// ============================================
function openModal(project, projectId) {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    modal.dataset.projectId = projectId;

    if (lenis) lenis.stop();
    document.body.style.overflow = 'hidden';

    updateModalContent(project);
    modal.classList.add('active');

    if (typeof gsap !== 'undefined') {
        const modalContainer = modal.querySelector('.modal-container');
        const modalBackdrop = modal.querySelector('.modal-backdrop');

        gsap.fromTo(modalBackdrop, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: 'power2.out' });
        gsap.fromTo(modalContainer, 
            { y: 50, scale: 0.94, opacity: 0 }, 
            { y: 0, scale: 1, opacity: 1, duration: 0.5, ease: 'power3.out' }
        );

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
            <span>${project.status[lang]}</span>
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
        brandTaglineEl.textContent = project.tagline ? project.tagline[lang] : project.category[lang];
    }

    const categoryEl = modal.querySelector('.modal-category');
    if (categoryEl) categoryEl.textContent = project.category[lang];

    const titleEl = modal.querySelector('.modal-title');
    if (titleEl) titleEl.textContent = project.title;

    const descEl = modal.querySelector('.modal-description');
    if (descEl) descEl.textContent = project.description[lang];

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
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    if (lenis) lenis.start();

    if (typeof gsap !== 'undefined') {
        const modalContainer = modal.querySelector('.modal-container');
        const modalBackdrop = modal.querySelector('.modal-backdrop');

        gsap.to(modalContainer, {
            y: 30,
            scale: 0.95,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        gsap.to(modalBackdrop, { opacity: 0, duration: 0.3, ease: 'power2.in' });
    } else {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function initProjects() {
    renderProjects();

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

// ============================================
// 9. IDENTITY BENTO & LIVE EUROPE/ISTANBUL CLOCK
// ============================================
function initAboutBento() {
    const clockEl = document.getElementById('istanbulClock');

    function updateClock() {
        if (!clockEl) return;
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
            clockEl.textContent = 'Istanbul GMT+3';
        }
    }

    updateClock();
    setInterval(updateClock, 1000);
}

// ============================================
// 10. DRAG-AND-THROW PHYSICS SKILLS CANVAS
// ============================================
const skillsData = [
    { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', color: '#3178C6', category: 'frontend' },
    { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', color: '#F7DF1E', category: 'frontend' },
    { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' },
    { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', color: '#FFFFFF', invertOnDark: true, category: 'frontend' },
    { name: 'Vue.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', color: '#4FC08D', category: 'frontend' },
    { name: 'Tailwind CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', color: '#38BDF8', category: 'frontend' },
    { name: 'Vite', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg', color: '#646CFF', category: 'frontend' },
    { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', color: '#F24E1E', category: 'frontend' },

    { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' },
    { name: 'NestJS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg', color: '#E0234E', category: 'backend' },
    { name: 'FastAPI', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', color: '#009688', category: 'backend' },
    { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', color: '#3776AB', category: 'backend' },
    { name: 'Go', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg', color: '#00ADD8', category: 'backend' },
    { name: 'Rust', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg', color: '#DEA584', category: 'backend' },
    { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'backend' },
    { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', color: '#47A248', category: 'backend' },
    { name: 'Redis', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg', color: '#FF3E30', category: 'backend' },
    { name: 'GraphQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg', color: '#E10098', category: 'backend' },

    { name: 'Flutter', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg', color: '#02569B', category: 'cloud' },
    { name: 'React Native', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', color: '#61DAFB', category: 'cloud' },
    { name: 'Prisma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg', color: '#5A67D8', invertOnDark: true, category: 'cloud' },
    { name: 'Supabase', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg', color: '#3ECF8E', category: 'cloud' },
    { name: 'Firebase', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg', color: '#FFCA28', category: 'cloud' },
    { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', color: '#2496ED', category: 'cloud' },
    { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', color: '#FF9900', category: 'cloud' },
    { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', color: '#F05032', category: 'cloud' }
];

function initSkillsCanvas() {
    const container = document.getElementById('skillsCanvas');
    if (!container) return;
    container.innerHTML = '';

    const cards = [];
    const cardSize = 72;

    function hexToRgb(hex) {
        let c = hex.replace('#', '');
        if (c.length === 3) c = c.split('').map(x => x + x).join('');
        const num = parseInt(c, 16);
        return `${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}`;
    }

    const w = container.offsetWidth || 1200;
    const h = container.offsetHeight || 500;
    const cols = 7;
    const rows = Math.ceil(skillsData.length / cols);
    const xStep = (w - 140) / cols;
    const yStep = (h - 120) / rows;

    skillsData.forEach((skill, index) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'floating-skill-card';
        cardEl.dataset.category = skill.category;
        cardEl.style.setProperty('--card-hover-color', skill.color);
        cardEl.style.setProperty('--card-glow-rgb', hexToRgb(skill.color));

        const imgStyle = skill.invertOnDark ? 'style="filter: invert(1) brightness(2);"' : '';
        cardEl.innerHTML = `
            <img src="${skill.iconUrl}" alt="${skill.name}" ${imgStyle} draggable="false" />
            <div class="floating-skill-tooltip">${skill.name}</div>
        `;
        container.appendChild(cardEl);

        const row = Math.floor(index / cols);
        const col = index % cols;
        const posX = 40 + col * xStep + (Math.random() - 0.5) * 40;
        const posY = 35 + row * yStep + (Math.random() - 0.5) * 30;

        cards.push({
            el: cardEl,
            category: skill.category,
            x: Math.max(15, Math.min(posX, w - cardSize - 20)),
            y: Math.max(15, Math.min(posY, h - cardSize - 20)),
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: cardSize,
            isDragging: false,
            dragStartX: 0,
            dragStartY: 0,
            lastX: 0,
            lastY: 0,
            lastTime: 0
        });
    });

    // Pointer Drag & Throw Physics
    cards.forEach(card => {
        card.el.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            card.isDragging = true;
            card.el.setPointerCapture(e.pointerId);
            const rect = container.getBoundingClientRect();
            card.dragStartX = (e.clientX - rect.left) - card.x;
            card.dragStartY = (e.clientY - rect.top) - card.y;
            card.lastX = e.clientX;
            card.lastY = e.clientY;
            card.lastTime = performance.now();
            card.vx = 0;
            card.vy = 0;
            card.el.style.zIndex = '50';
            card.el.style.cursor = 'grabbing';
        });

        card.el.addEventListener('pointermove', (e) => {
            if (!card.isDragging) return;
            const rect = container.getBoundingClientRect();
            card.x = (e.clientX - rect.left) - card.dragStartX;
            card.y = (e.clientY - rect.top) - card.dragStartY;

            const now = performance.now();
            const dt = Math.max(now - card.lastTime, 16);
            card.vx = ((e.clientX - card.lastX) / dt) * 16;
            card.vy = ((e.clientY - card.lastY) / dt) * 16;

            card.lastX = e.clientX;
            card.lastY = e.clientY;
            card.lastTime = now;
        });

        const release = (e) => {
            if (!card.isDragging) return;
            card.isDragging = false;
            card.el.releasePointerCapture(e.pointerId);
            card.el.style.zIndex = '1';
            card.el.style.cursor = 'grab';

            // Limit throw speed
            card.vx = Math.max(Math.min(card.vx, 18), -18);
            card.vy = Math.max(Math.min(card.vy, 18), -18);
        };

        card.el.addEventListener('pointerup', release);
        card.el.addEventListener('pointercancel', release);
    });

    // Filter pills with wide redistribution
    const filterPills = document.querySelectorAll('.skill-filter-btn');
    let activeCategory = 'all';

    filterPills.forEach(btn => {
        btn.addEventListener('click', () => {
            filterPills.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.dataset.category;

            const currentW = container.offsetWidth || 1200;
            const currentH = container.offsetHeight || 500;
            const activeCards = cards.filter(c => activeCategory === 'all' || c.category === activeCategory);
            const actCount = activeCards.length;

            activeCards.forEach((card, idx) => {
                card.el.style.opacity = '1';
                card.el.style.filter = 'none';
                card.el.style.pointerEvents = 'auto';

                const targetX = 40 + (idx / Math.max(actCount, 1)) * (currentW - 140) + (Math.random() - 0.5) * 60;
                const targetY = 40 + ((idx % 3) / 3) * (currentH - 120) + (Math.random() - 0.5) * 40;
                card.vx = (targetX - card.x) * 0.15;
                card.vy = (targetY - card.y) * 0.15;
            });

            cards.filter(c => activeCategory !== 'all' && c.category !== activeCategory).forEach(card => {
                card.el.style.opacity = '0.12';
                card.el.style.filter = 'grayscale(1)';
                card.el.style.pointerEvents = 'none';
            });
        });
    });

    // RAF Loop with boundary bouncing & IntersectionObserver guard
    let isVisible = true;
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const obs = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;
        }, { threshold: 0.1 });
        obs.observe(skillsSection);
    }

    function updatePhysics() {
        if (isVisible) {
            const w = container.offsetWidth;
            const h = container.offsetHeight;

            cards.forEach(card => {
                if (!card.isDragging) {
                    card.x += card.vx;
                    card.y += card.vy;

                    // Friction damping
                    card.vx *= 0.96;
                    card.vy *= 0.96;

                    // Gentle floating wave when near rest
                    if (Math.abs(card.vx) < 0.1 && Math.abs(card.vy) < 0.1) {
                        card.vx += (Math.random() - 0.5) * 0.15;
                        card.vy += (Math.random() - 0.5) * 0.15;
                    }

                    // Wall collision & restitution
                    if (card.x < 10) {
                        card.x = 10;
                        card.vx = -card.vx * 0.75;
                    } else if (card.x > w - card.size - 10) {
                        card.x = w - card.size - 10;
                        card.vx = -card.vx * 0.75;
                    }

                    if (card.y < 10) {
                        card.y = 10;
                        card.vy = -card.vy * 0.75;
                    } else if (card.y > h - card.size - 10) {
                        card.y = h - card.size - 10;
                        card.vy = -card.vy * 0.75;
                    }
                }

                card.el.style.transform = `translate3d(${card.x.toFixed(1)}px, ${card.y.toFixed(1)}px, 0)`;
            });
        }
        requestAnimationFrame(updatePhysics);
    }
    requestAnimationFrame(updatePhysics);
}

// ============================================
// 11. NAVIGATION & GENERAL INTERACTIONS
// ============================================
function initNavigation() {
    const nav = document.querySelector('.nav');
    const menuBtn = document.querySelector('.nav-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Smooth scroll for nav anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

function initMarquee() {
    const marquee = document.querySelector('.marquee');
    if (!marquee) return;
    const contents = marquee.querySelectorAll('.marquee-content');

    marquee.addEventListener('mouseenter', () => {
        contents.forEach(c => c.style.animationPlayState = 'paused');
    });
    marquee.addEventListener('mouseleave', () => {
        contents.forEach(c => c.style.animationPlayState = 'running');
    });
}

function initAboutMarquee() {
    const marqueeContainer = document.getElementById('aboutMarquee');
    if (!marqueeContainer) return;

    const items = marqueeContainer.querySelectorAll('.marquee-item');
    let isVisible = true;

    const obs = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    obs.observe(marqueeContainer);

    function updateOpacity() {
        if (!isVisible) return;
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

    function loop() {
        updateOpacity();
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
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
    initAboutMarquee();
    initMarquee();
    initContactForm();
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
