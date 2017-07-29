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

  SET_REMOVING_FLIGHT: (state, action) => ({
    ...state,
    removingFlight: action.payload.flightId,
  }),

  UNSET_REMOVING_FLIGHT: state => ({
    ...state,
    removingFlight: null,
  }),

  FLIGHT_REMOVE_SUCCESS: (state, action) => ({
    ...state,
    removingFlight: null,
    items: state.items.filter(flight => flight.id !== action.payload.flightId),
  }),

}, { isFetching: false, updatingFlight: null, removingFlight: null, items: [] });

export default flights;
