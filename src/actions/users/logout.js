import history from '@utils/history';
import { USERS_LOGOUT } from '@reducers/userReducer';

export default function logout() {
  return (dispatch) => {
    dispatch({ 
      type: USERS_LOGOUT 
    });
    history.replace({
      pathname: '/login'
    });
  }
};