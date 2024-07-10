<template>
  <q-btn :color="color" :icon="icon" :to="{ name: to }">
    {{ message }}
  </q-btn>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  to: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
})
</script>
