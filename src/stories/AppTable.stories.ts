import { Story } from '@storybook/vue3'
import AppTable from '../components/app-table/AppTable.vue'

export default {
  title: 'Components/Table',
  component: AppTable,
  argType: {},
}

const Template: Story = (args) => ({
  components: { AppTable },
  setup() {
    return { args }
  },
  template: '<app-table v-bind="args"/>',
})

export const Primary = Template.bind({})
Primary.args = {
  onClick: () => console.log('I was clicked!!!'),
  rows: [
    {
      name: 'Ahmad Jinadu',
      email: 'ahmadjinadu@gmail.com',
      amount: 1000,
      loanStatus: 'Approved',
      requestStatus: 'Successful',
      action: 'Download',
    },
    {
      name: 'Jessy Kat',
      email: '',
      amount: 15000,
      loanStatus: 'Approval',
      requestStatus: 'Declined',
      action: 'Upload',
    },
    {
      name: 'Chizzy Baby',
      email: 'chizzybaby@gmail.com',
      amount: 1300,
      loanStatus: 'N/A',
      requestStatus: 'Declined',
      action: 'Upload',
    },
    {
      name: 'George Bush',
      email: 'geaorgebush@gmail.com',
      amount: 500,
      loanStatus: 'Ongoing',
      requestStatus: 'Successful',
      action: 'Download',
    },
  ],
  columns: [
    {
      name: 'name',
      label: 'Name',
      align: 'left',
      field: 'name',
      type: 'text',
    },
    {
      name: 'email',
      label: 'Email',
      align: 'left',
      field: 'email',
      type: 'text',
    },
    {
      name: 'amount',
      label: 'Amount',
      align: 'right',
      field: 'amount',
      type: 'text',
    },
    {
      name: 'loanStatus',
      label: 'Loan Status',
      align: 'left',
      field: 'loanStatus',
      type: 'badge',
    },
    {
      name: 'requestStatus',
      label: 'Request Status',
      align: 'left',
      field: 'requestStatus',
      type: 'badge',
    },
    {
      name: 'action',
      label: 'Action',
      align: 'left',
      field: 'action',
      type: 'action',
    },
  ],
  buttonProps: {
    Download: {
      label: 'Download',
      icon: 'download',
      iconSize: '16px',
      iconColor: 'red',
      color: '#fff',
      onClick: () => console.log('Download button clicked!!!')
    },
    Upload: {
      label: 'Upload',
      icon: 'upload',
      iconSize: '16px',
      iconColor: 'red',
      color: '#fff',
      onClick: () => console.log('Upload button clicked!!!')
    }
  },
  badgeColors: {
    loanStatus: {
      Approved: { text: '#00CC66', background: 'rgba(0, 204, 102, 0.1)' },
      Ongoing: { text: '#0B8F99', background: 'rgba(11, 143, 153, 0.1)' },
      'N/A': { text: '#231F20', background: 'rgba(35, 31, 32, 0.1)' },
    },
    requestStatus: {
      Successful: { text: '#00CC66', background: 'rgba(0, 204, 102, 0.1)' },
      Declined: { text: '#F71455', background: 'rgba(247, 20, 85, 0.1)' },
      Pending: { text: '#FFCC00', background: 'rgba(255, 204, 0, 0.1)' },
    },
  },
}
