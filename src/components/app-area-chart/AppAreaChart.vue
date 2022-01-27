<template>
  <area-chart
    :dataset="{
      backgroundColor: getBackgroundColor,
      borderColor: getBorderColor,
      pointRadius: 0,
      lineTension: 0,
    }"
    :legend="false"
    :library="chartOptions"
    :data="data"
  ></area-chart>
</template>

<script>
export default {
  name: "AppAreaChart",
  props: {
    data: {
      type: Array,
    },
    isEmptyState: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      chartOptions: {
        scales: {
          y: {
            grid: {
              drawBorder: false,
            },
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return "₦" + value;
              },
            },
          },
        },
        animation: {},
      },
    };
  },
  computed: {
    getBackgroundColor() {
      return this.isEmptyState ? ["black", "black"] : ["#C2E3E5", "#FFF2BF"];
    },
    getBorderColor() {
      return this.isEmptyState ? ["black", "black"] : ["#0B8F99", "#FFCC00"];
    },
  },
};
</script>

<style></style>
