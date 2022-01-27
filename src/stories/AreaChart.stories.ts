import { Story } from '@storybook/vue3'
import AppAreaChart from '../components/app-area-chart/AppAreaChart.vue'

export default {
  title: 'Components/AreaChart',
  component: AppAreaChart,
  argType: {},
}

const Template: Story = (args) => ({
  components: { AppAreaChart },
  setup() {
    return { args }
  },
  template: '<AppAreaChart v-bind="args"/>',
})

export const Primary = Template.bind({})
Primary.args = {
  data: [
    {
      name: 'Projected Perfomance',
      slug: 'projectedPerformance',
      data: {
        Jan: 10,
        Feb: 30,
        Mar: 20,
        Apr: 40,
        Jun: 30,
        Jul: 30,
        Aug: 60,
        Sep: 50,
        Oct: 30,
        Nov: 70,
        Dec: 90,
      },
    },
    {
      name: 'Actual Performance ',
      slug: 'actualPerfomance',
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
    },
  ],
  isEmptyState: false,
}

export const Empty = Template.bind({})
Empty.args = {
  data: [
    {
      name: 'Projected Perfomance',
      slug: 'projectedPerformance',
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
    },
    {
      name: 'Actual Performance ',
      slug: 'actualPerfomance',
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
    },
  ],
  isEmptyState: true,
}
