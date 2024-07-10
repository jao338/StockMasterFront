<template>
  <q-checkbox :label="label" dense />
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>
