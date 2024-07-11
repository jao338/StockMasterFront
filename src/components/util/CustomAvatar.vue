<template>
    <q-avatar class="q-mb-sm cursor-pointer">
      <img :src="src" :alt="t('nao_encontrado')"/>
    </q-avatar>

</template>

<script setup>
import {useI18n} from "vue-i18n";

const { t } = useI18n();

defineProps({
  src: {
    type: String,
    required: false,
  },

});

</script>
