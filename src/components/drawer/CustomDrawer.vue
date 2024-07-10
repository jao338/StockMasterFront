<template>
  <q-drawer bordered :width="200">
    <q-list>
      <div
        class="flex column justify-center items-center q-pa-md bg-transparent"
      >
        <q-avatar width="64px" height="64px" class="q-mb-sm">
          <img src="~src/assets/img/cat.jpg"/>
        </q-avatar>
        <div class="text-h6 text-black text-weight-bold">Lorem ipsum</div>
        <div class="text-grey">@Lorem ipsum</div>
      </div>

      <custom-link v-for="link in linksList" :key="link.title" v-bind="link" />
    </q-list>
  </q-drawer>
</template>

<script setup>
import CustomLink from "src/components/util/CustomLink.vue";

import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const q = useQuasar();

const linksList = [
  {
    title: t("home"),
    icon: "home",
    link: "/",
  },
  {
    title: t("exemplo"),
    icon: "exemple",
    link: "example",
  },
];
</script>
