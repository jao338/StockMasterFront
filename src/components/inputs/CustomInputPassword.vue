<template>
  <q-input
    :model-value="props.modelValue"
    @update:modelValue="(val) => emits('update:modelValue', val)"
    :type="props.type"
    filled
    dense
    lazy-rules
  >
    <template v-slot:append>
      <q-icon
        :name="props.isPwd ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="emits('toggleIsPwd', !props.isPwd)"
      />
      <q-icon
        v-if="props.modelValue && props.clearable"
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
  type: {
    type: String,
    required: true,
  },
  isPwd: {
    type: Boolean,
    required: true,
  },
  clearable: {
    type: Boolean,
    default: true,
  },
});

const emits = defineEmits(["update:modelValue", "toggleIsPwd"]);
</script>
