import { handleActions } from 'redux-actions';

const user = handleActions({
  TRYING_TO_LOG_IN: () => ({
    tryingToLogIn: true,
  }),

  LOGGED_IN: (state, action) => ({
    user: action.payload.user,
    tryingToLogIn: false,
    isAuthenticated: true,
  }),

  LOG_OUT: () => ({
    isAuthenticated: false,
    user: null,
  }),

  LOGIN_FAILED: () => ({
    isAuthenticated: false,
    user: null,
  }),
}, { isAuthenticated: false, tryingToLogIn: false, user: null });

export default user;
