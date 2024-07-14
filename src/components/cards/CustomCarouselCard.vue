<template>
    <q-card>
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-h6">
          Title
        </div>
      </q-img>

      <q-card-section>
        {{ t('lorem') }}
      </q-card-section>
    </q-card>
</template>

<script setup>
import { useI18n } from "vue-i18n"

const { t } = useI18n();

</script>