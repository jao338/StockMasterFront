<template>
  <q-carousel
    animated
    v-model="slide"
    arrows
    infinite
  >
    <q-carousel-item
      class=""
      v-for="item in items"
      :key="item.name"
      :name="item.name"
      :img-src="item.src"
    >
    <CustomCarouselCard class="carouselCard"/>

    </q-carousel-item>

  </q-carousel>
</template>

<script setup>
import { ref } from 'vue';

import CustomCarouselCard from "src/components/cards/CustomCarouselCard.vue";

const slide = ref(1);

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style>
.carouselCard{
  width: 900px;
}
</style>
