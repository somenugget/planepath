import axios from 'axios';
import { createAction } from 'redux-actions';

export const checkAccessStart = createAction('CHECK_ACCESS_START');
export const accessGranted = createAction('ACCESS_GRANTED');
export const accessDenied = createAction('ACCESS_DENIED');

export function checkAccess(token, role) {
  return (dispatch) => {
    dispatch(checkAccessStart());

    axios.get(`/access/${token}`, {
      params: { filter: { role } },
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => dispatch(accessGranted(response.data.data)))
      .catch((error) => {
        dispatch(accessDenied(error.response.data.error));
      });
  };
}
