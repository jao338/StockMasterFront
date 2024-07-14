<template>
  <CustomLayout view="lHh Lpr lFf">
    <CustomHeader
      :message="$t('lorem')"
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
        <CustomSecondaryButton icon="logout" />
      </template>
    </CustomHeader>
    <CustomDrawer v-model="drawer" />
    <q-page-container>
      <router-view />
    </q-page-container>
    <CustomFooter/>
  </CustomLayout>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

import CustomDrawer from "src/components/drawer/CustomDrawer.vue";
import CustomHeader from "src/components/header/CustomHeader.vue";
import CustomFooter from "src/components/footer/CustomFooter.vue"
import CustomPrimaryButton from "src/components/buttons/CustomPrimaryButton.vue";
import CustomSecondaryButton from "src/components/buttons/CustomSecondaryButton.vue"
import CustomToggle from "src/components/util/CustomToggle.vue";
import CustomLayout from "src/components/util/CustomLayout.vue"

const { t } = useI18n();

const drawer = ref(true);

const toggleDrawerValue = () => {
  drawer.value = !drawer.value;
};

defineOptions({
  name: "DefaultLayout",
});
</script>
