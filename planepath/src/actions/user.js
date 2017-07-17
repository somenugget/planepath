import axios from 'axios';

export function tryToLogIn() {
  return {
    type: 'TRYING_TO_LOG_IN',
  };
}

export function loggedIn(user) {
  return {
    type: 'LOGGED_IN',
    user,
  };
}

export function loggedOut() {
  return {
    type: 'LOGGED_OUT',
  };
}

export function logInFailed(error) {
  return {
    type: 'LOGIN_FAILED',
    error,
  };
}

export function logIn(username, password, history) {
  return (dispatch) => {
    dispatch(tryToLogIn());

    axios.post('/sessions', { username, password }, { headers: { 'Content-Type': 'application/json' } })
      .then((response) => {
        dispatch(loggedIn(response.data.data));
        history.push('/');
      })
      .catch(error => dispatch(logInFailed(error.response.data.error)));
  };
}
