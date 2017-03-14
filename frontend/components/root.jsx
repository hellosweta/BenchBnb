// Create and export a new functional component that renders an <h1> tag with "Bench BnB" text and underneath renders props.children. It should look something like.

import React from 'react';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app.jsx';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={hashHistory}>
      <Route path='/' component={App} />
    </Router>
  </Provider>
);

export default Root;
