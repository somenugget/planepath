export const userStorageMiddleware = store => next => (action) => {
  if (action.type === 'LOGGED_IN') {
    window.localStorage.setItem('user', JSON.stringify(action.user));
  } else if (action.type === 'LOG_OUT' || action.type === 'LOGIN_FAILED') {
    window.localStorage.setItem('user', null);
  }

  next(action);
};
