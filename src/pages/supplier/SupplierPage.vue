<template>
  <q-layout class="row q-pa-md flex flex-start justify-start">
    <q-card class="full-width">
      <custom-expansion
        :message="t('fornecedor', 2)"
        icon="transfer_within_a_station"
      >
        <template v-slot:text>
          <q-form
            class="row q-col-gutter-md items-center"
            @submit.prevent="submit"
          >
            <custom-input-text
              v-model="form.name_supplier"
              class="col-lg-2 col-md-2 col-xs-4"
              :label="$t('nome')"
            />
            <custom-input-text
              v-model="form.cnpj"
              class="col-lg-2 col-md-2 col-xs-4"
              :label="$t('cnpj')"
            />
            <custom-input-text
              v-model="form.address"
              class="col-lg-2 col-md-2 col-xs-4"
              :label="$t('endereco')"
            />
            <q-card-actions class="col-lg-6 col-md-6 col-xs-12 justify-end">
              <custom-button
                @click="submit"
                color="green-14"
                icon="search"
                :label="$t('pesquisar')"
              />
              <custom-button
                @click="clear"
                color="green-13"
                icon="delete"
                :label="$t('limpar')"
              />
            </q-card-actions>
          </q-form>
        </template>
      </custom-expansion>
      <q-separator />
      <div class="row justify-between">
        <span class="q-mr-md q-mt-md q-ml-md text-h6">{{
          $t("fornecedor", 2)
        }}</span>
        <custom-button
          class="q-mr-md q-mt-md"
          color="green-14"
          icon="add"
          :message="$t('adicionar')"
        />
      </div>
      <custom-table
        :paginate="paginate"
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
              color="blue"
              icon="edit"
              @click="put(props.row.id_supplier)"
            />
            <custom-button
              dense
              size="sm"
              color="negative"
              icon="delete"
              @click="destroy(props.row.id_supplier)"
            />
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
      label: t("nome"),
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

const paginate = {
  rowsPerPage: 15,
};

const array = [];

for (let i = 1; i <= 50; i++) {
  array.push({
    id_supplier: i,
    name_supplier: `teste ${i}`,
    contact: `teste ${i}`,
    cnpj: `teste ${i}`,
    address: `teste ${i}`,
  });
}

const rows = computed(() => {
  return array;
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

<style>
thead tr:first-child th {
  background-color: #00c853;
  font-size: 1rem;
  color: white;
}
</style>
