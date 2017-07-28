import _ from 'lodash';
import axios from 'axios';
import { createAction } from 'redux-actions';

export const flightsLoading = createAction('FLIGHTS_LOADING');
export const flightsLoaded = createAction('FLIGHTS_LOADED', items => ({ items }));

export function loadFlights(user) {
  return (dispatch) => {
    dispatch(flightsLoading());

    axios.get('/flights', { params: { token: user.token } }, { headers: { 'Content-Type': 'application/json' } })
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
      .post(`/flights?token=${values.token}`, values)
      .then((response) => {
        dispatch(flightCreationSuccess(response.data.data));
      })
      .catch((error) => {
        if (_.has(error, ['response', 'data', 'error'])) {
          dispatch(flightCreationError(error.response.data.error));
        } else {
          console.error(error);
        }
      });
  };
}

export const setUpdatingFlight = createAction('SET_UPDATING_FLIGHT', flightId => ({ flightId }));
export const unsetUpdatingFlight = createAction('UNSET_UPDATING_FLIGHT');

export const flightUpdateStart = createAction('FLIGHT_UPDATE_START');
export const flightUpdateSuccess = createAction('FLIGHT_UPDATE_SUCCESS', flight => ({ flight }));
export const flightUpdateError = createAction('FLIGHT_UPDATE_ERROR', error => ({ error }));

export function updateFlight(flightId, values) {
  return (dispatch) => {
    dispatch(flightUpdateStart());

    axios
      .put(`/flights/${flightId}?token=${values.token}`, values)
      .then((response) => {
        dispatch(flightUpdateSuccess(response.data.data));
      })
      .catch((error) => {
        if (_.has(error, ['response', 'data', 'error'])) {
          dispatch(flightCreationError(error.response.data.error));
        } else {
          console.error(error);
        }
      });
  };
}
