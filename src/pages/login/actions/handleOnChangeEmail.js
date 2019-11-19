import { HANDLE_ONCHANGE_EMAIL } from '@reducers/pagesReducer/loginReducer';

export default function handleOnChangeEmail(email) {
  return (dispatch, getState) => {
    dispatch({
      type: HANDLE_ONCHANGE_EMAIL,
      email,
    });
  }
}