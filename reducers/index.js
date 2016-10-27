import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { project } from './project';

export default combineReducers({
  project,
  routing: routerReducer
});
