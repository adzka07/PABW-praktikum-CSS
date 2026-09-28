# Design Token Halaman Daftar Tugas

## Rencana Worksheet P5

- Kerangka: `body.page` memakai tiga baris `auto 1fr auto`; area tengah memakai kolom `16rem 1fr` dengan area bernama `sisi`, `utama`, dan `bawah`.
- Flex: `.header-baris` dan `.navbar nav ul` untuk susunan satu arah; `.panel` dan `form` untuk isi komponen.
- Grid: `.page`, `.isi`, dan `.galeri`; galeri memakai `repeat(auto-fit, minmax(16rem, 1fr))` tanpa media query.
- Penempatan: `#beranda` menjadi `sisi`, `#daftar-tugas` menjadi `utama`, dan `#tambah-tugas` menjadi `bawah`.
- Pemeriksaan: layout diuji pada lebar 360 px dan 1 280 px; item diberi `min-width: 0` agar isi panjang membungkus.

## Catatan Worksheet P5

Potongan kode: `grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));`

Dipakai pada: galeri kartu agar jumlah kolom berubah mengikuti lebar layar.

Penilaian mandiri: kerangka 30/30, flexbox 25/25, grid 30/30, kerapian 15/15. Total 100/100.

Tiket keluar:

- Flex dipakai pada navbar dan form karena masing-masing menyusun anak dalam satu arah.
- Grid dipakai pada kerangka halaman dan galeri karena perlu mengatur baris serta kolom sekaligus.
- Isi panjang ditangani dengan `min-width: 0` dan `overflow-wrap: anywhere` agar tidak meluber.

Halaman ini dibuat untuk latihan PABW Pertemuan 4. Isi halaman berupa daftar tugas kuliah, tenggat waktu, prioritas, dan form untuk menambahkan tugas.

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

## Kriteria selesai

Mengubah nilai `--color-primary` pada satu baris di `tokens.css` akan mengubah warna tombol, tautan, dan prioritas sedang.

