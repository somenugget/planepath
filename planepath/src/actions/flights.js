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
      .post('/flights', values)
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
      .put(`/flights/${flightId}`, values)
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

export const setRemovingFlight = createAction('SET_REMOVING_FLIGHT', flightId => ({ flightId }));
export const unsetRemovingFlight = createAction('UNSET_REMOVING_FLIGHT');

export const flightRemoveStart = createAction('FLIGHT_REMOVE_START');
export const flightRemoveSuccess = createAction('FLIGHT_REMOVE_SUCCESS', flightId => ({ flightId }));
export const flightRemoveError = createAction('FLIGHT_REMOVE_ERROR');

export function removeFlight(flightId) {
  return (dispatch) => {
    dispatch(flightRemoveStart());

    axios
      .delete(`/flights/${flightId}`)
      .then(() => {
        dispatch(flightRemoveSuccess(flightId));
      })
      .catch((error) => {
        if (_.has(error, ['response', 'data', 'error'])) {
          dispatch(flightRemoveError(error.response.data.error));
        } else {
          console.error(error);
        }
      });
  };
}
