const user = (state = {
  tryingToCheckAccess: false,
  accessAllowed: false,
}, action) => {
  switch (action.type) {
    case 'CHECK_ACCESS_START':
      return {
        ...state,
        tryingToCheckAccess: true,
      };
    case 'ACCESS_GRANTED':
      return {
        user: action.user,
        tryingToCheckAccess: false,
        accessAllowed: true,
      };
    case 'ACCESS_DENIED':
      return {
        ...state,
        tryingToCheckAccess: false,
        accessAllowed: false,
      };
    default:
      return state;
  }
};

export default user;
