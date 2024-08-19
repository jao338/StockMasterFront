<template>
  <CustomPrimaryFlatButton icon="upload" @click="triggerFileInput"/>
  <q-input
    ref="fileInput"
    class="hidden"
    @update:model-value="val => { fileInput = val[0] }"
    filled
    type="file"
  />
</template>

<script setup>
import { ref } from "vue";
import CustomPrimaryFlatButton from "./CustomPrimaryFlatButton.vue";

const emits = defineEmits(["emitValue"]);

const fileInput = ref(null);

const triggerFileInput = () => {
  fileInput.value.$el.click();
};

// const handleFileChange = () => {
//   emits("emitValue", file);
// };
</script>

