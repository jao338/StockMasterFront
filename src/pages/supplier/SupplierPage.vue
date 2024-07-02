<template>
  <q-layout class="row q-pa-md q-pt-xl q-pl-xl flex flex-start justify-start">
    <q-card class="w-100">
      <custom-expansion
        :message="t('fornecedor', 2)"
        icon="transfer_within_a_station"
      >
        <template v-slot:text>
          <q-form
            class="row q-gutter-md flex items-between"
            @submit.prevent="submit"
          >
            <custom-input-text
              v-model="form.name_supplier"
              class="col-md-2"
              :label="$t('nome')"
            />
            <custom-input-text
              v-model="form.cnpj"
              class="col-md-2"
              :label="$t('cnpj')"
            />
            <custom-input-text
              v-model="form.address"
              class="col-md-2"
              :label="$t('endereco')"
            />
            <q-card-actions class="col-lg-5 col-md-5 col-xs-5 justify-end">
              <custom-button
                @click="submit"
                color="green-14"
                icon="search"
                :label="$t('pesquisar')"
              ></custom-button>
              <custom-button
                @click="clear"
                color="green-13"
                icon="clear"
                :label="$t('limpar')"
              ></custom-button>
            </q-card-actions>
          </q-form>
        </template>
      </custom-expansion>
      <q-separator></q-separator>
      <custom-table
        class="q-ma-md"
        :rows="rows"
        :columns="columns"
        row_key="id_supplier"
      >
        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="justify-start q-gutter-sm">
            <custom-button
              dense
              size="sm"
              color="primary"
              icon="edit"
              @click="put(props.row.id_supplier)"
            ></custom-button>

            <custom-button
              dense
              size="sm"
              color="negative"
              icon="delete"
              @click="destroy(props.row.id_supplier)"
            ></custom-button>
          </q-td>
        </template>
      </custom-table>
    </q-card>
  </q-layout>
</template>
<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

import CustomExpansion from "src/components/util/CustomExpansion.vue";
import CustomInputText from "src/components/inputs/CustomInputText.vue";
import CustomButton from "src/components/buttons/CustomButton.vue";
import CustomTable from "src/components/tables/CustomTable.vue";

const { t } = useI18n();

const form = ref(resetForm());

function resetForm() {
  return {
    name_supplier: "",
    cnpj: "",
    address: "",
  };
}
const columns = computed(() => {
  return [
    {
      name: "id_supplier",
      field: "id_supplier",
      label: t("id"),
      align: "left",
      sortable: true,
    },
    {
      name: "name_supplier",
      field: "name_supplier",
      label: t("fornecedor"),
      align: "left",
      sortable: true,
    },

    {
      name: "contact",
      field: "contact",
      label: t("contato"),
      align: "left",
      sortable: true,
    },

    {
      name: "cnpj",
      field: "cnpj",
      label: t("cnpj"),
      align: "left",
      sortable: true,
    },

    {
      name: "address",
      field: "address",
      label: t("endereco"),
      align: "left",
      sortable: true,
    },

    {
      name: "actions",
      field: "actions",
      label: t("acao"),
      align: "center",
    },
  ];
});

const rows = computed(() => {
  return [
    {
      id_supplier: 1,
      name_supplier: "test1",
      contact: "teste1",
      cnpj: "teste1",
      address: "teste1",
    },

    {
      id_supplier: 2,
      name_supplier: "teste2",
      contact: "teste2",
      cnpj: "teste2",
      address: "teste2",
    },
  ];
});

const put = (value) => {
  console.log(value);
};

const destroy = (value) => {
  console.log(value);
};

const submit = () => {
  console.log("submit");
};

const clear = () => {
  form.value = resetForm();
};
</script>
