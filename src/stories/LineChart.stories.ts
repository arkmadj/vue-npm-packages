import { Story } from '@storybook/vue3'
import LineChart from '../components/app-line-chart/LineChart.vue'

export default {
  title: 'Components/LineChart',
  component: LineChart,
  argType: {},
}

const Template: Story = (args) => ({
  components: { LineChart },
  setup() {
    return { args }
  },
  template: '<LineChart v-bind="args"/>',
})

export const Primary = Template.bind({})
Primary.args = {
  lineColor: '#ffcc00',
  data: {
    Jan: 15,
    Feb: 35,
    Mar: 30,
    Apr: 50,
    Jun: 35,
    Jul: 35,
    Aug: 70,
    Sep: 60,
    Oct: 35,
    Nov: 80,
    Dec: 95,
  },
}

export const Empty = Template.bind({})
Empty.args = {
  lineColor: '#ffcc00',
  data: {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
  },
  isEmptyState: true,
}