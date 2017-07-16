const city = (state = {
  from: undefined,
  to: undefined,
}, action) => {
  // console.log(action);
  switch (action.type) {
    case 'SET_CITY':
      return {
        ...state,
        [action.direction]: action.city,
      };
    default:
      return state;
  }
};

export default city;
