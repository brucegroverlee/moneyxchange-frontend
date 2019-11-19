import { HANDLE_ONCHANGE_CURRENCY_VALUE_BASE } from '@reducers/pagesReducer/homeReducer';

export default function handleOnChangeCurrencyValueBase(currencyValue) {
  return (dispatch, getState) => {
    dispatch({
      type: HANDLE_ONCHANGE_CURRENCY_VALUE_BASE,
      currencyValueBase: currencyValue,
    });
  };
}