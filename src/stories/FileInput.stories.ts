import { Story } from '@storybook/vue3'
import FileInput from '../components/file-input/FileInput.vue'

export default {
  title: 'Components/FileInput',
  component: FileInput,
  argType: {},
}

const Template: Story = (args) => ({
  components: { FileInput },
  setup() {
    return { args,}
  },
  template: '<file-input v-bind="args"/>',
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Credentials',
  required: true,
}

export const WithoutLabel = Template.bind({})
WithoutLabel.args = {
}