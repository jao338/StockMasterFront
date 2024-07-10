<template>
  <q-header
    :class="
      !$q.dark.isActive ? 'bg-white q-pa-sm flex' : 'bg-black q-pa-sm flex'
    "
    elevated
  >
    <q-toolbar>
      <custom-button
        @click="toogleDrawer"
        flat
        round
        color="primary"
        icon="menu"
        v-if="$q.screen.width <= 1024"
        />
      <q-img
        src="~src/assets/img/cat.jpg"
        style="height: 32px; max-width: 32px"
      />
      <q-toolbar-title :class="!$q.dark.isActive ? 'text-black' : 'text-white'">
        {{ message }}
      </q-toolbar-title>

      <slot name="buttons"></slot>
    </q-toolbar>
  </q-header>
</template>
<script setup>
import { useQuasar } from "quasar";
import CustomButton from "src/components/buttons/CustomButton.vue";

const q = useQuasar();

const emits = defineEmits(["toogleDrawer"]);

const toogleDrawer = () => {
  emits("toogleDrawer");
};

defineProps({
  message: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
});
</script>
