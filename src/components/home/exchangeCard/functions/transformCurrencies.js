export default function transformCurrencies(currencies) {
  const result = currencies.map( currency => {
    return { key: currency.code, text: currency.code, value: currency.code };
  });
  return result;
}