import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import { configureStore } from './store/store.js';
import Root from './components/root';
import {login} from './actions/session_actions.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
  window.login = login;

  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store}/>, root);
});
