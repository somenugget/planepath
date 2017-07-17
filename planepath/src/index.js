import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userStorageMiddleware } from './middleware';
import rootReducer from './reducers';
import { fetchCities } from './actions/cities';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './style/App.css';

const initialState = {
  user: {
    isAuthenticated: false,
    tryingToLogIn: false,
    user: null,
  },
};

const user = JSON.parse(window.localStorage.getItem('user'));
if (user) {
  initialState.user.isAuthenticated = true;
  initialState.user.user = JSON.parse(user);
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware, userStorageMiddleware),
  ),
);

store.dispatch(fetchCities());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

