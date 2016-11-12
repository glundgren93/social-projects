import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import * as actions from './actions';
import App from './components/App';
import Home from './components/Home';
import Project from './components/Project';

const store = configureStore();
store.dispatch({ type: 'INIT' });
const history = syncHistoryWithStore(browserHistory, store);

require('../dist/css/style.css');
require('../dist/css/bootstrap.min.css');
require('../dist/css/mdb.min.css');

render(
  <Provider store={store}>
   <Router history={history}>
      <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/project/:projectId" component={Project} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
