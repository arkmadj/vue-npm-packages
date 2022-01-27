import { Story } from '@storybook/vue3'
import AppButton from '../components/app-button/AppButton.vue'

export default {
  title: 'components/AppButton',
  component: AppButton,
  argType: {
    // onClick: {},
  },
}
const Template: Story = (args) => ({
  components: { AppButton },
  setup() {
    return { args }
  },
  template: `
  <app-button v-bind="args">
  </app-button>
  `,
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
//   type: 'primary',
  noCustomColor: false,
  unelevated: true,
  disable: false,
  loading: false,
  buttonPadding: '8px 12px 8px 12px',
  buttonType: 'button',
  color: '#0B8F99',
  icon: 'phone',
  rightIcon: 'mail',
}

export const Small = Template.bind({})
Small.args = {
  label: 'Button',
//   type: 'primary',
  noCustomColor: false,
  unelevated: true,
  disable: false,
  loading: false,
  buttonPadding: '6px 11px',
  buttonType: 'button',
  color: '#0B8F99',
  icon: 'phone',
  rightIcon: 'mail',
}

export const Medium = Template.bind({})
Medium.args = {
  label: 'Button',
//   type: 'primary',
  noCustomColor: false,
  unelevated: true,
  disable: false,
  loading: false,
  buttonPadding: '8px 12px',
  buttonType: 'button',
  color: '#0B8F99',
  icon: 'phone',
  rightIcon: 'mail',
}

export const Large = Template.bind({})
Large.args = {
  label: 'Button',
//   type: 'primary',
  noCustomColor: false,
  unelevated: true,
  disable: false,
  loading: false,
  buttonPadding: '14px 30px',
  buttonType: 'button',
  color: '#0B8F99',
  icon: 'phone',
  rightIcon: 'mail',
}

export const Outlined = Template.bind({})
Outlined.args = {
  label: 'Button',
//   type: 'secondary',
  outline: true,
  flat: false,
  noCustomColor: false,
  unelevated: true,
  disable: false,
  loading: false,
  buttonPadding: '14px 30px',
  buttonType: 'button',
  color: '#0B8F99',
  icon: 'phone',
  rightIcon: 'mail',
}

export const Flat = Template.bind({})
Flat.args = {
  label: 'Button',
//   type: 'primary',
  flat: true,
  noCustomColor: false,
  unelevated: true,
  disable: false,
  loading: false,
  buttonPadding: '8px 12px',
  buttonType: 'button',
  color: '#0B8F99',
  icon: 'phone',
  rightIcon: 'mail',
}

export const Round = Template.bind({})
Round.args = {
  label: '',
//   type: 'primary',
//   outline: true,
  round: true,
  noCustomColor: false,
  unelevated: true,
  disable: false,
  loading: false,
  buttonPadding: '8px',
  buttonType: 'button',
  color: '#0B8F99',
  icon: 'menu',
  notification: '1',
  notificationColor: 'red',
  iconSize: '16px',
}

export const onClickRound = Template.bind({})
onClickRound.args = {
  label: '',
//   type: 'primary',
//   outline: true,
  round: true,
  noCustomColor: false,
  unelevated: true,
  disable: false,
  loading: false,
  buttonPadding: '8px',
  buttonType: 'button',
  color: '#0B8F99',
  icon: 'menu',
  notification: '1',
  notificationColor: 'red',
  iconSize: '16px',
  onClick: () => console.log("I was clicked!!!"),
  iconColor: 'red',
}
