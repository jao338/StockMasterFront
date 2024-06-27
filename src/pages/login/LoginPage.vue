<template>
  <q-card class="bg-white card">
    <q-card-section>
      <q-form
        @submit.prevent="login"
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
          class="w-100 q-mb-md"
          v-model="form.password"
          :type="isPwd ? 'password' : 'text'"
          :isPwd="isPwd"
          @toggleIsPwd="toggleIsPwd"
          :rules="[requiredField]"
          :label="$t('senha')"
        ></CustomInputPassword>
        <CustomButton
          type="submit"
          class="w-100"
          :message="$t('login')"
        ></CustomButton>
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

const { requiredField } = Validations();
const { t } = useI18n();

const isPwd = ref(true);

const form = reactive({
  email: "",
  password: "",
});

const toggleIsPwd = () => {
  isPwd.value = !isPwd.value;
};

const login = () => {
  alert("ain");
};
</script>

<style>
.card {
  width: 24vw;
  height: auto;
}
.w-100 {
  width: 100%;
}
</style>
