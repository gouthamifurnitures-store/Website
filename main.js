// Clean URL Handler - Updates address bar and links without breaking local navigation
function cleanUrl() {
    try {
        if (window.location.protocol === 'file:') {
            console.log("Running locally (file://): Skipping URL cleaning.");
            return;
        }

        let path = window.location.pathname;
        let newPath = path;

        if (path.endsWith('index.html')) {
            newPath = path.substring(0, path.lastIndexOf('index.html'));
        } else if (path.endsWith('.html')) {
            newPath = path.substring(0, path.lastIndexOf('.html'));
        }

        if (path !== newPath) {
            let search = window.location.search;
            let hash = window.location.hash;
            window.history.replaceState(null, '', newPath + search + hash);
        }

        // Clean links function
        const processLinks = () => {
            const links = document.querySelectorAll('a[href]');
            links.forEach(link => {
                let href = link.getAttribute('href');
                if (href && href.endsWith('.html') && !href.startsWith('http')) {
                    if (href === 'index.html' || href.endsWith('/index.html')) {
                        link.setAttribute('href', href.replace('index.html', ''));
                    } else {
                        link.setAttribute('href', href.replace('.html', ''));
                    }
                }
            });
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', processLinks);
        } else {
            processLinks();
        }
    } catch (e) {
        console.log("URL cleaning skipped", e);
    }
}
cleanUrl();

