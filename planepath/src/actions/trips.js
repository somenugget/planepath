import axios from 'axios';
import { createAction } from 'redux-actions';

export const tripsLoading = createAction('TRIPS_LOADING');
export const tripsLoaded = createAction('TRIPS_LOADED', items => ({ items }));

export function findTrips(fromId, toId, dispatch) {
  dispatch(tripsLoading());

  return axios.get(`/trips/${fromId}/${toId}`)
    .then(response => dispatch(tripsLoaded(response.data.data)));
}
