export const ninRules = () => [
  val => val.length == 11 || 'NIN must be 11 digits',
  val => (val > 0) || 'NIN must be greater than zero'
]

export const bvnRules = () => [
  val => val.length == 11 || 'BVN must be 11 digits',
  val => (val > 0) || 'BVN must be greater than zero'
]

export const phoneNumberRules = () => [
  val => val.length == 11 || 'Phone number must be 11 digits',
  val => (val > 0) || 'Phone number must be greater than zero'
]

export const emailRules = () => [
  val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'Invaild email'
]

export const amountRules = () => [
  val => (val > 0) || 'Amount must be greater than zero'
]

export const tenureRules = () => [
  val => (val > 0 && val < 52) || 'Please enter a real tenure'
]

export const interestRateRules = () => [
  val => (val > 0 && val < 101) || 'Please enter a correct percentage'
]

export const urlRules = (url) => [
  () => /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi.test(url) || 'Invaild url'
]

export const accountNumberRules = () => [
  val => val.length == 10 || 'Account number must be 10 digits',
  val => (val > 0) || 'Account number must be greater than zero'
]

export const confirmPasswordRules = (password, confirmPassword) => [
  () => password === confirmPassword || 'Password does not match'
]

export const strengthRules = (isStrong) => [
  () => isStrong || 'Password is not strong'
]

export const percentageRules = () => [
  val => (val > 0 && val < 100) || 'Please a real percentage value'
]
