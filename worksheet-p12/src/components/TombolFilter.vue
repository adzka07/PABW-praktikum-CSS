<script setup>
defineProps({
  kategori: Array,
  aktif: String,
})

defineEmits(['pilih'])
</script>

<template>
  <div id="filter" class="filter-bar" aria-label="Filter proyek">
    <button
      v-for="k in kategori"
      :key="k"
      type="button"
      class="filter-button"
      :class="{ aktif: aktif === k }"
      @click="$emit('pilih', k)"
    >
      {{ k === 'semua' ? 'Semua' : k }}
    </button>
  </div>
</template>
