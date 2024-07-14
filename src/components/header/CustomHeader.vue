<template>
  <q-header
    :class="
      !$q.dark.isActive ? 'bg-white q-pa-sm flex' : 'bg-black q-pa-sm flex'
    "
    elevated
  >
    <q-toolbar>
      <custom-primary-flat-button
        @click="toogleDrawer"
        round
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
import CustomPrimaryFlatButton from "src/components/buttons/CustomPrimaryButtonFlat.vue";

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
