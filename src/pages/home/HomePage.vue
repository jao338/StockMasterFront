<template>
  <CustomLayout>
    <template v-slot:content>
      <h4 class="col-12">{{ t("home") }}</h4>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium atque temporibus inventore aspernatur iste illo et consectetur quasi sunt odit impedit fugiat eaque perferendis, soluta facilis in ipsum dolore expedita.</div>
    </template>
  </CustomLayout>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import CustomLayout from 'src/components/util/CustomLayout.vue'

const { t } = useI18n();
</script>
