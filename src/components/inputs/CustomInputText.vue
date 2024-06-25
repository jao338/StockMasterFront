<template>
  <q-input
    :model-value="props.modelValue"
    @update:modelValue="(val) => emits('update:modelValue', val)"
    filled
    dense
    hide-bottom-space
    lazy-rules
  >
    <template v-if="props.modelValue && props.clearable" v-slot:append>
      <q-icon
        class="cursor-pointer"
        name="close"
        @click.stop.prevent="emits('update:modelValue', null)"
      />
    </template>
  </q-input>
</template>

<script setup>
const props = defineProps({
  modelValue: [String, Number],
  clearable: {
    type: Boolean,
    default: true,
  },
});

const emits = defineEmits(["update:modelValue"]);
</script>
