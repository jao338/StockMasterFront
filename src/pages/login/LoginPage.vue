<template>
  <q-card class="bg-white card">
    <q-card-section>
      <q-form
        @submit.prevent="submit"
        class="q-ma-md row flex items-start column"
      >
        <div class="text-h6 text-black text-center w-100 q-mb-md">Login</div>
        <CustomInputText
          class="w-100 q-mb-sm"
          v-model="form.email"
          :rules="[requiredField]"
          :label="$t('email')"
        ></CustomInputText>
        <CustomInputPassword
          class="w-100"
          v-model="form.password"
          :type="isPwd ? 'password' : 'text'"
          :isPwd="isPwd"
          @toggleIsPwd="toggleIsPwd"
          :rules="[requiredField]"
          :label="$t('senha')"
        ></CustomInputPassword>
        <div class="flex justify-start w-100 q-mb-md">
          <CustomCheckbox
            v-model="form.remember"
            :label="$t('lembrar_de_mim')"
          ></CustomCheckbox>
        </div>
        <CustomButton
          @click=submit
          type="submit"
          class="w-100"
          color="green-14"
          :message="$t('login')"
        ></CustomButton>
        <div class="q-mt-md flex justify-between items-center w-100">
          <a href="/register" class="text-decoration-none">{{
            $t("sem_registro")
          }}</a>
          <CustomButton
            to="/forgot-password"
            color="green-13"
            class="text-caption"
            :message="$t('esqueceu_senha')"
          ></CustomButton>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useI18n } from "vue-i18n";

import Validations from "src/composables/Validations";

import CustomInputText from "../../components/inputs/CustomInputText.vue";
import CustomInputPassword from "../../components/inputs/CustomInputPassword.vue";
import CustomButton from "../../components/buttons/CustomButton.vue";
import CustomCheckbox from "../../components/util/CustomCheckbox.vue";
import LoginService from "./LoginService";

const { requiredField } = Validations();
const { post } = LoginService();
const { t } = useI18n();

const isPwd = ref(true);

const form = reactive({
  $id: 1,
  email: "",
  password: "",
  remember: false,
});

const toggleIsPwd = () => {
  isPwd.value = !isPwd.value;
};

const submit = async () => {
  const response = await post(form.value);
  console.log(response.value);
}; 

</script>

<style>
.card {
  width: 30vw;
  height: auto;
}
.w-100 {
  width: 100%;
}
</style>
