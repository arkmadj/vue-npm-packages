<template>
  <div>
    <div v-if="label">
      {{label}} <span v-show="required" style="color: red">*</span>
    </div>
    <q-select
      :style="styles"
      outlined
      dense
      v-bind="$attrs"
      :options="options"
      emit-value
      map-options
      :rules="validationRules"
      lazy-rules="ondemand"
      v-model="filter"
    >
      <template v-slot:selected v-if="$attrs.modelValue === null">
        <div style="color: #AAAAAA;">Select</div>
      </template>
    </q-select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    label: {
      type: String
    },
    styles: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
    required: {
      type: Boolean,
      default: false
    },
    selectedValue: {
      type: String,
      default: '',
    },
    rules: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      filter: this.selectedValue
    }
  },
  computed: {
    validationRules () {
      const { required, rules } = this;
      const requredRule = val => !!val || 'This field is Required';
      return required ? [ requredRule, ...rules ] : rules;
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  @import './AppSelect.scss'
</style>
