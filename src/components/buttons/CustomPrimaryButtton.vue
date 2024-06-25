<template>
  <q-btn color="primary" :icon="icon" :to="{ name: to }">
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
});
</script>
