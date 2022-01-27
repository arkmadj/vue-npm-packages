<template>
  <Input :inputType="isPwd ? 'password' : 'text'" v-bind="$attrs" :rules="strengthRules(strong)">
    <template v-slot:append-item>
      <q-icon
        :name="isPwd ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="isPwd = !isPwd"
        size="xs"
      />
    </template>
  </Input>
  <PasswordStrength
    ref="passwordStrengthRef"
    class="q-mb-md"
    v-if="checkStrength"
    @getStrength="handleStength"
  />
</template>

<script>
import Input from '../app-input/AppInput.vue'
import { strengthRules } from '../../helpers/formValidationRules';
import PasswordStrength from '../app-password-strength/AppPasswordStrength.vue'

export default {
  name: 'PasswordInput',
  props: {
    checkStrength: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Input,
    PasswordStrength,
  },
  data() {
    return {
      isPwd: true,
      strong: false,
      strengthRules,
    }
  },
  methods: {
    handleStength(value) {
      this.strong = value
    },
  },
  watch: {
    'strengthPassword': function (data) {
        console.log("I am here!!!")
      this.$refs.passwordStrengthRef.checkPasswordStrength(data)
    },
  },
}
</script>

<style></style>
