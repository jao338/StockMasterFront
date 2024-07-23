<template>
  <CustomLayout class="row justify-center items-center q-pa-md">
      <CustomCard class="bg-white col-xl-3 col-lg-6 col-md-9 col-sm-12 col-xs-12">
        <template v-slot:content>
          <q-form
            @submit.prevent="submit"
            class="q-ma-sm row justify-center"
          >
            <div class="text-h6 text-black text-center full-width q-mb-sm">
              {{ $t("cadastro") }}
            </div>

            <div class="row q-pa-md q-col-gutter-sm">
              <CustomInputText
                class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
                v-model="form.login"
                :rules="[requiredField]"
                :label="$t('login')"
              />
              <CustomInputPassword
                class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
                v-model="form.password"
                :type="isPwd ? 'password' : 'text'"
                :isPwd="isPwd"
                @toggleIsPwd="toggleIsPwd"
                :rules="[requiredField]"
                :label="$t('senha')"
              />
              <CustomInputText
                class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
                v-model="form.email"
                :rules="[requiredField]"
                :label="$t('email')"
              />
              <CustomInputText
                class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
                v-model="form.name_user"
                :rules="[requiredField]"
                :label="$t('nome')"
              />              
              <CustomPrimaryButton
                class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-lg"
                @click="submit"
                type="submit"
                :message="$t('criar_conta')"
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
import CustomInputPassword from "../../components/inputs/CustomInputPassword.vue";
import CustomPrimaryButton from "../../components/buttons/CustomPrimaryButton.vue";
import CustomLayout from "src/components/util/CustomLayout.vue";
import CustomCard from "src/components/cards/CustomCard.vue"
import UserService from "./UserService";

const { requiredField } = useValidations();
const { post } = UserService('api/register');
const { t } = useI18n();

const isPwd = ref(true);

const form = ref({
  email: "",
  password: "",
  name_user: "",
  login: "",
});

const toggleIsPwd = () => {
  isPwd.value = !isPwd.value;
};

const submit = async () => {
  await post(form.value).then((response) => {
    console.log(response);
  })
};
</script>
