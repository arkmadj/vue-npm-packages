<template>
  <span :style="badgeStyle" class="badge-class">
    <!-- <q-badge rounded color="transparent">{{ label }}</q-badge> -->
    <span>
    {{label}}
    </span>
    <span v-if="title" class="badge-title">
    {{title}}
    </span>
  </span>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    label: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    bgColor: {
      type: String,
      default: 'rgba(0, 204, 102, 0.1)'
    },
    color: {
      type: String,
      default: '#00CC66'
    },
  },
  computed:{
    badgeStyle() {
      return {
        // borderColor: this.title ? '#C4C4C4' : '',
        // borderColor: '#000',
        border: this.title !== '' ? '1px solid #C4C4C4' : '0px',
        padding: '4px 8px',
        background: this.bgColor,
        color: this.color,
        borderRadius: '20px',
        fontWeight: '500',
        // borderWidth: '3px'
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import './AppBadge.scss';
</style>
