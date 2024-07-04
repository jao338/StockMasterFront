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

const props = defineProps({
  fields: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  hoverOffset: {
    type: Number,
    default: 4,
  },
});

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
        type: "doughnut",
        data: {
          labels: props.fields,
          datasets: [
            {
              label: "My Dataset",
              data: props.data,
              backgroundColor: getRandomColor,
              hoverOffset: props.hoverOffset,
              rotation: 0,
            },
          ],
        },
      });
    }
  }
});
</script>
