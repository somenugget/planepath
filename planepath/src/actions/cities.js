export function requestCities() {
  return {
    type: 'REQUEST_CITIES',
    isFetching: true,
  };
}

export function receiveCities(json) {
  return {
    type: 'RECEIVE_CITIES',
    isFetching: false,
    items: json.data,
  };
}

export function fetchCities() {
  return (dispatch) => {
    dispatch(requestCities());

    return fetch('/cities')
      .then(response => response.json())
      .then(json => dispatch(receiveCities(json)));
  };
}
