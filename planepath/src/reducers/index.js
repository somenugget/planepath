import { combineReducers } from 'redux';
import cities from './cities';
import city from './city';
import trips from './trips';

const rootReducer = combineReducers({
  cities,
  city,
  trips,
});

export default rootReducer;
