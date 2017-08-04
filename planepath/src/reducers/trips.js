const trips = (state = {
  isFetching: false,
  items: [],
}, action) => {
  switch (action.type) {
    case 'TRIPS_LOADING':
      return {
        ...state,
        isFetching: true,
      };
    case 'TRIPS_LOADED':
      return {
        ...state,
        isFetching: false,
        items: action.payload.items,
      };
    default:
      return state;
  }
};

export default trips;
