<template>
  <CustomLayout>
    <CustomCard>
      <template v-slot:content>
        <div class="text-h6">{{ t("home") }}</div>
      </template>
    </CustomCard>
  </CustomLayout>
</template>

<script setup>
import { useI18n } from "vue-i18n";

import CustomCard from "src/components/cards/CustomCard.vue";
import CustomLayout from "src/components/util/CustomLayout.vue";

const { t } = useI18n();
</script>
