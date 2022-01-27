import { Story } from '@storybook/vue3'
import Toggle from '../components/app-toggle/AppToggle.vue'

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argType: {},
}

const Template: Story = (args) => ({
  components: { Toggle },
  setup() {
    return { args,}
  },
  template: '<toggle v-bind="args"/>',
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Credentials',
  trueValue: 'Live',
  falseValue: 'Test',
}

export const LabelOnTheLeft = Template.bind({})
LabelOnTheLeft.args = {
  // label: 'Credentials',
  trueValue: 'Live',
  falseValue: 'Test',
  leftLabel: true,
  showLabel: true,
}

export const LabelOnTheRight = Template.bind({})
LabelOnTheLeft.args = {
  // label: 'Credentials',
  trueValue: 'Live',
  falseValue: 'Test',
  leftLabel: false,
  showLabel: true,
}

// export const WithoutLabel = Template.bind({})
// WithoutLabel.args = {
// }