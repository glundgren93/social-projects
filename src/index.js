import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '../store/configureStore';
import * as actions from '../actions';
import App from '../components/App';
import Project from '../components/Project';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
   <Router history={history}>
      <Route path="/" component={App}>
      <IndexRoute component={Project} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
