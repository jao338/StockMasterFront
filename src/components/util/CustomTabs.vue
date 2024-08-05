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
      v-for="(tabItem, index) in tabItems"
      :key="index"
      :name="t(tabItem.name)"
      :label="t(tabItem.label)"
      :icon="tabItem.icon"
    >
  </q-tab>
  <q-separator/>
    <q-tab-panels
      v-model="tab"
      class="q-pa-sm"
      animated
    >
      <q-tab-panel
        v-for="(tabItem, index) in tabItems"
        :key="index"
        :name="t(tabItem.name)"
      >
      <component :is="tabItem.component" />
      </q-tab-panel>
    </q-tab-panels>
  </q-tabs>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import ExamplePage from "src/pages/example/ExamplePage.vue";

const tab = ref("mails");
const { t } = useI18n();

const tabItems = ref([
  {
    name: "mails",
    label: "mails",
    icon: "mail",
    component: ExamplePage
  },
  {
    name: "alarms",
    label: "alarms",
    icon: "alarm",
    component: ExamplePage
  },
  {
    name: "movies",
    label: "movies",
    icon: "movie",
    component: ExamplePage
  },
])
</script>
