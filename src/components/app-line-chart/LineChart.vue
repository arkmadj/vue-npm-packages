<template>
  <line-chart
    :dataset="{
      borderColor: getLineColor,
      pointRadius: getPointRadius,
      lineTension: 0,
      pointBackgroundColor: lineColor,
      pointBorderWidth: 0,
      pointHoverBackgroundColor: lineColor,
    }"
    :legend="false"
    :library="chartOptions"
    :data="data"
  ></line-chart>
</template>

<script>
import { enUS } from "date-fns/locale";

export default {
  name: "AppLineChart",
  props: {
    data: {
      type: Object,
    },
    lineColor: {
      type: String,
    },
    toolTipLabel: {
      type: Function,
      default: () => {},
    },
    extraData: {
      type: Object,
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
          x: {
            grid: {
              borderColor: "#000",
            },
            adapters: {
              date: {
              },
            },
          },
          y: {
            grid: {
              suggestedMin: 50,
              suggestedMax: 100,
              drawBorder: false,
              color: (context) => (context.tick.value === 0 ? "" : "#C4C4C4"),
              borderDash: [5],
            },
            ticks: {
              callback: (value) => `₦${value}`,
            },
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: () => {
                return;
              },
              title: (item) => {
                return this.toolTipLabel(item[0], this.extraData);
              },
            },
          },
        },
        animation: {},
      },
    };
  },
  computed: {
    getLineColor() {
      return this.isEmptyState ? "black" : this.lineColor;
    },
    getPointRadius() {
      return this.isEmptyState ? 0 : 5;
    },
  },
};
</script>
