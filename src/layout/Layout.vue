<template>
  <q-layout view="lHh Lpr lFf">
    <CustomHeader :message="$t('stockmaster')" icon="home">
      <template v-slot:buttons>
        <CustomButton
          icon="account_circle"
          color="green-14"
          :message="$t('profile')"
          rounded
          class="q-mr-sm"
          to="profile"
        />
        <CustomButton class="abc" icon="logout" color="green-13" rounded />
      </template>
    </CustomHeader>
    <CustomDrawer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useI18n } from "vue-i18n";

import CustomDrawer from "src/components/drawer/CustomDrawer.vue";
import CustomHeader from "src/components/header/CustomHeader.vue";
import CustomButton from "src/components/buttons/CustomButton.vue";

const { t } = useI18n();

defineOptions({
  name: "HomeLayout",
});
</script>

<style>
</style>
