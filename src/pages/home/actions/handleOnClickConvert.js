import { HANDLE_ONCHANGE_CURRENCY_VALUE_DESTINATION } from '@reducers/pagesReducer/homeReducer';

export default function handleOnClickConvert() {
  return (dispatch, getState) => {
    const { currencyCodeBase, currencyValueBase, currencyCodeDestination } = getState().pages.home;
    const exchanges = getState().exchanges;
    const pair = [currencyCodeBase, currencyCodeDestination].join('');
    const exchange = exchanges.find( elem => {
      return elem.pair === pair;
    });
    if (exchange) {
      let valueBase = currencyValueBase.split(',').join('');
      valueBase = valueBase.substr(1);  // remove the first character
      valueBase = parseFloat(valueBase);
      const valueDestination = exchange.rate * valueBase;
      dispatch({
        type: HANDLE_ONCHANGE_CURRENCY_VALUE_DESTINATION,
        currencyValueDestination: valueDestination.toString(),
      });
    } else {
      console.log('Oops!');
    }
  };
}