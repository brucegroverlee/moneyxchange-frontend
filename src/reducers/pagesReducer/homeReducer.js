
export const FETCH_HOME = 'FETCH_HOME';
export const FETCH_HOME_SUCCESS = 'FETCH_HOME_SUCCESS';
export const FETCH_HOME_FAILURE = 'FETCH_HOME_FAILURE';
export const FETCH_HOME_RESET = 'FETCH_HOME_RESET';

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

    case FETCH_HOME_RESET:
      return initialState;
  
    default:
      return state;
  }
};