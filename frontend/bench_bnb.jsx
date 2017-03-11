import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
  window.signUp = APIUtil.signUp;
  window.logIn = APIUtil.logIn;
  window.logOut = APIUtil.logOut;

});
