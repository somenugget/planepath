export function requestTrips() {
  return {
    type: 'REQUEST_TRIPS',
    isFetching: true,
  };
}

export function receiveTrips(json) {
  return {
    type: 'RECEIVE_TRIPS',
    isFetching: false,
    items: json.data,
  };
}

export function findTrips(fromId, toId, dispatch) {
  dispatch(requestTrips());

  return fetch(`/trips/${fromId}/${toId}`)
    .then(response => response.json())
    .then(json => dispatch(receiveTrips(json)));
}
