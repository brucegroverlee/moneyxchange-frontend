import api from '@api';
import { FETCH_CURRENCIES_SUCCESS } from '@reducers/currenciesReducer';

export default function getCurrencies() {
  return async (dispatch, getState) => {
    try {
      const { token } = getState().user;
      const currencies = await api.currencies.getList(token);
      dispatch({
        type: FETCH_CURRENCIES_SUCCESS,
        currencies,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
