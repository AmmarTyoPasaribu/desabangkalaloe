// ============================
// Shared Components - Desa Bangkalaloe
// ============================

function getNavbar(activePage) {
    const pages = [
        { href: 'index.html', label: 'Home' },
        { href: 'profildesa.html', label: 'Profil Desa' },
        { href: 'infografis.html', label: 'Infografis' },
        { href: 'umkm.html', label: 'UMKM' },
        { href: 'potensidesa.html', label: 'Potensi Desa' },
        { href: 'about.html', label: 'About' }
    ];

    const navItems = pages.map(p => {
        const isActive = p.href === activePage ? ' active' : '';
        return `
            <li class="group relative">
                <a class="relative z-10 font-bold nav-link px-3 py-2 group-hover:text-white transition-all duration-300${isActive}" href="${p.href}">
                    ${p.label}
                    <span class="absolute inset-0 bg-white bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-lg"></span>
                </a>
            </li>`;
    }).join('');

    return `
    <header class="fixed top-0 left-0 right-0 bg-[#10442c] p-2 flex items-center z-50 shadow-lg rounded-b-xl transition-all duration-300">
        <div class="container mx-auto flex items-center">
            <div class="flex items-center">
                <img alt="Logo Desa Bangkalaloe" class="h-12 w-12 mr-4 rounded-full shadow-md hover:rotate-12 transition-transform duration-300" height="70" src="images/logo.png" width="70"/>
                <div>
                    <h1 class="text-[#f4a222] text-xl font-bold tracking-wider">Desa Bangkalaloe</h1>
                    <p class="text-white text-sm opacity-80">Kabupaten Jeneponto</p>
                </div>
            </div>
            <button id="hamburger" class="md:hidden text-white text-2xl ml-auto" aria-label="Menu">
                <i class="fas fa-bars"></i>
            </button>
            <nav id="nav-menu" class="ml-auto hidden md:block">
                <ul class="flex space-x-4 text-white">
                    ${navItems}
                </ul>
            </nav>
        </div>
    </header>`;
}

function getFooterWave() {
    return `
    <div class="footer-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#10442c" d="M0,40 C360,80 720,0 1080,40 C1260,60 1360,50 1440,40 L1440,80 L0,80 Z"></path>
        </svg>
    </div>`;
}

function getFooter() {
    return `
    <footer class="bg-gradient-to-b from-[#10442c] to-[#0a2e1d] text-white pb-4">
        <div class="container mx-auto px-4 sm:px-8 py-8">
            <div class="flex flex-col md:flex-row justify-between items-center pb-6 gap-4">
                <div class="flex space-x-4 sm:space-x-6">
                    <img alt="Logo Jeneponto" class="h-10 sm:h-12 opacity-80 hover:opacity-100 transition-opacity" src="images/jenepontologo.png"/>
                    <img alt="Logo Posko KKN" class="h-10 sm:h-12 opacity-80 hover:opacity-100 transition-opacity" src="images/logooposko.png"/>
                    <img alt="Logo Unhas" class="h-10 sm:h-12 opacity-80 hover:opacity-100 transition-opacity" src="images/logoounhas.png"/>
                    <img alt="Logo Desa" class="h-10 sm:h-12 opacity-80 hover:opacity-100 transition-opacity" src="images/logo.png"/>
                </div>
                <div class="text-center">
                    <h2 class="text-lg text-[#f4a222] font-bold">Desa Bangkalaloe</h2>
                    <p class="text-xs text-gray-300">Kec. Bontoramba, Kab. Jeneponto, Sulawesi Selatan</p>
                </div>
                <div class="flex space-x-6">
                    <a class="text-white text-sm hover:text-pink-400 transition-colors" href="https://www.instagram.com/kkn113unhas.desabangkalaloe/" aria-label="Instagram">
                        <i class="fab fa-instagram fa-2x"></i>
                    </a>
                    <a class="text-white text-sm hover:text-red-500 transition-colors" href="https://www.google.com/maps/place/Bangkalaloe,+Kec.+Bontoramba,+Kabupaten+Jeneponto,+Sulawesi+Selatan/" aria-label="Google Maps">
                        <i class="fas fa-map-marker-alt fa-2x"></i>
                    </a>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-justify">
                <div class="space-y-2">
                    <h3 class="text-base text-[#f4a222] font-bold">Website Profil Desa</h3>
                    <p class="text-xs text-gray-300">Website profil Desa merupakan situs web yang memuat informasi dasar mengenai desa, sejarah, visi dan misi desa, sampai dengan peta wilayah desa.</p>
                </div>
                <div class="space-y-2">
                    <h3 class="text-base text-[#f4a222] font-bold">Developer</h3>
                    <p class="text-xs text-gray-300">Website ini dibuat oleh Ammar Tyo Pasaribu, Mahasiswa KKN Universitas Hasanuddin Gelombang 113 Desa Bangkalaloe pada Januari 2025.</p>
                </div>
                <div class="space-y-2">
                    <h3 class="text-base text-[#f4a222] font-bold">Harapan &amp; Tujuan</h3>
                    <p class="text-xs text-gray-300">Situs web profil ini dibuat untuk tujuan promosi dan publisitas Desa Bangkalaloe agar lebih dikenal oleh khalayak ramai baik di dalam maupun di luar Desa Bangkalaloe.</p>
                </div>
                <div class="space-y-2 flex flex-col items-center">
                    <h3 class="text-base text-[#f4a222] font-bold">Kode QR</h3>
                    <div class="flex space-x-4">
                        <div class="flex flex-col items-center">
                            <h4 class="text-sm text-[#f4a222] font-bold">Website</h4>
                            <img alt="QR Code Website" class="mt-2 w-24 h-24 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer" id="qrWebsiteImg" src="images/qrcode.jpg"/>
                        </div>
                        <div class="flex flex-col items-center">
                            <h4 class="text-sm text-[#f4a222] font-bold">WhatsApp</h4>
                            <img alt="QR Code WhatsApp" class="mt-2 w-24 h-24 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer" id="qrWhatsappImg" src="images/qrcodewa.jpg"/>
                        </div>
                    </div>
                </div>
            </div>

            <!-- QR Code Modals -->
            <div id="qrCodeModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center overflow-y-auto">
                <div class="bg-white p-4 rounded-lg shadow-lg max-w-md w-full relative mx-4">
                    <button id="closeQrCodeModal" class="absolute top-2 right-2 text-gray-500 text-2xl hover:text-gray-800">&times;</button>
                    <img src="images/qrcode.jpg" alt="QR Code Website" class="w-full h-auto"/>
                </div>
            </div>
            <div id="qrCodeWAModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center overflow-y-auto">
                <div class="bg-white p-4 rounded-lg shadow-lg max-w-md w-full relative mx-4">
                    <button id="closeQrCodeWAModal" class="absolute top-2 right-2 text-gray-500 text-2xl hover:text-gray-800">&times;</button>
                    <img src="images/qrcodewa.jpg" alt="QR Code WhatsApp" class="w-full h-auto"/>
                </div>
            </div>

            <div class="text-center mt-6 border-t-2 border-gray-600 pt-4">
                <p class="text-xs text-gray-400">© 2025 Desa Bangkalaloe - All rights reserved</p>
            </div>
        </div>
    </footer>`;
}

