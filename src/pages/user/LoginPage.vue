<template>
  <CustomLayout class="row justify-center items-center">
    <CustomCard class="bg-white col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <template v-slot:content>
        <q-form @submit.prevent="submit" class="q-ma-sm row">
          <CustomSecondaryFlatButton to="/" icon="arrow_back" />
          <div class="text-h6 text-black text-center full-width q-mb-sm">
            {{ $t("login") }}
          </div>

          <div class="row q-pa-md">
            <CustomInputText
              data-cy="input-text-login"
              class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mb-md"
              v-model="form.login"
              :rules="[requiredField]"
              :label="$t('login')"
            />
            <CustomInputPassword
              data-cy="input-text-password"
              class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
              v-model="form.password"
              :type="isPwd ? 'password' : 'text'"
              :isPwd="isPwd"
              @toggleIsPwd="toggleIsPwd"
              :rules="[requiredField]"
              :label="$t('senha')"
            />
            <CustomCheckbox
              data-cy="input-checkbox-remember"
              class="q-mb-md col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
              v-model="form.remember"
              :label="$t('lembrar_de_mim')"
            />
            <CustomPrimaryButton
              class="q-pa-sm col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
              @click="submit"
              type="submit"
              :message="$t('login')"
            />
            <div
              class="row justify-between items-center q-mt-md col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
            >
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <CustomSecondaryFlatButton
                  to="/register"
                  class="text-caption"
                  :message="$t('sem_registro')"
                />
              </div>

              <CustomSecondaryButton
                to="/forgotPassword"
                class="q-pa-sm text-caption col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6"
                :message="$t('esqueceu_senha')"
              />
            </div>
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
import CustomInputPassword from "../../components/inputs/CustomInputPassword.vue";
import CustomPrimaryButton from "../../components/buttons/CustomPrimaryButton.vue";
import CustomSecondaryButton from "../../components/buttons/CustomSecondaryButton.vue";
import CustomSecondaryFlatButton from "../../components/buttons/CustomSecondaryFlatButton.vue";
import CustomCheckbox from "../../components/util/CustomCheckbox.vue";
import CustomLayout from "src/components/util/CustomLayout.vue";
import CustomCard from "src/components/cards/CustomCard.vue";
// import LoginService from "./LoginService";

const { requiredField } = useValidations();
// const { post } = LoginService('api/login');
const { t } = useI18n();

const isPwd = ref(true);

const form = ref({
  login: "",
  password: "",
  remember: false,
});
const toggleIsPwd = () => {
  isPwd.value = !isPwd.value;
};

const submit = async () => {
  // const response = await post(form.value);
  console.log(form.value);
};
</script>
