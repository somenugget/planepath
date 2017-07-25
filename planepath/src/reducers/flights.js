import { handleActions } from 'redux-actions';

const flights = handleActions({
  FLIGHTS_LOADING: state => ({
    ...state,
    isFetching: true,
  }),

  FLIGHTS_LOADED: (state, action) => ({
    items: action.payload.items,
    isFetching: false,
  }),

  FLIGHT_UPDATE_SUCCESS: (state, action) => ({
    ...state,
    items: state.items.map((flight) => {
      if (flight.id === action.payload.flight.id) {
        return action.payload.flight;
      }

      return flight;
    }),
  }),

}, { isFetching: false, items: [] });

export default flights;
