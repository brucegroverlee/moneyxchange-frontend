export default function getFormatCurrency(currencyCode, currencyValue) {
  let result;
  if (!currencyCode || currencyCode.length === 0) {
    result = '0.00';
  } else {
    let value = currencyValue;
    if (!(/\d/.test(value[0]))) {
      // if the first character IS NOT a number, remove it.
      value = value.substr(1);
    }
    value = value.split(',').join('');
    value = parseFloat(value);
    result = new Intl.NumberFormat('us-EN', { style: 'currency', currency: currencyCode, maximumFractionDigits: 4 }).format(value);
  }
  return result;
}