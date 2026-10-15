# Design Token Halaman Daftar Tugas

## Pertemuan 10 JavaScript Asinkron

Data tugas dipindahkan ke `data/proyek.json` dan diambil melalui `js/api.js` menggunakan `fetch`, `async/await`, pemeriksaan `response.ok`, dan `try/catch`. `app.js` merakit alur aplikasi, sedangkan `dom.js` menangani render, filter, keadaan memuat, gagal, dan kosong.

Sumber data akhir menggunakan alamat Raw GitHub agar halaman mengambil `proyek.json` dari repositori publik, bukan hanya dari file lokal.

### Deklarasi AI

AI membantu menyiapkan struktur salinan Pertemuan 9, memindahkan data ke JSON, menyusun pemisahan `api.js`, `app.js`, dan `dom.js`, serta memeriksa alur asynchronous. Saya mengerjakan dan memahami data tugas, tampilan halaman, kategori filter, serta pengujian perilaku halaman sesuai worksheet.

## Pertemuan 9 DOM Event dan Interaktivitas

Halaman ini menggunakan `js/dom.js` untuk memilih elemen, merender daftar proyek dari data `daftarProyek`, memfilter dengan satu event listener pada induk, menangani keadaan kosong, dan memvalidasi form tanpa memuat ulang halaman.

## Token yang saya tetapkan

### Warna

| Token | Nilai | Untuk apa |
|---|---|---|
| `--color-primary` | `#8d04bb` | tombol, tautan, dan prioritas sedang |
| `--color-fg` | `#0F172A` | warna teks utama |
| `--color-bg` | `#fafafa` | latar halaman dan input |
| `--color-surface` | `#fad6fa` | latar tabel |
| `--color-border` | `#0F172A` | garis tabel, input, dan pemisah |
| `--color-danger` | `#ff002b` | pesan kesalahan dan prioritas tinggi |
| `--color-focus` | `#ff00bf` | garis fokus keyboard |

### Jarak

| Token | Nilai | Untuk apa |
|---|---|---|
| `--space-1` | `0.25rem` | jarak paling rapat |
| `--space-2` | `0.5rem` | jarak label dan input |
| `--space-3` | `0.75rem` | jarak tombol dan kontrol |
| `--space-4` | `1rem` | jarak antar elemen |
| `--space-6` | `1.5rem` | jarak antar bagian halaman |

### Ukuran dan bentuk

| Token | Nilai | Untuk apa |
|---|---|---|
| `--radius-md` | `0.5rem` | sudut input dan tombol |
| `--radius-full` | `999px` | token bentuk penuh |
| `--text-sm` | `0.875rem` | keterangan dan label |
| `--text-md` | `1rem` | teks isi |
| `--text-xl` | `1.5rem` | judul bagian |
| `--text-3xl` | `2.25rem` | judul halaman |



