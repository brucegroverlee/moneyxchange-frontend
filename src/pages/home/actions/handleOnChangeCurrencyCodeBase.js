import { HANDLE_ONCHANGE_CURRENCY_CODE_BASE } from '@reducers/pagesReducer/homeReducer';

export default function handleOnChangeCurrencyCodeBase(currencyCode) {
  return (dispatch, getState) => {
    dispatch({
      type: HANDLE_ONCHANGE_CURRENCY_CODE_BASE,
      currencyCodeBase: currencyCode,
    });
  };
}