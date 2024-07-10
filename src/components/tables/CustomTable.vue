<template>
  <q-table
    :pagination="paginate"
    :title="title"
    :rows="rows"
    :columns="columns"
    :row-key="row_key"
  >
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
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