function initApp() {
    // 0. Safety Check
    if (typeof cmsData === 'undefined') {
        renderErrorOverlay("Data Load Error", "Your <b>data.js</b> file has a syntax error or failed to load. The website cannot load until this is fixed.");
        return;
    }

    try {
        // 1. Inject Global Data (Header, Footer, Meta)
        loadHeader();
        loadFooter();
        injectSEOMeta();
        updatePageContent();

        // 2. Page Specific loaders
        if (document.getElementById('products-container')) renderProducts();
        if (document.querySelector('.about-content')) renderAbout();
        if (document.querySelector('.services-grid')) renderServices();
        if (document.querySelector('.contact-info')) renderContact();
        if (document.getElementById('items-container')) renderCategoryPage();


        // 3. Dynamic Effects
        initScrollReveal();
        injectDecorations();
        initMouseParallax();
    } catch (error) {
        console.error("Initialization Error:", error);
        renderErrorOverlay("System Error", "Something went wrong while building the page.");
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Helper function to show errors instead of a blank screen
function renderErrorOverlay(title, message) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(15, 15, 15, 0.98); color: white; z-index: 9999;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        padding: 2rem; text-align: center; font-family: sans-serif;
    `;
    overlay.innerHTML = `
        <div style="max-width: 500px; background: #222; padding: 3rem; border-radius: 20px; border: 1px solid #ff4444; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
            <h1 style="color: #ff4444; margin-bottom: 1rem;">${title}</h1>
            <p style="font-size: 1.1rem; line-height: 1.6; color: #ddd;">${message}</p>
            <button onclick="location.reload()" style="margin-top: 2rem; padding: 0.8rem 2rem; background: #ff4444; color: white; border: none; border-radius: 50px; cursor: pointer; font-weight: bold;">Retry Loading</button>
        </div>
    `;
    document.body.prepend(overlay);
}

// --- DYNAMIC INJECTIONS ---

function injectDecorations() {
    if (document.querySelector('.bg-decoration')) return;
    const deco = document.createElement('div');
    deco.className = 'bg-decoration';
    deco.innerHTML = `
        <div class="circle-dec circle-1"></div>
        <div class="circle-dec circle-2"></div>
    `;
    document.body.appendChild(deco);
}

function initMouseParallax() {
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;

        const circles = document.querySelectorAll('.circle-dec');
        circles.forEach((circle, index) => {
            const speed = (index + 1) * 20;
            circle.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
        });
    });
}

function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.story-block, .value-card, .service-card, .info-item, .contact-form, .hero-content, .product-section, .cta-banner, .item-card');
    revealElements.forEach(el => {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
    });
}

function loadHeader() {
    const navLinksHTML = cmsData.company.navigation.map(nav => `
        <li><a href="${nav.link}">${nav.name}</a></li>
    `).join('');

    // Switch between Text Name and Image Logo
    const logoContent = cmsData.company.logo
        ? `<img src="${cmsData.company.logo}" alt="${cmsData.company.name}" style="height: 50px; width: auto; object-fit: contain;">`
        : cmsData.company.name;

    const headerHTML = `
        <div class="container">
            <a href="./" class="logo">${logoContent}</a>
            <div class="menu-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <nav class="nav-container">
                <ul class="nav-links">
                    ${navLinksHTML}
                </ul>
            </nav>
        </div>
    `;
    const header = document.createElement('header');
    header.innerHTML = headerHTML;
    document.body.prepend(header);

    setupNavigation();
}

function loadFooter() {
    const quickLinksHTML = cmsData.company.navigation.slice(0, 5).map(nav => `
        <li><a href="${nav.link}">${nav.name}</a></li>
    `).join('');

    const socialLinksHTML = Object.entries(cmsData.company.social).map(([platform, link]) => {
        if (link === "#" || !link) return '';

        // Custom Folder Icon Logic: Look for icons/[platform].svg or .png
        // You can change 'svg' to 'png' below if you use other file types
        return `
            <a href="${link}" class="social-icon" target="_blank" aria-label="${platform}">
                <img src="icons/${platform}.svg" alt="${platform}" 
                     onerror="this.src='icons/${platform}.png'; this.onerror=null;" 
                     style="width: 22px; height: 22px; object-fit: contain;">
            </a>`;
    }).join('');

    const footerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-column brand-col">
                    <h4 class="footer-logo">${cmsData.company.name}</h4>
                    <p class="footer-tagline">${cmsData.company.description}</p>
                    <div class="social-links">
                        ${socialLinksHTML}
                    </div>
                </div>
                <div class="footer-column">
                    <h5 class="column-title">Quick Links</h5>
                    <ul class="footer-nav">
                        ${quickLinksHTML}
                    </ul>
                </div>
                <div class="footer-column">
                    <h5 class="column-title">Contact Us</h5>
                    <div class="footer-contact-info">
                        <div class="contact-line"><span>Address:</span> ${cmsData.company.contact.address}</div>
                        <div class="contact-line"><span>Email:</span> <a href="mailto:${cmsData.company.contact.email}" class="footer-direct-link">${cmsData.company.contact.email}</a></div>
                        <div class="contact-line"><span>Phone:</span> <a href="tel:${cmsData.company.contact.phone.replace(/\s/g, '')}" class="footer-direct-link">${cmsData.company.contact.phone}</a></div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} ${cmsData.company.name}. Crafted with precision.</p>
            </div>
        </div>
    `;
    const footer = document.createElement('footer');
    footer.innerHTML = footerHTML;
    document.body.append(footer);
}

function injectSEOMeta() {
    const head = document.head;
    const siteData = cmsData.company;

    // Helper to create or update meta tags
    const setMeta = (name, content, isProperty = false) => {
        let meta = isProperty
            ? document.querySelector(`meta[property="${name}"]`)
            : document.querySelector(`meta[name="${name}"]`);

        if (!meta) {
            meta = document.createElement('meta');
            if (isProperty) meta.setAttribute('property', name);
            else meta.setAttribute('name', name);
            head.appendChild(meta);
        }
        meta.setAttribute('content', content);
    };

    setMeta('description', siteData.seo.description);
    setMeta('keywords', siteData.seo.keywords);

    // Open Graph (Facebook/Social)
    setMeta('og:title', document.title, true);
    setMeta('og:description', siteData.seo.description, true);
    setMeta('og:image', siteData.seo.ogImage, true);
    setMeta('og:type', 'website', true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', document.title);
    setMeta('twitter:description', siteData.seo.description);
}

function setupNavigation() {
    const path = window.location.pathname;
    let page = path.split("/").pop().replace(".html", "");

    // Normalize index and empty paths to root
    const normalizedCurrentPage = (page === "" || page === "index") ? "./" : page;

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.classList.remove('active');
        let href = link.getAttribute('href');
        if (!href) return;

        let normalizedHref = href.replace(".html", "");
        if (normalizedHref === "index") normalizedHref = "./";

        if (normalizedHref === normalizedCurrentPage) {
            link.classList.add('active');
        }
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const menuToggle = document.getElementById('mobile-menu');
    const navContainer = document.querySelector('.nav-container');

    if (menuToggle && navContainer) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            navContainer.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('is-active');
                navContainer.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }
}

// ------ CMS RENDER FUNCTIONS ------

function renderProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;

    container.innerHTML = cmsData.products.map(product => `
        <a href="category.html?id=${product.id}" class="product-section">
            <div class="product-bg" style="background-image: url('${product.image}');"></div>
            <div class="product-content">
                <span class="explore-badge">Discover Collection</span>
                <h2 class="product-title">${product.title}</h2>
                <div class="product-desc">
                    <p>${product.description}</p>
                </div>
            </div>
        </a>
    `).join('');
}

