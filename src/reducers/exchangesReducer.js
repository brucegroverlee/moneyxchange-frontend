import { initExchanges, setExchanges, cleanExchanges } from '@utils/session';
export const FETCH_EXCHANGES_SUCCESS = 'FETCH_EXCHANGES_SUCCESS';

/**
 * @typedef {object} Exchange
 * @property {string} object - "exchange"
 * @property {string} pair - E.g. "USDEUR"
 * @property {number} rate - E.g. 0.89
 */

/**
 * @typedef {Array<Exchange>} initialState
 */
const initialState = [];

/**
 * @function exchangesReducer
 */
export default (state = initExchanges(initialState), action) => {
  switch (action.type) {
    case FETCH_EXCHANGES_SUCCESS:
      setExchanges([
        ...action.exchanges,
      ]);
      return [
        ...action.exchanges,
      ];
    
    default:
      return state;
  }
}