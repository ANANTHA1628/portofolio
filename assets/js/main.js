/**
 * ARYAPUTRA FERDIANANTA — WEB DESIGNER (MAHATIVE STUDIO)
 * Interactive Engine matching https://ilse-moreno.framer.website/
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    /* --------------------------------------------------------------------------
       01. TOAST NOTIFICATION SYSTEM
       -------------------------------------------------------------------------- */
    const toastShelf = document.getElementById('toast-shelf');

    function showToast(message) {
        if (!toastShelf) return;
        const toast = document.createElement('div');
        toast.className = 'toast-item';
        toast.textContent = message;
        toastShelf.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            toast.style.transition = 'all 0.25s ease';
            setTimeout(() => toast.remove(), 250);
        }, 3000);
    }

    /* --------------------------------------------------------------------------
       02. PORTFOLIO WEBSITES DATA & CONFIGURATION
       --------------------------------------------------------------------------
       💡 CARA MENAMBAH WEBSITE BARU (UNTUK ARYAPUTRA):
       Untuk menambahkan website baru yang sudah kamu buat, cukup copy-paste
       satu objek di dalam array `PORTFOLIO_WEBSITES` di bawah ini!
       
       Contoh format:
       {
           id: "nama-unik",
           title: "Judul Web",
           category: "Website", // Contoh: Website, SaaS, Brand & Web, App
           image: "assets/images/project-contoh.jpg",
           liveUrl: "https://website-kamu.com", // Link website jika ada
           x: 840,    // Posisi horizontal di canvas (pixel)
           y: 1260,   // Posisi vertikal di canvas (pixel)
           width: 620, // Lebar card (standar: 620px)
           hasAvatarPin: true, // Beri pin avatar (true / false)
           pinPos: { top: "45%", right: "25%" }, // Posisi avatar pin
           desc: "Deskripsi singkat tentang website...",
           tag: "SAAS // SITUS PELUNCURAN",
           scope: {
               client: "Nama Klien / Perusahaan",
               role: "Desainer Web & Framer Builder",
               timeline: "6 minggu · Diluncurkan 2026"
           },
           challenge: "Tantangan proyek...",
           solution: "Solusi desain yang kamu buat...",
           deliverables: [
               "Landing page responsif",
               "Arsitektur CMS Framer",
               "Interaksi & mikro-animasi"
           ]
       }
       -------------------------------------------------------------------------- */
    const PORTFOLIO_WEBSITES = [
        {
            id: "activesaas",
            title: "Active SaaS",
            category: "Situs Live Framer",
            image: "assets/images/project-active-saas.png",
            liveUrl: "https://bright-operations-110011.framer.app/",
            x: 100,
            y: 80,
            width: 660,
            hasAvatarPin: true,
            pinPos: { top: "38%", right: "24%" },
            desc: "Dirancang dan dibangun untuk pertumbuhan bisnis yang pesat dengan integrasi CRM cerdas dan alur kerja otomatis.",
            tag: "PLATFORM SAAS & CRM // LIVE FRAMER",
            scope: {
                client: "Active SaaS / SaasPlus CRM",
                role: "Desainer Web & Framer Builder",
                timeline: "Diluncurkan 2026 · Demo Interaktif Langsung"
            },
            challenge: "Banyak platform SaaS modern membingungkan calon klien dengan daftar fitur rumit dan pesan yang terfragmentasi. Active SaaS membutuhkan showcase interaktif dan responsif yang mendemonstrasikan penangkapan prospek otomatis, alur CRM, dan analitik real-time dalam antarmuka yang ramah pengguna.",
            solution: "Membangun pengalaman Framer modern berkinerja tinggi yang berfokus pada alur produk langsung, paket langganan transparan, dan pratinjau integrasi mulus. Dilengkapi aksen kontras tajam, transisi halus, dan ajakan bertindak (CTA) yang efektif.",
            deliverables: [
                "Platform web Framer interaktif lengkap: bright-operations-110011.framer.app",
                "Landing page fitur CRM konversi tinggi dengan desain mobile responsif",
                "Komponen harga dan testimoni interaktif dinamis",
                "Token sistem desain, ikonografi kustom, dan mikro-interaksi"
            ]
        },
        {
            id: "posa",
            title: "posa",
            category: "Web App & Kasir Bisnis",
            image: "assets/images/posa projek.png",
            liveUrl: "https://anantha1628.github.io/projek_bisnis/",
            x: 840,
            y: 80,
            width: 660,
            hasAvatarPin: true,
            pinPos: { top: "38%", right: "22%" },
            desc: "Sistem kasir (Point of Sale) modern & manajemen bisnis terpadu dengan pelacakan inventaris real-time (Moving Average HPP), shift closing kasir, otorisasi PIN admin, dan integrasi laporan WhatsApp.",
            tag: "SISTEM KASIR & BISNIS // LIVE APP",
            scope: {
                client: "posa / Projek Bisnis Modern",
                role: "Fullstack Web Developer & UI/UX Designer",
                timeline: "Diluncurkan 2026 · Demo Web App Interaktif"
            },
            challenge: "Operasional bisnis retail dan F&B modern sering menghadapi kendala transaksi kasir manual yang lambat, kerumitan hitung HPP bahan baku dinamis, selisih uang kas di akhir shift, dan minimnya transparansi pelaporan harian kepada owner.",
            solution: "Merancang dan membangun aplikasi kasir digital terpadu berbasis antarmuka modern yang cepat dan intuitif. Mendukung alur transaksi fleksibel (Tunai, QRIS, Kartu Debit, Open Bill), kalkulasi HPP Moving Average otomatis saat restock, rekonsiliasi kas saat pergantian shift dengan cetak thermal receipt, proteksi tindakan sensitif dengan PIN admin, serta ringkasan laporan otomatis ke WhatsApp.",
            deliverables: [
                "Aplikasi web kasir interaktif live: anantha1628.github.io/projek_bisnis",
                "Sistem transaksi multi-kanal (Tunai, QRIS scan, EDC Debit, dan Meja/Open Bill)",
                "Manajemen inventaris bahan baku dengan Moving Average HPP, Stok Opname, & Waste",
                "Fitur Tutup Kasir (Shift Closing) lengkap dengan cetak struk thermal 58mm/80mm",
                "Otorisasi PIN Admin untuk aksi sensitif dan generator laporan harian WhatsApp"
            ]
        },
        {
            id: "bisindo",
            title: "BISINDO",
            category: "Mobile App · Web Flask · Machine Learning",
            image: "assets/images/project-bisindo-card.png",
            rawImage: "assets/images/project-bisindo.jpeg",
            liveUrl: "https://github.com/hafisc/bisindo",
            isCollab: true,
            x: 100,
            y: 600,
            width: 660,
            hasAvatarPin: true,
            pinPos: { top: "38%", right: "22%" },
            desc: "Projek bersama tim untuk membangun platform penerjemah dan pembelajaran Bahasa Isyarat Indonesia (BISINDO) terpadu berbasis Mobile App, Backend Web Flask, dan Machine Learning TensorFlow Lite.",
            tag: "PROJEK BERSAMA // MOBILE, FLASK & ML // GITHUB",
            scope: {
                client: "Projek Bersama (Kolaborasi Tim)",
                role: "Mobile App, Web Flask & ML Deployment",
                timeline: "Open Source · Repositori GitHub"
            },
            challenge: "Masyarakat dan komunitas Tuli membutuhkan sarana pembelajaran dan penerjemah Bahasa Isyarat Indonesia (BISINDO) yang praktis, cepat, dan dapat diakses di mana saja bahkan tanpa sambungan internet, didukung oleh model pengenalan gestur yang ringan untuk perangkat smartphone.",
            solution: "Berkolaborasi dalam tim mengembangkan ekosistem BISINDO lengkap. Fokus kontribusi saya mencakup implementasi fitur Kamus BISINDO pada aplikasi Mobile yang beroperasi offline, penyediaan endpoint RESTful API berbasis Python Flask, serta konversi dan validasi model Machine Learning ke format TensorFlow Lite yang dioptimasi untuk seluler.",
            tasks: [
                {
                    domain: "Mobile",
                    desc: "Mengerjakan halaman Kamus BISINDO. Isinya daftar 26 huruf alfabet beserta foto atau ilustrasi cara memperagakannya. Ada juga halaman detail untuk tiap huruf. Halaman ini bisa dibuka tanpa koneksi internet."
                },
                {
                    domain: "Web Flask",
                    desc: "Membuat endpoint untuk data kamus:<ul><li><code>GET /api/dictionary</code> untuk mengambil seluruh daftar huruf</li><li><code>GET /api/dictionary/&lt;huruf&gt;</code> untuk mengambil detail satu huruf tertentu</li></ul>"
                },
                {
                    domain: "ML (Machine Learning)",
                    desc: "Mengurus konversi model yang sudah selesai dilatih ke format TFLite. Setelah dikonversi, diuji dulu apakah hasil prediksinya masih sama dengan model aslinya."
                }
            ],
            deliverables: [
                "Halaman Kamus BISINDO Mobile dengan katalog 26 alfabet + ilustrasi gerak tangan & mode offline",
                "Backend Web Flask: Endpoint GET /api/dictionary & GET /api/dictionary/<huruf>",
                "Pipeline konversi & pengujian akurasi komparatif model ke format TFLite (TensorFlow Lite)",
                "Repositori Kolaborasi Tim GitHub: github.com/hafisc/bisindo"
            ]
        },
        {
            id: "webarstek",
            title: "PBL Web Arsitek",
            category: "Web Application & Dashboard Admin",
            image: "assets/images/project-webarstek.png",
            liveUrl: "https://github.com/baynobu/PBL-WebArsitek",
            isCollab: true,
            x: 840,
            y: 600,
            width: 660,
            hasAvatarPin: true,
            pinPos: { top: "38%", right: "22%" },
            desc: "Platform web kolaboratif Project-Based Learning (PBL) untuk layanan konsultasi arsitektur dan showcase portofolio desain, dilengkapi panel arsitek mandiri dan dashboard komprehensif admin.",
            tag: "PROJEK BERSAMA // WEB APP & DASHBOARD // GITHUB",
            scope: {
                client: "Project-Based Learning (PBL Tim)",
                role: "Fullstack Web Developer (Fitur Architect & Admin)",
                timeline: "Open Source · Repositori GitHub"
            },
            challenge: "Klien arsitektur memerlukan platform terpadu untuk mengeksplorasi portofolio desain berkualitas, sementara arsitek memerlukan portal mandiri untuk memperbarui karya dan proyek mereka. Di sisi operasional, administrator membutuhkan kontrol penuh atas manajemen data pengguna, verifikasi portofolio arsitek, serta pemantauan aktivitas sistem.",
            solution: "Mengembangkan arsitektur aplikasi web berbasis multi-peran (multi-role). Bertanggung jawab penuh dalam perancangan dan implementasi fitur-fitur portal Arsitek (Architect) untuk showcase karya & penawaran proyek, serta modul Administrator (Admin) untuk kontrol data, verifikasi akun, dan pemeliharaan platform.",
            tasks: [
                {
                    domain: "Fitur Architect (Arsitek)",
                    desc: "Membangun fitur portal arsitek: manajemen portofolio karya arsitektur, unggah dokumentasi proyek & spesifikasi desain, pengaturan profil keahlian profesional, serta interaksi penanganan penawaran proyek dari calon klien."
                },
                {
                    domain: "Fitur Admin (Administrator)",
                    desc: "Mengembangkan dashboard panel admin terpusat: manajemen data pengguna (klien dan arsitek), sistem verifikasi dan kurasi karya portofolio arsitek, monitoring transaksi/konsultasi, serta pengaturan hak akses keamanan sistem."
                }
            ],
            deliverables: [
                "Modul & Panel Arsitek (Manajemen portofolio, spesifikasi karya, dan penawaran proyek)",
                "Dashboard Manajemen Admin (Kontrol pengguna, verifikasi portofolio, dan monitoring sistem)",
                "Integrasi Autentikasi Berbasis Peran (Role-Based Access Control)",
                "Repositori Kolaborasi GitHub: github.com/baynobu/PBL-WebArsitek"
            ]
        }
    ];

    /* --------------------------------------------------------------------------
       03. CANVASFOLIO 2D INTERACTIVE ENGINE & MINIMAP
       -------------------------------------------------------------------------- */
    const canvasWrap = document.getElementById('canvas-viewport-wrap');
    const canvasBoard = document.getElementById('canvas-board');
    const dragHint = document.getElementById('canvas-drag-hint');
    const minimapCard = document.getElementById('canvas-minimap');
    const minimapBoard = document.getElementById('minimap-board');
    const minimapViewport = document.getElementById('minimap-viewport');
    const btnZoomIn = document.getElementById('btn-zoom-in');
    const btnZoomOut = document.getElementById('btn-zoom-out');
    const btnZoomReset = document.getElementById('btn-zoom-reset');
    const btnToggleView = document.getElementById('btn-toggle-view');
    const btnViewCanvas = document.getElementById('btn-view-canvas');
    const btnViewList = document.getElementById('btn-view-list');
    const listViewContainer = document.getElementById('canvas-list-view');
    const listCardsGrid = document.getElementById('list-cards-grid');

    // Canvas board space coordinates (optimized for centered featured showcase)
    const BOARD_WIDTH = 1600;
    const BOARD_HEIGHT = 1180;

    let panX = 0;
    let panY = 0;
    let scale = 0.72;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let dragStartPanX = 0;
    let dragStartPanY = 0;
    let hasMovedSignificantly = false;
    let hasInteractedWithDrag = false;

    // Apply 3D Transform to Board
    function updateCanvasTransform() {
        if (!canvasBoard) return;
        canvasBoard.style.transform = `translate3d(${panX}px, ${panY}px, 0) scale(${scale})`;
        updateMinimap();
        if (btnZoomReset) {
            btnZoomReset.textContent = `${Math.round(scale * 100)}%`;
        }
    }

    // Clamp panning so the user doesn't get lost
    function clampPan() {
        if (!canvasWrap) return;
        const rect = canvasWrap.getBoundingClientRect();
        const minPanX = rect.width - BOARD_WIDTH * scale - 150;
        const maxPanX = 150;
        const minPanY = rect.height - BOARD_HEIGHT * scale - 150;
        const maxPanY = 150;

        panX = Math.min(Math.max(panX, minPanX), maxPanX);
        panY = Math.min(Math.max(panY, minPanY), maxPanY);
    }

    function centerCanvas() {
        if (!canvasWrap) return;
        const rect = canvasWrap.getBoundingClientRect();
        panX = (rect.width - BOARD_WIDTH * scale) / 2;
        panY = (rect.height - BOARD_HEIGHT * scale) / 2;
        clampPan();
        updateCanvasTransform();
    }

    // Initialize Minimap Rectangles
    function initMinimap() {
        if (!minimapBoard || !minimapCard) return;
        minimapBoard.innerHTML = '';
        const mmWidth = minimapCard.clientWidth || 154;
        const mmHeight = minimapCard.clientHeight || 94;

        PORTFOLIO_WEBSITES.forEach(item => {
            const rect = document.createElement('div');
            rect.className = `minimap-card-rect ${item.id === 'activesaas' ? 'active-saas-mini' : ''}`;
            const rx = (item.x / BOARD_WIDTH) * mmWidth;
            const ry = (item.y / BOARD_HEIGHT) * mmHeight;
            const rw = (item.width / BOARD_WIDTH) * mmWidth;
            const rh = (420 / BOARD_HEIGHT) * mmHeight;

            rect.style.left = `${rx}px`;
            rect.style.top = `${ry}px`;
            rect.style.width = `${rw}px`;
            rect.style.height = `${rh}px`;
            minimapBoard.appendChild(rect);
        });
    }

    // Update Minimap Viewport Frame in real-time
    function updateMinimap() {
        if (!minimapCard || !minimapViewport || !canvasWrap) return;
        const mmWidth = minimapCard.clientWidth || 154;
        const mmHeight = minimapCard.clientHeight || 94;
        const vpRect = canvasWrap.getBoundingClientRect();

        const vx = (-panX / (BOARD_WIDTH * scale)) * mmWidth;
        const vy = (-panY / (BOARD_HEIGHT * scale)) * mmHeight;
        const vw = (vpRect.width / (BOARD_WIDTH * scale)) * mmWidth;
        const vh = (vpRect.height / (BOARD_HEIGHT * scale)) * mmHeight;

        minimapViewport.style.left = `${Math.max(0, vx)}px`;
        minimapViewport.style.top = `${Math.max(0, vy)}px`;
        minimapViewport.style.width = `${Math.min(vw, mmWidth)}px`;
        minimapViewport.style.height = `${Math.min(vh, mmHeight)}px`;
    }

    // Pan via Minimap Click / Drag
    if (minimapCard) {
        let isMinimapDown = false;
        function handleMinimapNav(e) {
            const mmRect = minimapCard.getBoundingClientRect();
            const clickX = e.clientX - mmRect.left;
            const clickY = e.clientY - mmRect.top;
            const vpRect = canvasWrap.getBoundingClientRect();

            const targetCanvasX = (clickX / mmRect.width) * BOARD_WIDTH;
            const targetCanvasY = (clickY / mmRect.height) * BOARD_HEIGHT;

            panX = -targetCanvasX * scale + vpRect.width / 2;
            panY = -targetCanvasY * scale + vpRect.height / 2;
            clampPan();
            updateCanvasTransform();
        }

        minimapCard.addEventListener('mousedown', (e) => {
            isMinimapDown = true;
            handleMinimapNav(e);
        });

        window.addEventListener('mousemove', (e) => {
            if (isMinimapDown) handleMinimapNav(e);
        });

        window.addEventListener('mouseup', () => {
            isMinimapDown = false;
        });
    }

    // Canvas Pan via Mouse Drag
    if (canvasWrap) {
        canvasWrap.addEventListener('mousedown', (e) => {
            // Ignore if clicking link, button, or minimap
            if (e.target.closest('a') || e.target.closest('button') || e.target.closest('#canvas-minimap')) {
                return;
            }
            isDragging = true;
            hasMovedSignificantly = false;
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            dragStartPanX = panX;
            dragStartPanY = panY;
            canvasWrap.classList.add('grabbing');
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const dx = e.clientX - dragStartX;
            const dy = e.clientY - dragStartY;

            if (Math.hypot(dx, dy) > 4) {
                hasMovedSignificantly = true;
                if (!hasInteractedWithDrag && dragHint) {
                    hasInteractedWithDrag = true;
                    dragHint.style.opacity = '0.35';
                    dragHint.style.transition = 'opacity 0.6s ease';
                }
            }

            panX = dragStartPanX + dx;
            panY = dragStartPanY + dy;
            clampPan();
            updateCanvasTransform();
        });

        window.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                if (canvasWrap) canvasWrap.classList.remove('grabbing');
            }
        });

        // Wheel Zoom towards cursor
        canvasWrap.addEventListener('wheel', (e) => {
            // If user holds Ctrl, Meta, or inside canvas, zoom smoothly
            e.preventDefault();
            const rect = canvasWrap.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const zoomFactor = e.deltaY < 0 ? 1.07 : 0.93;
            const newScale = Math.min(Math.max(scale * zoomFactor, 0.45), 1.6);

            // Keep position under cursor anchored
            const mouseCanvasX = (mouseX - panX) / scale;
            const mouseCanvasY = (mouseY - panY) / scale;

            panX = mouseX - mouseCanvasX * newScale;
            panY = mouseY - mouseCanvasY * newScale;
            scale = newScale;

            clampPan();
            updateCanvasTransform();
        }, { passive: false });

        // Touch support for tablets & mobile
        let touchStartDist = 0;
        let touchStartScale = 1;
        canvasWrap.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                isDragging = true;
                hasMovedSignificantly = false;
                dragStartX = e.touches[0].clientX;
                dragStartY = e.touches[0].clientY;
                dragStartPanX = panX;
                dragStartPanY = panY;
            } else if (e.touches.length === 2) {
                isDragging = false;
                touchStartDist = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
                touchStartScale = scale;
            }
        }, { passive: true });

        canvasWrap.addEventListener('touchmove', (e) => {
            if (e.touches.length === 1 && isDragging) {
                const dx = e.touches[0].clientX - dragStartX;
                const dy = e.touches[0].clientY - dragStartY;
                if (Math.hypot(dx, dy) > 4) hasMovedSignificantly = true;
                panX = dragStartPanX + dx;
                panY = dragStartPanY + dy;
                clampPan();
                updateCanvasTransform();
            } else if (e.touches.length === 2 && touchStartDist > 0) {
                const currentDist = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
                const pinchFactor = currentDist / touchStartDist;
                scale = Math.min(Math.max(touchStartScale * pinchFactor, 0.45), 1.6);
                clampPan();
                updateCanvasTransform();
            }
        }, { passive: true });

        canvasWrap.addEventListener('touchend', () => {
            isDragging = false;
            touchStartDist = 0;
        });
    }

    // Zoom Buttons
    if (btnZoomIn) {
        btnZoomIn.addEventListener('click', () => {
            const vpRect = canvasWrap.getBoundingClientRect();
            const centerX = vpRect.width / 2;
            const centerY = vpRect.height / 2;
            const newScale = Math.min(scale * 1.15, 1.6);

            const canvasCenterX = (centerX - panX) / scale;
            const canvasCenterY = (centerY - panY) / scale;
            panX = centerX - canvasCenterX * newScale;
            panY = centerY - canvasCenterY * newScale;
            scale = newScale;

            clampPan();
            updateCanvasTransform();
        });
    }

    if (btnZoomOut) {
        btnZoomOut.addEventListener('click', () => {
            const vpRect = canvasWrap.getBoundingClientRect();
            const centerX = vpRect.width / 2;
            const centerY = vpRect.height / 2;
            const newScale = Math.max(scale * 0.87, 0.45);

            const canvasCenterX = (centerX - panX) / scale;
            const canvasCenterY = (centerY - panY) / scale;
            panX = centerX - canvasCenterX * newScale;
            panY = centerY - canvasCenterY * newScale;
            scale = newScale;

            clampPan();
            updateCanvasTransform();
        });
    }

    if (btnZoomReset) {
        btnZoomReset.addEventListener('click', () => {
            scale = 0.72;
            centerCanvas();
            showToast('Zoom dan posisi kanvas direset');
        });
    }

    // Render List View Cards dynamically from PORTFOLIO_WEBSITES
    function renderListView() {
        if (!listCardsGrid) return;
        listCardsGrid.innerHTML = PORTFOLIO_WEBSITES.map(item => `
            <article class="list-card-item" data-project="${item.id}">
                <div class="list-card-thumb" onclick="window.openCaseStudy && window.openCaseStudy('${item.id}')">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                </div>
                <div class="list-card-body">
                    <div class="list-card-top-meta">
                        <span class="list-card-tag">${item.category}</span>
                        ${item.isCollab ? `<span class="list-card-badge" style="background:#2563eb; color:#fff;">Projek Bersama</span>` : (item.liveUrl ? `<span class="list-card-badge">Demo Langsung</span>` : '')}
                    </div>
                    <h3 class="list-card-title">${item.title}</h3>
                    <p class="list-card-desc">${item.desc}</p>
                    <div class="list-card-actions">
                        <button class="list-btn-details" onclick="window.openCaseStudy && window.openCaseStudy('${item.id}')">Lihat Studi Kasus ↗</button>
                        ${item.liveUrl ? `<a href="${item.liveUrl}" target="_blank" rel="noopener noreferrer" class="list-btn-live">${item.liveUrl.includes('github.com') ? 'Repositori GitHub ↗' : 'Kunjungi Situs ↗'}</a>` : ''}
                    </div>
                </div>
            </article>
        `).join('');
    }

    // Toggle Canvas vs List View
    function setViewMode(mode) {
        const isList = mode === 'list';
        if (isList) {
            if (canvasWrap) canvasWrap.style.display = 'none';
            if (listViewContainer) listViewContainer.style.display = 'block';
            if (btnToggleView) {
                btnToggleView.innerHTML = `<span class="btn-icon">☷</span><span class="btn-text">Lihat sebagai kanvas</span>`;
            }
            if (btnViewCanvas) btnViewCanvas.classList.remove('active');
            if (btnViewList) btnViewList.classList.add('active');
            renderListView();
        } else {
            if (canvasWrap) canvasWrap.style.display = 'block';
            if (listViewContainer) listViewContainer.style.display = 'none';
            if (btnToggleView) {
                btnToggleView.innerHTML = `<span class="btn-icon">📑</span><span class="btn-text">Lihat sebagai daftar</span>`;
            }
            if (btnViewCanvas) btnViewCanvas.classList.add('active');
            if (btnViewList) btnViewList.classList.remove('active');
            updateCanvasTransform();
        }
    }

    if (btnToggleView) {
        btnToggleView.addEventListener('click', () => {
            const isCurrentlyList = listViewContainer && listViewContainer.style.display === 'block';
            setViewMode(isCurrentlyList ? 'canvas' : 'list');
        });
    }

    if (btnViewCanvas) {
        btnViewCanvas.addEventListener('click', () => setViewMode('canvas'));
    }

    if (btnViewList) {
        btnViewList.addEventListener('click', () => setViewMode('list'));
    }

    // Initial setup on DOM ready
    initMinimap();
    renderListView();
    centerCanvas();
    window.addEventListener('resize', () => {
        initMinimap();
        centerCanvas();
    });

    /* --------------------------------------------------------------------------
       04. CASE STUDY MODAL VIEWER
       -------------------------------------------------------------------------- */
    const caseModal = document.getElementById('case-study-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalBadge = document.getElementById('modal-project-badge');
    const modalContent = document.getElementById('modal-content-area');

    function openCaseStudy(projKey) {
        const data = PORTFOLIO_WEBSITES.find(p => p.id === projKey);
        if (!data || !caseModal) return;

        modalBadge.textContent = data.tag || 'STUDI KASUS';
        modalContent.innerHTML = `
            <img src="${data.image}" alt="${data.title}" class="modal-lead-img">
            <h2 class="modal-title">${data.title} &middot; ${data.category}</h2>
            <p class="modal-desc-lead">${data.desc}</p>

            ${data.isCollab ? `
            <div class="modal-collab-banner">
                🤝 <strong>Projek Bersama (Kolaborasi Tim)</strong> — Aplikasi ini dikembangkan secara kolaboratif bersama tim di GitHub (<a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" style="color:#1d4ed8; font-weight:600; text-decoration:underline;">${data.liveUrl.replace('https://github.com/', '')} ↗</a>).
            </div>` : ''}

            ${data.liveUrl ? `
            <div style="margin: 1.25rem 0 0.5rem 0; display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
                <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="im-btn btn-dark" style="display:inline-flex; align-items:center; gap:0.4rem; padding: 0.6rem 1.2rem; font-size: 0.85rem;">
                    ${data.liveUrl.includes('github.com') ? 'Lihat Repositori GitHub ↗' : 'Buka Live Demo ↗'}
                </a>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); word-break: break-all;">${data.liveUrl}</span>
            </div>` : ''}

            <div class="modal-spec-grid">
                <div class="spec-item">
                    <span>${data.isCollab ? 'JENIS PROJEK' : 'KLIEN'}</span>
                    <strong>${data.scope?.client || 'Proyek Independen'}</strong>
                </div>
                <div class="spec-item">
                    <span>PERAN SAYA</span>
                    <strong>${data.scope?.role || 'Desainer Web & Pengembang'}</strong>
                </div>
                <div class="spec-item">
                    <span>STATUS &amp; WAKTU</span>
                    <strong>${data.scope?.timeline || 'Diluncurkan 2026'}</strong>
                </div>
            </div>

            ${data.tasks && data.tasks.length ? `
            <h3 class="modal-section-h">Tugas &amp; Tanggung Jawab Saya</h3>
            <p class="modal-p" style="margin-bottom: 0.75rem;">Dalam projek ini, saya memegang tanggung jawab spesifik pada aspek berikut:</p>
            <div class="modal-task-group">
                ${data.tasks.map(t => `
                    <div class="modal-task-card">
                        <span class="modal-task-badge">${t.domain}</span>
                        <div class="modal-task-content">
                            ${t.desc.includes('<ul>') ? t.desc : `<p>${t.desc}</p>`}
                        </div>
                    </div>
                `).join('')}
            </div>` : ''}

            <h3 class="modal-section-h">Tantangan Proyek</h3>
            <p class="modal-p">${data.challenge || 'Merancang platform digital responsif dan konversi tinggi untuk tim visioner.'}</p>

            <h3 class="modal-section-h">Pendekatan Desain &amp; Solusi</h3>
            <p class="modal-p">${data.solution || 'Menerapkan prinsip desain modern, tipografi dinamis, dan mikro-interaksi yang rapi.'}</p>

            ${data.deliverables && data.deliverables.length ? `
            <h3 class="modal-section-h">Hasil Utama yang Diserahkan</h3>
            <ul class="modal-list">
                ${data.deliverables.map(item => `<li>${item}</li>`).join('')}
            </ul>` : ''}
        `;

        caseModal.classList.add('open');
        caseModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    // Expose openCaseStudy globally for list view buttons
    window.openCaseStudy = openCaseStudy;

    function closeCaseStudy() {
        if (!caseModal) return;
        caseModal.classList.remove('open');
        caseModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Click handler for canvas card wrappers
    document.querySelectorAll('.canvas-card-wrapper').forEach(wrapper => {
        wrapper.addEventListener('click', (e) => {
            // If user was dragging canvas, don't trigger click
            if (hasMovedSignificantly) return;
            const projKey = wrapper.getAttribute('data-project');
            openCaseStudy(projKey);
        });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCaseStudy);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeCaseStudy);

    /* --------------------------------------------------------------------------
       04. CERTIFICATE DATA & COVERFLOW ENGINE (IMAGE 1 & IMAGE 2)
       -------------------------------------------------------------------------- */
    const CERTIFICATES_DATA = [
        {
            id: "pkl-mahative",
            number: "01",
            title: "Praktik Kerja Lapangan · Mahative Studio",
            issuer: "Mahative Studio · Industri Terverifikasi",
            category: "Praktik Kerja Lapangan (PKL)",
            badge: "HASIL: SANGAT BAIK",
            image: "assets/images/sertifikat-mahative.png",
            credId: "PKL/MAHATIVE/2026/021",
            date: "07 Jan – 21 Feb 2026",
            recipient: "Aryaputra Ferdiananta (NIM: 244107020127)",
            desc: "Diberikan kepada Aryaputra Ferdiananta atas pelaksanaan Praktik Kerja Lapangan di Mahative Studio dengan evaluasi predikat 'Sangat Baik'. Kontribusi mencakup perancangan antarmuka web modern, arsitektur RESTful API, integrasi frontend-backend, dan optimasi performa digital.",
            skills: [
                "Fullstack Web Development",
                "React.js & Vanilla JavaScript",
                "RESTful API & Database Integration",
                "UI/UX Design & Interactive Prototyping",
                "Performance & SEO Optimization",
                "Git & Professional Workflow"
            ],
            details: [
                { label: "Nomor Sertifikat", val: "PKL/MAHATIVE/2026/021" },
                { label: "Nama Penerima", val: "Aryaputra Ferdiananta (NIM: 244107020127)" },
                { label: "Institusi Asal", val: "Politeknik Negeri Malang (POLINEMA)" },
                { label: "Instansi Penyelenggara", val: "Mahative Studio, Kota Malang" },
                { label: "Periode PKL", val: "07 Januari 2026 – 21 Februari 2026" },
                { label: "Evaluasi Akhir", val: "Predikat: Sangat Baik (A)", isHighlight: true }
            ],
            verifyUrl: "assets/images/sertifikat-mahative.png",
            downloadName: "Sertifikat-PKL-Mahative-Aryaputra-Ferdiananta.png"
        },
        {
            id: "fest-goworld",
            number: "02",
            title: "FEST GoWorld Asia Futurepreneur 2025",
            issuer: "FEST GoWorld × BEM FEB Universitas Muhammadiyah Malang",
            category: "Program Seleksi Internasional",
            badge: "🌍 INTERNASIONAL",
            image: "assets/images/certs/sertifikat-fest-goworld.jpg",
            credId: "TPSPOVIEBA/XXIII/II/2025",
            date: "23 Februari 2025",
            recipient: "Aryaputra Ferdiananta",
            desc: "Sertifikat keikutsertaan seleksi tingkat internasional dalam FEST GoWorld Asia Futurepreneur Selection Program 2025. Menguji kapabilitas perumusan inovasi bisnis lintas negara, strategi penetrasi pasar regional Asia, dan kemampuan presentasi ide rintisan di hadapan panelis global.",
            skills: [
                "Global Entrepreneurship & Strategy",
                "International Venture Pitching",
                "Market Validation & Expansion",
                "Cross-Border Business Communication",
                "Scalable Tech Innovation"
            ],
            details: [
                { label: "Nomor Sertifikat", val: "TPSPOVIEBA/XXIII/II/2025" },
                { label: "Nama Penerima", val: "Aryaputra Ferdiananta" },
                { label: "Penyelenggara", val: "FEST GoWorld × BEM FEB UMM" },
                { label: "Lokasi Program", val: "DOME UMM, Kota Malang" },
                { label: "Tanggal Pelaksanaan", val: "23 Februari 2025" },
                { label: "Status Partisipasi", val: "Delegasi Peserta Resmi Terdaftar", isHighlight: true }
            ],
            verifyUrl: "assets/images/certs/sertifikat-fest-goworld.jpg",
            downloadName: "Sertifikat-FEST-GoWorld-Asia-Futurepreneur-Aryaputra.jpg"
        },
        {
            id: "startup-founder-clash",
            number: "03",
            title: "Startup Founder Clash — Kompetisi Ide Bisnis",
            issuer: "Future Entrepreneur Summit Indonesia",
            category: "Kompetisi Tingkat Nasional",
            badge: "🏆 TINGKAT NASIONAL",
            image: "assets/images/certs/sertifikat-startup-founder-clash.jpg",
            credId: "ZKVZ95XI1D/XXIII/II/2025",
            date: "1 Okt – 20 Des 2024",
            recipient: "Aryaputra Ferdiananta",
            desc: "Sertifikat penghargaan atas partisipasi aktif dalam kompetisi ide bisnis startup skala nasional 'Startup Founder Clash'. Menguji kematangan perumusan Business Model Canvas (BMC), purwarupa produk digital (MVP), strategi go-to-market, dan proyeksi keuangan usaha rintisan.",
            skills: [
                "Business Model Canvas (BMC)",
                "MVP Prototyping & Testing",
                "Go-to-Market Strategy",
                "Venture Capital Pitch Deck",
                "Product-Market Fit Validation"
            ],
            details: [
                { label: "Nomor Sertifikat", val: "ZKVZ95XI1D/XXIII/II/2025" },
                { label: "Nama Penerima", val: "Aryaputra Ferdiananta" },
                { label: "Penyelenggara", val: "Future Entrepreneur Summit (FeST)" },
                { label: "Periode Kompetisi", val: "01 Oktober – 20 Desember 2024" },
                { label: "Tingkat Kompetisi", val: "Nasional (Seluruh Indonesia)", isHighlight: true }
            ],
            verifyUrl: "assets/images/certs/sertifikat-startup-founder-clash.jpg",
            downloadName: "Sertifikat-Startup-Founder-Clash-Aryaputra.jpg"
        },
        {
            id: "public-speaking",
            number: "04",
            title: "Training Public Speaking — GROW Project",
            issuer: "GROW Project × BEM FEB Universitas Muhammadiyah Malang",
            category: "Komunikasi Publik & Pitching",
            badge: "⭐ TINGKAT NASIONAL",
            image: "assets/images/certs/sertifikat-public-speaking.jpg",
            credId: "GNE4ISCCZG/XXIII/II/2025",
            date: "23 Februari 2025",
            recipient: "Aryaputra Ferdiananta",
            desc: "Sertifikat kelulusan pelatihan intensif public speaking dan retorika panggung profesional. Pelatihan berfokus pada penguasaan panggung, modulasi vokal, teknik storytelling dalam presentasi produk teknologi, serta seni persuasi untuk negosiasi proyek dan pendanaan.",
            skills: [
                "Persuasive Storytelling & Rhetoric",
                "Stage Presence & Body Language",
                "Executive Product Pitching",
                "Voice Modulation & Articulation",
                "Audience Engagement & Influence"
            ],
            details: [
                { label: "Nomor Sertifikat", val: "GNE4ISCCZG/XXIII/II/2025" },
                { label: "Nama Penerima", val: "Aryaputra Ferdiananta" },
                { label: "Penyelenggara", val: "GROW Project × BEM FEB UMM" },
                { label: "Lokasi Pelatihan", val: "DOME UMM, Kota Malang" },
                { label: "Tanggal", val: "23 Februari 2025" },
                { label: "Predikat Kelulusan", val: "Lulus Pelatihan Komprehensif", isHighlight: true }
            ],
            verifyUrl: "assets/images/certs/sertifikat-public-speaking.jpg",
            downloadName: "Sertifikat-Training-Public-Speaking-Aryaputra.jpg"
        },
        {
            id: "entrepreneurship",
            number: "05",
            title: "Pelatihan Entrepreneurship — GROW × FeST",
            issuer: "GROW Project × FeST Management × BEM FEB UMM",
            category: "Kewirausahaan Bisnis",
            badge: "⭐ TINGKAT NASIONAL",
            image: "assets/images/certs/sertifikat-pelatihan-entrepreneurship.jpg",
            credId: "KRFTPEF7IA/XXIII/II/2025",
            date: "23 Februari 2025",
            recipient: "Aryaputra Ferdiananta",
            desc: "Sertifikat pelatihan komprehensif kewirausahaan digital dan manajemen usaha. Membahas fundamental validasi ide bisnis, pembentukan unit ekonomi positif, manajemen operasional tim, strategi branding digital, dan mitigasi risiko bagi tech entrepreneur muda.",
            skills: [
                "Digital Business Strategy & Setup",
                "Unit Economics & Cashflow Basics",
                "Brand Positioning & Marketing",
                "Operational Team Management",
                "Risk Management & Scaling"
            ],
            details: [
                { label: "Nomor Sertifikat", val: "KRFTPEF7IA/XXIII/II/2025" },
                { label: "Nama Penerima", val: "Aryaputra Ferdiananta" },
                { label: "Penyelenggara", val: "FeST Management & BEM FEB UMM" },
                { label: "Lokasi", val: "DOME UMM, Kota Malang" },
                { label: "Tanggal", val: "23 Februari 2025" },
                { label: "Status", val: "Lulus Terakreditasi", isHighlight: true }
            ],
            verifyUrl: "assets/images/certs/sertifikat-pelatihan-entrepreneurship.jpg",
            downloadName: "Sertifikat-Pelatihan-Entrepreneurship-Aryaputra.jpg"
        },
        {
            id: "future-summit",
            number: "06",
            title: "Future Entrepreneur Summit 2025",
            issuer: "FeST Management × BEM FEB Universitas Muhammadiyah Malang",
            category: "Seminar Nasional",
            badge: "🎙️ SEMINAR NASIONAL",
            image: "assets/images/certs/sertifikat-future-entrepreneur-summit.jpg",
            credId: "30IAUTLYOR/XXIII/II/2025",
            date: "23 Februari 2025",
            recipient: "Aryaputra Ferdiananta",
            desc: "Sertifikat delegasi seminar akbar Future Entrepreneur Summit 2025. Menghadirkan panelis founder startup dan pakar industri nasional untuk membedah arah transformasi ekonomi digital, peluang AI dalam produktivitas bisnis, serta kesiapan generasi muda menghadapi era automasi.",
            skills: [
                "AI & Automation in Modern Business",
                "Digital Economy & Tech Trends",
                "Startup Ecosystem Understanding",
                "Professional Networking",
                "Strategic Opportunity Mapping"
            ],
            details: [
                { label: "Nomor Sertifikat", val: "30IAUTLYOR/XXIII/II/2025" },
                { label: "Nama Penerima", val: "Aryaputra Ferdiananta" },
                { label: "Penyelenggara", val: "FeST Management × BEM FEB UMM" },
                { label: "Tempat", val: "DOME UMM, Kota Malang" },
                { label: "Tanggal", val: "23 Februari 2025" },
                { label: "Status Delegasi", val: "Peserta Resmi Terverifikasi", isHighlight: true }
            ],
            verifyUrl: "assets/images/certs/sertifikat-future-entrepreneur-summit.jpg",
            downloadName: "Sertifikat-Future-Entrepreneur-Summit-Aryaputra.jpg"
        },
        {
            id: "webinar-softskill",
            number: "07",
            title: "Webinar Soft Skill: Prestasi & Karier Era Digital",
            issuer: "Wardah Cosmetics × FeST Management Indonesia",
            category: "Pengembangan Soft Skill",
            badge: "💡 WEBINAR NASIONAL",
            image: "assets/images/certs/sertifikat-webinar-softskill.jpg",
            credId: "9SOYDEUBJ5/XXIII/II/2025",
            date: "23 November 2024",
            recipient: "Aryaputra Ferdiananta",
            desc: "Sertifikat pelatihan pengembangan kompetensi personal dan profesional hasil kolaborasi Wardah Cosmetics dan FeST Management. Menekankan ketahanan mental, personal branding bagi talenta digital, etika komunikasi profesional, dan kesiapan berkarier di ekosistem kerja teknologi.",
            skills: [
                "Personal Branding for Developers",
                "Professional Workplace Communication",
                "Growth Mindset & Career Agility",
                "Time & Priority Management",
                "Emotional Intelligence (EQ)"
            ],
            details: [
                { label: "Nomor Sertifikat", val: "9SOYDEUBJ5/XXIII/II/2025" },
                { label: "Nama Penerima", val: "Aryaputra Ferdiananta" },
                { label: "Penyelenggara", val: "Wardah Cosmetics × FeST Management" },
                { label: "Format Program", val: "Webinar Nasional Daring" },
                { label: "Tanggal", val: "23 November 2024" },
                { label: "Status", val: "Peserta Terdaftar Resmi", isHighlight: true }
            ],
            verifyUrl: "assets/images/certs/sertifikat-webinar-softskill.jpg",
            downloadName: "Sertifikat-Webinar-Softskill-Wardah-Aryaputra.jpg"
        },
        {
            id: "mentoring-polinema",
            number: "08",
            title: "Mentoring Keagamaan: MENYALA Jilid-1",
            issuer: "UKM Kerohanian Islam (RISPOL) · Politeknik Negeri Malang",
            category: "Pembinaan Karakter & Keagamaan",
            badge: "🏛️ POLINEMA",
            image: "assets/images/certs/sertifikat-mentoring-aryaputra.jpg",
            credId: "6812/PL2.3/KM/2025",
            date: "21 – 22 September 2024",
            recipient: "Aryaputra Ferdiananta (NIM: 244107020127)",
            desc: "Sertifikat resmi keikutsertaan sebagai Peserta dalam kegiatan Mentoring Keagamaan bertema 'MENYALA (Mentoring Punya Lentera) Jilid-1: Rukun Iman di Era Modern' yang diselenggarakan oleh UKM Kerohanian Islam Politeknik (RISPOL) Politeknik Negeri Malang di Graha Polinema.",
            skills: [
                "Leadership & Character Building",
                "Etika Moral & Integritas Profesional",
                "Internalisasi Nilai Spiritual Era Modern",
                "Kolaborasi & Solidaritas Mahasiswa",
                "Public Discussion & Critical Thinking"
            ],
            details: [
                { label: "Nomor Sertifikat", val: "6812/PL2.3/KM/2025" },
                { label: "Nama Penerima", val: "Aryaputra Ferdiananta" },
                { label: "NIM / Institusi", val: "244107020127 · Politeknik Negeri Malang" },
                { label: "Penyelenggara", val: "UKM Kerohanian Islam Politeknik (RISPOL)" },
                { label: "Tema Kegiatan", val: "MENYALA Jilid-1: Rukun Iman di Era Modern" },
                { label: "Waktu & Tempat", val: "21–22 September 2024 · Graha Polinema" },
                { label: "Status Partisipasi", val: "Peserta Resmi Terverifikasi", isHighlight: true }
            ],
            verifyUrl: "assets/images/certs/sertifikat-mentoring-aryaputra.jpg",
            downloadName: "Sertifikat-Mentoring-MENYALA-Aryaputra-Ferdiananta.jpg"
        },
        {
            id: "ldk-pkbn-polinema",
            number: "09",
            title: "Latihan Dasar Kedisiplinan & Bela Negara (PKBN)",
            issuer: "Dodikjur Rindam V/Brawijaya × Politeknik Negeri Malang",
            category: "Kedisiplinan & Bela Negara",
            badge: "🎖️ KODAM V / BRAWIJAYA",
            image: "assets/images/certs/sertifikat-ldk-pkbn-polinema.jpg",
            credId: "ST-3 / 1551 / VII / 2024",
            date: "09 – 12 Juli 2024",
            recipient: "Aryaputra Ferdiananta (NIM: 244107020127)",
            desc: "Sertifikat resmi kelulusan Latihan Dasar Kedisiplinan (LDK) dan Pembinaan Kesadaran Bela Negara (PKBN) Gelombang III bagi Mahasiswa Baru Politeknik Negeri Malang Tahun Akademik 2024 di Dodikjur Rindam V/Brawijaya. Menempa kedisiplinan tinggi, ketahanan mental, kepemimpinan lapangan, dan komitmen kebangsaan.",
            skills: [
                "Disiplin Mental & Ketahanan Fisik",
                "Wawasan Kebangsaan & Bela Negara",
                "Leadership & Teamwork Under Pressure",
                "Manajemen Waktu & Integritas",
                "Karakter Tangguh & Loyalitas"
            ],
            details: [
                { label: "Nomor Sertifikat", val: "ST-3 / 1551 / VII / 2024" },
                { label: "Nama Penerima", val: "ARYAPUTRA FERDIANANTA" },
                { label: "NIM / Program Studi", val: "244107020127 · D-IV TI Informatika" },
                { label: "Institusi Pendidikan", val: "Politeknik Negeri Malang (POLINEMA)" },
                { label: "Instansi Militer Pelaksana", val: "Depo Pendidikan Kejuruan Rindam V/Brawijaya" },
                { label: "Komandan Dodikjur", val: "Letkol Arm Soegeng Boediharto (NRP 11940029190470)" },
                { label: "Waktu & Tempat", val: "09–12 Juli 2024 · Dodikjur Rindam V/Brawijaya, Malang" },
                { label: "Status Kelulusan", val: "Lulus Resmi Pelatihan Kedisiplinan & PKBN", isHighlight: true }
            ],
            verifyUrl: "assets/images/certs/sertifikat-ldk-pkbn-polinema.jpg",
            downloadName: "Sertifikat-LDK-PKBN-Polinema-Aryaputra-Ferdiananta.jpg"
        },
        {
            id: "kkr-man2-malang",
            number: "10",
            title: "Kader Kesehatan Remaja (KKR) — Bidang Lingkungan Sehat",
            issuer: "MAN 2 Kota Malang · Kementerian Agama RI",
            category: "Organisasi & Kontribusi Sosial Pelajar",
            badge: "🌿 MAN 2 KOTA MALANG",
            image: "assets/images/certs/sertifikat-kkr-man2-malang.jpg",
            credId: "MAN2-MLG/KKR/2024/06",
            date: "11 Juni 2024",
            recipient: "Aryaputra Ferdiananta (Kelas: XII MIPA 5)",
            desc: "Sertifikat resmi atas dedikasi dan kontribusi aktif sebagai Anggota Bidang 3: Lingkungan Sekolah Sehat Kader Kesehatan Remaja (KKR) periode 2022/2023 di Madrasah Aliyah Negeri 2 Kota Malang. Mengemban amanah advokasi sanitasi lingkungan sekolah, edukasi pola hidup bersih dan sehat (PHBS), serta koordinasi program kesehatan lingkungan madrasah.",
            skills: [
                "School Environmental Health Management",
                "Youth Health Advocacy & Social Outreach",
                "Program Coordination & Organization",
                "Sanitasi & Pola Hidup Bersih Sehat (PHBS)",
                "Kerja Sama Tim & Kepedulian Sosial"
            ],
            details: [
                { label: "Kredensial Resmi", val: "Sertifikat Anggota KKR MAN 2 Kota Malang" },
                { label: "Nama Penerima", val: "Aryaputra Ferdiananta" },
                { label: "Kelas / Asal Sekolah", val: "Kelas XII MIPA 5 · MAN 2 Kota Malang" },
                { label: "Lembaga Naungan", val: "Kementerian Agama Republik Indonesia" },
                { label: "Amanah Kepengurusan", val: "Anggota Bidang 3 : Lingkungan Sekolah Sehat KKR 2022/2023" },
                { label: "Kepala Madrasah", val: "Dr. H. Samsudin, M.Pd (NIP. 196704231994031002)" },
                { label: "Tanggal Diterbitkan", val: "Malang, 11 Juni 2024" },
                { label: "Status Kredensial", val: "Pengurus Aktif Terverifikasi", isHighlight: true }
            ],
            verifyUrl: "assets/images/certs/sertifikat-kkr-man2-malang.jpg",
            downloadName: "Sertifikat-KKR-MAN2-Kota-Malang-Aryaputra-Ferdiananta.jpg"
        }
    ];

    /* --- LIGHTBOX MODAL CONTROLLER (IMAGE 2 DESIGN REFERENCE) --- */
    const certModal = document.getElementById('cert-modal');
    const certCloseBtn = document.getElementById('cert-close-btn');
    const certBackdrop = document.getElementById('cert-backdrop');
    const certModalImg = document.getElementById('cert-modal-img');
    const certModalMetaTitle = document.getElementById('cert-modal-meta-title');
    const certModalIssuer = document.getElementById('cert-modal-issuer');
    const certModalMetaDesc = document.getElementById('cert-modal-meta-desc');
    const certModalChips = document.getElementById('cert-modal-chips');
    const certModalExplanation = document.getElementById('cert-modal-explanation');
    const certModalVerifyBtn = document.getElementById('cert-modal-verify-btn');
    const certModalDownload = document.getElementById('cert-modal-download');

    function openCert(certData) {
        if (!certModal) return;

        // If certData is an ID string, find corresponding object
        if (typeof certData === 'string') {
            certData = CERTIFICATES_DATA.find(c => c.id === certData) || {
                title: certData,
                image: "assets/images/sertifikat-mahative.png"
            };
        }

        if (certData) {
            const title = certData.title || "Sertifikat Resmi";
            const img = certData.image || certData.img || "assets/images/sertifikat-mahative.png";
            const issuer = certData.issuer || "Kredensial Terverifikasi";
            const desc = certData.desc || certData.description || "Dokumentasi resmi pencapaian dan keahlian terverifikasi.";
            const credId = certData.credId || certData.credentialId || certData.id || "VERIFIED-2026";
            const date = certData.date || "2025 - 2026";
            const badge = certData.badge || "TERVERIFIKASI";
            const recipient = certData.recipient || "Aryaputra Ferdiananta";
            const download = certData.downloadName || certData.download || "Sertifikat-Aryaputra-Ferdiananta.jpg";
            const verifyUrl = certData.verifyUrl || img;
            const skills = certData.skills || [];
            const details = certData.details || [
                { label: "Nomor Sertifikat", val: credId },
                { label: "Nama Penerima", val: recipient },
                { label: "Penerbit", val: issuer },
                { label: "Tanggal", val: date },
                { label: "Hasil / Status", val: badge, isHighlight: true }
            ];

            if (certModalImg) {
                certModalImg.src = img;
                certModalImg.alt = title;
            }
            if (certModalMetaTitle) {
                certModalMetaTitle.textContent = title;
            }
            if (certModalIssuer) {
                certModalIssuer.textContent = issuer;
            }
            if (certModalMetaDesc) {
                certModalMetaDesc.textContent = desc;
            }
            if (certModalChips) {
                certModalChips.innerHTML = `
                    <span class="meta-chip chip-pill">ID: ${credId}</span>
                    <span class="meta-chip chip-pill">${date}</span>
                    <span class="meta-chip chip-pill highlight-chip">${badge}</span>
                `;
            }

            // Populate Enriched Certificate Contents Explanation
            if (certModalExplanation) {
                certModalExplanation.innerHTML = `
                    <div class="cert-explain-section">
                        <div class="cert-explain-heading">Materi &amp; Ringkasan Sertifikasi</div>
                        <p class="cert-explain-p">${desc}</p>
                    </div>

                    ${skills && skills.length ? `
                    <div class="cert-explain-section">
                        <div class="cert-explain-heading">Keahlian &amp; Kompetensi yang Teruji</div>
                        <div class="cert-skills-cloud">
                            ${skills.map(s => `<span class="cert-skill-tag">${s}</span>`).join('')}
                        </div>
                    </div>
                    ` : ''}

                    <div class="cert-explain-section">
                        <div class="cert-explain-heading">Rincian Kredensial Resmi</div>
                        <table class="cert-explain-table">
                            <tbody>
                                ${details.map(d => `
                                    <tr>
                                        <td class="cert-explain-label">${d.label}</td>
                                        <td class="cert-explain-val ${d.isHighlight ? 'val-highlight' : ''}">${d.label.includes('Nomor') ? `<code>${d.val}</code>` : d.val}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                `;
            }

            if (certModalVerifyBtn) {
                certModalVerifyBtn.href = verifyUrl;
            }
            if (certModalDownload) {
                certModalDownload.href = img;
                certModalDownload.download = download;
            }
        }

        certModal.classList.add('open');
        certModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeCert() {
        if (!certModal) return;
        certModal.classList.remove('open');
        certModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (certCloseBtn) certCloseBtn.addEventListener('click', closeCert);
    if (certBackdrop) certBackdrop.addEventListener('click', closeCert);

    // Support external modal triggers (e.g. from the top PKL details box)
    document.querySelectorAll('.cert-modal-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const certId = trigger.getAttribute('data-cert-id');
            const certObj = certId ? CERTIFICATES_DATA.find(c => c.id === certId) : null;
            const certData = certObj || {
                img: trigger.getAttribute('data-cert-img'),
                image: trigger.getAttribute('data-cert-img'),
                title: trigger.getAttribute('data-cert-title'),
                issuer: trigger.getAttribute('data-cert-issuer') || trigger.getAttribute('data-cert-label'),
                desc: trigger.getAttribute('data-cert-desc'),
                badge: trigger.getAttribute('data-cert-badge'),
                download: trigger.getAttribute('data-cert-download')
            };
            openCert(certData);
        });
    });

    /* --- COVERFLOW SHOWCASE ENGINE: INFINITE 3D CIRCULAR LOOP --- */
    function initCertificateCoverflow() {
        const viewport = document.getElementById('cert-flow-viewport');
        const track = document.getElementById('cert-flow-track');
        const prevBtn = document.getElementById('cert-flow-prev');
        const nextBtn = document.getElementById('cert-flow-next');
        const floatPrevBtn = document.getElementById('cert-flow-floating-prev');
        const floatNextBtn = document.getElementById('cert-flow-floating-next');
        const counterEl = document.getElementById('cert-flow-counter');
        const activeBadge = document.getElementById('cert-flow-active-badge');
        const dotsContainer = document.getElementById('cert-flow-dots');

        if (!viewport || !track) return;

        const slides = Array.from(track.querySelectorAll('.cert-flow-slide'));
        const N = slides.length;
        if (N === 0) return;

        let activeIndex = 0;
        let currentP = 0; // Continuous virtual index float
        let targetP = 0;  // Target index float
        let isPointerDown = false;
        let isDragging = false;
        let startX = 0;
        let startY = 0;
        let startP = 0;
        let totalDeltaX = 0;
        let startTime = 0;
        let animationFrameId = null;

        // Prevent native HTML5 image drag on viewport and track
        viewport.addEventListener('dragstart', (e) => e.preventDefault());
        track.addEventListener('dragstart', (e) => e.preventDefault());

        // Render dot indicators
        if (dotsContainer) {
            dotsContainer.innerHTML = '';
            slides.forEach((_, idx) => {
                const dot = document.createElement('button');
                dot.className = `cert-flow-dot ${idx === 0 ? 'active' : ''}`;
                dot.setAttribute('aria-label', `Lihat sertifikat ${idx + 1}`);
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    goToIndex(idx);
                });
                dotsContainer.appendChild(dot);
            });
        }

        // Metrics: slide width & step
        function getSlideWidth() {
            const firstSlide = slides[0];
            return firstSlide ? firstSlide.offsetWidth : 320;
        }

        function getGap() {
            return window.innerWidth <= 640 ? 24 : 32;
        }

        function getStep() {
            return getSlideWidth() + getGap();
        }

        // Circular shortest distance math on wheel of N items
        function getCircularDiff(targetIndex, fromIndex) {
            let diff = ((targetIndex - fromIndex) % N + N) % N;
            if (diff > N / 2) {
                diff -= N;
            }
            return diff;
        }

        // Update active metadata badge and counter
        function updateMetadata(index) {
            activeIndex = index;
            const cert = CERTIFICATES_DATA[index] || {
                number: String(index + 1).padStart(2, '0'),
                title: slides[index]?.querySelector('.cert-flow-card-name')?.textContent || "Sertifikat"
            };

            if (counterEl) {
                counterEl.textContent = `${index + 1} / ${N}`;
            }

            if (activeBadge) {
                const badgeIndex = activeBadge.querySelector('.badge-index');
                const badgeTitle = activeBadge.querySelector('.badge-title');
                if (badgeIndex) badgeIndex.textContent = cert.number || String(index + 1).padStart(2, '0');
                if (badgeTitle) badgeTitle.textContent = cert.title;
            }

            // Update dots
            if (dotsContainer) {
                const dots = dotsContainer.querySelectorAll('.cert-flow-dot');
                dots.forEach((dot, idx) => {
                    dot.classList.toggle('active', idx === index);
                });
            }
        }

        // Apply 3D transforms based on circular distance from current position
        function renderTransforms() {
            const step = getStep();
            let closestIndex = 0;
            let minAbsDiff = Infinity;

            slides.forEach((slide, idx) => {
                const diff = getCircularDiff(idx, currentP);
                const absDiff = Math.abs(diff);

                if (absDiff < minAbsDiff) {
                    minAbsDiff = absDiff;
                    closestIndex = idx;
                }

                // Cards at the far back (> 2.7 cards away) are hidden to prevent visual wrap
                if (absDiff > 2.7) {
                    slide.style.visibility = 'hidden';
                    slide.style.pointerEvents = 'none';
                    return;
                } else {
                    slide.style.visibility = 'visible';
                    slide.style.pointerEvents = 'auto';
                }

                const xPos = diff * step;
                // Dynamic scaling: Center is largest (1.18x), adjacent drops smoothly
                const scale = Math.max(0.48, 1.18 - (absDiff * 0.28));
                // Center is full color (0% grayscale), sides become monochrome grayscale (Image 1)
                const grayscale = Math.min(100, absDiff * 85);
                // Opacity falls off gracefully
                const opacity = Math.max(0.3, 1 - (absDiff * 0.25));
                // Center gets highest z-index
                const zIndex = Math.round(25 - Math.min(22, absDiff * 6));

                slide.style.transform = `translate(-50%, -50%) translate3d(${xPos.toFixed(2)}px, 0, 0) scale(${scale.toFixed(3)})`;
                slide.style.filter = `grayscale(${grayscale.toFixed(1)}%) contrast(${(100 - absDiff * 10).toFixed(1)}%)`;
                slide.style.opacity = opacity.toFixed(3);
                slide.style.zIndex = zIndex;

                slide.classList.toggle('is-active', absDiff < 0.35);
            });

            return closestIndex;
        }

        // Animation loop with smooth spring damping
        function animate() {
            const diff = targetP - currentP;
            if (Math.abs(diff) > 0.002) {
                currentP += diff * 0.16;
                const closest = renderTransforms();
                if (closest !== activeIndex && !isPointerDown) {
                    updateMetadata(closest);
                }
                animationFrameId = requestAnimationFrame(animate);
            } else {
                currentP = targetP;
                // Normalize targetP and currentP to [0, N) to prevent numerical drift
                const normalized = ((Math.round(currentP) % N) + N) % N;
                currentP = normalized;
                targetP = normalized;
                const closest = renderTransforms();
                updateMetadata(closest);
                animationFrameId = null;
            }
        }

        function triggerAnimation() {
            if (!animationFrameId) {
                animationFrameId = requestAnimationFrame(animate);
            }
        }

        function nextSlide() {
            targetP = Math.round(targetP) + 1;
            triggerAnimation();
        }

        function prevSlide() {
            targetP = Math.round(targetP) - 1;
            triggerAnimation();
        }

        function goToIndex(targetIndex) {
            const currentNorm = ((Math.round(targetP) % N) + N) % N;
            const stepDiff = getCircularDiff(targetIndex, currentNorm);
            targetP = Math.round(targetP) + stepDiff;
            triggerAnimation();
        }

        // Immediate Initial Render
        renderTransforms();
        updateMetadata(0);

        // Resize handler
        window.addEventListener('resize', () => {
            renderTransforms();
        });

        // Top Navigation buttons (Infinite next & prev)
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                prevSlide();
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                nextSlide();
            });
        }

        // Floating Left/Right Navigation arrows on viewport
        if (floatPrevBtn) {
            floatPrevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                prevSlide();
            });
        }
        if (floatNextBtn) {
            floatNextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                nextSlide();
            });
        }

        // Keyboard arrow support on viewport focus
        viewport.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextSlide();
            }
        });

        // Horizontal mouse wheel / trackpad swipe
        let wheelTimeout = null;
        viewport.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
                e.preventDefault();
                const delta = e.deltaX || e.deltaY;
                targetP += (delta * 0.0025);
                currentP = targetP;
                renderTransforms();

                clearTimeout(wheelTimeout);
                wheelTimeout = setTimeout(() => {
                    targetP = Math.round(targetP);
                    triggerAnimation();
                }, 120);
            }
        }, { passive: false });

        // Robust Pointer Drag Events (Mouse + Touch Unified)
        viewport.addEventListener('pointerdown', (e) => {
            if (e.pointerType === 'mouse' && e.button !== 0) return;

            isPointerDown = true;
            isDragging = false;
            startX = e.clientX;
            startY = e.clientY;
            startP = currentP;
            totalDeltaX = 0;
            startTime = Date.now();

            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        });

        viewport.addEventListener('pointermove', (e) => {
            if (!isPointerDown) return;

            totalDeltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;

            // Detect drag threshold (6px)
            if (!isDragging && Math.abs(totalDeltaX) > 6 && Math.abs(totalDeltaX) > Math.abs(deltaY)) {
                isDragging = true;
                try {
                    viewport.setPointerCapture(e.pointerId);
                } catch (err) {}
            }

            if (isDragging) {
                e.preventDefault();
                const step = getStep();
                currentP = startP - (totalDeltaX / step);
                targetP = currentP;
                renderTransforms();
            }
        });

        function handlePointerUp(e) {
            if (!isPointerDown) return;
            isPointerDown = false;

            try {
                viewport.releasePointerCapture(e.pointerId);
            } catch (err) {}

            if (isDragging) {
                const elapsed = Math.max(1, Date.now() - startTime);
                const velocity = totalDeltaX / elapsed; // px per millisecond

                if (totalDeltaX < -45 || velocity < -0.35) {
                    // Dragged or flicked LEFT -> go to NEXT card
                    targetP = Math.floor(currentP) + 1;
                } else if (totalDeltaX > 45 || velocity > 0.35) {
                    // Dragged or flicked RIGHT -> go to PREVIOUS card
                    targetP = Math.ceil(currentP) - 1;
                } else {
                    targetP = Math.round(currentP);
                }

                triggerAnimation();
            }
        }

        viewport.addEventListener('pointerup', handlePointerUp);
        viewport.addEventListener('pointercancel', (e) => {
            if (!isPointerDown) return;
            isPointerDown = false;
            try {
                viewport.releasePointerCapture(e.pointerId);
            } catch (err) {}
            targetP = Math.round(currentP);
            triggerAnimation();
        });

        // Click on individual slide: Active opens modal, side cards rotate into center
        slides.forEach((slide, idx) => {
            slide.addEventListener('click', (e) => {
                if (isDragging || Math.abs(totalDeltaX) > 8) {
                    return; // Ignore clicks if user was dragging
                }
                e.preventDefault();
                e.stopPropagation();

                const currentNorm = ((Math.round(currentP) % N) + N) % N;
                if (idx === currentNorm) {
                    // Open Image 2 modal with enriched explanation
                    const certData = CERTIFICATES_DATA[idx];
                    openCert(certData);
                } else {
                    // Bring clicked card to center via shortest circular path
                    goToIndex(idx);
                }
            });

            // Make hover pill directly open modal when clicked
            const hoverPill = slide.querySelector('.cert-hover-pill');
            if (hoverPill) {
                hoverPill.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const certData = CERTIFICATES_DATA[idx];
                    openCert(certData);
                });
            }
        });
    }

    // Initialize Coverflow Showcase
    initCertificateCoverflow();

    /* --------------------------------------------------------------------------
       05. CV / RESUME MODAL & PRINT HANDLER
       -------------------------------------------------------------------------- */
    const cvModal = document.getElementById('cv-modal');
    const btnCvModal = document.getElementById('btn-cv-modal');
    const cvCloseBtn = document.getElementById('cv-close-btn');
    const cvBackdrop = document.getElementById('cv-backdrop');
    const btnPrintCv = document.getElementById('btn-print-cv');

    function openCv() {
        if (!cvModal) return;
        cvModal.classList.add('open');
        cvModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeCv() {
        if (!cvModal) return;
        cvModal.classList.remove('open');
        cvModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Attach openCv to all CV buttons (.open-cv-btn)
    document.querySelectorAll('.open-cv-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // If inside mobile drawer, close drawer first
            const mobileDrawer = document.getElementById('mobile-drawer');
            const mobileToggle = document.getElementById('mobile-toggle');
            if (mobileDrawer && mobileDrawer.classList.contains('open')) {
                mobileDrawer.classList.remove('open');
                if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
            }
            openCv();
        });
    });

    if (btnCvModal) btnCvModal.addEventListener('click', openCv);
    if (cvCloseBtn) cvCloseBtn.addEventListener('click', closeCv);
    if (cvBackdrop) cvBackdrop.addEventListener('click', closeCv);

    if (btnPrintCv) {
        btnPrintCv.addEventListener('click', (e) => {
            e.preventDefault();
            // Unlock body overflow so print engines (Blink/Gecko) paginate the entire multi-page document cleanly
            document.body.style.overflow = 'visible';
            setTimeout(() => {
                window.print();
            }, 60);
        });
    }

    // Synchronize print events to prevent viewport clipping
    window.addEventListener('beforeprint', () => {
        document.body.style.overflow = 'visible';
    });

    window.addEventListener('afterprint', () => {
        if (cvModal && cvModal.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        }
    });

    // Expose openCv globally for external convenience
    window.openCv = openCv;

    // Esc key closes all modals
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCaseStudy();
            closeCert();
            closeCv();
            closeContactModal();
        }
    });

    /* --------------------------------------------------------------------------
       06. CONTACT / HUBUNGI SAYA MODAL ENGINE
       -------------------------------------------------------------------------- */
    const contactModal = document.getElementById('contact-modal');
    const contactCloseBtn = document.getElementById('contact-close-btn');
    const contactBackdrop = document.getElementById('contact-backdrop');
    const openContactBtns = document.querySelectorAll('.open-contact-btn');
    const btnCopyEmail = document.getElementById('btn-copy-email');

    function openContactModal() {
        if (!contactModal) return;
        contactModal.classList.add('open');
        contactModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeContactModal() {
        if (!contactModal) return;
        contactModal.classList.remove('open');
        contactModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (openContactBtns) {
        openContactBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                openContactModal();
            });
        });
    }

    if (contactCloseBtn) contactCloseBtn.addEventListener('click', closeContactModal);
    if (contactBackdrop) contactBackdrop.addEventListener('click', closeContactModal);

    if (btnCopyEmail) {
        btnCopyEmail.addEventListener('click', (e) => {
            e.preventDefault();
            const email = 'aryaputraferdiananta@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                showToast('Alamat email berhasil disalin!');
                const btnText = btnCopyEmail.querySelector('.copy-btn-text');
                if (btnText) {
                    btnText.textContent = 'Tersalin! ✓';
                    setTimeout(() => {
                        btnText.textContent = 'Salin';
                    }, 2500);
                }
            }).catch(() => {
                showToast(`Email: ${email}`);
            });
        });
    }

    window.openContactModal = openContactModal;
    window.closeContactModal = closeContactModal;

    /* --------------------------------------------------------------------------
       07. HEADER SCROLL & MOBILE DRAWER
       -------------------------------------------------------------------------- */
    const header = document.getElementById('header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = mobileDrawer.classList.toggle('open');
            mobileToggle.classList.toggle('active', isOpen);
            mobileToggle.setAttribute('aria-expanded', String(isOpen));
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
                mobileToggle.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    console.log('%cAryaputra Ferdiananta · Fullstack Web Developer & UI/UX', 'font-family: monospace; font-size: 14px; font-weight: bold; color: #5b3df5;');
});
