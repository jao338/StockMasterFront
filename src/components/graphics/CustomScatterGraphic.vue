<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { Chart, registerables } from "chart.js";
import { defineProps } from "vue";

Chart.register(...registerables);

const chartCanvas = ref(null);

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

onMounted(async () => {
  await nextTick();

  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext("2d");

    if (ctx) {
      new Chart(ctx, {
        type: 'scatter',
        data: {
          datasets: [{
            label: props.label,
            data: [{
              x: -7,
              y: 0
            }, {
              x: 0,
              y: 7
            }, {
              x: 7,
              y: 5
            }, {
              x: 0.5,
              y: 5.5
            }],
            backgroundColor: getRandomColor
          }],
        },
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom'
            }
          }
        }
      });

    }
  }
});

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>
