<template>
  <q-table
    :pagination="paginate"
    :title="title"
    :rows="rows"
    :columns="columns"
    selection="single"
    :row-key="row_key"
  >
  </q-table>
</template>
<script setup>
defineProps({
  rows: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
  row_key: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  paginate: {
    type: Object,
    required: false,
  },
});
</script>
