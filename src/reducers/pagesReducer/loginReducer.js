
export const FETCH_LOGIN = 'FETCH_LOGIN';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';
export const FETCH_LOGIN_RESET = 'FETCH_LOGIN_RESET';
export const HANDLE_ONCHANGE_EMAIL = 'HANDLE_ONCHANGE_EMAIL';
export const HANDLE_ONCHANGE_PASSWORD = 'HANDLE_ONCHANGE_PASSWORD';

/**
 * @typedef {object} initialState
 * @property {boolean} isFetching
 * @property {string} error
 * @property {string} email - form input
 * @property {string} password - form input
 */
const initialState = {
  isFetching: false,
  error: null,
  email: '',
  password: '',
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

    case HANDLE_ONCHANGE_EMAIL:
      return {
        ...state,
        email: action.email,
      };

    case HANDLE_ONCHANGE_PASSWORD:
      return {
        ...state,
        password: action.password,
      };

    case FETCH_LOGIN_RESET:
      return initialState;
  
    default:
      return state;
  }
};