<template>
  <div class="q-pa-sm row">
    <div class="q-pa-sm col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <CustomSelectTable
        :rows="rowsDepartament"
        :columns="columnsDepartament"
        row_key="id_departament"
        v-model:selected="selected"
      ></CustomSelectTable>
    </div>
    <div class="q-pa-sm col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <CustomTable
        :rows="rowsUser"
        :columns="columnsUser"
        row_key="id_user"
      >
      </CustomTable>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

import useFunctions from "src/composables/useFunctions";
import CustomSelectTable from "src/components/tables/CustomSelectTable.vue";
import CustomTable from "src/components/tables/CustomTable.vue";

const { transformStatus, transformAccessType } = useFunctions();

const selected = ref([]);

const columnsDepartament = [
  {
    name: "id_departament",
    field: "id_departament",
    required: true,
    label: "ID",
    align: "left",
    sortable: true,
  },
  {
    name: "name_departament",
    field: "name_departament",
    required: true,
    label: "Name",
    align: "left",
    sortable: true,
  },
  {
    name: "description_departament",
    field: "description_departament",
    required: true,
    label: "Description",
    align: "left",
    sortable: true,
  },
  {
    name: "created_at",
    field: "created_at",
    required: true,
    label: "Data - Creation",
    align: "left",
    sortable: true,
  },
  {
    name: "updated_at",
    field: "updated_at",
    required: true,
    label: "Data - Last. Update",
    align: "left",
    sortable: true,
  },
  {
    name: "name_manager",
    field: "name_manager",
    required: true,
    label: "Name - Manager",
    align: "left",
    sortable: true,
  },
];

const rowsDepartament = [
  {
    id_departament: 1,
    name_departament: "Departament 1",
    description_departament: "Description 1",
    created_at: "2022-01-01",
    updated_at: "2022-01-01",
    name_manager: "Manager 1",
  },
  {
    id_departament: 2,
    name_departament: "Departament 2",
    description_departament: "Description 2",
    created_at: "2022-01-01",
    updated_at: "2022-01-01",
    name_manager: "Manager 2",
  },
];

const columnsUser = [
  {
    name: "id_user",
    field: "id_user",
    required: true,
    label: "ID",
    align: "left",
    sortable: true,
  },
  {
    name: "name_user",
    field: "name_user",
    required: true,
    label: "Name",
    align: "left",
    sortable: true,
  },
  {
    name: "email_user",
    field: "email_user",
    required: true,
    label: "Email",
    align: "left",
    sortable: true,
  },
  {
    name: "status_user",
    field: "status_user",
    required: true,
    label: "Status",
    align: "left",
    format: (val) => transformStatus(val),
    sortable: true,
  },
  {
    name: "access_type",
    field: "access_type",
    required: true,
    label: "Tipo de acesso",
    align: "left",
    format: (val) => transformAccessType(val),
    sortable: true,
  },
];

const rowsUser = [
  {
    id_user: 1,
    name_user: "Xerox da Silva",
    email_user: "xerox123holmes@hotmail.com",
    status_user: 1,
    acess_type: 1,
  },
  {
    id_user: 2,
    name_user: "Ricardo dos Santos, vulgo Ricardão",
    email_user: "oricardohotmail.com",
    status_user: 0,
    acess_type: 3,
  },
];
</script>
