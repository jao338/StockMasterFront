<template>
  <q-tabs
    v-model="tab"
    dense
    class="text-gray"
    active-color="primary"
    indicator-color="primary"
    align="justify"
    narrow-indicator
  >
    <q-tab
      v-for="tabItem in tabs"
      :key="tabItem.name"
      :name="t(tabItem.name)"
      :label="t(tabItem.label)"
      :icon="tabItem.icon"
    />
    <q-separator />
  </q-tabs>

  <q-tab-panels
    v-model="tab"
    class="q-pa-sm"
    animated
  >
    <q-tab-panel
      v-for="tabItem in tabs"
      :key="tabItem.name"
      :name="t(tabItem.name)"
    >
      <component :is="tabItem.component" />
    </q-tab-panel>
  </q-tab-panels>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';


const tab = ref('mails');

const { t } = useI18n();

defineProps({
  tabs: {
    type: Array,
    required: true,
  },
})
</script>
