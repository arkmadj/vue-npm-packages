import { Story } from '@storybook/vue3'
import AppSelect from './app-select/AppSelect.vue'

export default {
  title: 'Components/AppSelect',
  component: AppSelect,
  argType: {},
}

const Template: Story = (args) => ({
  components: { AppSelect },
  setup() {
    return { args,}
  },
  template: '<app-select v-bind="args"/>',
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Select Your Gender',
  options: ['Male', 'Female'],
  required: true,
}

export const SelectWithValue = Template.bind({})
SelectWithValue.args = {
  label: 'Select Your Gender',
  options: ['Male', 'Female'],
  required: true,
  selectedValue: 'Male'
}