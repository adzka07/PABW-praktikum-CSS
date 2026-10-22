<script setup>
defineProps({
  nama: String,
  deskripsi: String,
})
</script>

<template>
  <div class="judul-halaman">
    <h1>{{ nama }}</h1>
    <p>{{ deskripsi }}</p>
  </div>
</template>
