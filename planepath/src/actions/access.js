import axios from 'axios';

export function checkAccessStart() {
  return {
    type: 'CHECK_ACCESS_START',
  };
}

export function accessGranted() {
  return {
    type: 'ACCESS_GRANTED',
  };
}

export function accessDenied() {
  return {
    type: 'ACCESS_DENIED',
  };
}

export function checkAccess(token, role) {
  return (dispatch) => {
    dispatch(checkAccessStart());

    axios.get(`/access/${token}`, {
      params: { filter: { role } },
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => dispatch(accessGranted(response.data.data)))
      .catch((error) => {
        dispatch(accessDenied(error.response.data.error));
      });
  };
}
