import { Story } from '@storybook/vue3'
import AppInput from './app-input/AppInput.vue'
import AppPasswordInput from './app-password-input/AppPasswordInput.vue'
import { emailRules, ninRules, bvnRules } from '../helpers/formValidationRules'

export default {
  title: 'Components/AppInput',
  component: AppInput,
  argType: {
    // onClick: {},
  },
}
const Template: Story = (args) => ({
  components: { AppInput },
  setup() {
    return { args }
  },
  template: `
  <app-input v-bind="args">
  </app-input>
  `,
})

const PasswordTemplate: Story = (args) => ({
  components: { AppPasswordInput },
  setup() {
    return { args }
  },
  template: '<app-password-input v-bind="args"/>',
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Enter Your Name',
  outlined: true,
  loading: false,
  dense: true,
  hint: 'Minimum of 5 characters',
  placeholder: 'John Doe AC130',
  required: true,
}

export const Email = Template.bind({})
Email.args = {
  label: 'Email',
  outlined: true,
  loading: false,
  password: true,
  required: true,
  placeholder: 'johndoe@email.com',
  dense: true,
  rules: emailRules(),
}

export const NIN = Template.bind({})
NIN.args = {
  label: 'Email',
  outlined: true,
  loading: false,
  required: true,
  placeholder: '12345678900',
  dense: true,
  rules: ninRules(),
}

export const BVN = Template.bind({})
BVN.args = {
  label: 'Email',
  outlined: true,
  loading: false,
  required: true,
  placeholder: '12345678901',
  dense: true,
  rules: bvnRules(),
}

export const Password = PasswordTemplate.bind({})
Password.args = {
  label: 'Password',
  outlined: true,
  dense: true,
  required: true,
  color: 'primary',
  placeholder: 'Password',
}

export const Filled = PasswordTemplate.bind({})
Filled.args = {
  label: 'Password',
  outlined: true,
  dense: true,
  required: true,
  color: 'primary',
  background: 'accent',
  placeholder: 'Filled with Password',
}

export const WithPasswordStrength = PasswordTemplate.bind({})
WithPasswordStrength.args = {
  label: 'Password with strength',
  outlined: true,
  dense: true,
  required: true,
  color: 'primary',
  background: 'accent',
  placeholder: 'Filled with Password',
  checkStrength: true,
  // rules: bvnRules
}

export const Search = Template.bind({})
Search.args = {
  // label: 'Password',
  outlined: true,
  dense: true,
  color: 'primary',
  background: 'accent',
  placeholder: 'Search',
  prepend: 'search',
  append: 'close',
  inputType: 'search',
}
