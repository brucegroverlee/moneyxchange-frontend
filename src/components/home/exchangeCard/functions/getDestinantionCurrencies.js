export default function getDestinantionCurrencies(currencies) {
  const result = currencies.filter( currency => {
    return currency.isBase === false;
  });
  return result;
}