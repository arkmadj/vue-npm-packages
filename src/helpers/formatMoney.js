const mapCurrencyToCounrty = {
  USD: 'US',
  NGN: 'NG',
};
export default (amount, currency) => currency
  ? Number(amount).toLocaleString(`en-${mapCurrencyToCounrty[currency]}`, {style: 'currency', currency})
  : Number(amount).toLocaleString();
