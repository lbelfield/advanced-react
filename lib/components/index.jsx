import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// redux
import configureStore from '../store/configureStore';
// react-redux
import {Provider} from 'react-redux';

import { getAuthors } from '../actionCreators/authorActions';
import { getArticles } from '../actionCreators/articleActions';

// using Redux, we create our store.
const store = configureStore();

// once the store is configured, we can dispatch actions against the store
// note this should ONLY be done for data that you need on load and not for every Action Creator
store.dispatch(getAuthors());
store.dispatch(getArticles());

ReactDOM.render(
  // react-redux Provider Component at the application root.
  // This magically makes the store available to all your container components in the app without having to pass it explicitly.
  // <Provider /> accepts one parameter - the store we created with redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
