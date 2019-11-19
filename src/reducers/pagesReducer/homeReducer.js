
export const FETCH_HOME = 'FETCH_HOME';
export const FETCH_HOME_SUCCESS = 'FETCH_HOME_SUCCESS';
export const FETCH_HOME_FAILURE = 'FETCH_HOME_FAILURE';
export const FETCH_HOME_RESET = 'FETCH_HOME_RESET';
export const HANDLE_ONCHANGE_CURRENCY_CODE_BASE = 'HANDLE_ONCHANGE_CURRENCY_CODE_BASE';
export const HANDLE_ONCHANGE_CURRENCY_VALUE_BASE = 'HANDLE_ONCHANGE_CURRENCY_VALUE_BASE';
export const HANDLE_ONCHANGE_CURRENCY_CODE_DESTINATION = 'HANDLE_ONCHANGE_CURRENCY_CODE_DESTINATION';
export const HANDLE_ONCHANGE_CURRENCY_VALUE_DESTINATION = 'HANDLE_ONCHANGE_CURRENCY_VALUE_DESTINATION';

/**
 * @typedef {object} initialState
 * @property {boolean} isFetching
 * @property {string} error
 * @property {string} currencyCodeBase
 * @property {number} currencyValueBase
 * @property {string} currencyCodeDestination
 * @property {number} currencyValueDestination
 */
const initialState = {
  isFetching: false,
  error: null,
  currencyCodeBase: '',
  currencyValueBase: '0.00',
  currencyCodeDestination: '',
  currencyValueDestination: '0.00',
};

/**
 * @function homeReducer
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_HOME_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    
    case FETCH_HOME_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    case HANDLE_ONCHANGE_CURRENCY_CODE_BASE:
      return {
        ...state,
        currencyCodeBase: action.currencyCodeBase,
      };

    case HANDLE_ONCHANGE_CURRENCY_VALUE_BASE:
      return {
        ...state,
        currencyValueBase: action.currencyValueBase,
      };

    case HANDLE_ONCHANGE_CURRENCY_CODE_DESTINATION:
      return {
        ...state,
        currencyCodeDestination: action.currencyCodeDestination,
      };

    case HANDLE_ONCHANGE_CURRENCY_VALUE_DESTINATION:
      return {
        ...state,
        currencyValueDestination: action.currencyValueDestination,
      };

    case FETCH_HOME_RESET:
      return initialState;
  
    default:
      return state;
  }
};