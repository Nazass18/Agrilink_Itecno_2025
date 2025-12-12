# 🌾 AgriLink - Platform Ekosistem Pangan Digital

**AgriLink** adalah platform digital yang menghubungkan petani, peternak, nelayan (produsen), dan pembeli melalui teknologi, verifikasi kualitas, dan logistik yang efisien. Proyek ini dikembangkan untuk **Hackathon ITECHNO** dengan fokus pada transparansi, keadilan nilai, dan distribusi pangan yang berkelanjutan.

---

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Proyek](#struktur-proyek)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [Halaman-halaman](#halaman-halaman)
- [Misi & Visi](#misi--visi)
- [Statistik Platform](#statistik-platform)
- [Kontak](#kontak)

---

## ✨ Fitur Utama

### 1. **Quest Pangan** 🎯
Fitur yang memungkinkan pembeli membuat permintaan khusus untuk produk dengan spesifikasi tertentu:
- Spesifikasi produk (jumlah, kualitas, jenis)
- Tiga kategori utama: Pertanian, Perikanan, Peternakan
- Deadline yang fleksibel
- Koneksi langsung dengan ribuan produsen terverifikasi

### 2. **Marketplace** 🛒
Platform jual-beli produk pertanian, perikanan, dan peternakan:
- Seller Dashboard: Kelola inventaris dan penjualan
- Buyer Dashboard: Jelajahi dan belanja produk
- Sistem verifikasi untuk kualitas dan kepercayaan

### 3. **AgriNews** 📰
Pusat informasi untuk eduikasi dan berita seputar:
- Tren industri pangan
- Tips pertanian, perikanan, dan peternakan
- Harga pasar terkini
- Edukasi bagi produsen dan pembeli

### 4. **Tracking & Logistik** 📍
Sistem pelacakan pengiriman:
- Real-time tracking pesanan
- 98% tingkat ketepatan waktu pengiriman
- Transparansi dalam distribusi

### 5. **Sistem Autentikasi** 🔐
- Login untuk produsen dan pembeli
- Registrasi dengan verifikasi
- Akses dashboard khusus untuk setiap peran

### 6. **Tentang Kami** ℹ️
Informasi lengkap tentang:
- Misi dan visi perusahaan
- Timeline/sejarah pengembangan
- Statistik pengguna dan pencapaian
- Komitmen terhadap transparansi pangan

---

## 🛠 Teknologi yang Digunakan

| Teknologi | Deskripsi |
|-----------|-----------|
| **HTML5** | Struktur dan markup halaman web |
| **Tailwind CSS** | Framework CSS untuk styling responsif |
| **JavaScript** | Interaktivitas dan logika frontend |
| **Google Fonts** | Typography (Font Inter) |
| **Responsive Design** | Mobile-first approach |

### CDN yang Digunakan:
- Tailwind CSS: `https://cdn.tailwindcss.com`
- Google Fonts: Font family Inter (300-900 weights)

---

## 📁 Struktur Proyek

```
Agrilink_Itechno/
├── index.html                 # Halaman beranda/homepage
├── login.html                 # Halaman login
├── register.html              # Halaman registrasi
├── quest.html                 # Halaman Quest Pangan (permintaan khusus)
├── agrinews.html              # Halaman berita dan edukasi pangan
├── about.html                 # Halaman tentang kami
├── buyer-dashboard.html       # Dashboard untuk pembeli
├── seller-dashboard.html      # Dashboard untuk penjual/produsen
├── distribution.html          # Halaman distribusi/logistik
├── tracking.html              # Halaman pelacakan pesanan
├── agriculture.png            # Asset gambar - pertanian
├── fishery.png                # Asset gambar - perikanan
├── livestock.png              # Asset gambar - peternakan
├── petani.png                 # Asset gambar - petani
├── ricefield.png              # Asset gambar - sawah
├── card.png                   # Asset gambar - kartu
├── bg-all.png                 # Background utama
└── README.md                  # File dokumentasi ini
```

---

## 🚀 Instalasi

### Prasyarat
- Browser modern (Chrome, Firefox, Safari, Edge)
- Text Editor atau IDE (VS Code, Sublime Text, dll)
- (Opsional) Local server untuk development

### Langkah-langkah

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd Agrilink_Itechno
   ```

2. **Buka file HTML di browser**
   ```bash
   # Cara 1: Buka langsung di browser
   open index.html
   
   # Cara 2: Gunakan Live Server (VS Code)
   # Install extension "Live Server"
   # Right-click index.html > Open with Live Server
   ```

3. **Atau jalankan local server**
   ```bash
   # Menggunakan Python
   python -m http.server 8000
   
   # Menggunakan Node.js
   npx http-server
   ```

4. **Akses di browser**
   ```
   http://localhost:8000
   ```

---

## 💻 Penggunaan

### Navigasi Utama
- **Beranda** → Homepage dengan hero section dan pengenalan produk
- **Layanan** → Quest Pangan untuk permintaan khusus
- **AgriNews** → Informasi dan edukasi pangan
- **Tentang Kami** → Profil dan visi AgriLink

### User Journey

#### Sebagai Pembeli:
1. Kunjungi homepage
2. Register/Login
3. Jelajahi marketplace atau buat Quest Pangan
4. Pilih produk atau respons dari produsen
5. Checkout dan tracking pesanan

#### Sebagai Produsen (Petani/Peternak/Nelayan):
1. Kunjungi homepage
2. Register sebagai seller
3. Akses Seller Dashboard
4. Upload produk ke katalog
5. Respons permintaan dari pembeli
6. Kelola pengiriman

---

## 📄 Halaman-halaman

### 1. **index.html** - Beranda
- Navigation bar dengan branding AgriLink
- Hero section dengan call-to-action
- Pengenalan produk (Pertanian, Perikanan, Peternakan)
- Fitur-fitur utama
- Footer dengan informasi kontak

### 2. **quest.html** - Quest Pangan
- Tab kategori: Pertanian, Perikanan, Peternakan
- Kartu permintaan dengan detail:
  - Nama produk
  - Kuantitas (⚖️)
  - Harga (💵)
  - Deadline (⏰)
  - Grade/Kualitas (🏷️)
- Tombol "Ambil Quest" untuk produsen

### 3. **agrinews.html** - AgriNews
Pusat informasi dengan konten edukatif tentang:
- Berita industri pangan
- Tips dan best practice
- Harga pasar
- Inovasi teknologi pertanian

### 4. **about.html** - Tentang Kami
- Visi dan Misi AgriLink
- Timeline sejarah pengembangan
- Statistik pencapaian:
  - 50K+ Users
  - 1,200+ Sellers
  - 98% On-time Delivery
- Komitmen terhadap ekosistem pangan yang adil

### 5. **login.html** - Login
- Form autentikasi untuk pengguna
- Pilihan: Login sebagai Buyer atau Seller
- Link ke halaman register

### 6. **register.html** - Register
- Form pendaftaran akun baru
- Opsi tipe akun (Pembeli/Penjual)
- Verifikasi email
- Kebijakan privasi

### 7. **buyer-dashboard.html** - Dashboard Pembeli
- Riwayat pembelian
- Pesanan aktif
- Wishlist produk
- Profil dan pengaturan

### 8. **seller-dashboard.html** - Dashboard Penjual
- Inventaris produk
- Kelola listing
- Pesanan masuk
- Penjualan dan analytics

### 9. **distribution.html** - Distribusi
- Peta logistik
- Mitra pengiriman
- Informasi gudang regional
- SLA pengiriman

### 10. **tracking.html** - Pelacakan Pesanan
- Real-time tracking
- Status pengiriman
- Estimasi waktu tiba
- Kontak kurir

---

## 🎯 Misi & Visi

### Misi
Memberdayakan jutaan produsen dan pembeli Indonesia melalui memastikan transparansi, jaminan kualitas, dan distribusi yang efisien di sektor pertanian, perikanan, dan peternakan.

### Visi
Menciptakan sistem pangan yang tangguh di mana nilai mengalir secara adil kepada setiap pelaku dan produk berkualitas konsisten sampai ke konsumen.

### Komitmen
- **Transparansi** - Proses dari produsen hingga konsumen dapat dilacak
- **Keadilan Nilai** - Petani dan nelayan mendapat kompensasi yang layak
- **Kualitas** - Verifikasi ketat untuk setiap produk
- **Efisiensi** - Logistik yang cepat dan terpercaya

---


## 🎨 Desain & UX

- **Color Scheme**: Lime green (#10b981, #22c55e) sebagai warna utama, slate gray untuk teks
- **Typography**: Inter font family untuk konsistensi modern
- **Layout**: Responsive grid system dengan Tailwind CSS
- **Components**: 
  - Navigation bar sticky
  - Hero sections dengan gradient backgrounds
  - Card-based layouts
  - Modal/dialog untuk forms
  - Button dengan hover effects

---

## 📱 Responsivitas

Platform didesain dengan **mobile-first approach**:
- Desktop: Full navigation bar
- Tablet: Optimized grid layout
- Mobile: Hamburger menu, single column

---

## 🚀 Fitur Mendatang

- [ ] Mobile app (iOS & Android)
- [ ] Integrasi payment gateway
- [ ] AI recommendation system
- [ ] Supply chain analytics
- [ ] Video consultation dengan ahli
- [ ] Blockchain untuk traceability
- [ ] IoT sensors untuk monitoring kualitas

---

## 👥 Tim Pengembang

Dikembangkan untuk **Hackathon ITECHNO**
- Syifa Najwa Azzahra (UI/UX Designer)
- Muhammad Faiqul Umam Dzunnuroeni (Team Lead & Front-End)
- Muhammad Thoriq Nabasa (Front-End)

---

## 📄 Lisensi

© 2024 AgriLink. Semua hak dilindungi.

---

## 🤝 Kontribusi

Untuk berkontribusi:
1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

---

## 📌 Catatan Pengembang

- Semua asset gambar tersimpan dalam folder root
- Tailwind CSS digunakan melalui CDN
- Tidak ada build process yang diperlukan (static HTML)
- JavaScript vanilla digunakan untuk interaktivitas
- Untuk production, pertimbangkan menggunakan bundle tools

---

**Selamat datang di AgriLink! Mari bersama membangun ekosistem pangan yang lebih baik untuk Indonesia.** 🇮🇩
