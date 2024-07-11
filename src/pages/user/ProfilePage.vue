<template>
  <q-layout class="flex flex-center justify-center">
    <q-card class="row justify-center items-center" style="width: 80vw">
      <q-card-section class="col-lg-3 col-md-3 col-xs-3 flex items-end">
        <q-avatar size="256px" >
          <img src="~src/assets/img/cat.jpg" />
        </q-avatar>
        <q-icon
          @click="upload"
          name="upload"
          size="32px"
          color="secondary"
        />
      </q-card-section>

      <q-card-section class="col-lg-9 col-md-9 col-xs-9 right-card q-pa-xl">
        <q-item-label class="text-h5 text-weight-bold">{{
            form.name
          }}</q-item-label>
        <q-item-label caption>{{ form.email }}</q-item-label>

        <span class="text-weight-bold q-mb-md q-mt-md">{{
            $t("minhas_informacoes")
          }}</span>
        <div class="row q-col-gutter-md">
          <custom-input-text
            v-model="form.name"
            class="q-mb-sm col-lg-4 col-md-4 col-xs-4"
            :label="$t('nome')"
          />
          <custom-input-text
            v-model="form.email"
            class="q-mb-sm col-lg-4 col-md-4 col-xs-4"
            :label="$t('email')"
          />
          <custom-input-text
            v-model="form.departament"
            class="q-mb-sm col-lg-4 col-md-4 col-xs-4"
            :label="$t('departamento')"
            disable
          />
          <custom-input-text
            v-model="form.office"
            class="q-mb-sm col-lg-4 col-md-4 col-xs-4"
            :label="$t('cargo')"
            disable
          />
          <custom-select
            v-model="form.status"
            class="q-mb-sm col-lg-4 col-md-4 col-xs-4"
            :label="$t('status')"
            :options="options"
            option-label="label"
            option-value="value"
            disable
          />
          <custom-input-text
            v-model="form.telephony"
            class="q-mb-sm col-lg-4 col-md-4 col-xs-4"
            :label="$t('telefone')"
          />
          <custom-input-text
            v-model="form.creation_date"
            class="q-mb-sm col-lg-4 col-md-4 col-xs-4"
            :label="$t('data_criacao')"
            disable
          />
          <div class="row full-width justify-end">
            <custom-button
              @click="edit"
              color="primary"
              :label="t('editar')"
              class="q-mr-md"
            />
            <custom-button
              @click="dialog = !dialog"
              color="negative"
              :label="t('trocar_senha')"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
    <custom-modal v-model="dialog" filter="blur(4px)">
      <template v-slot:header>
        <div>{{ t("esqueceu_senha") }}</div>
      </template>

      <template v-slot:content>
        <div class="row q-col-gutter-lg">
          <custom-input-text
            class="col-lg-12 col-md-12 col-xs-12"
            :label="t('senha')"
          />
          <custom-input-text
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
    </custom-modal>
    <custom-button
      class="rotate-180 absolute-top-left q-ml-lg q-mt-lg"
      icon="logout"
      to="home"
      color="secondary"
      fixed-top
    />
  </q-layout>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

import CustomInputText from "src/components/inputs/CustomInputText.vue";
import CustomSelect from "src/components/selects/CustomSelect.vue";
import CustomButton from "src/components/buttons/CustomButton.vue";
import CustomModal from "src/components/modals/CustomModal.vue";

const { t } = useI18n();

const upload = () => {
  alert("upload");
};

const dialog = ref(false);

const edit = () => {
  alert("edit");
};

const options = [
  { label: "Ativo", value: 1 },
  { label: "Inativo", value: 2 },
  { label: "Pendente", value: 3 },
];

function resetForm() {
  return {
    name: "Lorem Ipsum",
    email: "loremipsum123@hotmail.com",
    departament: "Vendas",
    office: "Vendedor 1",
    status: { label: "Ativo", value: 1 },
    telephony: "+55 (19) 99999-9999",
    creation_date: "04/07/2024",
  };
}

const form = resetForm();
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
