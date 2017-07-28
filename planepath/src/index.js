import _ from 'lodash';
import axios from 'axios';
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
  initialState.user.user = user;
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware, userStorageMiddleware),
  ),
);

axios.interceptors.request.use((config) => {
  const state = store.getState();

  if (_.has(state, ['user', 'user', 'token'])) {
    return {
      ...config,
      params: {
        ...config.params,
        token: state.user.user.token,
      },
    };
  }

  return config;
});

store.dispatch(fetchCities());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

