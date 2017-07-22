import { handleActions } from 'redux-actions';

const flights = handleActions({
  FLIGHTS_LOADING: () => ({
    isFetching: true,
  }),

  FLIGHTS_LOADED: (state, action) => ({
    items: action.payload.items,
    isFetching: false,
  }),

}, { isFetching: false, items: [] });

export default flights;
