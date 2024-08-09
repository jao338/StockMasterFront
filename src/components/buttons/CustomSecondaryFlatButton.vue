<template>
  <q-btn
    data-cy="btn-secondaryFlat"
    :color="props.color"
    :icon="props.icon"
    :to="{ name: props.to }"
    @click="props.to ? router.push(props.to) : ''"
    flat
    rounded
  >
    {{ message }}
  </q-btn>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  message: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  to: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
    default: "secondary",
  },
});
</script>
