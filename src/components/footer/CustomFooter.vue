<template>
  <q-footer
    :class="!$q.dark.isActive ? 'bg-white q-pa-sm flex' : 'bg-black q-pa-sm flex'"
    bordered
  >
    <q-toolbar>
      <q-toolbar-title class="row text-black">
        <q-item class="flex items-center column col-xl-6 col-md-6 col-xs-6">
          <q-item clickable class="text-subtitle2">
            <q-item-label class="colorActive">{{ t('link', 2) }}</q-item-label>
          </q-item>
          <div class="q-mt-md">
            <div class="flex">
              <q-item-section class="text-caption">
                <q-icon name="bluetooth"></q-icon>
              </q-item-section>
              <q-item-section class="text-caption">{{ t('profile') }}</q-item-section>
            </div>
            <div class="flex">
              <q-item-section class="text-caption">
                <q-icon name="settings"></q-icon>
              </q-item-section>
              <q-item-section class="text-caption">{{ t('configuracoes') }}</q-item-section>
            </div>
          </div>
        </q-item>
      </q-toolbar-title>
    </q-toolbar>

  </q-footer>

</template>
<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { q } = useQuasar();
const { t } = useI18n();

const colorActive = ref(true)

</script>

<style>
.colorActive{
  border-bottom: 2px solid;
  border-image: linear-gradient(to right, #00C853 50%, transparent 50%) 100% 1;
  padding: 0;
}
</style>
