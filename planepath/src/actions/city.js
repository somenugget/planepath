import { findTrips } from './trips';

export function setCity(direction, city) {
  return {
    type: 'SET_CITY',
    direction,
    city,
  };
}

export function setCityAndFindTrips(direction, city) {
  return (dispatch, getState) => {
    dispatch(setCity(direction, city));
    const cityState = getState().city;
    if (cityState.from && cityState.to) {
      return findTrips(
        cityState.from.id,
        cityState.to.id,
        dispatch,
      );
    }

    return true;
  };
}
