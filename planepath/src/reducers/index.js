import { combineReducers } from 'redux';
import cities from './cities';
import city from './city';
import trips from './trips';
import user from './user';

const rootReducer = combineReducers({
  cities,
  city,
  trips,
  user,
});

export default rootReducer;
