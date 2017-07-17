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

export function logIn(username, password) {
  return (dispatch, getState) => {
    dispatch(tryToLogIn());
    const state = getState();
    console.log(state);
    fetch('/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };
}
