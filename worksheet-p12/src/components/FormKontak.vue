<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['tambah'])
const form = reactive({ judul: '', mataKuliah: '', tenggat: '' })
const error = ref(false)

function kirim() {
  error.value = !form.judul || !form.mataKuliah || !form.tenggat
  if (error.value) return

  emit('tambah', { ...form })
  form.judul = ''
  form.mataKuliah = ''
  form.tenggat = ''
}
</script>

<template>
  <section id="tambah-tugas" class="panel kartu bawah">
    <div class="section-heading">
      <h2>Tambah Tugas</h2>
      <p>Gunakan formulir berikut untuk mencatat tugas baru.</p>
    </div>

    <form novalidate @submit.prevent="kirim">
      <div class="form-kolom">
        <label for="nama-tugas">Nama Tugas</label>
        <input id="nama-tugas" v-model="form.judul" type="text" />
        <p v-if="error && !form.judul" class="pesan-galat">
          Nama tugas wajib diisi.
        </p>
      </div>

      <div class="form-kolom">
        <label for="mata-kuliah">Mata Kuliah</label>
        <select id="mata-kuliah" v-model="form.mataKuliah">
          <option value="">Pilih mata kuliah</option>
          <option>PABW</option>
          <option>MPTI</option>
          <option>SJK</option>
          <option>FSD</option>
          <option>PKN</option>
        </select>
        <p v-if="error && !form.mataKuliah" class="pesan-galat">
          Mata kuliah wajib diisi.
        </p>
      </div>

      <div class="form-kolom">
        <label for="tenggat">Tenggat</label>
        <input id="tenggat" v-model="form.tenggat" type="date" />
        <p v-if="error && !form.tenggat" class="pesan-galat">
          Pilih tanggal tenggat.
        </p>
      </div>

      <button type="submit">Tambah Tugas</button>
    </form>
  </section>
</template>
