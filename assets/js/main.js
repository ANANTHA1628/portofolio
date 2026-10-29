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
            x: 140,
            y: 100,
            width: 620,
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
            id: "callwave",
            title: "CallWave",
            category: "Situs Web",
            image: "assets/images/project-callwave.jpg",
            liveUrl: "",
            x: 840,
            y: 100,
            width: 620,
            hasAvatarPin: true,
            pinPos: { top: "52%", right: "20%" },
            desc: "Memberi kesempatan audiens mendengarkan kualitas suara AI sebelum meminta mereka mendaftar.",
            tag: "PLATFORM VOICE AI // SITUS SAAS",
            scope: {
                client: "CallWave Communications",
                role: "Desain Web, UI Audio, Pengembangan Framer",
                timeline: "8 minggu · Diluncurkan Jun 2026"
            },
            challenge: "CallWave ingin membuktikan latensi suara real-time dan artikulasi alami mereka tanpa memaksa calon klien mengisi formulir pendaftaran panjang terlebih dahulu.",
            solution: "Menempatkan pemutar audio dan perbandingan latensi langsung di layar utama (hero). Pengunjung dapat mendengarkan rekaman suara asli hanya dalam 3 klik, membuktikan kualitas produk seketika.",
            deliverables: [
                "Visualisasi waveform interaktif dan pemutar audio",
                "Integrasi paket harga dan halaman dokumentasi",
                "Pratinjau antarmuka kontras tinggi mode gelap & terang",
                "Situs Framer yang dioptimalkan untuk pengujian A/B landing page secara cepat"
            ]
        },
        {
            id: "firstcheck",
            title: "FirstCheck",
            category: "Situs Web",
            image: "assets/images/project-firstcheck.jpg",
            liveUrl: "",
            x: 140,
            y: 720,
            width: 620,
            hasAvatarPin: false,
            desc: "Situs modal ventura yang membantu pendiri startup menilai kesesuaian pendanaan secara transparan.",
            tag: "MODAL VENTURA // BRAND & WEB",
            scope: {
                client: "FirstCheck Capital",
                role: "Desain Web & Arsitektur Informasi",
                timeline: "6 minggu · Diluncurkan Sep 2026"
            },
            challenge: "Para pendiri startup tahap awal sering membuang waktu meneliti profil investor dan kriteria seleksi. FirstCheck membutuhkan kehadiran digital yang jujur dan lugas untuk menjawab pertanyaan kunci pendiri sebelum email pertama dikirim.",
            solution: "Menyusun struktur situs berdasarkan alur keputusan founder: fokus sektor investasi partner yang jelas, direktori portofolio terbuka, dan daftar kriteria yang transparan untuk pendanaan putaran awal (seed round).",
            deliverables: [
                "Situs web responsif yang dirancang dan dikembangkan di Framer",
                "Direktori portofolio dengan pencarian dinamis dan filter kategori sektor",
                "Arahan fotografi editorial dan sistem tipografi profesional",
                "Pengalaman mobile cepat dan aksesibel dengan waktu muat di bawah satu detik"
            ]
        },
        {
            id: "nonlinear",
            title: "Nonlinear",
            category: "Situs Web",
            image: "assets/images/project-nonlinear.jpg",
            liveUrl: "",
            x: 840,
            y: 680,
            width: 620,
            hasAvatarPin: false,
            desc: "Menunjukkan bagaimana kalender tim dapat menjadi ruang kerja kolaboratif utama.",
            tag: "PRODUK & SITUS PELUNCURAN // FRAMER",
            scope: {
                client: "Nonlinear Software Labs",
                role: "Desain Web & Brand, Framer Build",
                timeline: "8 minggu · Diluncurkan Okt 2026"
            },
            challenge: "Nonlinear adalah platform produktivitas berbasis kalender, tetapi landing page awal mereka tampak seperti tabel manajemen proyek biasa. Pengguna kesulitan memahami bagaimana perangkat lunak ini merombak jadwal kerja mingguan mereka.",
            solution: "Menyusun alur cerita berdasarkan alur kerja nyata mingguan tim. Membangun pratinjau antarmuka interaktif langsung di situs Framer, memperjelas peran setiap fitur dalam memangkas beban rapat yang berlebihan.",
            deliverables: [
                "Situs web Framer lengkap dengan integrasi CMS untuk pembaruan fitur (changelog)",
                "Komponen pratinjau jadwal interaktif kustom",
                "Token desain dan adaptasi identitas merek",
                "Panduan video serah terima untuk tim pemasaran internal"
            ]
        },
        {
            id: "waymark",
            title: "Waymark",
            category: "Situs Web",
            image: "assets/images/project-waymark.jpg",
            liveUrl: "",
            x: 1540,
            y: 100,
            width: 620,
            hasAvatarPin: true,
            pinPos: { top: "45%", right: "26%" },
            desc: "Membuat visualisasi program coaching kepemimpinan 6 bulan menjadi mudah dipahami.",
            tag: "COACHING KEPEMIMPINAN // IDENTITAS BRAND",
            scope: {
                client: "Waymark Executive Coaching",
                role: "Identitas Brand, Arsitektur Konten, Web Framer",
                timeline: "5 minggu · Diluncurkan Jul 2026"
            },
            challenge: "Layanan executive coaching sering menggunakan istilah abstrak, sehingga sulit bagi pendiri perusahaan membayangkan apa yang sebenarnya didapat selama 6 bulan pendampingan.",
            solution: "Merancang 'pemilih peran' dan peta jalan (journey roadmap) yang dimulai dari tantangan spesifik sang founder, memetakan fokus tiap bulan dari perekrutan eksekutif hingga manajemen dewan.",
            deliverables: [
                "Logo brand, palet warna, dan tipografi editorial eksklusif",
                "Peta jalan interaktif program 6 bulan",
                "Alur pemesanan konsultasi klien terintegrasi",
                "Katalog mobile dan kartu testimoni klien"
            ]
        },
        {
            id: "noted",
            title: "Noted",
            category: "Situs Web & Aplikasi",
            image: "assets/images/project-noted.jpg",
            liveUrl: "",
            x: 1540,
            y: 680,
            width: 620,
            hasAvatarPin: false,
            desc: "Memperjelas batas kerja antara resepsionis AI dan tim medis klinik.",
            tag: "TEKNOLOGI KESEHATAN // SITUS PRODUK",
            scope: {
                client: "Noted Health Technologies",
                role: "Situs Produk & Demo Interaktif",
                timeline: "7 minggu · Diluncurkan Agu 2026"
            },
            challenge: "Klinik medis ragu mengadopsi asisten telepon AI karena khawatir miskomunikasi dengan pasien. Situs harus memperlihatkan secara transparan di mana AI bertindak dan kapan staf manusia mengambil alih.",
            solution: "Membuat cuplikan simulasi panggilan audio nyata, alur triase resepsionis klinik, dan diagram alur pemesanan jadwal pasien. Menempatkan AI sebagai asisten pendukung yang andal, bukan pengganti manusia.",
            deliverables: [
                "Pemutar simulasi skenario audio interaktif di halaman utama",
                "Tur produk dan bagian kepatuhan standar keamanan data medis",
                "Pustaka komponen antarmuka komprehensif untuk halaman pemasaran",
                "Alur penjadwalan demo produk dengan konversi optimal"
            ]
        },
        {
            id: "auraai",
            title: "Aura AI",
            category: "Situs Web",
            image: "assets/images/project-aura-ai.jpg",
            liveUrl: "",
            x: 2240,
            y: 100,
            width: 620,
            hasAvatarPin: false,
            desc: "Platform kecerdasan generatif generasi terbaru untuk tim pengembang produk digital.",
            tag: "PLATFORM AI // SITUS PRODUK",
            scope: {
                client: "Aura Intelligence Inc",
                role: "Identitas Visual & Situs Framer",
                timeline: "6 minggu · Diluncurkan Mei 2026"
            },
            challenge: "Memvisualisasikan kemampuan model AI tingkat lanjut tanpa membuat tampilan visual landing page terasa terlalu padat atau melelahkan mata pengunjung.",
            solution: "Merancang kartu antarmuka minimalis bernuansa kontras tinggi dengan efek pencahayaan interaktif dan animasi halus yang menampilkan latensi respons dari prompt ke hasil.",
            deliverables: [
                "Situs web Framer lengkap dengan estetika mode gelap yang elegan",
                "Komponen arena uji coba (playground) model AI interaktif kustom",
                "Sistem tipografi dan panduan standar identitas merek"
            ]
        },
        {
            id: "pulse",
            title: "Pulse",
            category: "Situs Analitik",
            image: "assets/images/project-pulse.jpg",
            liveUrl: "",
            x: 2240,
            y: 680,
            width: 620,
            hasAvatarPin: false,
            desc: "Pelacakan interaksi pengguna secara real-time dengan performa yang sangat ringan.",
            tag: "ALAT PENGEMBANG // SITUS PEMASARAN",
            scope: {
                client: "Pulse Metrics",
                role: "Desain Web & Arsitektur Informasi",
                timeline: "5 minggu · Diluncurkan Apr 2026"
            },
            challenge: "Alat analitik untuk developer seringkali memiliki tampilan yang kaku dan utilitarian. Pulse membutuhkan situs web yang terlihat sangat teknis sekaligus berkelas dan modern.",
            solution: "Memanfaatkan blok kode live, perbandingan latensi performa, dan arsitektur privasi transparan untuk menarik minat para software engineer dan pimpinan teknologi.",
            deliverables: [
                "Situs web berkinerja sangat tinggi dengan waktu muat di bawah 500ms",
                "Pratinjau dokumentasi interaktif",
                "Komponen pemilih kode instalasi SDK multi-bahasa"
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

    // Canvas board space coordinates
    const BOARD_WIDTH = 3200;
    const BOARD_HEIGHT = 1800;

    let panX = -20;
    let panY = -25;
    let scale = 0.85;
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
        const minPanX = rect.width - BOARD_WIDTH * scale - 200;
        const maxPanX = 200;
        const minPanY = rect.height - BOARD_HEIGHT * scale - 200;
        const maxPanY = 200;

        panX = Math.min(Math.max(panX, minPanX), maxPanX);
        panY = Math.min(Math.max(panY, minPanY), maxPanY);
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
            scale = 0.85;
            panX = -20;
            panY = -25;
            clampPan();
            updateCanvasTransform();
            showToast('Zoom dan posisi kanvas direset');
        });
    }

    // Render List View Cards dynamically from PORTFOLIO_WEBSITES
    function renderListView() {
        if (!listCardsGrid) return;
        listCardsGrid.innerHTML = PORTFOLIO_WEBSITES.map(item => `
            <article class="list-card-item" data-project="${item.id}">
                <div class="list-card-thumb" onclick="window.openCaseStudy && window.openCaseStudy('${item.id}')">
                    <img src="${item.image}" alt="${item.title} Website" loading="lazy">
                </div>
                <div class="list-card-body">
                    <div class="list-card-top-meta">
                        <span class="list-card-tag">${item.category}</span>
                        ${item.liveUrl ? `<span class="list-card-badge">Demo Langsung</span>` : ''}
                    </div>
                    <h3 class="list-card-title">${item.title}</h3>
                    <p class="list-card-desc">${item.desc}</p>
                    <div class="list-card-actions">
                        <button class="list-btn-details" onclick="window.openCaseStudy && window.openCaseStudy('${item.id}')">Lihat Studi Kasus ↗</button>
                        ${item.liveUrl ? `<a href="${item.liveUrl}" target="_blank" rel="noopener noreferrer" class="list-btn-live">Kunjungi Situs ↗</a>` : ''}
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
    updateCanvasTransform();
    window.addEventListener('resize', () => {
        initMinimap();
        updateCanvasTransform();
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

            ${data.liveUrl ? `
            <div style="margin: 1.25rem 0 0.5rem 0; display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
                <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="im-btn btn-dark" style="display:inline-flex; align-items:center; gap:0.4rem; padding: 0.6rem 1.2rem; font-size: 0.85rem;">
                    Buka Live Website Framer ↗
                </a>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); word-break: break-all;">${data.liveUrl}</span>
            </div>` : ''}

            <div class="modal-spec-grid">
                <div class="spec-item">
                    <span>KLIEN</span>
                    <strong>${data.scope?.client || 'Proyek Independen'}</strong>
                </div>
                <div class="spec-item">
                    <span>PERAN</span>
                    <strong>${data.scope?.role || 'Desainer Web & Pengembang'}</strong>
                </div>
                <div class="spec-item">
                    <span>WAKTU PENGERJAAN</span>
                    <strong>${data.scope?.timeline || 'Diluncurkan 2026'}</strong>
                </div>
            </div>

            <h3 class="modal-section-h">Tantangan Proyek</h3>
            <p class="modal-p">${data.challenge || 'Merancang platform digital responsif dan konversi tinggi untuk tim visioner.'}</p>

            <h3 class="modal-section-h">Pendekatan Desain & Solusi</h3>
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
       04. CERTIFICATE MODAL (DYNAMIC HANDLER FOR ALL CERTIFICATES)
       -------------------------------------------------------------------------- */
    const certModal = document.getElementById('cert-modal');
    const certCloseBtn = document.getElementById('cert-close-btn');
    const certBackdrop = document.getElementById('cert-backdrop');
    const certModalLabel = document.getElementById('cert-modal-label');
    const certModalImg = document.getElementById('cert-modal-img');
    const certModalMetaTitle = document.getElementById('cert-modal-meta-title');
    const certModalMetaDesc = document.getElementById('cert-modal-meta-desc');
    const certModalDownload = document.getElementById('cert-modal-download');

    function openCert(certData) {
        if (!certModal) return;
        if (certData) {
            if (certModalLabel && certData.label) certModalLabel.textContent = certData.label;
            if (certModalImg && certData.img) {
                certModalImg.src = certData.img;
                certModalImg.alt = certData.title || "Sertifikat Resmi";
            }
            if (certModalMetaTitle && certData.title) certModalMetaTitle.textContent = certData.title;
            if (certModalMetaDesc && certData.desc) certModalMetaDesc.textContent = certData.desc;
            if (certModalDownload) {
                certModalDownload.href = certData.img || "assets/images/sertifikat-mahative.png";
                certModalDownload.download = certData.download || "Sertifikat-Aryaputra-Ferdiananta.jpg";
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

    document.querySelectorAll('.cert-modal-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const certData = {
                img: trigger.getAttribute('data-cert-img'),
                label: trigger.getAttribute('data-cert-label'),
                title: trigger.getAttribute('data-cert-title'),
                desc: trigger.getAttribute('data-cert-desc'),
                download: trigger.getAttribute('data-cert-download')
            };
            openCert(certData);
        });
    });

    if (certCloseBtn) certCloseBtn.addEventListener('click', closeCert);
    if (certBackdrop) certBackdrop.addEventListener('click', closeCert);

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

    if (btnCvModal) btnCvModal.addEventListener('click', openCv);
    if (cvCloseBtn) cvCloseBtn.addEventListener('click', closeCv);
    if (cvBackdrop) cvBackdrop.addEventListener('click', closeCv);

    if (btnPrintCv) {
        btnPrintCv.addEventListener('click', () => {
            window.print();
        });
    }

    // Esc key closes all modals
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCaseStudy();
            closeCert();
            closeCv();
        }
    });

    /* --------------------------------------------------------------------------
       05. COPY EMAIL TO CLIPBOARD
       -------------------------------------------------------------------------- */
    const btnCopyEmail = document.getElementById('btn-copy-email');
    const emailText = document.getElementById('email-text');

    if (btnCopyEmail && emailText) {
        btnCopyEmail.addEventListener('click', () => {
            const email = emailText.textContent.trim();
            navigator.clipboard.writeText(email).then(() => {
                showToast('Alamat email berhasil disalin!');
            }).catch(() => {
                showToast(`Email: ${email}`);
            });
        });
    }

    /* --------------------------------------------------------------------------
       06. CONTACT FORM SUBMISSION
       -------------------------------------------------------------------------- */
    const contactForm = document.getElementById('im-contact-form');
    const formStatus = document.getElementById('form-status');
    const btnSend = document.getElementById('btn-send-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('form-name');
            const emailInput = document.getElementById('form-email');
            const messageInput = document.getElementById('form-message');

            let isValid = true;

            if (!nameInput.value.trim()) {
                nameInput.parentElement.classList.add('has-error');
                isValid = false;
            } else {
                nameInput.parentElement.classList.remove('has-error');
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                emailInput.parentElement.classList.add('has-error');
                isValid = false;
            } else {
                emailInput.parentElement.classList.remove('has-error');
            }

            if (!messageInput.value.trim()) {
                messageInput.parentElement.classList.add('has-error');
                isValid = false;
            } else {
                messageInput.parentElement.classList.remove('has-error');
            }

            if (!isValid) return;

            btnSend.disabled = true;
            btnSend.textContent = 'Mengirim pesan...';

            setTimeout(() => {
                btnSend.disabled = false;
                btnSend.textContent = 'Kirim pesan';

                formStatus.className = 'form-status-msg success';
                formStatus.textContent = `Terima kasih, ${nameInput.value.trim()}! Pesan Anda telah diterima. Saya akan membalas dalam waktu maksimal dua hari kerja.`;

                showToast('Pesan berhasil terkirim!');
                contactForm.reset();

                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 7000);
            }, 1000);
        });
    }

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
