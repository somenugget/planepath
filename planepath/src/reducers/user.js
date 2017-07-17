const user = (state = {
  isAuthenticated: false,
  tryingToLogIn: false,
  user: null,
}, action) => {
  switch (action.type) {
    case 'TRYING_TO_LOG_IN':
      return {
        ...state,
        tryingToLogIn: true,
      };
    case 'LOGGED_IN':
      return {
        user: action.user,
        tryingToLogIn: false,
        isAuthenticated: true,
      };
    case 'LOGGED_OUT':
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default user;