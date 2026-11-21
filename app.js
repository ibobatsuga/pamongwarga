/**
 * AmongWarga — Portal Layanan Mandiri Warga RT / RW
 * Official A4 Letter Generator, Residents Database, Community Board & Emergency Directory.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'amongwarga_rt04_v1';

  // --- SEED TEMPLATES FOR QUICK FORM ---
  const TEMPLATES = [
    {
      title: 'KTP Elektronik',
      keperluan: 'Pembuatan / Perpanjangan KTP Elektronik',
      desc: 'Pengantar rekam KTP baru usia 17 tahun atau penggantian KTP rusak/hilang.',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="12" x="3" y="6" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M15 10h2M15 14h2"/></svg>'
    },
    {
      title: 'Kartu Keluarga (KK)',
      keperluan: 'Pembuatan / Pembaruan Kartu Keluarga (KK)',
      desc: 'Penerbitan KK baru karena pernikahan, penambahan anggota, atau pecah KK.',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
    },
    {
      title: 'SKCK Kepolisian',
      keperluan: 'Pengantar SKCK (Catatan Kepolisian)',
      desc: 'Persyaratan melamar pekerjaan BUMN/Swasta, pendaftaran CPNS, atau kuliah.',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
    },
    {
      title: 'Keterangan Domisili',
      keperluan: 'Surat Keterangan Domisili Tempat Tinggal',
      desc: 'Bukti tempat tinggal untuk perbankan, mutasi sekolah anak, atau domisili kerja.',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>'
    },
    {
      title: 'SKTM / Beasiswa',
      keperluan: 'Surat Keterangan Tidak Mampu (SKTM) / Beasiswa',
      desc: 'Keringanan biaya pendidikan sekolah/kuliah dan pengajuan bansos/KIP.',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>'
    },
    {
      title: 'Keterangan Usaha (SKU)',
      keperluan: 'Surat Keterangan Usaha (SKU) Mandiri',
      desc: 'Pengajuan modal usaha KUR Bank, izin UMKM mikro, atau pengadaan.',
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>'
    }
  ];

  // --- DEFAULT SEED DATA ---
  const DEFAULT_DATA = {
    suratList: [
      {
        id: 1,
        nomor: '04/SP/RT.04-RW.08/XI/2026',
        nama: 'Bpk. Bambang Sutopo',
        nik: '3471011405850001',
        noKk: '3471012002100045',
        ttl: 'Yogyakarta, 14 Mei 1985',
        gender: 'Laki-laki',
        agama: 'Islam',
        pekerjaan: 'Karyawan Swasta',
        alamat: 'Jl. Mayjend Sutoyo No. 18 RT 04 / RW 08 Mantrijeron, Yogyakarta',
        keperluan: 'Pembuatan / Perpanjangan KTP Elektronik',
        detail: 'Persyaratan penggantian e-KTP yang rusak ke Kantor Kemantren Mantrijeron.',
        tanggal: '22 Nov 2026',
        status: 'Terbit'
      },
      {
        id: 2,
        nomor: '05/SP/RT.04-RW.08/XI/2026',
        nama: 'Sdri. Anisa Rahmawati',
        nik: '3471015609990002',
        noKk: '3471012002100012',
        ttl: 'Sleman, 16 September 1999',
        gender: 'Perempuan',
        agama: 'Islam',
        pekerjaan: 'Wiraswasta',
        alamat: 'Gang Kenari No. 04 RT 04 / RW 08 Mantrijeron, Yogyakarta',
        keperluan: 'Pengantar SKCK (Catatan Kepolisian)',
        detail: 'Kelengkapan berkas administrasi melamar pekerjaan di instansi BUMN.',
        tanggal: '21 Nov 2026',
        status: 'Terbit'
      },
      {
        id: 3,
        nomor: '06/SP/RT.04-RW.08/XI/2026',
        nama: 'Bpk. Joko Supriyadi',
        nik: '3471012201780004',
        noKk: '3471012002100088',
        ttl: 'Yogyakarta, 22 Januari 1978',
        gender: 'Laki-laki',
        agama: 'Islam',
        pekerjaan: 'Pedagang Kuliner',
        alamat: 'Jl. Mayjend Sutoyo No. 22 RT 04 / RW 08 Mantrijeron, Yogyakarta',
        keperluan: 'Surat Keterangan Usaha (SKU) Mandiri',
        detail: 'Persyaratan pengajuan KUR Mikro Bank BPD DIY untuk ekspansi kedai.',
        tanggal: '19 Nov 2026',
        status: 'Terbit'
      }
    ],
    wargaList: [
      { id: 1, nama: 'Bpk. Bambang Sutopo', nik: '3471011405850001', noKk: '3471012002100045', rumah: 'Jl. Mayjend Sutoyo No. 18', anggota: 4, status: 'Tetap', wa: '081234567890' },
      { id: 2, nama: 'Bpk. H. Supardi, S.Pd.', nik: '3471010304620001', noKk: '3471012002100001', rumah: 'Jl. Mayjend Sutoyo No. 12', anggota: 3, status: 'Tetap', wa: '081398765432' },
      { id: 3, nama: 'Bpk. Joko Supriyadi', nik: '3471012201780004', noKk: '3471012002100088', rumah: 'Jl. Mayjend Sutoyo No. 22', anggota: 5, status: 'Tetap', wa: '085711223344' },
      { id: 4, nama: 'Bpk. Muhammad Ridwan', nik: '3471011212880003', noKk: '3471012002100099', rumah: 'Gang Kenari No. 06', anggota: 3, status: 'Kontrak', wa: '082155667788' },
      { id: 5, nama: 'Sdri. Anisa Rahmawati', nik: '3471015609990002', noKk: '3471012002100012', rumah: 'Gang Kenari No. 04', anggota: 4, status: 'Tetap', wa: '081900112233' },
      { id: 6, nama: 'Sdr. Kevin Sanjaya (Mahasiswa)', nik: '3302011508020005', noKk: '3302012002100123', rumah: 'Paviliun Kos No. 14A', anggota: 1, status: 'Kos', wa: '087812344321' }
    ],
    madingList: [
      {
        id: 1,
        judul: 'Kerja Bakti Akbar Lingkungan Menjelang Musim Hujan',
        kategori: 'Kerja Bakti',
        waktu: 'Ahad, 29 Nov 2026 (Pukul 07:00 WIB - Selesai)',
        isi: 'Seluruh bapak-bapak warga RT 04 dimohon hadir membawa cangkul/sabit untuk membersihkan selokan dan pemangkasan dahan pohon rawan tumbang. Titik kumpul di Pos Ronda RT 04. Disediakan sarapan pagi & kopi.'
      },
      {
        id: 2,
        judul: 'Layanan Posyandu Balita & Posbindu Lansia Melati',
        kategori: 'Posyandu',
        waktu: 'Rabu, 02 Des 2026 (Pukul 08:30 - 11:00 WIB)',
        isi: 'Pemeriksaan tensi, gula darah lansia, penimbangan balita serta pemberian vitamin A dan makanan pendamping ASI (PMT). Bertempat di Balai RT 04.'
      },
      {
        id: 3,
        judul: 'Pertemuan Rutin Warga & Arisan Dawis PKK',
        kategori: 'Pertemuan RT',
        waktu: 'Sabtu Malam, 05 Des 2026 (Pukul 19:30 WIB)',
        isi: 'Musyawarah laporan kas bulanan RT serta sosialisasi pengelolaan pilah sampah organik dan anorganik dari Dinas Lingkungan Hidup.'
      }
    ],
    aspirasiList: [
      {
        id: 1,
        nama: 'Bpk. Ridwan (Warga Gang Kenari)',
        kategori: 'Fasilitas Umum',
        lokasi: 'Tiang Lampu Jalan No. 04 Depan Rumah Bpk. Supardi',
        detail: 'Lampu penerangan jalan padam sejak kemarin malam, mohon bantuan penggantian bohlam LED.',
        waktu: 'Kemarin, 19:40 WIB',
        status: 'Diproses Pengurus'
      },
      {
        id: 2,
        nama: 'Ibu Ningsih (Warga RT 04)',
        kategori: 'Kebersihan & Sampah',
        lokasi: 'Bak Sampah Terpadu Ujung Gang',
        detail: 'Petugas kebersihan truk sampah belum mengangkut selama 3 hari, mohon dikoordinasikan dengan dinas.',
        waktu: '20 Nov, 08:15 WIB',
        status: 'Selesai Ditindaklanjuti'
      }
    ],
    emergencyContacts: [
      { nama: 'Bpk. Agus Tri Prasetyo', jabatan: 'Ketua RT 04 Mantrijeron', telp: '081234567890', desc: 'Layanan warga & konfirmasi surat' },
      { nama: 'Bpk. H. Supardi, S.Pd.', jabatan: 'Ketua RW 08 Mantrijeron', telp: '081398765432', desc: 'Koordinasi kewilayahan RW' },
      { nama: 'Aiptu Budi Hartono', jabatan: 'Bhabinkamtibmas Polsek', telp: '082133445566', desc: 'Keamanan & ketertiban kamtibmas' },
      { nama: 'Sertu Mulyono', jabatan: 'Babinsa Koramil Mantrijeron', telp: '085711224455', desc: 'Mitra keamanan teritorial' },
      { nama: 'Puskesmas Mantrijeron', jabatan: 'Layanan Medis & Ambulans', telp: '(0274) 374211', desc: 'Pelayanan kesehatan & IGD' },
      { nama: 'Pos Damkar Kota Yogyakarta', jabatan: 'Pemadam Kebakaran', telp: '(0274) 587101', desc: 'Darurat kebakaran & evakuasi' }
    ]
  };

  // --- STATE CONTAINER ---
  let appState = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return JSON.parse(JSON.stringify(DEFAULT_DATA));
      const parsed = JSON.parse(raw);
      return Object.assign({}, DEFAULT_DATA, parsed);
    } catch (e) {
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (e) {
      console.error('Failed to save state:', e);
    }
  }

  // --- RENDER 1: TEMPLATES & ARSIP SURAT ---
  function renderTemplates() {
    const grid = document.getElementById('templateGrid');
    if (!grid) return;

    grid.innerHTML = TEMPLATES.map(tpl => `
      <div class="template-card" data-keperluan="${tpl.keperluan}">
        <div class="tpl-icon">${tpl.icon}</div>
        <div class="tpl-info">
          <h4>${tpl.title}</h4>
          <p>${tpl.desc}</p>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.template-card').forEach(card => {
      card.addEventListener('click', () => {
        const kep = card.getAttribute('data-keperluan');
        openModalBuatSurat(kep);
      });
    });
  }

  function renderSuratTable() {
    const tbody = document.getElementById('suratTableBody');
    if (!tbody) return;

    const elStatBulan = document.getElementById('statSuratBulan');
    if (elStatBulan) elStatBulan.textContent = `${appState.suratList.length} Surat`;

    if (appState.suratList.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:2.5rem; color:#64748b;">Belum ada arsip permohonan surat pengantar.</td></tr>';
      return;
    }

    tbody.innerHTML = appState.suratList.map(s => `
      <tr>
        <td><strong style="font-family:var(--font-mono);">${s.nomor}</strong></td>
        <td><strong>${s.nama}</strong></td>
        <td style="font-family:var(--font-mono);">${s.nik}</td>
        <td>${s.keperluan}</td>
        <td>${s.tanggal}</td>
        <td><span class="badge-status status-terbit">${s.status || 'Terbit'}</span></td>
        <td>
          <button type="button" class="btn-secondary btn-view-surat" data-surat-id="${s.id}" style="padding:0.35rem 0.75rem; font-size:0.75rem;">
            Cetak / Lihat Dokumen
          </button>
        </td>
      </tr>
    `).join('');

    tbody.querySelectorAll('.btn-view-surat').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = Number(btn.getAttribute('data-surat-id'));
        openPrintModal(id);
      });
    });
  }

  // --- RENDER 2: DATA WARGA ---
  let wargaSearchQuery = '';
  let wargaStatusFilter = 'ALL';

  function renderWarga() {
    const tbody = document.getElementById('wargaTableBody');
    if (!tbody) return;

    let items = appState.wargaList;

    if (wargaStatusFilter !== 'ALL') {
      items = items.filter(w => w.status === wargaStatusFilter);
    }

    if (wargaSearchQuery) {
      const q = wargaSearchQuery.toLowerCase();
      items = items.filter(w => w.nama.toLowerCase().includes(q) || w.nik.includes(q) || w.rumah.toLowerCase().includes(q));
    }

    const totalKk = appState.wargaList.length;
    const totalJiwa = appState.wargaList.reduce((sum, w) => sum + Number(w.anggota), 0);
    const wargaTetap = appState.wargaList.filter(w => w.status === 'Tetap').length;
    const wargaKontrak = totalKk - wargaTetap;

    const elTotalKk = document.getElementById('demoTotalKk');
    const elTotalJiwa = document.getElementById('demoTotalJiwa');
    const elWargaTetap = document.getElementById('demoWargaTetap');
    const elWargaKontrak = document.getElementById('demoWargaKontrak');

    if (elTotalKk) elTotalKk.textContent = `${totalKk} KK`;
    if (elTotalJiwa) elTotalJiwa.textContent = `${totalJiwa} Jiwa`;
    if (elWargaTetap) elWargaTetap.textContent = `${wargaTetap} KK (${totalKk > 0 ? Math.round((wargaTetap / totalKk) * 100) : 0}%)`;
    if (elWargaKontrak) elWargaKontrak.textContent = `${wargaKontrak} KK`;

    if (items.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:2.5rem; color:#64748b;">Tidak ada data warga yang cocok.</td></tr>';
      return;
    }

    tbody.innerHTML = items.map(w => {
      let badgeClass = 'status-terbit';
      if (w.status === 'Kontrak') badgeClass = 'status-proses';
      else if (w.status === 'Kos') badgeClass = 'badge-tag';

      return `
        <tr>
          <td><strong>${w.nama}</strong></td>
          <td style="font-family:var(--font-mono);">${w.nik}</td>
          <td style="font-family:var(--font-mono);">${w.noKk}</td>
          <td>${w.rumah}</td>
          <td>${w.anggota} Jiwa</td>
          <td><span class="badge-status ${badgeClass}">${w.status}</span></td>
          <td>${w.wa || '-'}</td>
        </tr>
      `;
    }).join('');
  }

  // --- RENDER 3: MADING DIGITAL RT ---
  function renderMading() {
    const grid = document.getElementById('madingCardsGrid');
    if (!grid) return;

    grid.innerHTML = appState.madingList.map(m => {
      const waText = encodeURIComponent(`*PENGUMUMAN WARGA RT 04 / RW 08 MANTRIJERON*\n\n📌 *Agenda:* ${m.judul}\n⏰ *Waktu:* ${m.waktu}\n\n${m.isi}\n\nMari bersama menjaga kekompakan dan kerukunan kampung!`);

      return `
        <div class="mading-card">
          <div>
            <div class="mading-top">
              <span class="badge-mading-cat">${m.kategori}</span>
              <span class="mading-date">${m.waktu}</span>
            </div>
            <h3 class="mading-title">${m.judul}</h3>
            <p class="mading-body">${m.isi}</p>
          </div>

          <a href="https://api.whatsapp.com/send?text=${waText}" target="_blank" rel="noopener noreferrer" class="btn-wa">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.19 8.19 0 0 1-5.82 2.42c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24m4.51 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.53.61.2 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29"/></svg>
            <span>Sebarkan ke WhatsApp Grup RT</span>
          </a>
        </div>
      `;
    }).join('');
  }

  // --- RENDER 4: ASPIRASI WARGA ---
  function renderAspirasi() {
    const list = document.getElementById('aspirasiItemsList');
    if (!list) return;

    list.innerHTML = appState.aspirasiList.map(a => `
      <div class="aspirasi-item">
        <div class="asp-header">
          <span class="asp-category">${a.kategori} • ${a.lokasi}</span>
          <span class="asp-time">${a.waktu}</span>
        </div>
        <h4 class="asp-title">${a.nama}</h4>
        <p class="asp-detail">${a.detail}</p>
        <div style="margin-top:0.5rem;">
          <span class="badge-status status-proses">${a.status}</span>
        </div>
      </div>
    `).join('');
  }

  // --- RENDER 5: EMERGENCY CONTACTS ---
  function renderEmergency() {
    const grid = document.getElementById('emergencyCardsGrid');
    if (!grid) return;

    grid.innerHTML = appState.emergencyContacts.map(c => `
      <div class="emergency-card">
        <div class="emg-icon">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </div>
        <div class="emg-info">
          <h4>${c.nama}</h4>
          <p>${c.jabatan} • ${c.desc}</p>
          <a href="tel:${c.telp.replace(/[^0-9]/g, '')}" class="emg-btn-call">
            <span>Hubungi: ${c.telp}</span>
          </a>
        </div>
      </div>
    `).join('');
  }

  // --- MODALS & ACTIONS ---
  function initModals() {
    // 1. Buat Surat Modal
    const suratModal = document.getElementById('buatSuratModal');
    const formSurat = document.getElementById('formSurat');
    const btnOpenSurat = document.getElementById('btnOpenModalBuatSurat');
    const btnQuickSurat = document.getElementById('btnQuickBuatSurat');
    const btnCloseSurat = document.getElementById('btnCloseSuratModal');
    const btnCancelSurat = document.getElementById('btnCancelSuratModal');

    const closeSuratModal = () => { if (suratModal) suratModal.hidden = true; };

    if (btnOpenSurat) btnOpenSurat.addEventListener('click', () => openModalBuatSurat());
    if (btnQuickSurat) btnQuickSurat.addEventListener('click', () => openModalBuatSurat());
    if (btnCloseSurat) btnCloseSurat.addEventListener('click', closeSuratModal);
    if (btnCancelSurat) btnCancelSurat.addEventListener('click', closeSuratModal);

    if (formSurat) {
      formSurat.addEventListener('submit', (e) => {
        e.preventDefault();
        const keperluan = document.getElementById('suratKeperluanSelect')?.value;
        const nama = document.getElementById('suratNamaWarga')?.value.trim();
        const nik = document.getElementById('suratNik')?.value.trim();
        const noKk = document.getElementById('suratNoKk')?.value.trim();
        const ttl = document.getElementById('suratTtl')?.value.trim();
        const gender = document.getElementById('suratGender')?.value;
        const agama = document.getElementById('suratAgama')?.value;
        const pekerjaan = document.getElementById('suratPekerjaan')?.value.trim();
        const alamat = document.getElementById('suratAlamat')?.value.trim();
        const detail = document.getElementById('suratKeperluanDetail')?.value.trim();
        const wa = document.getElementById('suratWa')?.value.trim();

        if (!nama || !nik || !ttl) return;

        const count = appState.suratList.length + 4;
        const nomor = `${String(count).padStart(2, '0')}/SP/RT.04-RW.08/XI/2026`;
        const tanggal = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

        const newSurat = {
          id: Date.now(),
          nomor,
          nama,
          nik,
          noKk,
          ttl,
          gender,
          agama,
          pekerjaan,
          alamat,
          keperluan,
          detail: detail || 'Orang tersebut di atas adalah benar-benar warga penduduk RT 04 / RW 08 yang berkelakuan baik di lingkungan masyarakat.',
          tanggal,
          status: 'Terbit',
          wa
        };

        appState.suratList.unshift(newSurat);
        saveState();
        renderSuratTable();
        closeSuratModal();

        // Immediately open print preview
        openPrintModal(newSurat.id);
      });
    }

    // 2. Print Modal
    const printModal = document.getElementById('printSuratModal');
    const btnClosePrint = document.getElementById('btnClosePrintModal');
    const btnDonePrint = document.getElementById('btnDonePrintModal');
    const btnTriggerPrint = document.getElementById('btnTriggerPrintLetter');

    const closePrintModal = () => { if (printModal) printModal.hidden = true; };

    if (btnClosePrint) btnClosePrint.addEventListener('click', closePrintModal);
    if (btnDonePrint) btnDonePrint.addEventListener('click', closePrintModal);
    if (btnTriggerPrint) btnTriggerPrint.addEventListener('click', () => window.print());

    // 3. Tambah Warga Modal
    const wargaModal = document.getElementById('addWargaModal');
    const formWarga = document.getElementById('formAddWarga');
    const btnOpenAddWarga = document.getElementById('btnOpenAddWargaModal');
    const btnCloseAddWarga = document.getElementById('btnCloseAddWarga');
    const btnCancelAddWarga = document.getElementById('btnCancelAddWarga');

    const closeWargaModal = () => { if (wargaModal) wargaModal.hidden = true; };

    if (btnOpenAddWarga) {
      btnOpenAddWarga.addEventListener('click', () => {
        formWarga.reset();
        if (wargaModal) wargaModal.hidden = false;
      });
    }
    if (btnCloseAddWarga) btnCloseAddWarga.addEventListener('click', closeWargaModal);
    if (btnCancelAddWarga) btnCancelAddWarga.addEventListener('click', closeWargaModal);

    if (formWarga) {
      formWarga.addEventListener('submit', (e) => {
        e.preventDefault();
        const nama = document.getElementById('wargaNamaInput')?.value.trim();
        const nik = document.getElementById('wargaNikInput')?.value.trim();
        const noKk = document.getElementById('wargaNoKkInput')?.value.trim();
        const rumah = document.getElementById('wargaRumahInput')?.value.trim();
        const status = document.getElementById('wargaStatusTinggalInput')?.value;
        const anggota = Number(document.getElementById('wargaJumlahAnggotaInput')?.value) || 1;
        const wa = document.getElementById('wargaWaInput')?.value.trim();

        if (!nama || !nik || !rumah) return;

        const newWarga = {
          id: Date.now(),
          nama,
          nik,
          noKk,
          rumah,
          status,
          anggota,
          wa
        };

        appState.wargaList.unshift(newWarga);
        saveState();
        renderWarga();
        closeWargaModal();
        alert(`Data warga "${nama}" berhasil disimpan.`);
      });
    }

    // 4. Mading Modal
    const madingModal = document.getElementById('addMadingModal');
    const formMading = document.getElementById('formAddMading');
    const btnOpenAddMading = document.getElementById('btnOpenAddMadingModal');
    const btnCloseAddMading = document.getElementById('btnCloseAddMading');
    const btnCancelAddMading = document.getElementById('btnCancelAddMading');

    const closeMadingModal = () => { if (madingModal) madingModal.hidden = true; };

    if (btnOpenAddMading) {
      btnOpenAddMading.addEventListener('click', () => {
        formMading.reset();
        if (madingModal) madingModal.hidden = false;
      });
    }
    if (btnCloseAddMading) btnCloseAddMading.addEventListener('click', closeMadingModal);
    if (btnCancelAddMading) btnCancelAddMading.addEventListener('click', closeMadingModal);

    if (formMading) {
      formMading.addEventListener('submit', (e) => {
        e.preventDefault();
        const judul = document.getElementById('madingJudulInput')?.value.trim();
        const kategori = document.getElementById('madingKategoriInput')?.value;
        const waktu = document.getElementById('madingWaktuInput')?.value.trim();
        const isi = document.getElementById('madingIsiInput')?.value.trim();

        if (!judul || !isi) return;

        appState.madingList.unshift({
          id: Date.now(),
          judul,
          kategori,
          waktu,
          isi
        });

        saveState();
        renderMading();
        closeMadingModal();
      });
    }

    // 5. Lapor Modal
    const laporModal = document.getElementById('addLaporModal');
    const formLapor = document.getElementById('formAddLapor');
    const btnOpenAddLapor = document.getElementById('btnOpenAddLaporModal');
    const btnCloseAddLapor = document.getElementById('btnCloseAddLapor');
    const btnCancelAddLapor = document.getElementById('btnCancelAddLapor');

    const closeLaporModal = () => { if (laporModal) laporModal.hidden = true; };

    if (btnOpenAddLapor) {
      btnOpenAddLapor.addEventListener('click', () => {
        formLapor.reset();
        if (laporModal) laporModal.hidden = false;
      });
    }
    if (btnCloseAddLapor) btnCloseAddLapor.addEventListener('click', closeLaporModal);
    if (btnCancelAddLapor) btnCancelAddLapor.addEventListener('click', closeLaporModal);

    if (formLapor) {
      formLapor.addEventListener('submit', (e) => {
        e.preventDefault();
        const nama = document.getElementById('laporNamaInput')?.value.trim();
        const kategori = document.getElementById('laporKategoriSelect')?.value;
        const lokasi = document.getElementById('laporLokasiInput')?.value.trim();
        const detail = document.getElementById('laporDetailInput')?.value.trim();

        if (!nama || !detail) return;

        appState.aspirasiList.unshift({
          id: Date.now(),
          nama,
          kategori,
          lokasi,
          detail,
          waktu: 'Baru saja',
          status: 'Diterima Pengurus'
        });

        saveState();
        renderAspirasi();
        closeLaporModal();
        alert('Laporan dan aspirasi Anda telah terkirim kepada pengurus RT 04.');
      });
    }

    // CSV Exports
    const btnExportSurat = document.getElementById('btnExportSuratCsv');
    if (btnExportSurat) {
      btnExportSurat.addEventListener('click', () => {
        const headers = ['Nomor Surat', 'Nama Pemohon', 'NIK', 'No KK', 'TTL', 'Pekerjaan', 'Keperluan', 'Tanggal'];
        const rows = appState.suratList.map(s => [
          `"${s.nomor}"`, `"${s.nama}"`, `"${s.nik}"`, `"${s.noKk}"`, `"${s.ttl}"`, `"${s.pekerjaan}"`, `"${s.keperluan}"`, `"${s.tanggal}"`
        ].join(','));
        downloadCsv('Arsip_Surat_Pengantar_RT04_' + new Date().toISOString().slice(0, 10), [headers.join(','), ...rows].join('\n'));
      });
    }

    const btnExportWarga = document.getElementById('btnExportWargaCsv');
    if (btnExportWarga) {
      btnExportWarga.addEventListener('click', () => {
        const headers = ['Nama KK', 'NIK', 'No KK', 'Rumah', 'Jumlah Anggota', 'Status Tinggal', 'WhatsApp'];
        const rows = appState.wargaList.map(w => [
          `"${w.nama}"`, `"${w.nik}"`, `"${w.noKk}"`, `"${w.rumah}"`, w.anggota, `"${w.status}"`, `"${w.wa}"`
        ].join(','));
        downloadCsv('Data_Warga_RT04_RW08_' + new Date().toISOString().slice(0, 10), [headers.join(','), ...rows].join('\n'));
      });
    }
  }

  function downloadCsv(filename, content) {
    const link = document.createElement('a');
    link.setAttribute('href', encodeURI('data:text/csv;charset=utf-8,' + content));
    link.setAttribute('download', `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function openModalBuatSurat(selectedKeperluan = null) {
    const modal = document.getElementById('buatSuratModal');
    const select = document.getElementById('suratKeperluanSelect');
    if (select && selectedKeperluan) {
      select.value = selectedKeperluan;
    }
    if (modal) modal.hidden = false;
  }

  // --- OPEN PRINT OFFICIAL LETTER MODAL ---
  function openPrintModal(suratId) {
    const surat = appState.suratList.find(s => s.id === suratId);
    if (!surat) return;

    const modal = document.getElementById('printSuratModal');

    document.getElementById('prnNomorSurat').textContent = `Nomor: ${surat.nomor}`;
    document.getElementById('prnNama').textContent = surat.nama;
    document.getElementById('prnNik').textContent = surat.nik;
    document.getElementById('prnNoKk').textContent = surat.noKk || '-';
    document.getElementById('prnTtl').textContent = surat.ttl;
    document.getElementById('prnGenderAgama').textContent = `${surat.gender || 'Laki-laki'} / ${surat.agama || 'Islam'}`;
    document.getElementById('prnPekerjaan').textContent = surat.pekerjaan || 'Wiraswasta';
    document.getElementById('prnAlamat').textContent = surat.alamat;
    document.getElementById('prnKeperluan').textContent = surat.keperluan;
    document.getElementById('prnKeterangan').textContent = surat.detail || 'Orang tersebut di atas adalah benar-benar warga penduduk RT 04 / RW 08 yang berkelakuan baik di lingkungan masyarakat.';
    document.getElementById('prnTanggalSurat').textContent = surat.tanggal;
    document.getElementById('prnSignPemohon').textContent = `( ${surat.nama.toUpperCase()} )`;

    // WhatsApp Notification Button to RT Chairman
    const btnSendWa = document.getElementById('btnSendSuratWa');
    if (btnSendWa) {
      const rtWaClean = '6281234567890';
      const waMsg = encodeURIComponent(`Yth. Bpk. Agus Tri Prasetyo (Ketua RT 04 Mantrijeron),\n\nSaya telah mengajukan Surat Pengantar Warga secara mandiri melalui AmongWarga dengan rincian sbb:\n\n📄 *No. Surat:* ${surat.nomor}\n👤 *Nama Pemohon:* ${surat.nama}\n🆔 *NIK:* ${surat.nik}\n📌 *Keperluan:* ${surat.keperluan}\n📅 *Tanggal:* ${surat.tanggal}\n\nMohon tanda tangan dan pengesahan surat. Dokumen fisik telah saya cetak. Terima kasih.`);
      btnSendWa.onclick = () => window.open(`https://wa.me/${rtWaClean}?text=${waMsg}`, '_blank');
    }

    if (modal) modal.hidden = false;
  }

  // --- SEARCH & FILTER WARGA ---
  function initWargaFilters() {
    const searchInput = document.getElementById('wargaSearchInput');
    const statusFilter = document.getElementById('wargaStatusFilter');

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        wargaSearchQuery = searchInput.value.trim();
        renderWarga();
      });
    }

    if (statusFilter) {
      statusFilter.addEventListener('change', () => {
        wargaStatusFilter = statusFilter.value;
        renderWarga();
      });
    }
  }

  // --- NAVIGATION TABS ---
  function initNavigation() {
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const view = tab.getAttribute('data-view');
        document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));

        const target = document.getElementById('view' + view.charAt(0).toUpperCase() + view.slice(1));
        if (target) target.classList.add('active');
      });
    });
  }

  // --- PWA SERVICE WORKER ---
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').then(reg => {
        console.log('AmongWarga ServiceWorker registered:', reg.scope);
      }).catch(err => {
        console.warn('AmongWarga ServiceWorker failed:', err);
      });
    });
  }

  // --- MASTER RENDER DISPATCHER ---
  function renderAll() {
    renderTemplates();
    renderSuratTable();
    renderWarga();
    renderMading();
    renderAspirasi();
    renderEmergency();
  }

  // --- BOOTSTRAP ---
  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initModals();
    initWargaFilters();
    renderAll();
  });

})();
