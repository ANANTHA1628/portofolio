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

    /* --- COVERFLOW SHOWCASE ENGINE (IMAGE 1 REFERENCE) --- */
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
        if (slides.length === 0) return;

        let activeIndex = 0;
        let isPointerDown = false;
        let isDragging = false;
        let startX = 0;
        let startY = 0;
        let startTranslateX = 0;
        let currentTranslateX = 0;
        let targetTranslateX = 0;
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

        // Get card metrics
        function getSlideWidth() {
            const firstSlide = slides[0];
            return firstSlide ? firstSlide.offsetWidth : 320;
        }

        function getGap() {
            const style = window.getComputedStyle(track);
            const gap = parseFloat(style.gap) || 32;
            return gap;
        }

        // Calculate translation needed to center slide at index
        function getCenterTranslate(index) {
            const slide = slides[index];
            if (!slide) return 0;
            const viewportCenter = viewport.offsetWidth / 2;
            const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
            return viewportCenter - slideCenter;
        }

        // Update active metadata badge and counter
        function updateMetadata(index) {
            activeIndex = index;
            const cert = CERTIFICATES_DATA[index] || {
                number: String(index + 1).padStart(2, '0'),
                title: slides[index]?.querySelector('.cert-flow-card-name')?.textContent || "Sertifikat"
            };

            if (counterEl) {
                counterEl.textContent = `${index + 1} / ${slides.length}`;
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

        // Apply continuous transforms based on distance from center (Image 1 Focal Perspective)
        function renderTransforms() {
            const viewportCenter = viewport.offsetWidth / 2;
            const step = getSlideWidth() + getGap();

            let closestIndex = 0;
            let minDistance = Infinity;

            slides.forEach((slide, idx) => {
                const slideCenter = currentTranslateX + slide.offsetLeft + slide.offsetWidth / 2;
                const distance = slideCenter - viewportCenter;
                const absDist = Math.abs(distance);
                const normDist = absDist / (step || 350);

                if (absDist < minDistance) {
                    minDistance = absDist;
                    closestIndex = idx;
                }

                // Dynamic scaling: Center is largest (1.18x), adjacent drops smoothly
                const scale = Math.max(0.48, 1.18 - (normDist * 0.28));
                // Center is full color (0% grayscale), sides become monochrome grayscale (Image 1)
                const grayscale = Math.min(100, normDist * 85);
                // Opacity falls off gracefully
                const opacity = Math.max(0.32, 1 - (normDist * 0.25));
                // Center gets highest z-index
                const zIndex = Math.round(25 - Math.min(22, normDist * 6));

                slide.style.transform = `scale(${scale.toFixed(3)})`;
                slide.style.filter = `grayscale(${grayscale.toFixed(1)}%) contrast(${(100 - normDist * 10).toFixed(1)}%)`;
                slide.style.opacity = opacity.toFixed(3);
                slide.style.zIndex = zIndex;

                slide.classList.toggle('is-active', normDist < 0.35);
            });

            track.style.transform = `translate3d(${currentTranslateX.toFixed(2)}px, -50%, 0)`;

            return closestIndex;
        }

        // Animation loop with smooth damping
        function animate() {
            const diff = targetTranslateX - currentTranslateX;
            if (Math.abs(diff) > 0.3) {
                currentTranslateX += diff * 0.16;
                const closest = renderTransforms();
                if (closest !== activeIndex && !isPointerDown) {
                    updateMetadata(closest);
                }
                animationFrameId = requestAnimationFrame(animate);
            } else {
                currentTranslateX = targetTranslateX;
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

        function goToIndex(index) {
            index = Math.max(0, Math.min(slides.length - 1, index));
            targetTranslateX = getCenterTranslate(index);
            triggerAnimation();
        }

        // Initial setup
        setTimeout(() => {
            targetTranslateX = getCenterTranslate(0);
            currentTranslateX = targetTranslateX;
            renderTransforms();
            updateMetadata(0);
        }, 80);

        // Resize handler
        window.addEventListener('resize', () => {
            targetTranslateX = getCenterTranslate(activeIndex);
            currentTranslateX = targetTranslateX;
            renderTransforms();
        });

        // Top Navigation buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                goToIndex(activeIndex - 1);
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                goToIndex(activeIndex + 1);
            });
        }

        // Floating Left/Right Navigation arrows on viewport
        if (floatPrevBtn) {
            floatPrevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                goToIndex(activeIndex - 1);
            });
        }
        if (floatNextBtn) {
            floatNextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                goToIndex(activeIndex + 1);
            });
        }

        // Keyboard arrow support on viewport focus
        viewport.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                goToIndex(activeIndex - 1);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                goToIndex(activeIndex + 1);
            }
        });

        // Horizontal mouse wheel / trackpad swipe
        let wheelTimeout = null;
        viewport.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
                e.preventDefault();
                const delta = e.deltaX || e.deltaY;
                targetTranslateX -= delta * 0.9;
                triggerAnimation();

                clearTimeout(wheelTimeout);
                wheelTimeout = setTimeout(() => {
                    const closest = renderTransforms();
                    goToIndex(closest);
                }, 140);
            }
        }, { passive: false });

        // Robust Pointer Drag Events (Mouse + Touch Unified)
        viewport.addEventListener('pointerdown', (e) => {
            if (e.pointerType === 'mouse' && e.button !== 0) return;

            isPointerDown = true;
            isDragging = false;
            startX = e.clientX;
            startY = e.clientY;
            startTranslateX = currentTranslateX;
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
                let nextTranslate = startTranslateX + totalDeltaX;

                // Soft elastic boundary resistance
                const minTranslate = getCenterTranslate(slides.length - 1);
                const maxTranslate = getCenterTranslate(0);

                if (nextTranslate > maxTranslate) {
                    nextTranslate = maxTranslate + (nextTranslate - maxTranslate) * 0.25;
                } else if (nextTranslate < minTranslate) {
                    nextTranslate = minTranslate + (nextTranslate - minTranslate) * 0.25;
                }

                currentTranslateX = nextTranslate;
                targetTranslateX = currentTranslateX;
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
                let estimatedIndex = activeIndex;

                if (totalDeltaX < -45 || velocity < -0.35) {
                    // Dragged or flicked LEFT -> go to NEXT card
                    estimatedIndex = Math.min(slides.length - 1, activeIndex + 1);
                } else if (totalDeltaX > 45 || velocity > 0.35) {
                    // Dragged or flicked RIGHT -> go to PREVIOUS card
                    estimatedIndex = Math.max(0, activeIndex - 1);
                } else {
                    estimatedIndex = renderTransforms();
                }

                goToIndex(estimatedIndex);
            }
        }

        viewport.addEventListener('pointerup', handlePointerUp);
        viewport.addEventListener('pointercancel', (e) => {
            if (!isPointerDown) return;
            isPointerDown = false;
            try {
                viewport.releasePointerCapture(e.pointerId);
            } catch (err) {}
            goToIndex(activeIndex);
        });

        // Click / Enlarge on individual slide:
        slides.forEach((slide, idx) => {
            slide.addEventListener('click', (e) => {
                if (isDragging || Math.abs(totalDeltaX) > 8) {
                    return; // Ignore clicks if user was actively dragging
                }
                e.preventDefault();
                e.stopPropagation();

                if (idx === activeIndex) {
                    // Open Image 2 modal with enriched explanation
                    const certData = CERTIFICATES_DATA[idx];
                    openCert(certData);
                } else {
                    // Bring clicked card to center
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
            // Open print dialog immediately
            window.print();
        });
    }

    // Expose openCv globally for external convenience
    window.openCv = openCv;

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
