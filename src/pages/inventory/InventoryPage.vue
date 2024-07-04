<template>
  <q-layout class="flex items-start justify-center q-pa-md">
    <q-card class="row full-width">
      <q-card-section
        class="flex column justify-start col-lg-6 col-md-12 col-xs-12"
      >
        <div class="text-h6 q-mb-md">{{ $t("ultimos_7_dias") }}</div>
        <div class="row items-center">
          <strong class="col-lg-2 col-md-2 col-xs-2">{{
            $t("filtrar_por")
          }}</strong>
          <custom-select
            :options="options"
            v-model="select"
            option-value="value"
            option-label="label"
            class="col-lg-10 col-md-10 col-xs-10"
          />
        </div>
        <custom-table
          :paginate="{ rowsPerPage: 10 }"
          class="q-mt-md q-mb-md"
          :rows="rows"
          :columns="columns"
          row_key="id_product"
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
      </q-card-section>
      <q-card-section class="flex justify-start col-lg-6 col-md-12 col-xs-12">
        <div class="text-h6">{{ $t("ultimos_7_dias") }}</div>
        <custom-column-graphic
          :fields="fields"
          :label="t('ultimos_7_dias')"
          :data="data"
          class="full-width q-mr-md q-mt-md q-mb-md"
        />
      </q-card-section>
      <q-card-section class="row full-width">
        <custom-scatter-graphic
          class="col-lg-8 col-md-9 col-xs-12"
          :label="t('lorem')"
        />
        <custom-doughnut-graphic
          class="col-lg-4 col-md-3 col-xs-12"
          :fields="fields"
          :data="data"
          :hoverOffset="4"
        />
      </q-card-section>
    </q-card>
  </q-layout>
</template>
<script setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

import CustomColumnGraphic from "src/components/graphics/CustomColumnGraphic.vue";
import CustomDoughnutGraphic from "src/components/graphics/CustomDoughnutGraphic.vue";
import CustomScatterGraphic from "src/components/graphics/CustomScatterGraphic.vue";
import CustomTable from "src/components/tables/CustomTable.vue";
import CustomButton from "src/components/buttons/CustomButton.vue";
import CustomSelect from "src/components/selects/CustomSelect.vue";

const { t } = useI18n();

// Colunas
const columns = computed(() => {
  return [
    {
      name: "id_product",
      field: "id_product",
      label: t("id"),
      align: "left",
      sortable: true,
    },
    {
      name: "name_product",
      field: "name_product",
      label: t("nome"),
      align: "left",
      sortable: true,
    },

    {
      name: "description_product",
      field: "description_product",
      label: t("descricao"),
      align: "left",
      sortable: true,
    },

    {
      name: "price",
      field: "price",
      label: t("preco"),
      align: "left",
      sortable: true,
    },

    {
      name: "stock_quantity",
      field: "stock_quantity",
      label: t("quantidade"),
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

// Registros
const rows = [];

//  Valor inicial do select
const select = ref({ label: t("ultimos_7_dias"), value: 7 });

//  Registros
const fields = [];
const data = [];

// Cria dados sequencias para teste
for (let i = 1; i <= 15; i++) {
  rows.push({
    id_product: i,
    uuid: i + 1,
    name_product: `Product ${i}`,
    description_product: `Description ${i}`,
    category: `Category ${i}`,
    price: `R$ ${i}`,
    stock_quantity: `${i}`,
  });
  fields.push(`Product ${i}`);
  data.push(`${i}`);
}

//  Define as opções do componente select
const options = [
  { label: t("ultimos_7_dias"), value: 7 },
  { label: t("ultimos_30_dias"), value: 30 },
  { label: t("ultimo_ano"), value: 365 },
];

//  Função para editar
const put = (value) => {
  console.log(value);
};

//  Função para deletar
const destroy = (value) => {
  console.log(value);
};
</script>
