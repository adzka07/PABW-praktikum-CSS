<script setup>
defineProps({
  proyek: Array,
  favorit: Array,
})

defineEmits(['favorit'])
</script>

<template>
  <div class="table-wrap">
    <table>
      <caption>Daftar tugas dan tenggat waktu</caption>
      <thead>
        <tr>
          <th scope="col">Tugas</th>
          <th scope="col">Mata Kuliah</th>
          <th scope="col">Tenggat</th>
          <th scope="col">Status</th>
          <th scope="col">Prioritas</th>
          <th scope="col">Favorit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in proyek" :key="p.id">
          <th scope="row">{{ p.judul }}</th>
          <td>{{ p.mataKuliah }}</td>
          <td>{{ p.tenggat }}</td>
          <td>{{ p.selesai ? 'Selesai' : 'Berjalan' }}</td>
          <td>
            <span :class="`lencana prioritas-${p.prioritas.toLowerCase()}`">
              {{ p.prioritas }}
            </span>
          </td>
          <td>
            <button
              class="favorit"
              type="button"
              @click="$emit('favorit', p.id)"
            >
              {{ favorit.includes(p.id) ? '★' : '☆' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
