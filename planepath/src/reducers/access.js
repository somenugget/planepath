import { handleActions } from 'redux-actions';

const access = handleActions({
  CHECK_ACCESS_START: () => ({
    tryingToCheckAccess: true,
  }),

  ACCESS_GRANTED: () => ({
    tryingToCheckAccess: false,
    accessAllowed: true,
  }),

  ACCESS_DENIED: () => ({
    tryingToCheckAccess: false,
    accessAllowed: false,
  }),
}, { tryingToCheckAccess: false, accessAllowed: false });

export default access;
