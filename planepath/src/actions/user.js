import axios from 'axios';
import { createAction } from 'redux-actions';

export const tryToLogIn = createAction('TRYING_TO_LOG_IN');
export const loggedIn = createAction('LOGGED_IN', user => ({ user }));
export const logOut = createAction('LOG_OUT');
export const logInFailed = createAction('LOGIN_FAILED', error => ({ error }));

export function logIn(username, password, history) {
  return (dispatch) => {
    dispatch(tryToLogIn());

    axios.post('/sessions', { username, password }, { headers: { 'Content-Type': 'application/json' } })
      .then((response) => {
        dispatch(loggedIn(response.data.data));
        history.push('/');
      })
      .catch((error) => {
        dispatch(logInFailed(error.response.data.error));
      });
  };
}
