<template>
  <q-carousel
    animated
    v-model="slide"
    arrows
    navigation
    infinite
  >
    <q-carousel-slide 
      v-for="item in items" 
      :key="item.name" 
      :name="item.name"
      :img-src="item.src"
    >
    </q-carousel-slide>
    
  </q-carousel>
</template>

<script setup>
import { ref } from 'vue';

const slide = ref(1);

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>