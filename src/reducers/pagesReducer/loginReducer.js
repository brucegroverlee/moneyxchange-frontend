
export const FETCH_LOGIN = 'FETCH_LOGIN';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';
export const FETCH_LOGIN_RESET = 'FETCH_LOGIN_RESET';

/**
 * @typedef {object} initialState
 * @property {boolean} isFetching
 * @property {string} error
 */
const initialState = {
  isFetching: false,
  error: null,
};

/**
 * @function loginReducer
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    
    case FETCH_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    case FETCH_LOGIN_RESET:
      return initialState;
  
    default:
      return state;
  }
};