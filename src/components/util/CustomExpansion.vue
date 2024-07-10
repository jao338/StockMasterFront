<template>
  <q-expansion-item
    expand-separator
    default-opened
    :icon="icon"
    :label="message"
    class="text-h6"
    header-class="bg-green-14 text-white"
    expand-icon-class="text-white"
  >
    <q-card>
      <q-card-section>
        <slot name="text"></slot>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>
<script setup>
defineProps({
  message: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>
