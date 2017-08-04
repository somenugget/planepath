import { handleActions } from 'redux-actions';

export const initialState = {
  isFetching: false,
  items: [],
};

export default handleActions({
  REQUEST_CITIES: state => ({
    ...state,
    isFetching: true,
  }),
  RECEIVE_CITIES: (state, action) => ({
    ...state,
    isFetching: false,
    items: action.payload.data,
  }),
}, initialState);
