<template>
  <q-item clickable @click="emitValue">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineOptions({
  name: "CustomLinkTwo",
});

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    default: "",
  },
});

const emitValue = () => {
  emits('emitValue');
};

const emits = defineEmits(['emitValue']);
</script>
