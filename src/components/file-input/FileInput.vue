<template>
  <div class="input-field">
    <div class="input-label">{{ label }} <span v-show="required" style="color: red">*</span></div>
    <q-file
    dense
      v-model="files"
      outlined
      use-chips
      multiple
    >
    <!-- <div class="file-input-content"> -->
      <!-- <template v-slot:file></template> -->
      <div style="color: #636363" v-if="files.length === 0" class="file-placeholder">Select file</div>
    <!-- </div> -->
    
    </q-file>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'FileInput',
  props: {
    label: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    }
  },
  setup() {
    return {
      files: ref([]),
    }
  },
  computed: {
    inputStyle() {
      return {
        color: '#0B8F99',
        // background: '#0B8F99'
      }
    },
    validationRules() {
      const { required, rules } = this
      const requredRule = (val) => !!val || 'This field is Required'
      return required ? [requredRule, ...rules] : rules
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss">
@import './FileInput.scss';
</style>
