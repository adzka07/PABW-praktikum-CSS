<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
import { ambilProyek } from './api.js'

const daftarProyek = ref([])
const kategoriAktif = ref('semua')
const favorit = ref([])
const memuat = ref(true)
const galat = ref('')
const temaGelap = ref(false)
const kategori = ['semua', 'PABW', 'MPTI', 'SJK', 'FSD', 'PKN']
const KUNCI = 'pabw-p11'
const VERSI = 2

const tampil = computed(() => {
  if (kategoriAktif.value === 'semua') return daftarProyek.value
  return daftarProyek.value.filter(
    (proyek) => proyek.mataKuliah === kategoriAktif.value,
  )
})

function simpan() {
  localStorage.setItem(
    KUNCI,
    JSON.stringify({
      versi: VERSI,
      kategoriAktif: kategoriAktif.value,
      favorit: favorit.value,
    }),
  )
}

function pulihkan() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI))
    if (isi?.versi === VERSI && Array.isArray(isi.favorit)) {
      kategoriAktif.value = isi.kategoriAktif || 'semua'
      favorit.value = isi.favorit.map(Number)
    } else {
      localStorage.removeItem(KUNCI)
    }
  } catch {
    localStorage.removeItem(KUNCI)
  }
}

function toggleFavorit(id) {
  favorit.value = favorit.value.includes(id)
    ? favorit.value.filter((nilai) => nilai !== id)
    : [...favorit.value, id]
}

function tambah(data) {
  daftarProyek.value = [
    ...daftarProyek.value,
    {
      id: Date.now(),
      judul: data.judul,
      mataKuliah: data.mataKuliah,
      tenggat: data.tenggat,
      selesai: false,
      prioritas: 'Sedang',
    },
  ]
}

function reset() {
  localStorage.removeItem(KUNCI)
  kategoriAktif.value = 'semua'
  favorit.value = []
}

watch([kategoriAktif, favorit], simpan, { deep: true })
watch(
  temaGelap,
  (aktif) => {
    document.documentElement.dataset.theme = aktif ? 'dark' : 'light'
  },
  { immediate: true },
)

onMounted(async () => {
  pulihkan()
  try {
    daftarProyek.value = await ambilProyek()
  } catch (error) {
    galat.value = `Data gagal dimuat: ${error.message}`
  } finally {
    memuat.value = false
  }
})
</script>

<template>
  <div class="page">
    <input id="tema" v-model="temaGelap" class="pengalih-tema" type="checkbox" />

    <header class="navbar">
      <div class="header-baris">
        <KepalaProfil
          nama="Daftar Tugas dan Tenggat Saya"
          deskripsi="Halaman sederhana untuk mencatat tugas kuliah, tenggat waktu, dan prioritas pengerjaan."
        />
        <div class="aksi-header">
          <label for="tema" class="tombol-tema">Tema gelap</label>
          <nav>
            <ul>
              <li><a href="#beranda">Beranda</a></li>
              <li><a href="#daftar-tugas">Daftar Tugas</a></li>
              <li><a href="#tambah-tugas">Tambah Tugas</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main class="isi">
      <section id="beranda" class="panel kartu sisi">
        <div class="section-heading">
          <h2>Beranda</h2>
          <p>
            halaman ini berfungsi untuk mencatat tugas kuliah, tenggat waktu,
            dan prioritas pengerjaan. saya dapat menambahkan tugas baru,
            melihat daftar tugas yang ada, dan memfilter tugas berdasarkan mata
            kuliah.
          </p>
        </div>
        <figure class="gambar-utama">
          <img
            src="/tugas-kuliah.webp"
            alt="Ilustrasi seseorang sedang mengerjakan tugas kuliah"
            width="220"
            height="124"
            loading="lazy"
          />
          <figcaption>Ilustrasi kegiatan mengerjakan tugas kuliah.</figcaption>
        </figure>
      </section>

      <section id="daftar-tugas" class="panel kartu utama">
        <div class="section-heading">
          <h2>Daftar Tugas</h2>
          <p>
            Berikut adalah daftar tugas kuliah beserta mata kuliah, tenggat
            waktu, dan tingkat prioritasnya.
          </p>
        </div>
        <TombolFilter
          :kategori="kategori"
          :aktif="kategoriAktif"
          @pilih="kategoriAktif = $event"
        />
        <p v-if="memuat" id="muat">Memuat data...</p>
        <p v-else-if="galat" class="pesan-kosong">{{ galat }}</p>
        <p v-else-if="!tampil.length" class="pesan-kosong">
          Belum ada tugas pada mata kuliah ini.
        </p>
        <DaftarProyek
          v-else
          :proyek="tampil"
          :favorit="favorit"
          @favorit="toggleFavorit"
        />
        <button type="button" @click="reset">Atur ulang</button>
      </section>

      <FormKontak @tambah="tambah" />
    </main>

    <footer><p>&copy; Rafi Adzkaulhuda Nasution · 25523092</p></footer>
  </div>
</template>
