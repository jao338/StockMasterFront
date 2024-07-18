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
        <CustomWindowsCard :items="links"></CustomWindowsCard>
      </template>
    </CustomCard>
  </CustomLayout>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { markRaw } from "vue";

import CustomCard from "src/components/cards/CustomCard.vue";
import CustomLayout from "src/components/util/CustomLayout.vue";
import CustomWindowsCard from "src/components/util/CustomWindowsCard.vue"
import ExamplePage from "src/pages/example/ExamplePage.vue"
import ExamplePageTwo from "src/pages/example/ExamplePageTwo.vue"

const { t } = useI18n();

const links = [
  {
    title: t("exemplo"),
    component: markRaw(ExamplePage)
  },

  {
    title: t("exemplo"),
    component: markRaw(ExamplePageTwo)
  },
];
</script>
