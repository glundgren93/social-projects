import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import * as actions from '../actions';
import Content from '../components/Content';

const store = configureStore();

render(
  <Provider store={store}>
    <Content />
  </Provider>,
  document.getElementById('app')
);
