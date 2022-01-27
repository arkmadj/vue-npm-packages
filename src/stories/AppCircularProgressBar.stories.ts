import { Story } from '@storybook/vue3'
import AppCircularProgressBar from './app-circular-progress-bar/AppCircularProgressBar.vue'

export default {
  title: 'components/AppCircularProgressBar',
  component: AppCircularProgressBar,
  argType: {},
}

const Template: Story = (args) => ({
  components: { AppCircularProgressBar },
  setup() {
    return { args }
  },
  template: '<app-circular-progress-bar v-bind="args"/>',
})

export const Primary = Template.bind({})
Primary.args = {
  percentage: 80,
  showStatus: false,
}

export const Empty = Template.bind({})
Empty.args = {
  percentage: 0,
  showStatus: false,
}

export const Low = Template.bind({})
Low.args = {
  percentage: 10,
  showStatus: true,
}

export const Medium = Template.bind({})
Medium.args = {
  percentage: 69,
  showStatus: true,
}

export const High = Template.bind({})
High.args = {
  percentage: 80,
  showStatus: true,
}