function renderCategoryPage() {
    const params = new URLSearchParams(window.location.search);
    const catId = params.get('id');
    if (!catId) return;

    const category = cmsData.products.find(p => p.id === catId);
    if (!category) return;

    // Update Meta
    document.title = `${category.title} | ${cmsData.company.name}`;
    const headerTitle = document.getElementById('cat-title');
    const headerDesc = document.getElementById('cat-desc');
    if (headerTitle) headerTitle.textContent = category.title;
    if (headerDesc) headerDesc.textContent = category.description;

    const itemsContainer = document.getElementById('items-container');
    if (itemsContainer) {
        if (category.items && category.items.length > 0) {
            itemsContainer.innerHTML = category.items.map(item => {
                const isForMore = item.name.toLowerCase().includes("for more") || item.price === "Visit Store";
                const displayPrice = isForMore ? item.price : `${cmsData.company.pricePrefix} ${item.price}`;
                const nameStyle = isForMore ? 'style="color: red;"' : '';

                return `
                <div class="item-card reveal-on-scroll">
                    <img src="${item.image}" alt="${item.name}" class="item-image" loading="lazy">
                    <div class="item-details">
                        <h3 class="item-name" ${nameStyle}>${item.name}</h3>
                        <div class="item-price">${displayPrice}</div>
                    </div>
                </div>
            `}).join('');
        } else {
            itemsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align:center; padding: 4rem; opacity: 0.5;">No items available in this category yet.</p>';
        }
    }
}

function renderServices() {
    const container = document.querySelector('.services-grid');
    if (!container) return;
    container.innerHTML = cmsData.services.map(service => `
        <div class="service-card reveal-on-scroll">
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.text}</p>
        </div>
    `).join('');
}

function renderAbout() {
    const container = document.querySelector('.about-content');
    if (!container) return;

    let html = '';
    cmsData.about.blocks.forEach(block => {
        html += `
        <div class="story-block reveal-on-scroll">
            <h2>${block.title}</h2>
            <p>${block.text}</p>
        </div>`;
    });

    html += '<div class="values-grid">';
    cmsData.about.values.forEach(val => {
        html += `
        <div class="value-card reveal-on-scroll">
            <h3>${val.title}</h3>
            <p>${val.text}</p>
        </div>`;
    });
    html += '</div>';

    container.innerHTML = html;
}

