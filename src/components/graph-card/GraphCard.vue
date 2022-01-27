<template>
  <div class="graph-card">
    <div class="header">
      <div class="header-left">
        <slot name="icon" />
        <div class="title-container">
          <div class="title">{{ title }}</div>
          <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
      </div>
      <div class="header-right">
        <div v-for="(item, key) in legend" :key="key" class="legend-item-container">
          <div key class="legend-item-color" :style="`background: ${item.color};`" />
          <div class="legend-item-text">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <slot name="body" />
  </div>
</template>

<script>
export default {
  name: 'GraphCard',
  props: {
    title: {
      type: String,
    },
    legend: {
      type: Array,
    },
    subTitle: {
      type: String,
    },
  },
}
</script>

<style scoped lang="scss">
@import './GraphCard.scss';
</style>
