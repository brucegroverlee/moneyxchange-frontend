import { initUser, setUser, cleanUser } from '@utils/session';
import { FETCH_LOGIN_SUCCESS } from './pagesReducer/loginReducer';
export const USERS_LOGOUT = 'USERS_LOGOUT';

/**
 * @typedef {object} initialState
 * @property {string} token
 */
const initialState = {
  token: null,
};

/**
 * @function userReducer
 */
export default (state = initUser(initialState), action) => {
  switch (action.type) {
    case FETCH_LOGIN_SUCCESS:
      setUser({
        ...state,
        token: action.token,
      });
      return {
        ...state,
        token: action.token,
      };

    case USERS_LOGOUT:
      cleanUser();
      return {
        ...initialState,
      };
    
    default:
      return state;
  }
}