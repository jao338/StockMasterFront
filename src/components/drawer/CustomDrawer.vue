<template>
  <q-drawer bordered :width="200">
    <q-list>
      <div
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
      </div>

      <CustomLink v-for="link in linksList" :key="link.title" v-bind="link" />
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
