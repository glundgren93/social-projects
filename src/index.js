import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import * as actions from '../actions';
import Project from '../components/Project';

const store = configureStore();

render(
  <Provider store={store}>
    <Project />
  </Provider>,
  document.getElementById('app')
);
