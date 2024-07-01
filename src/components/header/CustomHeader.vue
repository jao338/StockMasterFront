<template>
  <q-header class="bg-white text-black q-pa-sm flex" elevated>
    <q-toolbar>
      <q-img
        src="~src/assets/img/cat.jpg"
        style="height: 32px; max-width: 32px"
      />
      <q-toolbar-title>
        {{ message }}
      </q-toolbar-title>

      <slot name="buttons"></slot>
    </q-toolbar>
  </q-header>
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
});
</script>

<style></style>
