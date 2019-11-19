import history from '@utils/history';
import { 
  FETCH_LOGIN,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
} from '@reducers/pagesReducer/loginReducer';
import api from '@api';

export default function login() {
  return async (dispatch, getState) => {
    const { email, password } = getState().pages.login;
    try {
      dispatch({ 
        type: FETCH_LOGIN 
      });
      const response = await api.users.login({email, password});
      debugger
      if (response && response.token) {
        dispatch({ 
          type: FETCH_LOGIN_SUCCESS,
          token: response.token,
        });
        history.replace({
          pathname: '/login'
        });
      } else {
        console.error('The token doesn\'t exist.');
        throw Error('The token doesn\'t exist.');
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: FETCH_LOGIN_FAILURE,
        error: 'Oops!',
      });
    }
  }
};