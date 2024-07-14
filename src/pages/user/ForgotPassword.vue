<template>
  <CustomLayout class="row justify-center items-center q-pa-md">
      <CustomCard class="bg-white col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <template v-slot:content>
          <q-form
            @submit.prevent="submit"
            class="q-ma-sm row justify-center"
          >
            <div class="text-h6 text-black text-center full-width q-mb-sm">
              {{ $t("esqueceu_senha") }}
            </div>

            <div class="row q-pa-md">
              <custom-input-text
                class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pb-md"
                v-model="form.email"
                :rules="[requiredField]"
                :label="$t('email')"
              />
              <div
                class="q-mb-sm text-caption text-center text-primary col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
              >
                {{ message }}
              </div>
              <custom-primary-button
                class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
                @click="submit"
                type="submit"
                :message="$t('enviar')"
              />
            </div>
          </q-form>
        </template>
      </CustomCard>
  </CustomLayout>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import useValidations from "src/composables/useValidations";

import CustomInputText from "../../components/inputs/CustomInputText.vue";
import CustomPrimaryButton from "../../components/buttons/CustomPrimaryButton.vue";
import CustomLayout from "src/components/util/CustomLayout.vue";
import CustomCard from "src/components/cards/CustomCard.vue"
// import LoginService from "./LoginService";

const { requiredField } = useValidations();
// const { post } = LoginService();
const { t } = useI18n();

const form = ref({
  email: "",
});

const message = ref(t('texto_esqueci_senha_info'))

const submit = async () => {
  // const response = await post(form.value);
  message.value = t('texto_esqueci_senha_aviso')
  console.log(form.value);
};
</script>
