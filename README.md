# AmongWarga — Portal Layanan Mandiri Warga RT / RW

Sistem administrasi kependudukan dan layanan mandiri surat pengantar digital berbasis PWA (*Progressive Web App*) untuk **RT 04 / RW 08 Kelurahan Mantrijeron, Kemantren Mantrijeron, Kota Yogyakarta**.

---

## 🌟 Fitur Utama

1. **Layanan Mandiri Surat Pengantar RT / RW Resmi**:
   - Pembuatan surat pengantar resmi standar administrasi pemerintahan kelurahan:
     - **Pembuatan / Perpanjangan KTP Elektronik**
     - **Pembuatan / Pembaruan Kartu Keluarga (KK)**
     - **Pengantar SKCK (Catatan Kepolisian)**
     - **Surat Keterangan Domisili Tempat Tinggal / Usaha**
     - **Surat Keterangan Tidak Mampu (SKTM) / Beasiswa**
     - **Surat Keterangan Kelahiran / Kematian**
     - **Surat Keterangan Usaha (SKU) Mandiri**
   - Generator dokumen format A4 resmi dengan Kop RT/RW, nomor surat otomatis, tabel data pemohon, kolom tanda tangan Ketua RT, Ketua RW, dan pemohon, serta stempel digital resmi.
   - Siap cetak langsung ke kertas A4 atau simpan sebagai PDF (`@media print` standar kedinasan).
   - Tombol **"Kirim Notifikasi ke WA Pengurus RT"** dengan pesan konfirmasi otomatis.

2. **Data Kependudukan & Registrasi Warga**:
   - Database Kartu Keluarga (KK), NIK, alamat rumah/blok, jumlah anggota keluarga, dan kontak WhatsApp.
   - Klasifikasi status kependudukan: **Warga Tetap**, **Kontrak/Sewa**, dan **Kos/Mahasiswa**.
   - Ringkasan demografi: Total KK, Total Jiwa, Persentase Warga Tetap vs Domisili.
   - Fitur pencarian cepat nama/NIK dan **Export Database Warga ke CSV**.

3. **Mading Digital & Agenda Kegiatan Warga**:
   - Pengumuman kerja bakti gotong royong, jadwal posyandu balita & lansia, pertemuan rutin RT (arisan/dawis), dan siskamling.
   - Tombol **"Sebarkan ke WhatsApp Grup RT"** untuk broadcast pengumuman instan ke grup warga.

4. **Layanan Aspirasi & Pengaduan Lingkungan**:
   - Form pelaporan warga untuk fasilitas umum (lampu jalan padam, perbaikan drainase selokan), kebersihan sampah, dan lapor tamu menginap 1x24 jam.
   - Papan transparansi status pengaduan warga.

5. **Direktori Telepon Darurat Kampung**:
   - Kontak cepat pengurus dan aparat keamanan: Ketua RT 04, Ketua RW 08, Bhabinkamtibmas Polsek, Babinsa Koramil, Puskesmas Mantrijeron, dan Pemadam Kebakaran Kota Yogyakarta.

6. **PWA Offline-First Ready**:
   - Dilengkapi *Service Worker* dan *Web App Manifest*.
   - Data tersimpan aman di penyimpanan lokal browser (*localStorage*) tanpa ketergantungan server luar.

---

## 🚀 Panduan Penggunaan

- **Warga**: Buka aplikasi di smartphone untuk membuat surat pengantar mandiri, membaca mading kegiatan RT, atau melapor keluhan fasilitas umum.
- **Pengurus RT/RW**: Buka melalui komputer/laptop untuk memverifikasi permohonan surat, mencetak lembar dokumen A4, dan mengelola database kependudukan.

---

## 🛠️ Lisensi & Hak Cipta

Dikelola untuk operasional **RT 04 / RW 08 Mantrijeron Yogyakarta**.
Dibangun dengan standar zero-bloat, performa tinggi, dan tanpa dependensi pihak ketiga yang memberatkan.
