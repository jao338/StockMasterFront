<template>
  <q-drawer bordered :width="230">
    <q-list class="flex column full-height">
      <q-item
        class="flex column justify-center items-center q-pa-md bg-transparent"
      >
        <CustomAvatar
          class="cursor-pointer" 
          @click="router.push('/profile')"
          link="/profile"
          src="src/assets/img/cat.jpg"
        />
        <div
          :class="!$q.dark.isActive ? 'text-h6 text-black text-weight-bold' : 'text-h6 text-white text-weight-bold'"
        >
          {{ t('lorem') }}
        </div>
        <div class="text-grey">{{ t('lorem') }}</div>
      </q-item>
      <q-separator/>
      <CustomLink v-for="link in linksList" :key="link.title" v-bind="link" />
      <q-space/>
      <q-item clickable tag="a" href="/config">
        <q-item-section avatar>
          <q-icon name="settings"/>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ t('configuracoes') }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup>
import CustomLink from "src/components/util/CustomLink.vue";
import CustomAvatar from "src/components/util/CustomAvatar.vue";

import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const q = useQuasar();
const router = useRouter();
const linksList = [
  {
    title: t("home"),
    icon: "home",
    link: "/",
  },
];
</script>
