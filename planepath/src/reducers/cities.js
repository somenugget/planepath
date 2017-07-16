const cities = (state = {
  isFetching: false,
  items: [],
}, action) => {
  switch (action.type) {
    case 'REQUEST_CITIES':
      return {
        ...state,
        isFetching: true,
      };
    case 'RECEIVE_CITIES':
      return {
        ...state,
        isFetching: false,
        items: action.items,
      };
    default:
      return state;
  }
};

export default cities;
