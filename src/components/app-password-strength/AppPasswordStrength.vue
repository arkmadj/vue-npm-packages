<template>
  <div>
    <div class="password-rule">
      <q-icon name="task_alt" size="xs" :color="hasUppercase ? 'green-13' : 'grey-13'" />
      <p class="q-ml-xs" :style="`color: ${ hasUppercase ? 'black' : '#bdbdbd'}`">One uppercase</p>
    </div>
    <div class="password-rule">
      <q-icon name="task_alt" size="xs" :color="hasLowercase ? 'green-13' : 'grey-13'" />
      <p class="q-ml-xs" :style="`color: ${ hasLowercase ? 'black' : '#bdbdbd'}`">One lowercase</p>
    </div>
    <div class="password-rule">
      <q-icon name="task_alt" size="xs" :color="hasNumber ? 'green-13' : 'grey-13'" />
      <p class="q-ml-xs" :style="`color: ${ hasNumber ? 'black' : '#bdbdbd'}`">One number</p>
    </div>
    <div class="password-rule">
      <q-icon name="task_alt" size="xs" :color="hasSpecialCharacter ? 'green-13' : 'grey-13'" />
      <p class="q-ml-xs" :style="`color: ${ hasSpecialCharacter ? 'black' : '#bdbdbd'}`">One special character</p>
    </div>
    <div class="password-rule">
      <q-icon name="task_alt" size="xs" :color="isEightCharactersLong ? 'green-13' : 'grey-13'" />
      <p class="q-ml-xs" :style="`color: ${ isEightCharactersLong ? 'black' : '#bdbdbd'}`">Eight characters long</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PasswordStrength',
  data () {
    return {
      weak: false,
      medium: false,
      strong: false,
      password: '',
    }
  },
  computed: {
    hasUppercase() {
      const upper = new RegExp('(?=.*[A-Z])');
      return upper.test(this.password);
    },
    hasLowercase() {
      const lower = new RegExp('(?=.*[a-z])');
      return lower.test(this.password);
    },
    hasNumber () {
      const number = new RegExp('(?=.*\\d)');
      return number.test(this.password);
    },
    hasSpecialCharacter () {
      const specialCharacter = new RegExp('(?=.*[-+_!@#$%^&*., ?])');
      return specialCharacter.test(this.password);
    },
    isEightCharactersLong () {
      return this.password.length >= 8;
    },
  },
  methods: {
      checkPasswordStrength (data) {
        this.password = data;
        let timeout;
        let password = document.getElementById('PassEntry');
        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
        let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
        let strong, medium, weak = false;
        if (data) {
          if (strongPassword.test(data)) {
            strong = true;
          } else if (mediumPassword.test(data)) {
            medium = true;
          } else {
            weak = true;
          }
        }
        this.strong = strong;
        this.medium = medium;
        this.weak = weak;
      }
  },
  watch: {
    strong (value) {
      this.$emit('getStrength', value)
    }
  }
}
</script>

<style scoped lang="scss">
  @import './AppPasswordStrength.scss';
</style>
