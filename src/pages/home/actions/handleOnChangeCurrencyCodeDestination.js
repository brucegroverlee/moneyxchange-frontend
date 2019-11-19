import { HANDLE_ONCHANGE_CURRENCY_CODE_DESTINATION } from '@reducers/pagesReducer/homeReducer';

export default function handleOnChangeCurrencyCodeDestination(currencyCode) {
  return (dispatch, getState) => {
    dispatch({
      type: HANDLE_ONCHANGE_CURRENCY_CODE_DESTINATION,
      currencyCodeDestination: currencyCode,
    });
  };
}