<template>
  <q-btn
    :label="$t('excel')"
    icon="attach_file"
    color="primary"
    align="left"
    rounded
    @click="exportToExcel"
  />
</template>

<script setup>
import * as XLSX from 'xlsx-js-style';

defineOptions({
  name: 'ButtonExcel',
});

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
});

const exportToExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(props.data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  worksheet['!cols'] = [{ wch: 10 }, { wch: 10 }, { wch: 20 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 15 }];

  XLSX.writeFile(workbook, 'Tabela.xlsx');
}
</script>
