import { Story } from '@storybook/vue3'
import AppBadge from './app-badge/AppBadge.vue'

export default {
  title: 'Components/AppBadge',
  component: AppBadge,
  argType: {},
}

const Template: Story = (args) => ({
  components: { AppBadge },
  setup() {
    return { args,}
  },
  template: '<app-badge v-bind="args"/>',
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Approved',
  color: '#00CC66',
  bgColor: 'rgba(0, 204, 102, 0.1)',
}

export const Pending = Template.bind({})
Pending.args = {
  label: 'Pending',
  color: '#FFCC00',
  bgColor: 'rgba(255, 204, 0, 0.1)',
}

export const WithTitle = Template.bind({})
WithTitle.args = {
  label: 'Pending',
  title: 'Amount Available',
}