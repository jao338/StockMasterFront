<template>
  <q-carousel
    rounded
    class="rounded"
    animated
    v-model="slide"
    arrows
    infinite
  >
    <q-carousel-slide 
      v-for="item in items" 
      :key="item.name" 
      :name="item.name"
      :img-src="item.src"
    >

    <div class="absolute-bottom custom-caption">
      <div class="text-h4">{{ item.title }}</div>
      <div class="text-subtitle1">{{ item.text }}</div>
    </div>

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

<style>
.rounded{
  border-radius: 48px;
}
</style>
