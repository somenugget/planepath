import axios from 'axios';
import { createAction } from 'redux-actions';

export const flightsLoading = createAction('FLIGHTS_LOADING');
export const flightsLoaded = createAction('FLIGHTS_LOADED', items => ({ items }));

export function loadFlights(userId) {
  return (dispatch) => {
    dispatch(flightsLoading());

    axios.get('/flights', { params: { filter: { user_id: userId } } }, { headers: { 'Content-Type': 'application/json' } })
      .then((response) => {
        dispatch(flightsLoaded(response.data.data));
      });
  };
}

export const flightCreationStart = createAction('FLIGHT_CREATION_START');
export const flightCreationSuccess = createAction('FLIGHT_CREATION_SUCCESS', flight => ({ flight }));
export const flightCreationError = createAction('FLIGHT_CREATION_ERROR', error => ({ error }));

export function createFlight(values) {
  return (dispatch) => {
    dispatch(flightCreationStart());

    axios
      .post('/flights', values)
      .then((response) => {
        dispatch(flightCreationSuccess(response.data.data));
      })
      .catch((error) => {
        console.error(error);
        if (error.response) {
          console.log(error.response);
          dispatch(flightCreationError(error.response.error));
        }
      });
  };
}
