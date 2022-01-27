import { Notify } from 'quasar'

export default  {
  success (message, overrides = {}) {
    Notify.create({
      type: 'positive',
      message,
      color: 'green-6',
      position: 'top-right',
      progress: true,
      closeBtn: true,
      ...overrides
    });
  },
  error (message, overrides = {}) {
    Notify.create({
      type: 'negative',
      message: message,
      color: 'red-9',
      position: 'top-right',
      progress: true,
      closeBtn: true,
      ...overrides
    });
  },
}