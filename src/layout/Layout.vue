<template>
  <CustomLayout view="lHh Lpr lFf">
    <CustomHeader
      :message="$t('stockmaster')"
      @toogleDrawer="toggleDrawerValue"
    >
      <template v-slot:buttons>
        <CustomToggle/>
        <CustomPrimaryButton
          icon="account_circle"
          :message="$t('profile')"
          class="q-mr-sm"
          to="profile"
        />
        <CustomSecondaryButton @click="logout" icon="logout" />
      </template>
    </CustomHeader>
    <CustomDrawer v-model="drawer" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </CustomLayout>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import { useAuthStore } from "src/stores/authStore";

import CustomDrawer from "src/components/drawer/CustomDrawer.vue";
import CustomHeader from "src/components/header/CustomHeader.vue";
import CustomPrimaryButton from "src/components/buttons/CustomPrimaryButton.vue";
import CustomSecondaryButton from "src/components/buttons/CustomSecondaryButton.vue"
import CustomToggle from "src/components/util/CustomToggle.vue";
import CustomLayout from "src/components/util/CustomLayout.vue"

const { t } = useI18n();

const drawer = ref(true);
const authStore = useAuthStore();

const toggleDrawerValue = () => {
  drawer.value = !drawer.value;
};

const logout = (() => {
  authStore.logout();
})

defineOptions({
  name: "DefaultLayout",
});
</script>
