<template>
  <q-footer
    :class="!$q.dark.isActive ? 'bg-white q-pa-sm flex' : 'bg-black q-pa-sm flex'"
    bordered
  >
    <q-toolbar>
      <q-toolbar-title class="flex justify-center text-black">
        <span class="text-name">{{ t('desenvolvido_por') }}</span>
      </q-toolbar-title>
    </q-toolbar></q-footer>

</template>
<script setup>
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";

const q = useQuasar();
const { t } = useI18n();

</script>

<style>
.text-name {
  font-size: 12px;
}
</style>
