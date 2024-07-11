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
        type: "bar",
        data: {
          labels: props.fields,
          datasets: [
            {
              label: props.label,
              data: props.data,
              backgroundColor: getRandomColor,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }
});

const props = defineProps({
  fields: {
    type: Array,
    required: false,
    default: () => [],
  },
  label: {
    type: String,
    required: true,
    default: "Data",
  },
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
