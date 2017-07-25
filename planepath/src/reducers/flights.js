import { handleActions } from 'redux-actions';

const flights = handleActions({
  FLIGHTS_LOADING: state => ({
    ...state,
    isFetching: true,
  }),

  FLIGHTS_LOADED: (state, action) => ({
    ...state,
    items: action.payload.items,
    isFetching: false,
  }),

  FLIGHT_CREATION_SUCCESS: (state, action) => ({
    ...state,
    items: [action.payload.flight, ...state.items],
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

  SET_UPDATING_FLIGHT: (state, action) => ({
    ...state,
    updatingFlight: action.payload.flightId,
  }),

  UNSET_UPDATING_FLIGHT: state => ({
    ...state,
    updatingFlight: null,
  }),

}, { isFetching: false, updatingFlight: null, items: [] });

export default flights;
