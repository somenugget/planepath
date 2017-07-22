import { combineReducers } from 'redux';
import cities from './cities';
import city from './city';
import trips from './trips';
import user from './user';
import access from './access';
import flights from './flights';

const rootReducer = combineReducers({
  cities,
  city,
  trips,
  user,
  access,
  flights,
});

export default rootReducer;
