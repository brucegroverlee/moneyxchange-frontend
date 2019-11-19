import { HANDLE_ONCHANGE_PASSWORD } from '@reducers/pagesReducer/loginReducer';

export default function handleOnChangePassword(password) {
  return (dispatch, getState) => {
    dispatch({
      type: HANDLE_ONCHANGE_PASSWORD,
      password,
    });
  }
}