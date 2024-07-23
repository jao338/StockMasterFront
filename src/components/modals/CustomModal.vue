<template>
  <q-dialog persistent :backdrop-filter="props.filter">

    <q-card>
      <q-card-section class="row items-center q-pb-none text-h6">
        <slot name="header"></slot>
      </q-card-section>

      <q-card-section>
        <slot name="content"></slot>
      </q-card-section>

      <q-card-actions align="right">
        <slot name="actions"></slot>
      </q-card-actions>
    </q-card>

  </q-dialog>
</template>

<script setup>
const props = defineProps({
  filter: {
    type: String,
    required: false,
  },
});
</script>
