export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS';

/**
 * @typedef {object} Currency
 * @property {string} object
 * @property {string} code
 * @property {string} symbol
 * @property {boolean} isBase
 */

/**
 * @typedef {Array<Currency>} initialState
 */
const initialState = [];

/**
 * @function currenciesReducer
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES_SUCCESS:
      return [
        ...action.currencies,
      ];
    
    default:
      return state;
  }
}