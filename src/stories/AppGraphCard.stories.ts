import { Story } from '@storybook/vue3'
import GraphCard from '../components/graph-card/GraphCard.vue'
import AppLineChart from '../components/app-line-chart/LineChart.vue'
import AppAreaChart from '../components/app-area-chart/AppAreaChart.vue'


export default {
  title: 'Components/GraphCard',
  component: GraphCard,
  argType: {},
}

const Template: Story = (args) => ({
  components: { GraphCard, AppAreaChart },
  setup() {
    return {
      args,
      chartData: [
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
    }
  },
  template: `
  <GraphCard v-bind="args">
  <template v-slot:icon>
    <div
      class="header-icon-container"
      style="background: rgba(0, 204, 102, 0.25);
        margin-top: 3px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-right: 12px;
        display: flex;
        align-items: center;
        justify-content: center;"
    >
      <img src="https://www.arsenal.com/themes/custom/arsenal_main/logo.svg" />
    </div>
  </template>
    <template v-slot:body>
      <AppAreaChart :data="chartData"/>
    </template>
  </GraphCard>
  `,
})

export const WithAreaChart = Template.bind({})
WithAreaChart.args = {
  title: 'StoryBook Black Card',
  subTitle: 'Hey there',
  legend: [{name: "Projected", color: "#ffcc00"}, {name: "Actual", color: "#0B8F99"}],
}

const LineTemplate: Story = (args) => ({
  components: { GraphCard, AppLineChart },
  setup() {
    return {
      args,
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
  },
  template: `
  <GraphCard v-bind="args">
  <template v-slot:icon>
    <div
      class="header-icon-container"
      style="background: rgba(0, 204, 102, 0.25);
        margin-top: 3px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-right: 12px;
        display: flex;
        align-items: center;
        justify-content: center;"
    >
      <img src="https://www.arsenal.com/themes/custom/arsenal_main/logo.svg" />
    </div>
  </template>
    <template v-slot:body>
      <AppLineChart :data="data" :lineColor="lineColor"/>
    </template>
  </GraphCard>
  `,
})

export const WithLineChart = LineTemplate.bind({})
WithLineChart.args = {
  title: 'StoryBook Black Card',
  subTitle: 'Hey there',
}

