import { createAction } from 'redux-actions';

export const requestCities = createAction('REQUEST_CITIES');
export const receiveCities = createAction('RECEIVE_CITIES', json => ({ ...json }));

export function fetchCities() {
  return (dispatch) => {
    dispatch(requestCities());

    return fetch('/cities')
      .then(response => response.json())
      .then(json => dispatch(receiveCities(json)));
  };
}
