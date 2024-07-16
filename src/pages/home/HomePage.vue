<template>
  <CustomLayout class="q-pa-md">
    <CustomCard>
      <template v-slot:content>
        <h4 class="col-12">{{ t("home") }}</h4>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          atque temporibus inventore aspernatur iste illo et consectetur quasi
          sunt odit impedit fugiat eaque perferendis, soluta facilis in ipsum
          dolore expedita.
        </div>
        <CustomExcel :data="items"></CustomExcel>
      </template>
    </CustomCard>
  </CustomLayout>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

import CustomCard from "src/components/cards/CustomCard.vue";
import CustomLayout from "src/components/util/CustomLayout.vue";
import CustomExcel from "src/components/buttons/CustomExcelButton.vue";

const { t } = useI18n();

const items = ref([
  {
    name: 1,
    src: "https://cdn.quasar.dev/img/mountains.jpg",
    title: "Lorem 1",
    text: "Lorem 1",
  },
  {
    name: 2,
    src: "https://cdn.quasar.dev/img/mountains.jpg",
    title: "Lorem 2",
    text: "Lorem 2",
  },
]);
</script>
