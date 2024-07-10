<template>
  <q-toggle
    v-model="darkMode"
    checked-icon="dark_mode"
    color="green"
    keep-color
    unchecked-icon="brightness_5"
    size="lg"
  />
</template>

<script setup>
import { ref, watch } from "vue";
import { useQuasar } from "quasar";

const darkMode = ref(false);
const $q = useQuasar();

watch(darkMode, (darkMode) => {
  $q.dark.set(darkMode);
});
</script>
