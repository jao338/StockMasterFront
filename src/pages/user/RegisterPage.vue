<template>
  <q-layout class="flex justify-center items-center window-height window-width">
    <q-page-container class="flex justify-center items-center">
      <q-card class="bg-white card">
        <q-card-section>
          <q-form
            @submit.prevent="submit"
            class="q-ma-md row flex items-start column"
          >
            <div class="text-h6 text-black text-center full-width q-mb-md">
              {{ $t("register") }}
            </div>
            <custom-input-text
              class="full-width q-mb-sm"
              v-model="form.email"
              :rules="[requiredField]"
              :label="$t('email')"
            ></custom-input-text>
            <custom-input-password
              class="full-width"
              v-model="form.password"
              :type="isPwd ? 'password' : 'text'"
              :isPwd="isPwd"
              @toggleIsPwd="toggleIsPwd"
              :rules="[requiredField]"
              :label="$t('senha')"
            ></custom-input-password>
            <custom-button
              @click="submit"
              type="submit"
              class="full-width"
              color="green-14"
              :message="$t('criar_conta')"
            ></custom-button>
          </q-form>
        </q-card-section>
      </q-card>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import Validations from "src/composables/Validations";

import CustomInputText from "../../components/inputs/CustomInputText.vue";
import CustomInputPassword from "../../components/inputs/CustomInputPassword.vue";
import CustomButton from "../../components/buttons/CustomButton.vue";
// import LoginService from "./LoginService";

const { requiredField } = Validations();
// const { post } = LoginService();
const { t } = useI18n();

const isPwd = ref(true);

const form = ref({
  email: "",
  password: "",
  tipo_acesso: 1,
});
const toggleIsPwd = () => {
  isPwd.value = !isPwd.value;
};

const submit = async () => {
  // const response = await post(form.value);
  console.log(form.value);
};
</script>