// Scroll-to-top button HTML
function getScrollToTop() {
    return `<button id="scrollToTop" aria-label="Kembali ke atas"><i class="fas fa-arrow-up"></i></button>`;
}

// Initialize shared functionality
function initComponents() {
    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });

        document.addEventListener('click', function (event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    }

    // Scroll: transparency effect + scroll-to-top visibility
    const scrollBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('bg-opacity-90', 'backdrop-blur-sm');
            } else {
                header.classList.remove('bg-opacity-90', 'backdrop-blur-sm');
            }
        }
        if (scrollBtn) {
            if (window.scrollY > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        }
    });

    if (scrollBtn) {
        scrollBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // QR Code modals
    setupModal('qrWebsiteImg', 'qrCodeModal', 'closeQrCodeModal');
    setupModal('qrWhatsappImg', 'qrCodeWAModal', 'closeQrCodeWAModal');

    // Scroll reveal animation
    initScrollReveal();

    // Counter animation
    initCounterAnimation();
}

function setupModal(triggerBtnId, modalId, closeBtnId) {
    const trigger = document.getElementById(triggerBtnId);
    const modal = document.getElementById(modalId);
    const closeBtn = document.getElementById(closeBtnId);

    if (trigger && modal) {
        trigger.addEventListener('click', () => modal.classList.remove('hidden'));
    }
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    }
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        });
    }
}

// Scroll reveal: elements with class 'reveal' or 'reveal-children' fade in when scrolled into view
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-children');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function (el) {
        observer.observe(el);
    });
}

// Counter animation: elements with data-count attribute animate from 0 to target
function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && !entry.target.dataset.counted) {
                entry.target.dataset.counted = 'true';
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(function (el) {
        observer.observe(el);
    });
}

function animateCounter(el) {
    const target = el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const isDecimal = target.includes(',') || target.includes('.');
    const cleanTarget = parseFloat(target.replace(/\./g, '').replace(',', '.'));
    const duration = 1500;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = cleanTarget * ease;

        if (isDecimal) {
            el.textContent = current.toFixed(2).replace('.', ',') + suffix;
        } else {
            el.textContent = Math.floor(current).toLocaleString('id-ID') + suffix;
        }

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            // Set final value exactly
            el.textContent = target + suffix;
        }
    }

    requestAnimationFrame(update);
}

// Load navbar, footer, wave divider, and scroll-to-top into the page
function loadComponents(activePage) {
    const navContainer = document.getElementById('navbar-container');
    const footerContainer = document.getElementById('footer-container');

    if (navContainer) navContainer.innerHTML = getNavbar(activePage);

    // Insert wave divider before footer
    if (footerContainer) {
        footerContainer.insertAdjacentHTML('beforebegin', getFooterWave());
        footerContainer.innerHTML = getFooter();
    }

    // Inject scroll-to-top button
    document.body.insertAdjacentHTML('beforeend', getScrollToTop());

    initComponents();
}
