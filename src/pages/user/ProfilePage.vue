<template>
  <CustomLayout class="row justify-center items-center">
    <CustomHorizontalCard class="row column col-12 col-md-10">
      <template v-slot:left>
        <div class="col-12 col-md-4 q-pa-md">
          <CustomSecondaryFlatButton to="/" icon="arrow_back" />
          <q-item
            class="bg-white flex column items-center justify-center q-pa-lg"
            style="
              border-radius: 50%;
              border: 1px solid #e0e0e0;
              height: 25vw;
              width: 25vw;
            "
          >
            <q-img src="src/assets/img/cat.jpg" :alt="t('nao_encontrado')" />
            <div style="margin-left: 50%">
              <CustomInputButton v-model="img" />
            </div>
          </q-item>
        </div>
      </template>

      <template v-slot:right>
        <q-item
          class="flex column col-12 col-md-8 q-pa-md q-pl-xl"
          style="border-radius: 96px 0px 0px 96px; border: 1px solid #e0e0e0"
        >
          <q-item-label class="text-h5 text-weight-bold">
            {{ form.name }}
          </q-item-label>
          <q-item-label caption>{{ form.email }}</q-item-label>
          <q-item-label class="text-weight-bold q-pt-md q-pb-md">{{ t("informacoes") }}</q-item-label>

          <q-form @submit.prevent="submit" class="row q-col-gutter-md">
            <CustomInputText
              v-model="form.login"
              class="q-mb-sm col-12 col-md-4"
              :label="$t('login')"
            />
            <CustomInputText
              v-model="form.name"
              class="q-mb-sm col-12 col-md-4"
              :label="$t('nome')"
            />
            <CustomInputText
              v-model="form.email"
              class="q-mb-sm col-12 col-md-4"
              :label="$t('email')"
              disable
            />
            <CustomInputText
              v-model="form.departament"
              class="q-mb-sm col-12 col-md-4"
              :label="$t('departamento')"
              disable
            />
            <CustomInputText
              v-model="form.office"
              class="q-mb-sm col-12 col-md-4"
              :label="$t('cargo')"
              disable
            />
            <CustomSelect
              v-model="form.status"
              class="q-mb-sm col-12 col-md-4"
              :label="$t('status')"
              :options="options"
              option-label="label"
              option-value="value"
              disable
            />
            <CustomInputText
              v-model="form.telephony"
              class="q-mb-sm col-12 col-md-4"
              :label="$t('telefone')"
            />
            <!-- Trocar para input do tipo date -->
            <CustomInputText
              v-model="form.creation_date"
              class="q-mb-sm col-12 col-md-4"
              :label="$t('data_criacao')"
              disable
            />
          </q-form>
        </q-item>
      </template>
    </CustomHorizontalCard>

    <CustomModal v-model="dialog" filter="blur(4px)">
      <template v-slot:header>
        <div>{{ t("esqueceu_senha") }}</div>
      </template>

      <template v-slot:content>
        <div class="row q-col-gutter-lg">
          <CustomInputText
            class="col-12"
            :label="t('senha')"
          />
          <CustomInputText
            class="col-12"
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
  </CustomLayout>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

import CustomInputText from "src/components/inputs/CustomInputText.vue";
import CustomButton from "src/components/buttons/CustomButton.vue";
import CustomSelect from "src/components/selects/CustomSelect.vue";
import CustomModal from "src/components/modals/CustomModal.vue";
import CustomInputButton from "src/components/buttons/CustomInputButton.vue";
import CustomLayout from "src/components/util/CustomLayout.vue";
import CustomHorizontalCard from "src/components/cards/CustomHorizontalCard.vue";
import CustomSecondaryFlatButton from "src/components/buttons/CustomSecondaryFlatButton.vue";

const { t } = useI18n();

const dialog = ref(false);

const form = ref(resetForm());

const options = [
  { label: "Ativo", value: 1 },
  { label: "Inativo", value: 2 },
  { label: "Pendente", value: 3 },
];

const img = ref(null);

const submit = () => {
  console.log("eokepok");
};

function resetForm() {
  return {
    login: t("login"),
    name: t("lorem"),
    email: t("lorem"),
    departament: "Vendas",
    office: "Vendedor 1",
    status: { label: "Ativo", value: 1 },
    telephony: "+55 (19) 99999-9999",
    creation_date: "04/07/2024",
  };
}
</script>
