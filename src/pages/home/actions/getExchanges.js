import api from '@api';
import { FETCH_EXCHANGES_SUCCESS } from '@reducers/exchangesReducer';

export default function getExchanges() {
  return async (dispatch, getState) => {
    try {
      const { token } = getState().user;
      const exchanges = await api.exchanges.getList(token);
      dispatch({
        type: FETCH_EXCHANGES_SUCCESS,
        exchanges,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
