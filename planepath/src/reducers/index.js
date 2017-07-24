import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
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
  form: formReducer,
});

export default rootReducer;
