<template>
  <CustomLayout class="row justify-center items-center q-pa-md">
    <CustomHorizontalCard class="bg-white col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <template v-slot:left>
        <div class="row items-center col-6 justify-start q-pl-md">
          <CustomAvatar
            class="cursor-pointer"
            style="width: 182px; height: 182px"
            src="src/assets/img/cat.jpg"
          />
        </div>

      </template>

      <template v-slot:right>
        <q-img
          class="col-12 border"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
      </template>

    </CustomHorizontalCard>
    <CustomModal v-model="dialog" filter="blur(4px)">
      <template v-slot:header>
        <div>{{ t("esqueceu_senha") }}</div>
      </template>

      <template v-slot:content>
        <div class="row q-col-gutter-lg">
          <CustomInputText
            class="col-lg-12 col-md-12 col-xs-12"
            :label="t('senha')"
          />
          <CustomInputText
            class="col-lg-12 col-md-12 col-xs-12"
            :label="t('confirmacao_senha')"
          />
        </div>
      </template>

      <template v-slot:actions>
        <div class="flex full-width justify-end q-gutter-md">
          <custom-button :label="t('trocar_senha')" color="primary" />
          <custom-button
            class="q-mr-sm"
            :label="t('sair')"
            color="negative"
            @click="dialog = !dialog"
          />
        </div>
      </template>
    </CustomModal>
    <CustomButton
      class="mirrored-icon absolute-top-left q-ml-lg q-mt-lg"
      icon="logout"
      to="home"
      color="secondary"
      fixed-top
    />
  </CustomLayout>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

import CustomInputText from "src/components/inputs/CustomInputText.vue";
import CustomButton from "src/components/buttons/CustomButton.vue";
import CustomModal from "src/components/modals/CustomModal.vue";
import CustomLayout from "src/components/util/CustomLayout.vue";
import CustomHorizontalCard from "src/components/cards/CustomHorizontalCard.vue";
import CustomAvatar from "src/components/util/CustomAvatar.vue"

const { t } = useI18n();

const dialog = ref(false);

</script>

<style>
.right-card {
  color: rgb(0, 0, 0);
  border-radius: 128px 0px 0px 128px !important;
  height: 376px;
  background-color: #dcffee;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
