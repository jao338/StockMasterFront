<template>
  <q-layout class="q-pa-md q-pl-xl q-pt-xl flex flex-start justify-start">
    <div class="text-h4">{{ t("teste") }}</div>
    <!-- <div class="text-h4">{{ t("status_estoque") }}</div> -->
  </q-layout>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
