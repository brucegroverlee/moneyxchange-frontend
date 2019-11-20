import { initStorage, setStorage, cleanStorage } from '@utils/session';
const STORAGE_NAME = 'app_home_page';

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
export default (state = initStorage(STORAGE_NAME, initialState), action) => {
  switch (action.type) {
    case FETCH_HOME:
      setStorage(STORAGE_NAME, {
        ...state,
        isFetching: true,
      });
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_HOME_SUCCESS:
      setStorage(STORAGE_NAME, {
        ...state,
        isFetching: false,
      });
      return {
        ...state,
        isFetching: false,
      };
    
    case FETCH_HOME_FAILURE:
      setStorage(STORAGE_NAME, {
        ...state,
        isFetching: false,
        error: action.error,
      });
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    case HANDLE_ONCHANGE_CURRENCY_CODE_BASE:
      setStorage(STORAGE_NAME, {
        ...state,
        currencyCodeBase: action.currencyCodeBase,
      });
      return {
        ...state,
        currencyCodeBase: action.currencyCodeBase,
      };

    case HANDLE_ONCHANGE_CURRENCY_VALUE_BASE:
      setStorage(STORAGE_NAME, {
        ...state,
        currencyValueBase: action.currencyValueBase,
      });
      return {
        ...state,
        currencyValueBase: action.currencyValueBase,
      };

    case HANDLE_ONCHANGE_CURRENCY_CODE_DESTINATION:
      setStorage(STORAGE_NAME, {
        ...state,
        currencyCodeDestination: action.currencyCodeDestination,
      });
      return {
        ...state,
        currencyCodeDestination: action.currencyCodeDestination,
      };

    case HANDLE_ONCHANGE_CURRENCY_VALUE_DESTINATION:
      setStorage(STORAGE_NAME, {
        ...state,
        currencyValueDestination: action.currencyValueDestination,
      });
      return {
        ...state,
        currencyValueDestination: action.currencyValueDestination,
      };

    case FETCH_HOME_RESET:
      cleanStorage(STORAGE_NAME);
      return initialState;
  
    default:
      return state;
  }
};