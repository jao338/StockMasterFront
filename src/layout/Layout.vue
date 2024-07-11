<template>
  <q-layout view="lHh Lpr lFf">
    <custom-header
      :message="$t('lorem')"
      @toogleDrawer="toggleDrawerValue"
    >
      <template v-slot:buttons>
        <custom-toggle />
        <custom-button
          icon="account_circle"
          color="green-14"
          :message="$t('profile')"
          rounded
          class="q-mr-sm"
          to="profile"
        />
        <custom-button icon="logout" color="green-13" rounded />
      </template>
    </custom-header>
    <custom-drawer v-model="drawer" />
    <q-page-container>
      <router-view />
    </q-page-container>
    <custom-footer>
    </custom-footer>
  </q-layout>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

import CustomDrawer from "src/components/drawer/CustomDrawer.vue";
import CustomHeader from "src/components/header/CustomHeader.vue";
import CustomFooter from "src/components/footer/CustomFooter.vue"
import CustomButton from "src/components/buttons/CustomButton.vue";
import CustomToggle from "src/components/util/CustomToggle.vue";

const { t } = useI18n();

const drawer = ref(true);

const toggleDrawerValue = () => {
  drawer.value = !drawer.value;
};

defineOptions({
  name: "DefaultLayout",
});
</script>
