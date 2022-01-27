<template>
  <div :class="`circle ${getStatus(percentage, showStatus)}`">
    <div class="number">{{ growingValue > 0 ? `${growingValue}%` : '--' }}</div>
    <div class="svg">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <circle class="svg-circle1" cx="80" cy="80" r="70" stroke-linecap="round" />
        <circle
          class="svg-circle2"
          :stroke-dashoffset="getStopPoint(percentage)"
          cx="80"
          cy="80"
          r="70"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppCircularProgressBar',
  props: {
    percentage: {
      type: Number,
    },
    showStatus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      growingValue: 0,
    }
  },
  mounted() {
    this.incrementValue()
  },
  //   computed() {
  //       },
  methods: {
    getStatus(percentage, showStatus) {
      return showStatus ? (percentage < 40 ? 'low' : percentage < 75 ? 'medium' : null) : null
    },
    getStopPoint(percentage) {
      return 440 - 440 * (percentage / 100)
    },
    incrementValue() {
      let counter = 0
      this.growingValue = 0
      const myInterval = setInterval(() => {
        if (counter >= this.percentage) {
          clearInterval(myInterval)
        } else {
          counter += 1
          this.growingValue = counter
        }
      }, 10)
    },
  },
  watch: {
    percentage() {
      this.incrementValue()
    },
  },
})
</script>

<style scoped lang="scss">
@import './AppCircularProgressBar.scss';
</style>
