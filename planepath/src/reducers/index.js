import { combineReducers } from 'redux';
import cities from './cities';
import city from './city';
import trips from './trips';
import user from './user';
import access from './access';

const rootReducer = combineReducers({
  cities,
  city,
  trips,
  user,
  access,
});

export default rootReducer;
