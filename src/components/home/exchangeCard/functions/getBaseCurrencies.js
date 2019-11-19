export default function getBaseCurrencies(currencies) {
  const result = currencies.filter( currency => {
    return currency.isBase === true;
  });
  return result;
}