<template>
  <CustomLayout class="q-pa-md">
    <CustomCard>
      <template v-slot:content>
        <div v-if="!loading" class="row q-col-gutter-md">
          <CustomInputText
            class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"
            :label="t('login')"
          />
          <CustomInputText
            class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"
            :label="t('email')"
          />
          <CustomInputText
            class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"
            :label="t('senha')"
          />
          <CustomInputText
            class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"
            :label="t('senha')"
          />
        </div>
        <div v-else class="row q-col-gutter-md">
          <CustomSkeleton  :components="skeleton"/>
        </div>
      </template>
    </CustomCard>
  </CustomLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";	
import { useI18n } from "vue-i18n";

import CustomCard from "src/components/cards/CustomCard.vue";
import CustomLayout from "src/components/util/CustomLayout.vue";
import CustomInputText from "src/components/inputs/CustomInputText.vue";
import CustomSkeleton from 'src/components/util/CustomSkeleton.vue';

const { t } = useI18n();

const loading = ref(true);

const skeleton = ref([
  {
    type: 'QInput',
    class: "col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"
  },
  {
    type: 'QInput',
    class: "col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"
  },
  {
    type: 'QInput',
    class: "col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"
  },
  {
    type: 'QInput',
    class: "col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"
  },
]);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
</script>
