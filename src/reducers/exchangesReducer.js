import { FETCH_HOME_SUCCESS } from './pagesReducer/homeReducer';

export const FETCH_EXCHANGES_SUCCESS = 'FETCH_EXCHANGES_SUCCESS';

/**
 * @typedef {Array<Exchange>} initialState
 * 
 * @typedef {object} Exchange
 * @property {string} object - "exchange"
 * @property {string} pair - E.g. "USDEUR"
 * @property {number} rate - E.g. 0.89
 */
const initialState = [];

/**
 * @function userReducer
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_SUCCESS:
    case FETCH_EXCHANGES_SUCCESS:
      return [
        ...action.exchanges,
      ];
    
    default:
      return state;
  }
}