function renderContact() {
    const infoContainer = document.querySelector('.contact-info');
    if (!infoContainer) return;

    infoContainer.innerHTML = `
        <h1 class="reveal-on-scroll">Get in Touch</h1>
        <p class="reveal-on-scroll" style="margin-bottom: 4rem; opacity: 0.7;">We'd love to hear from you. Visit our showroom or chat with us directly for instant support.</p>

        <div class="contact-methods-grid">
            <div class="info-item reveal-on-scroll phone-focus">
                <h4>Call Us Directly</h4>
                <p><a href="tel:${cmsData.company.contact.phone.replace(/\s/g, '')}" class="focus-link">${cmsData.company.contact.phone}</a></p>
                <span class="focus-sub">Tap to call our showroom</span>
            </div>

            <div class="info-item reveal-on-scroll">
                <h4>Our Showroom</h4>
                <p>${cmsData.company.contact.address}</p>
            </div>

            <div class="info-item reveal-on-scroll">
                <h4>Email Support</h4>
                <p><a href="mailto:${cmsData.company.contact.email}" class="direct-link">${cmsData.company.contact.email}</a></p>
            </div>
            
            <div class="info-item reveal-on-scroll">
                <h4>Business Hours</h4>
                <p>${cmsData.company.contact.hours.replace(/\n/g, '<br>')}</p>
            </div>
        </div>

        <div class="whatsapp-cta reveal-on-scroll" style="margin-top: 6rem;">
            <div class="whatsapp-card">
                <div class="wa-icon">
                     <img src="icons/whatsapp.svg" alt="WhatsApp" 
                         onerror="this.src='icons/whatsapp.png'; this.onerror=null;">
                </div>
                <div class="wa-content">
                    <h3>Chat on WhatsApp</h3>
                    <p>Get instant price quotes, check availability, or share design ideas with us.</p>
                    <a href="${cmsData.company.social.whatsapp}" target="_blank" class="wa-btn">
                        <span>Message Now</span>
                        <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M11.5,20C11.5,20 11.5,20 11.5,20M11.5,20C7.2,20 3.6,16.5 3.5,12.2C3.5,10.6 3.9,9 4.8,7.6L4,4.5L7.2,5.3C8.5,4.5 10,4.1 11.5,4.1C15.8,4.1 19.3,7.6 19.4,11.9C19.5,16.3 15.9,19.9 11.5,20M11.5,2.1C9.6,2.1 7.7,2.6 6.1,3.5L2,2.4L3.1,6.4C2.1,8 1.5,9.9 1.5,11.9C1.5,17.4 5.9,21.9 11.4,21.9H11.5C13.4,21.9 15.2,21.4 16.8,20.4L21,21.5L19.9,17.5C21,15.9 21.5,14 21.5,12C21.5,6.5 17,2.1 11.5,2.1M16.5,14.6C16.3,14.5 15.5,14.1 15.4,14C15.2,14 15.1,14 15,14.1C14.9,14.2 14.6,14.6 14.5,14.7C14.4,14.8 14.3,14.9 14.1,14.8C14,14.7 13.4,14.5 12.6,13.8C12,13.3 11.6,12.7 11.5,12.5C11.4,12.3 11.5,12.2 11.6,12.1C11.7,12 11.8,11.9 11.9,11.8C12,11.7 12,11.6 12.1,11.5C12.2,11.4 12.1,11.3 12.1,11.2C12,11.1 11.7,10.3 11.6,10.1C11.5,9.8 11.3,9.8 11.2,9.8C11.1,9.8 11,9.8 10.9,9.8C10.8,9.8 10.6,9.8 10.4,10C10.2,10.2 9.8,10.6 9.8,11.4C9.8,12.2 10.4,13 10.5,13.1C10.6,13.2 11.6,14.8 13.2,15.5C13.6,15.7 13.9,15.8 14.1,15.9C14.5,16 14.9,16 15.2,15.9C15.5,15.9 16.2,15.5 16.3,15.1C16.5,14.7 16.5,14.6 16.5,14.6Z"/></svg>
                    </a>
                </div>
            </div>
        </div>
    `;
}



function updatePageContent() {
    document.title = `${document.title.split('|')[0]} | ${cmsData.company.name}`;
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.innerHTML = cmsData.home.heroTitle;
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = cmsData.home.heroSubtitle;
}
