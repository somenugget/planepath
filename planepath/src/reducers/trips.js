const trips = (state = {
  isFetching: false,
  items: [],
}, action) => {
  switch (action.type) {
    case 'REQUEST_TRIPS':
      return {
        ...state,
        isFetching: true,
      };
    case 'RECEIVE_TRIPS':
      return {
        ...state,
        isFetching: false,
        items: action.items,
      };
    default:
      return state;
  }
};

export default trips;
