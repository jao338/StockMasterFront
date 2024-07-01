<template>
  <q-select
    standout
    filled
    dense
    :options="options"
    :label="message"
  />
</template>

<script setup>
defineProps({
  message: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
})
</script>

